import React, { useState } from 'react';
import { DESTINATION_TRIPS, RECOMMENDED_PLACES } from '../data/mockData';
import { DestinationTrip } from '../types';

interface LiveAdaptationScreenProps {
  onSelectTrip: (trip: DestinationTrip) => void;
}

type SimulationMode = 'nature' | 'beach' | 'trek';

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
  latency: string;
  badge: string;
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
  entropyReduction: string;
  affinityConvergence: string;
  centroid: { cx: number; cy: number };
  feed: FeedItem[];
}

const SIMULATION_CONFIGS: Record<SimulationMode, SimulationState> = {
  nature: {
    event: 'Saved Nature Property',
    action: "Action detected: You just saved 'Cloud Valley Tea Estate Retreat' (Category: Nature & Plantation Stay)",
    status: 'Session Vector recalculated in 14ms · Re-ranking top 20 candidates',
    latency: '14ms',
    badge: 'Hyper-Personalized to Nature Affinity',
    natureBadge: '+34%',
    natureBar: '88%',
    natureScore: '0.94',
    seclusionBadge: '+28%',
    seclusionBar: '82%',
    seclusionScore: '0.89',
    commercialBadge: '-45%',
    commercialBar: '22%',
    commercialScore: '0.24',
    why: 'The system inferred high preference for quiet plantation surroundings over transit-adjacent commercial hotels. The implicit negative signal on market proximity penalized conventional city stays by 45%.',
    entropyReduction: '-0.42 bits',
    affinityConvergence: '94.8%',
    centroid: { cx: 210, cy: 75 },
    feed: [
      {
        rank: '#01',
        title: 'Cloud Valley Estate',
        category: 'Nature Retreat · Direct User Match',
        badge: { type: 'up', text: '+2' },
        score: '0.96',
        borderColor: '#005f50',
        tripId: 'cloud-valley-tea-estate',
      },
      {
        rank: '#02',
        title: 'The Spice Whispers Plantation',
        category: 'Cardamom Grove · Secluded Hillside Stay',
        badge: { type: 'up', text: '+5' },
        score: '0.93',
        borderColor: '#7cd7c1',
        tripId: 'the-spice-whispers',
      },
      {
        rank: '#03',
        title: 'Forest Canopy Whispers Cottages',
        category: 'Candidate Injected · High Seclusion Rating',
        badge: { type: 'new', text: 'New' },
        score: '0.91',
        borderColor: '#4648d4',
        tripId: 'anamudi-edge-eco-cabins',
      },
      {
        rank: '#07',
        title: 'Grand Regency Munnar',
        category: 'Demoted due to high commercial density tag',
        badge: { type: 'down', text: '-6' },
        score: '0.48',
        borderColor: '#ba1a1a',
        isDemoted: true,
        demotedReason: 'Demoted due to high commercial density tag',
      },
    ],
  },
  beach: {
    event: 'Saved Coastal Stay',
    action: "Action detected: You just saved 'Marari Beachfront Eco-Cabins' (Category: Coastal & Aquatic Calm)",
    status: 'Session Vector recalculated in 12ms · Re-ranking top 20 candidates',
    latency: '12ms',
    badge: 'Hyper-Personalized to Coastal Serenity',
    natureBadge: '+12%',
    natureBar: '55%',
    natureScore: '0.62',
    seclusionBadge: '+41%',
    seclusionBar: '91%',
    seclusionScore: '0.95',
    commercialBadge: '-52%',
    commercialBar: '18%',
    commercialScore: '0.19',
    why: 'Explicit beach property affinity triggered aquatic proximity clustering. Inland tea gardens were deprioritized in favor of secluded coastal hideaways with private shoreline access.',
    entropyReduction: '-0.51 bits',
    affinityConvergence: '96.2%',
    centroid: { cx: 228, cy: 98 },
    feed: [
      {
        rank: '#01',
        title: 'Marari Beachfront Eco-Cabins',
        category: 'Coastal Hideaway · Direct Beach Access',
        badge: { type: 'up', text: '+8' },
        score: '0.98',
        borderColor: '#005f50',
      },
      {
        rank: '#02',
        title: 'Cherai Sound Palm Retreat',
        category: 'Injected Candidate · High Aquatic Affinity',
        badge: { type: 'new', text: 'New' },
        score: '0.94',
        borderColor: '#7cd7c1',
      },
      {
        rank: '#03',
        title: 'Vembanad Lotus Lagoon Sanctuary',
        category: 'Tidal Waterway · Zero Engine Noise',
        badge: { type: 'up', text: '+4' },
        score: '0.92',
        borderColor: '#4648d4',
        tripId: 'vembanad-estuary',
      },
      {
        rank: '#08',
        title: 'Cloud Valley Estate',
        category: 'Demoted: Biome shifted from Hill Station to Oceanfront',
        badge: { type: 'down', text: '-5' },
        score: '0.51',
        borderColor: '#ba1a1a',
        isDemoted: true,
        demotedReason: 'Demoted: Biome shifted from Hill Station to Oceanfront',
      },
    ],
  },
  trek: {
    event: 'Saved Adventure Route',
    action: "Action detected: You just saved 'Meesapulimala Ridge Expedition' (Category: High-Altitude Trekking)",
    status: 'Session Vector recalculated in 16ms · Re-ranking top 20 candidates',
    latency: '16ms',
    badge: 'Hyper-Personalized to High-Altitude Adventure',
    natureBadge: '+48%',
    natureBar: '96%',
    natureScore: '0.98',
    seclusionBadge: '+54%',
    seclusionBar: '95%',
    seclusionScore: '0.96',
    commercialBadge: '-68%',
    commercialBar: '12%',
    commercialScore: '0.14',
    why: 'High physical intensity token matches boosted basecamps, guide-led lodges, and remote wilderness ridges while filtering out luxury leisure and passive resort properties.',
    entropyReduction: '-0.64 bits',
    affinityConvergence: '97.5%',
    centroid: { cx: 235, cy: 52 },
    feed: [
      {
        rank: '#01',
        title: 'Rhodo Valley High Camp',
        category: 'Altitude Basecamp · Trekking Trailhead Direct',
        badge: { type: 'up', text: '+6' },
        score: '0.97',
        borderColor: '#005f50',
      },
      {
        rank: '#02',
        title: 'Anamudi Foothills Outpost',
        category: 'Candidate Injected · Rugged Terrain Experience',
        badge: { type: 'new', text: 'New' },
        score: '0.92',
        borderColor: '#7cd7c1',
      },
      {
        rank: '#03',
        title: 'Spiti High-Altitude Refuge',
        category: 'Extreme Elevation · Mountain Ridge',
        badge: { type: 'up', text: '+3' },
        score: '0.89',
        borderColor: '#4648d4',
        tripId: 'spiti-monastery-trail',
      },
      {
        rank: '#11',
        title: 'Silver Lake Resort',
        category: 'Demoted: Low activity score, excessive leisure bias',
        badge: { type: 'down', text: '-7' },
        score: '0.39',
        borderColor: '#ba1a1a',
        isDemoted: true,
        demotedReason: 'Demoted: Low activity score, excessive leisure bias',
      },
    ],
  },
};

