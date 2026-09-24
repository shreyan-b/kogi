import React, { useState } from 'react';
import { DESTINATION_TRIPS, RECOMMENDED_PLACES } from '../data/mockData';
import { DestinationTrip } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LiveAdaptationScreenProps {
  onSelectTrip: (trip: DestinationTrip) => void;
}

type SimulationMode = 'nature' | 'beach' | 'trek' | 'dismiss';

interface FeedItem {
  rank: string;
  title: string;
  category: string;
  badge: {
    type: 'up' | 'down' | 'new';
    text: string;
  };
  score: string;
  borderColor: string;
  isDemoted?: boolean;
  demotedReason?: string;
  tripId?: string;
}

interface SimulationState {
  event: string;
  action: string;
  status: string;
  noticeHeading: string;
  noticeText: string;
  natureBadge: string;
  natureBar: string;
  natureScore: string;
  seclusionBadge: string;
  seclusionBar: string;
  seclusionScore: string;
  commercialBadge: string;
  commercialBar: string;
  commercialScore: string;
  why: string;
  feed: FeedItem[];
}

const SIMULATION_CONFIGS: Record<SimulationMode, SimulationState> = {
  nature: {
    event: 'Saved Nature Property',
    action: "You saved 'Cloud Valley Tea Estate Retreat' (Category: Nature & Plantation Stay)",
    status: 'Session preference recalculated · Re-ranked 20 candidate stays',
    noticeHeading: 'Updated based on your recent activity',
    noticeText: 'Your saved nature stay is influencing the recommendations shown below.',
    natureBadge: '+34%',
    natureBar: '92%',
    natureScore: '0.94',
    seclusionBadge: '+28%',
    seclusionBar: '88%',
    seclusionScore: '0.89',
    commercialBadge: '-45%',
    commercialBar: '24%',
    commercialScore: '0.24',
    why: 'Sarathi detected that you saved a quiet tea plantation bungalow. The recommendation engine immediately boosted secluded nature stays and penalized conventional commercial town hotels with busy roads.',
    feed: [
      {
        rank: '#01',
        title: 'Cloud Valley Tea Estate',
        category: 'Nature Retreat · Direct User Match',
        badge: { type: 'up', text: '+2' },
        score: '96% Match',
        borderColor: '#005f50',
        tripId: 'cloud-valley-tea-estate',
      },
      {
        rank: '#02',
        title: 'The Spice Whispers Plantation',
        category: 'Cardamom Grove · Birdwatching & Quiet',
        badge: { type: 'up', text: '+5' },
        score: '93% Match',
        borderColor: '#005f50',
        tripId: 'the-spice-whispers',
      },
      {
        rank: '#03',
        title: 'Anamudi Edge Eco-Cabins',
        category: 'High Altitude · Zero Tour Bus Corridor',
        badge: { type: 'new', text: 'Promoted' },
        score: '90% Match',
        borderColor: '#4648d4',
        tripId: 'anamudi-edge-eco-cabins',
      },
      {
        rank: '#08',
        title: 'Grand Regency Munnar',
        category: 'Central Commercial Hotel · Heavy Traffic',
        badge: { type: 'down', text: '-7' },
        score: '58% Match',
        borderColor: '#E5E7EB',
        isDemoted: true,
        demotedReason: 'Demoted: high commercial density and transit noise conflict with your saved nature preference.',
      },
    ],
  },
  beach: {
    event: 'Saved Coastal Stay',
    action: "You saved 'Marari Beachfront Eco-Cabins' (Category: Coastal Seclusion)",
    status: 'Session preference recalculated · Re-ranked 20 candidate stays',
    noticeHeading: 'Updated based on your recent activity',
    noticeText: 'Your saved beach retreat is prioritizing quiet coastal and backwater getaways.',
    natureBadge: '+12%',
    natureBar: '68%',
    natureScore: '0.72',
    seclusionBadge: '+38%',
    seclusionBar: '94%',
    seclusionScore: '0.95',
    commercialBadge: '-40%',
    commercialBar: '25%',
    commercialScore: '0.25',
    why: 'Saving a secluded beach getaway shifted your session toward coastal breezes and calm water biomes. Hill station stays were naturally de-prioritized in favor of private shoreline properties.',
    feed: [
      {
        rank: '#01',
        title: 'Marari Beachfront Eco-Cabins',
        category: 'Coastal Seclusion · Private Sands',
        badge: { type: 'new', text: '#01 Top' },
        score: '97% Match',
        borderColor: '#005f50',
      },
      {
        rank: '#02',
        title: 'Cherai Sound Palm Retreat',
        category: 'Quiet Coastal Lagoon & Waves',
        badge: { type: 'up', text: '+6' },
        score: '94% Match',
        borderColor: '#005f50',
      },
      {
        rank: '#03',
        title: 'Vembanad Estuary Houseboat',
        category: 'Silent Backwaters · Zero Motor Traffic',
        badge: { type: 'up', text: '+3' },
        score: '91% Match',
        borderColor: '#4648d4',
      },
      {
        rank: '#09',
        title: 'Grand Regency Munnar',
        category: 'High-Altitude Commercial Resort',
        badge: { type: 'down', text: '-8' },
        score: '52% Match',
        borderColor: '#E5E7EB',
        isDemoted: true,
        demotedReason: 'Demoted: inland hill station mismatch for your active coastal session.',
      },
    ],
  },
  trek: {
    event: 'Saved High Adventure Trek',
    action: "You saved 'Rhodo Valley High Camp' (Category: High-Altitude Ridge Trail)",
    status: 'Session preference recalculated · Re-ranked 20 candidate stays',
    noticeHeading: 'Updated based on your recent activity',
    noticeText: 'Your saved trek has adapted recommendations toward high-elevation trailheads.',
    natureBadge: '+42%',
    natureBar: '96%',
    natureScore: '0.98',
    seclusionBadge: '+35%',
    seclusionBar: '90%',
    seclusionScore: '0.92',
    commercialBadge: '-60%',
    commercialBar: '14%',
    commercialScore: '0.14',
    why: 'Saving a high-altitude expedition trail shifted your profile from passive hotel leisure to active outdoor trailheads. Luxury town resorts were demoted while wilderness campsites were elevated.',
    feed: [
      {
        rank: '#01',
        title: 'Rhodo Valley High Camp',
        category: '2,160m MSL · Direct Summit Access',
        badge: { type: 'up', text: '+7' },
        score: '98% Match',
        borderColor: '#005f50',
      },
      {
        rank: '#02',
        title: 'Anamudi Foothills Outpost',
        category: 'Wilderness Base · Guided Ridge Climbs',
        badge: { type: 'up', text: '+4' },
        score: '94% Match',
        borderColor: '#005f50',
      },
      {
        rank: '#03',
        title: 'Meesapulimala View Point Camp',
        category: 'Panoramic Stargazing & Trek Pacing',
        badge: { type: 'new', text: 'Promoted' },
        score: '92% Match',
        borderColor: '#4648d4',
      },
      {
        rank: '#07',
        title: 'Grand Regency Munnar',
        category: 'Town Hotel · Zero Hiking Proximity',
        badge: { type: 'down', text: '-6' },
        score: '49% Match',
        borderColor: '#E5E7EB',
        isDemoted: true,
        demotedReason: 'Demoted: passive commercial stay with no trailhead or mountain expedition access.',
      },
    ],
  },
  dismiss: {
    event: 'Dismissed Commercial Hotel',
    action: "You dismissed 'Grand Regency Munnar' (Feedback: Too crowded & noisy)",
    status: 'Negative preference applied · Hard penalty on commercial density',
    noticeHeading: 'Updated based on your recent activity',
    noticeText: 'Dismissing a central hotel filtered out noisy commercial properties.',
    natureBadge: '+25%',
    natureBar: '85%',
    natureScore: '0.88',
    seclusionBadge: '+45%',
    seclusionBar: '95%',
    seclusionScore: '0.96',
    commercialBadge: '-75%',
    commercialBar: '10%',
    commercialScore: '0.10',
    why: 'Dismissing a high-density town hotel registered a direct negative signal. The recommendation engine applied a strong penalty to properties near highway junctions, ensuring only offbeat, quiet retreats remain visible.',
    feed: [
      {
        rank: '#01',
        title: 'Cloud Valley Tea Estate',
        category: 'Quiet Zone · 18km From Town Center',
        badge: { type: 'up', text: '+3' },
        score: '97% Match',
        borderColor: '#005f50',
        tripId: 'cloud-valley-tea-estate',
      },
      {
        rank: '#02',
        title: 'The Spice Whispers Plantation',
        category: 'Private Valley · Zero Highway Noise',
        badge: { type: 'up', text: '+4' },
        score: '95% Match',
        borderColor: '#005f50',
        tripId: 'the-spice-whispers',
      },
      {
        rank: '#03',
        title: 'Anamudi Edge Eco-Cabins',
        category: 'Ridge Balcony · Secluded Mountain Air',
        badge: { type: 'up', text: '+2' },
        score: '92% Match',
        borderColor: '#4648d4',
        tripId: 'anamudi-edge-eco-cabins',
      },
      {
        rank: 'Hidden',
        title: 'Grand Regency Munnar',
        category: 'Central Hotel · Filtered Out',
        badge: { type: 'down', text: 'Dismissed' },
        score: 'Removed',
        borderColor: '#ba1a1a',
        isDemoted: true,
        demotedReason: 'Filtered out: dismissed by traveler due to high crowd density and noise.',
      },
    ],
  },
};

