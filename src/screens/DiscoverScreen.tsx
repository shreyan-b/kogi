import React, { useState, useEffect } from 'react';
import { DESTINATION_TRIPS, QUICK_PROMPTS, TRAVEL_STYLES } from '../data/mockData';
import { DestinationTrip, TravelTab } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DiscoverScreenProps {
  onSearch: (query: string) => void;
  onSelectTrip: (trip: DestinationTrip) => void;
  onOpenVoiceSearch: () => void;
  onOpenOnboarding: () => void;
  onNavigateTab: (tab: TravelTab) => void;
  searchLatency: number;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({
  onSearch,
  onSelectTrip,
  onOpenVoiceSearch,
  onOpenOnboarding,
  onNavigateTab,
  searchLatency,
}) => {
  const { t, localizeTravelStyle, localizeTrip, localizeContent } = useLanguage();
  const [searchInput, setSearchInput] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Animated typing helper when clicking quick chips or moodscapes
  const triggerSimulation = (promptText: string) => {
    setSearchInput('');
    setIsSynthesizing(true);
    let index = 0;
    const speed = 18;

    const interval = setInterval(() => {
      if (index < promptText.length) {
        setSearchInput(promptText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSynthesizing(false);
        }, 350);
      }
    }, speed);
  };

  const handleSearchSubmit = () => {
    const query = searchInput.trim();
    if (!query) {
      triggerSimulation('Somewhere relaxing near Munnar, not too pricey with mist views...');
      return;
    }
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
      onSearch(query);
    }, 550);
  };

  const handleGeoLocation = () => {
    triggerSimulation('Within 3 hours drive from my current location, tranquil stay with natural water stream');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Dynamic Atmospheric Underlay (Scoped) */}
      <div className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[480px] bg-gradient-to-b from-[#99f3dd]/25 via-[#e1e0ff]/20 to-transparent blur-3xl -z-10 pointer-events-none rounded-full"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#71f8e4]/30 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        {/* Centered Editorial Search Header */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-xs mb-5">
            <span
              className="material-symbols-outlined text-[#4648d4] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="text-[11px] text-[#4648d4] tracking-wide uppercase font-semibold">
              AI-powered natural language search
            </span>
            <span className="text-[#bdc9c4] text-[10px] select-none font-medium">•</span>
            <span className="text-[11px] text-[#3e4946] font-medium">
              Kognivera Hackathon 2026 Showcase
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-[#1b1b1e] tracking-tight max-w-2xl text-balance leading-tight sm:leading-[56px]">
            {t.discoverTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#3e4946] mt-2 max-w-xl text-balance">
            {t.discoverSubtitle}
          </p>

          {/* Master Natural-Language Search Container */}
          <div className="w-full mt-8">
            <div className="relative bg-white rounded-2xl shadow-xl p-1.5 transition-all duration-300 hover:shadow-2xl border border-[#E5E7EB]/70">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1.5">
                {/* Icon prefix cluster */}
                <div className="flex items-center gap-1 pl-2 py-1 text-[#3e4946]">
                  <button
                    aria-label="Voice input"
                    onClick={onOpenVoiceSearch}
                    className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#f0edf1] transition-colors text-[#6e7a75] hover:text-[#005f50] active:scale-95"
                    title="Voice intent input"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">mic</span>
                  </button>

                  <button
                    aria-label="Use current location"
                    onClick={handleGeoLocation}
                    className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#f0edf1] transition-colors text-[#6e7a75] hover:text-[#005f50] active:scale-95"
                    title="Nearby reference"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">near_me</span>
                  </button>

                  <span className="h-5 w-[1px] bg-[#eae7eb] mx-1 hidden md:block"></span>
                </div>

                {/* Natural Language Text Field */}
                <div className="relative flex-1 px-1">
                  <input
                    autoComplete="off"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSearchSubmit();
                    }}
                    className="w-full bg-transparent text-base text-[#1b1b1e] placeholder:text-[#6e7a75]/70 focus:outline-none py-2 px-1"
                    placeholder={t.searchPlaceholder}
                    type="text"
                  />
                </div>

                {/* Context Status & Submit Button */}
                <div className="flex items-center justify-between md:justify-end gap-2 pr-1 pb-1 md:pb-0">
                  {isSynthesizing && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0edf1] text-[#005f50] text-[11px] font-semibold animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005f50] animate-ping"></span>
                      <span>{t.synthesizing}</span>
                    </div>
                  )}

                  <button
                    onClick={handleSearchSubmit}
                    disabled={isSynthesizing}
                    className="h-[46px] px-5 rounded-xl bg-[#005f50] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 hover:bg-[#0d7a68] active:scale-[0.98] transition-all shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
                    type="button"
                  >
                    <span>{t.synthesizeBtn}</span>
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Query Intent Chips */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-[11px] text-[#6e7a75] uppercase tracking-wider mr-1">
                {t.quickTries}:
              </span>
              {QUICK_PROMPTS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => triggerSimulation(chip.fullQuery)}
                  className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#f0edf1] shadow-xs transition-all text-[#3e4946] hover:text-[#1b1b1e] border border-[#E5E7EB] cursor-pointer"
                  type="button"
                >
                  <span className={`material-symbols-outlined text-[14px] ${chip.color}`}>
                    {chip.icon}
                  </span>
                  <span className="text-[13px]">{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Intent Telemetry Bar */}
        <div className="max-w-4xl mx-auto mt-8 p-3.5 rounded-2xl bg-[#f6f2f7] shadow-xs flex flex-col md:flex-row items-center justify-between gap-3 border border-[#E5E7EB]/60">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#99f3dd] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#00201a] text-[20px]">psychology</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#1b1b1e] font-semibold truncate">
                  Vector Cognition Matrix Active
                </span>
                <span className="px-1.5 py-0.2 rounded bg-[#e4e1e6] text-[#3e4946] text-[10px] font-bold">
                  v4.2
                </span>
              </div>
              <span className="text-[13px] text-[#6e7a75] truncate">
                Evaluates climatic micro-zones, transit friction, and crowds in real time.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-[11px] text-[#6e7a75] uppercase">Embeddings Indexed</span>
              <span className="text-base text-[#005f50] font-semibold">14,280 spots</span>
            </div>
            <div className="h-8 w-[1px] bg-[#eae7eb] hidden sm:block"></div>
            <div className="flex flex-col items-end">
              <span className="text-[11px] text-[#6e7a75] uppercase">Semantic Match Latency</span>
              <span className="text-base text-[#4648d4] font-semibold">{searchLatency}ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Section: Travel Style Exploration */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#005f50]"></span>
                <span className="text-[11px] text-[#005f50] uppercase font-bold tracking-wider">
                  Semantic Moodscapes
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1b1b1e] tracking-tight">
                {t.exploreTravelStyles}
              </h2>
              <p className="text-sm text-[#3e4946] mt-1">
                Curated vector embeddings tailored to your mood and pacing
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-[#6e7a75]">
                Click any vibe card to test natural language inference
              </span>
            </div>
          </div>

          {/* 6 Refined Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRAVEL_STYLES.map((style) => {
              const locStyle = localizeTravelStyle(style);
              return (
                <div
                  key={style.id}
                  onClick={() => {
                    triggerSimulation(style.intentQuery);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      triggerSimulation(style.intentQuery);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  className="group flex flex-col justify-between rounded-2xl bg-white p-5 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative border border-[#E5E7EB]"
                >
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl -mr-12 -mt-12 transition-colors ${
                      style.badgeColor === 'primary'
                        ? 'bg-[#99f3dd]/20 group-hover:bg-[#99f3dd]/40'
                        : style.badgeColor === 'secondary'
                        ? 'bg-[#e1e0ff]/25 group-hover:bg-[#e1e0ff]/45'
                        : 'bg-[#71f8e4]/25 group-hover:bg-[#71f8e4]/45'
                    }`}
                  ></div>

                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                          style.badgeColor === 'primary'
                            ? 'bg-[#99f3dd] text-[#00201a]'
                            : style.badgeColor === 'secondary'
                            ? 'bg-[#e1e0ff] text-[#2f2ebe]'
                            : 'bg-[#71f8e4] text-[#00201c]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[24px]">{style.icon}</span>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f6f2f7] ${
                          style.badgeColor === 'primary'
                            ? 'text-[#005f50]'
                            : style.badgeColor === 'secondary'
                            ? 'text-[#4648d4]'
                            : 'text-[#005f55]'
                        }`}
                      >
                        {locStyle.localizedBadge}
                      </span>
                    </div>

                    <h3 className="text-xl text-[#1b1b1e] mt-4 font-semibold">{locStyle.localizedName}</h3>
                    <p className="text-sm text-[#3e4946] mt-1">{locStyle.localizedDesc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#f0edf1] flex items-center justify-between">
                    <span className="text-[11px] text-[#6e7a75]">{locStyle.localizedStat}</span>
                    <span
                      className={`material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1 ${
                        style.badgeColor === 'secondary' ? 'text-[#4648d4]' : 'text-[#005f50]'
                      }`}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Visual Inspiration Triad: Live Real-World Trajectories */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-[#f6f2f7]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-5 gap-2">
            <div>
              <span className="text-[11px] text-[#005f55] uppercase font-bold tracking-wider">
                {t('realWorldTrajectories', 'Live Real-World Trajectories')}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1b1b1e] mt-0.5">
                {t('tripsSynthesizedPrompt', 'Trips synthesized from traveler prompts')}
              </h2>
            </div>
            <span className="text-[13px] text-[#6e7a75]">
              {t('neuralGatewayNotice', 'Updated via Sarathi Neural Gateway')}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {DESTINATION_TRIPS.slice(0, 3).map((spot) => {
              const locSpot = localizeTrip(spot);
              return (
                <div
                  key={spot.id}
                  onClick={() => onSelectTrip(spot)}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all group flex flex-col border border-[#E5E7EB] cursor-pointer"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={spot.imageUrl}
                      alt={spot.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1e]/85 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <p className="text-base font-semibold leading-tight">{locSpot.localizedTitle}</p>
                        <p className="text-[11px] opacity-90">{spot.region}</p>
                      </div>
                      <span className="px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold">
                        {spot.matchScore}% {t.matchBadge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-[13px] text-[#3e4946] italic leading-relaxed">
                      {spot.quotePrompt}
                    </p>
                    <div className="mt-3 pt-2 border-t border-[#f0edf1] flex items-center justify-between text-[#6e7a75] text-[11px]">
                      <span className="flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[16px]">{spot.metaIcon}</span>
                        {locSpot.localizedBadge}
                      </span>
                      <span className="text-[#005f50] font-semibold">
                        {spot.duration} • {locSpot.localizedCost}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More curated button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onNavigateTab('recommendations')}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-xs font-semibold text-[#1b1b1e] hover:bg-[#f0edf1] shadow-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{t('viewAllTrajectories', 'View All 14,280 Indexed Trajectories')}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cold-Start Interactive Floating Callout (Persistent Bottom Right) */}
      {bannerVisible && (
        <aside
          aria-label="New traveler onboarding"
          className="fixed bottom-6 right-6 z-40 max-w-sm w-full transition-all duration-500 ease-out transform"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl relative flex flex-col gap-1 border border-[#E5E7EB]">
            <button
              aria-label="Dismiss onboarding helper"
              onClick={() => setBannerVisible(false)}
              className="absolute top-3 right-3 text-[#6e7a75] hover:text-[#1b1b1e] transition-colors p-1"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            <div className="flex items-center gap-1.5 pr-6">
              <span
                className="material-symbols-outlined text-[#4648d4] text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                tune
              </span>
              <span className="text-xs font-semibold text-[#1b1b1e]">{t.calibrateBaseline}</span>
            </div>

            <p className="text-[13px] text-[#3e4946]">
              Tune your recommendation baseline in 60s for hyper-accurate suggestions.
            </p>

            <div className="mt-1.5 flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  onOpenOnboarding();
                  setBannerVisible(false);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-[#4648d4] text-white text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#3b3dbb] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
                type="button"
              >
                <span>{t.calibrateBaseline}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <button
                onClick={() => setBannerVisible(false)}
                className="py-2 px-2.5 text-xs text-[#6e7a75] hover:text-[#1b1b1e] transition-colors cursor-pointer"
                type="button"
              >
                {t.skipForNow || 'Skip'}
              </button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};