export const LiveAdaptationScreen: React.FC<LiveAdaptationScreenProps> = ({ onSelectTrip }) => {
  const [activeSimulation, setActiveSimulation] = useState<SimulationMode>('nature');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const state = SIMULATION_CONFIGS[activeSimulation];

  const handleSimulate = (mode: SimulationMode) => {
    if (mode === activeSimulation) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSimulation(mode);
      setIsTransitioning(false);
    }, 140);
  };

  const handleCardClick = (item: FeedItem) => {
    if (item.tripId) {
      const found =
        RECOMMENDED_PLACES.find((p) => p.id === item.tripId) ||
        DESTINATION_TRIPS.find((p) => p.id === item.tripId);
      if (found) {
        onSelectTrip(found);
      }
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fbf8fc] min-h-screen">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Top Header & Telemetry Metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#005f50] animate-ping"></span>
              <span className="text-[11px] text-[#005f50] uppercase tracking-wider font-semibold">
                Cognitive Pipeline Telemetry · Live Session Loop
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#e1e0ff] text-[#2f2ebe] text-[11px] font-semibold">
                Hackathon Judge Demo
              </span>
            </div>
            <h1 className="text-3xl sm:text-[32px] font-bold text-[#1b1b1e] tracking-tight">
              Your recommendations are adapting
            </h1>
            <p className="text-base text-[#3e4946]">
              Sarathi re-evaluates and re-ranks candidate vectors in real time as you browse, save, and dismiss.
            </p>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#f6f2f7] shadow-xs border border-[#E5E7EB]">
            <div className="flex flex-col">
              <span className="text-[11px] text-[#3e4946] font-semibold">Inference Latency</span>
              <span className="text-lg text-[#005f50] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[#005f50] text-[18px]">bolt</span>
                <span>{state.latency}</span>
              </span>
            </div>
            <div className="w-px h-8 bg-[#e4e1e6]"></div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#3e4946] font-semibold">Vector Dimensions</span>
              <span className="text-lg text-[#1b1b1e] font-bold">1,536-D</span>
            </div>
          </div>
        </div>

        {/* Triggered Event Action Banner */}
        <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#99f3dd] text-[#00201a] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300 border border-[#005f50]/20">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#005f50] text-white flex items-center justify-center shadow-xs shrink-0">
              <span className="material-symbols-outlined text-[24px]">bookmark_added</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#005144] font-bold">
                  Triggered Event
                </span>
                <span className="w-1 h-1 rounded-full bg-[#005144]"></span>
                <span className="text-xs font-semibold text-[#005f50]">{state.event}</span>
              </div>
              <p className="text-base font-bold tracking-tight text-[#00201a]">
                {state.action}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-xl shadow-xs border border-white/60">
            <span className="inline-block w-2 h-2 rounded-full bg-[#005f50] animate-pulse"></span>
            <span className="text-xs text-[#1b1b1e] font-semibold">{state.status}</span>
          </div>
        </div>

        {/* Dual Stages Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Stage 01: Before Interaction (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#6e7a75] uppercase font-bold">Stage 01</span>
                <h2 className="text-base text-[#1b1b1e] font-bold">Before Interaction</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#e4e1e6] text-[#3e4946] text-[11px] font-semibold">
                Generalized Relevance
              </span>
            </div>

            <div className="p-2 rounded-2xl bg-[#f6f2f7] shadow-xs flex flex-col gap-2 border border-[#E5E7EB]/60">
              {/* Item 1 */}
              <div className="p-3.5 rounded-xl bg-white shadow-xs flex items-center justify-between opacity-85 border border-[#E5E7EB]/40">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#6e7a75] w-6">#01</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1b1b1e]">Grand Regency Munnar</span>
                    <span className="text-xs text-[#3e4946]">City Hotel · Central Market Transit Hub</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#6e7a75] uppercase block">Cosine Match</span>
                  <p className="text-xs font-bold text-[#1b1b1e]">0.82</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-3.5 rounded-xl bg-white shadow-xs flex items-center justify-between opacity-85 border border-[#E5E7EB]/40">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#6e7a75] w-6">#02</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1b1b1e]">Munnar Terrace View</span>
                    <span className="text-xs text-[#3e4946]">Boutique Hotel · Mixed Valley Overlook</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#6e7a75] uppercase block">Cosine Match</span>
                  <p className="text-xs font-bold text-[#1b1b1e]">0.79</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-3.5 rounded-xl bg-white shadow-xs flex items-center justify-between opacity-85 border border-[#E5E7EB]/40">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#6e7a75] w-6">#03</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1b1b1e]">Cloud Valley Estate</span>
                    <span className="text-xs text-[#3e4946]">Nature Retreat · Organic Tea Plantation</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#6e7a75] uppercase block">Cosine Match</span>
                  <p className="text-xs font-bold text-[#1b1b1e]">0.76</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="p-3.5 rounded-xl bg-white shadow-xs flex items-center justify-between opacity-85 border border-[#E5E7EB]/40">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#6e7a75] w-6">#04</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1b1b1e]">Silver Lake Resort</span>
                    <span className="text-xs text-[#3e4946]">Family Boating Stay · Commercial Lakeside</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#6e7a75] uppercase block">Cosine Match</span>
                  <p className="text-xs font-bold text-[#1b1b1e]">0.74</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#eae7eb]/60 flex items-center gap-2 text-[#3e4946] border border-[#E5E7EB]/40">
              <span className="material-symbols-outlined text-[18px] text-[#6e7a75] shrink-0">
                info
              </span>
              <span className="text-xs leading-relaxed">
                Original rank relied purely on broad geo-proximity and popular keyword density before direct user affinity was captured.
              </span>
            </div>
          </div>

          {/* Center Column: Real-Time Delta Graphic (2 Cols on desktop) */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center gap-2 py-4">
            <div className="w-px h-16 bg-[#e4e1e6]"></div>
            <div className="w-12 h-12 rounded-full bg-[#0d7a68] text-[#aaffe9] flex items-center justify-center shadow-md animate-pulse">
              <span className="material-symbols-outlined text-[24px]">sync_alt</span>
            </div>
            <span className="text-[11px] text-[#005f50] uppercase font-bold tracking-wider text-center">
              Real-Time Delta
            </span>
            <div className="w-px h-16 bg-[#e4e1e6]"></div>
          </div>

          {/* Stage 02: After Interaction (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#005f50] uppercase font-bold">Stage 02</span>
                <h2 className="text-base text-[#1b1b1e] font-bold">After Interaction</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#71f8e4] text-[#00201c] text-[11px] font-bold">
                {state.badge}
              </span>
            </div>

            <div
              className={`p-2 rounded-2xl bg-[#f6f2f7] shadow-md flex flex-col gap-2 border border-[#E5E7EB]/60 transition-opacity duration-200 ${
                isTransitioning ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {state.feed.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCardClick(item)}
                  className={`p-3.5 rounded-xl shadow-xs flex items-center justify-between relative overflow-hidden transition-all duration-200 border border-[#E5E7EB]/50 ${
                    item.tripId ? 'cursor-pointer hover:shadow-md hover:bg-white' : ''
                  } ${item.isDemoted ? 'bg-[#eae7eb]/40' : 'bg-white'}`}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: item.borderColor }}
                  ></div>

                  <div className="flex items-center gap-3 pl-1.5">
                    <span
                      className={`text-xs font-bold w-6 ${
                        item.isDemoted ? 'text-[#6e7a75]' : 'text-[#005f50]'
                      }`}
                    >
                      {item.rank}
                    </span>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-sm font-semibold ${
                            item.isDemoted ? 'text-[#1b1b1e] line-through opacity-70' : 'text-[#1b1b1e]'
                          }`}
                        >
                          {item.title}
                        </span>

                        {item.badge.type === 'up' && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#99f3dd] text-[#00201a] text-[10px] font-bold flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
                            {item.badge.text}
                          </span>
                        )}

                        {item.badge.type === 'new' && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#e1e0ff] text-[#2f2ebe] text-[10px] font-bold flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px]">star</span>
                            New
                          </span>
                        )}

                        {item.badge.type === 'down' && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] text-[10px] font-bold flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px]">arrow_downward</span>
                            {item.badge.text}
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-xs ${
                          item.isDemoted ? 'text-[#ba1a1a] font-medium' : 'text-[#3e4946]'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[10px] uppercase font-medium block ${
                        item.isDemoted ? 'text-[#6e7a75]' : 'text-[#005f50]'
                      }`}
                    >
                      Session Match
                    </span>
                    <p
                      className={`text-xs font-bold ${
                        item.isDemoted ? 'text-[#6e7a75]' : 'text-[#005f50]'
                      }`}
                    >
                      {item.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-[#005f50]/10 flex items-center gap-2 text-[#1b1b1e] border border-[#005f50]/20">
              <span className="material-symbols-outlined text-[18px] text-[#005f50] shrink-0">
                auto_awesome
              </span>
              <span className="text-xs font-medium">
                Feedback weights applied instantly across all embedding branches without full re-indexing.
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Adaptation Rationale & Vector Space Shift */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Panel: Dynamic Adaptation Rationale (8 Cols) */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-white shadow-xs border border-[#E5E7EB] flex flex-col gap-5 justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#005f50] text-[24px]">
                    psychology
                  </span>
                  <h3 className="text-xl font-bold text-[#1b1b1e]">
                    Dynamic Adaptation Rationale
                  </h3>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#f0edf1] text-[#3e4946] font-mono font-semibold">
                  MODEL: SARATHI-EMBED-V3
                </span>
              </div>

              {/* 3 Metric Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {/* Metric 1 */}
                <div className="p-3 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3e4946] font-semibold">Nature &amp; Flora</span>
                    <span className="text-xs font-bold text-[#005f50]">{state.natureBadge}</span>
                  </div>
                  <div className="w-full bg-[#e4e1e6] rounded-full h-2 overflow-hidden my-1">
                    <div
                      className="bg-[#005f50] h-2 rounded-full transition-all duration-500"
                      style={{ width: state.natureBar }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-[#6e7a75]">Weight score: {state.natureScore}</span>
                </div>

                {/* Metric 2 */}
                <div className="p-3 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3e4946] font-semibold">Seclusion Affinity</span>
                    <span className="text-xs font-bold text-[#005f50]">{state.seclusionBadge}</span>
                  </div>
                  <div className="w-full bg-[#e4e1e6] rounded-full h-2 overflow-hidden my-1">
                    <div
                      className="bg-[#005f50] h-2 rounded-full transition-all duration-500"
                      style={{ width: state.seclusionBar }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-[#6e7a75]">Weight score: {state.seclusionScore}</span>
                </div>

                {/* Metric 3 */}
                <div className="p-3 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3e4946] font-semibold">Commercial Density</span>
                    <span className="text-xs font-bold text-[#ba1a1a]">{state.commercialBadge}</span>
                  </div>
                  <div className="w-full bg-[#e4e1e6] rounded-full h-2 overflow-hidden my-1">
                    <div
                      className="bg-[#ba1a1a] h-2 rounded-full transition-all duration-500"
                      style={{ width: state.commercialBar }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-[#6e7a75]">Weight score: {state.commercialScore}</span>
                </div>
              </div>

              {/* Semantic Inference Engine Box */}
              <div className="p-4 rounded-xl bg-[#f6f2f7] border border-[#E5E7EB]/50 flex flex-col gap-1">
                <span className="text-[11px] text-[#005f50] uppercase font-bold tracking-wider">
                  Semantic Inference Engine
                </span>
                <p className="text-sm text-[#1b1b1e] leading-relaxed">
                  <span className="font-semibold text-[#005f50]">Why it changed:</span> {state.why}
                </p>
              </div>
            </div>

            {/* Bottom Meta Tags */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#f0edf1]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#005f50]">tune</span>
                <span className="text-xs text-[#3e4946]">Attention Head: Geo-Atmosphere (0.42)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#4648d4]">share</span>
                <span className="text-xs text-[#3e4946]">Cross-Entity Propagation: Active</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#005f55]">speed</span>
                <span className="text-xs text-[#3e4946]">Zero Cold-Start Lag</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Vector Space Shift (4 Cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f6f2f7] shadow-xs border border-[#E5E7EB] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4648d4] text-[22px]">schema</span>
                <h3 className="text-base font-bold text-[#1b1b1e]">Vector Space Shift</h3>
              </div>
              <p className="text-xs text-[#3e4946]">
                PCA Projection of top 20 candidate embeddings before and after interaction vector updates.
              </p>

              {/* SVG 2D PCA Projection Visualization */}
              <div className="w-full h-44 rounded-xl bg-white p-2 relative overflow-hidden flex items-center justify-center border border-[#E5E7EB]/60">
                <svg className="w-full h-full" fill="none" viewBox="0 0 280 140">
                  <path d="M 20 120 L 260 120" stroke="#eae7eb" strokeDasharray="3 3" />
                  <path d="M 20 20 L 20 120" stroke="#eae7eb" strokeDasharray="3 3" />

                  {/* Initial cluster dots */}
                  <circle cx="65" cy="45" fill="#6e7a75" opacity="0.6" r="4" />
                  <circle cx="80" cy="55" fill="#6e7a75" opacity="0.6" r="4" />
                  <circle cx="95" cy="40" fill="#6e7a75" opacity="0.6" r="4" />
                  <circle cx="110" cy="70" fill="#6e7a75" opacity="0.6" r="4" />
                  <circle cx="75" cy="85" fill="#6e7a75" opacity="0.6" r="4" />
                  <text fill="#6e7a75" fontFamily="Hanken Grotesk, sans-serif" fontSize="9" x="50" y="32">
                    Cluster: Initial
                  </text>

                  {/* Trajectory curve to active centroid */}
                  <path
                    d={`M 95 50 Q 140 30 ${state.centroid.cx - 20} ${state.centroid.cy - 10}`}
                    stroke="#005f50"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <polygon
                    fill="#005f50"
                    points={`${state.centroid.cx - 16},${state.centroid.cy - 9} ${state.centroid.cx - 24},${state.centroid.cy - 14} ${state.centroid.cx - 21},${state.centroid.cy - 5}`}
                  />

                  {/* Active Centroid */}
                  <circle cx={state.centroid.cx} cy={state.centroid.cy} fill="#005f50" r="7" />
                  <circle
                    className="animate-ping"
                    cx={state.centroid.cx}
                    cy={state.centroid.cy}
                    fill="#005f50"
                    opacity="0.2"
                    r="14"
                  />
                  <circle cx={state.centroid.cx + 20} cy={state.centroid.cy + 10} fill="#0d7a68" r="5" />
                  <circle cx={state.centroid.cx - 15} cy={state.centroid.cy + 20} fill="#0d7a68" r="5" />
                  <circle cx={state.centroid.cx + 15} cy={state.centroid.cy - 15} fill="#4648d4" r="4" />

                  <text
                    fill="#005f50"
                    fontFamily="Hanken Grotesk, sans-serif"
                    fontSize="10"
                    fontWeight="600"
                    x={state.centroid.cx - 30}
                    y={Math.min(130, state.centroid.cy + 35)}
                  >
                    Active User Centroid
                  </text>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white border border-[#E5E7EB]/60">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[#6e7a75] font-semibold">Entropy Reduction</span>
                <span className="text-xs font-bold text-[#005f50]">{state.entropyReduction}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[#6e7a75] font-semibold">Affinity Convergence</span>
                <span className="text-xs font-bold text-[#005f50]">{state.affinityConvergence}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Judge Simulation Sandbox Panel */}
        <div className="w-full p-6 rounded-2xl bg-[#eae7eb]/80 shadow-xs border border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#005f50] text-[20px]">science</span>
              <span className="text-base font-bold text-[#1b1b1e]">Judge Simulation Sandbox</span>
            </div>
            <p className="text-xs text-[#3e4946] leading-relaxed">
              Trigger synthetic interactions to evaluate how Sarathi recalculates latent preferences, rewrites candidate weights, and modifies ranking in sub-20ms latency.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => handleSimulate('beach')}
              className={`flex-1 md:flex-initial h-[38px] px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border ${
                activeSimulation === 'beach'
                  ? 'bg-[#005f50] text-white border-[#005f50]'
                  : 'bg-white hover:bg-[#f6f2f7] text-[#1b1b1e] border-[#E5E7EB]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#4648d4]">beach_access</span>
              <span>Simulate Saving Beach Stay</span>
            </button>

            <button
              onClick={() => handleSimulate('trek')}
              className={`flex-1 md:flex-initial h-[38px] px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border ${
                activeSimulation === 'trek'
                  ? 'bg-[#005f50] text-white border-[#005f50]'
                  : 'bg-white hover:bg-[#f6f2f7] text-[#1b1b1e] border-[#E5E7EB]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#005f50]">hiking</span>
              <span>Simulate Saving Adventure Trek</span>
            </button>

            <button
              onClick={() => handleSimulate('nature')}
              className="flex-1 md:flex-initial h-[38px] px-4 rounded-xl bg-[#005f50] text-white hover:bg-[#0d7a68] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              <span>Reset Session State</span>
            </button>
          </div>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
          <div className="p-5 rounded-2xl bg-[#f6f2f7] shadow-xs border border-[#E5E7EB]/60 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#005f50] shadow-xs border border-[#E5E7EB]/50">
              <span className="material-symbols-outlined text-[20px]">dataset</span>
            </div>
            <h4 className="text-base font-bold text-[#1b1b1e]">Dynamic Re-Ranking</h4>
            <p className="text-xs text-[#3e4946] leading-relaxed">
              Rather than queuing batch recommendation retraining, user actions compute real-time dot products against pre-indexed vector stores.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f6f2f7] shadow-xs border border-[#E5E7EB]/60 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#4648d4] shadow-xs border border-[#E5E7EB]/50">
              <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
            </div>
            <h4 className="text-base font-bold text-[#1b1b1e]">Negative Feedback Filtering</h4>
            <p className="text-xs text-[#3e4946] leading-relaxed">
              Implicit friction (quick skips, commercial tags) dampens entire clusters, preventing recommendation echo chambers and irrelevant stays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f6f2f7] shadow-xs border border-[#E5E7EB]/60 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#005f55] shadow-xs border border-[#E5E7EB]/50">
              <span className="material-symbols-outlined text-[20px]">network_intelligence</span>
            </div>
            <h4 className="text-base font-bold text-[#1b1b1e]">Semantic Explainability</h4>
            <p className="text-xs text-[#3e4946] leading-relaxed">
              Every promotion and demotion creates natural-language rationales, guaranteeing transparent auditing for both travelers and model evaluators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