export const LiveAdaptationScreen: React.FC<LiveAdaptationScreenProps> = ({ onSelectTrip }) => {
  const { t, localizeContent } = useLanguage();
  const [mode, setMode] = useState<SimulationMode>('nature');
  const current = SIMULATION_CONFIGS[mode];

  const handleSelectSimulated = (tripId?: string) => {
    if (!tripId) return;
    const found =
      RECOMMENDED_PLACES.find((p) => p.id === tripId) ||
      DESTINATION_TRIPS.find((p) => p.id === tripId);
    if (found) {
      onSelectTrip(found);
    }
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-7 md:py-10 w-full text-[#1b1b1e] antialiased">
      {/* Top Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-[#005f50]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005f50] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005f50]"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              {t.liveEyebrow}
            </span>
            <span className="text-[#BDC9C4]">/</span>
            <span className="text-[11px] font-semibold text-[#52525B]">Hackathon Judge Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-[34px] font-semibold text-[#18181B] tracking-tight">
            {t.liveTitle}
          </h1>
          <p className="text-sm text-[#52525B] leading-relaxed">
            {t.liveSubtitle}
          </p>
        </div>

        {/* Hackathon Judge Pill */}
        <div className="flex items-center gap-2 bg-[#E6F4F1] px-3.5 py-1.5 rounded-full border border-[#005f50]/20">
          <span className="material-symbols-outlined text-[16px] text-[#005f50]">cognition</span>
          <span className="text-xs font-bold text-[#005f50]">Real-Time Personalization Flow</span>
        </div>
      </header>

      {/* Interactive Action Simulation Sandbox */}
      <div className="my-6 p-4 sm:p-5 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F4F4F5]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#005f50]">touch_app</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#52525B]">
              {t.simulateUserInteraction || 'Simulate User Interaction (Judge Testing Sandbox)'}
            </span>
          </div>
          <span className="text-xs text-[#71717A]">
            {t.clickAnyAction || 'Click any action below to test dynamic re-ranking:'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-3">
          <button
            type="button"
            onClick={() => setMode('nature')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
              mode === 'nature'
                ? 'bg-[#005f50] text-white border-[#005f50] shadow-xs'
                : 'bg-[#FAF9F6] text-[#18181B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">spa</span>
            <span>1. {t.saveNatureStay || 'Save Nature Stay'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('beach')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
              mode === 'beach'
                ? 'bg-[#005f50] text-white border-[#005f50] shadow-xs'
                : 'bg-[#FAF9F6] text-[#18181B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">waves</span>
            <span>2. {t.saveBeachStay || 'Save Beach Stay'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('trek')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
              mode === 'trek'
                ? 'bg-[#005f50] text-white border-[#005f50] shadow-xs'
                : 'bg-[#FAF9F6] text-[#18181B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">hiking</span>
            <span>3. {t.saveAdventureTrek || 'Save Adventure Trek'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('dismiss')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
              mode === 'dismiss'
                ? 'bg-[#ba1a1a] text-white border-[#ba1a1a] shadow-xs'
                : 'bg-[#FAF9F6] text-[#18181B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">thumb_down</span>
            <span>4. {t.dismissCommercialHotel || 'Dismiss Commercial Hotel'}</span>
          </button>
        </div>
      </div>

      {/* Contextual Adaptation Notification Banner */}
      <div className="mb-8 p-4 bg-white rounded-2xl border border-[#005f50]/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E6F4F1] text-[#005f50] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">sync</span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#18181B] block">
              {current.noticeHeading}
            </span>
            <span className="text-xs text-[#52525B]">
              {current.noticeText}
            </span>
          </div>
        </div>

        <div className="px-3 py-1 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] text-[11px] font-medium text-[#71717A] self-start sm:self-auto">
          {current.action}
        </div>
      </div>

      {/* Stage 1 vs Stage 2 Adaptive Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        
        {/* Stage 1: Before Interaction (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#E5E7EB] text-[11px] font-bold text-[#52525B] flex items-center justify-center">
                1
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#52525B]">
                Stage 01 • Before Interaction
              </h2>
            </div>
            <span className="text-[11px] text-[#71717A]">Keyword Retrieval Baseline</span>
          </div>

          <p className="text-xs text-[#71717A] leading-relaxed">
            Initial results based solely on the search query <em>“Relaxing places near Munnar”</em> without any active session context:
          </p>

          <div className="space-y-2.5">
            {[
              {
                rank: '#01',
                title: 'Grand Regency Munnar',
                sub: 'Town Center Hotel (Popular Generic)',
                score: '88% Match',
              },
              {
                rank: '#02',
                title: 'Munnar Terrace View Resort',
                sub: 'Commercial Corridor (Transit Access)',
                score: '85% Match',
              },
              {
                rank: '#03',
                title: 'Cloud Valley Tea Estate',
                sub: 'Plantation Bungalow (Buried at #3)',
                score: '84% Match',
              },
              {
                rank: '#04',
                title: 'Silver Lake Resort',
                sub: 'Standard Lakeside Accommodation',
                score: '81% Match',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-[#71717A]">{item.rank}</span>
                  <div>
                    <span className="font-semibold text-[#18181B] block">{item.title}</span>
                    <span className="text-[11px] text-[#71717A]">{item.sub}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#52525B]">{item.score}</span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] text-[11px] text-[#71717A] flex items-start gap-2">
            <span className="material-symbols-outlined text-[15px] text-[#71717A] mt-0.5">info</span>
            <span>Broad keyword search surfaces large commercial hotels first due to generic popularity biases.</span>
          </div>
        </div>

        {/* Center Transition Spine (2 cols) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center self-center gap-3 py-6">
          <div className="w-10 h-10 rounded-full bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/30 flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </div>
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#005f50] block">
              Real-Time Re-rank
            </span>
            <span className="text-[10px] text-[#71717A]">Instant feedback</span>
          </div>
        </div>

        {/* Stage 2: After User Interaction (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#005f50]/30 shadow-xs p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#005f50] text-[11px] font-bold text-white flex items-center justify-center">
                2
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#005f50]">
                Stage 02 • After User Action
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-[#005f50]">Adapted to Session</span>
          </div>

          <p className="text-xs text-[#52525B] leading-relaxed">
            Recommendations re-scored after <strong>{current.event}</strong>. Quiet nature hideaways promoted; noisy properties demoted:
          </p>

          <div className="space-y-2.5">
            {current.feed.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectSimulated(item.tripId)}
                className={`p-3 rounded-xl border transition-all text-xs flex flex-col gap-1.5 ${
                  item.isDemoted
                    ? 'bg-[#FAF9F6] border-[#E5E7EB] opacity-75'
                    : 'bg-white border-[#005f50]/30 hover:border-[#005f50] shadow-2xs cursor-pointer'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#18181B]">{item.rank}</span>
                    <span className="font-bold text-[#18181B]">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        item.badge.type === 'up'
                          ? 'bg-[#E6F4F1] text-[#005f50]'
                          : item.badge.type === 'new'
                          ? 'bg-[#EDE9FE] text-[#4648d4]'
                          : 'bg-[#FEE2E2] text-[#ba1a1a]'
                      }`}
                    >
                      {item.badge.text}
                    </span>
                    <span className="font-bold text-[#18181B]">{item.score}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#52525B]">
                  <span>{localizeContent(item.category)}</span>
                  {item.tripId && (
                    <span className="text-[#005f50] font-semibold hover:underline">
                      {t.viewDetails} →
                    </span>
                  )}
                </div>

                {item.demotedReason && (
                  <p className="text-[10px] text-[#ba1a1a] bg-[#FEE2E2]/40 p-1.5 rounded-lg border border-[#FEE2E2]">
                    {item.demotedReason}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#E6F4F1] rounded-xl border border-[#005f50]/20 text-[11px] text-[#005f50] flex items-start gap-2">
            <span className="material-symbols-outlined text-[15px] text-[#005f50] mt-0.5">verified</span>
            <span>{t('rerankingElevated', 'Reranking elevated top match to #01 within your active session.')}</span>
          </div>
        </div>
      </div>

      {/* Personalization Adaptation Breakdown */}
      <section className="p-5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F4F4F5]">
          <div>
            <h3 className="text-sm font-bold text-[#18181B] tracking-tight">
              {t.personalizationSignalShifts || 'Personalization Signal Shifts'}
            </h3>
            <p className="text-xs text-[#52525B]">
              {t.signalShiftsSub || 'How the engine adjusted its preference weights after'} {current.event}.
            </p>
          </div>
          <span className="text-xs text-[#005f50] font-bold bg-[#E6F4F1] px-2.5 py-1 rounded-full self-start sm:self-auto">
            {t.sessionMemoryActive || 'Session Memory Active'}
          </span>
        </div>

        {/* 3 Clear Metric Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Nature & Flora */}
          <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#18181B]">{t.naturePlantation || 'Nature & Plantation'}</span>
              <span className="font-bold text-[#005f50]">{current.natureBadge}</span>
            </div>
            <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#005f50] h-full rounded-full transition-all duration-700"
                style={{ width: current.natureBar }}
              ></div>
            </div>
            <span className="text-[11px] text-[#71717A]">
              {t.weightScore || 'Weight score'}: {current.natureScore}
            </span>
          </div>

          {/* Seclusion Affinity */}
          <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#18181B]">{t.seclusionQuiet || 'Seclusion & Quiet Zone'}</span>
              <span className="font-bold text-[#005f50]">{current.seclusionBadge}</span>
            </div>
            <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#005f50] h-full rounded-full transition-all duration-700"
                style={{ width: current.seclusionBar }}
              ></div>
            </div>
            <span className="text-[11px] text-[#71717A]">
              {t.weightScore || 'Weight score'}: {current.seclusionScore}
            </span>
          </div>

          {/* Commercial Density */}
          <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#18181B]">{t.commercialTolerance || 'Commercial Density Tolerance'}</span>
              <span className="font-bold text-[#ba1a1a]">{current.commercialBadge}</span>
            </div>
            <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#ba1a1a] h-full rounded-full transition-all duration-700"
                style={{ width: current.commercialBar }}
              ></div>
            </div>
            <span className="text-[11px] text-[#71717A]">
              {t.weightScore || 'Weight score'}: {current.commercialScore} ({t.penalized || 'Penalized'})
            </span>
          </div>
        </div>

        {/* Narrative Explanation */}
        <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-[#005f50] mt-0.5 shrink-0">
            psychology
          </span>
          <p className="text-xs text-[#52525B] leading-relaxed">
            {current.why}
          </p>
        </div>
      </section>
    </div>
  );
};
