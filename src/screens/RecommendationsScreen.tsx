import React, { useState, useMemo, useRef } from 'react';
import { RECOMMENDED_PLACES, DESTINATION_TRIPS } from '../data/mockData';
import { DestinationTrip } from '../types';

interface RecommendationsScreenProps {
  onSelectTrip: (trip: DestinationTrip) => void;
  onSaveTrip: (trip: DestinationTrip) => void;
  savedTripIds: string[];
  initialSearchQuery: string;
}

type LocaleKey = 'en' | 'ml' | 'hi' | 'ta';

export const RecommendationsScreen: React.FC<RecommendationsScreenProps> = ({
  onSelectTrip,
  onSaveTrip,
  savedTripIds,
  initialSearchQuery,
}) => {
  // Filters & signals state
  const [destinationFilter, setDestinationFilter] = useState('Munnar, Kerala');
  const [nightlyBudgetMax, setNightlyBudgetMax] = useState<number>(10000);
  const [nightlyBudgetMin, setNightlyBudgetMin] = useState<number>(2500);
  const [cadence, setCadence] = useState<'Relaxed' | 'Moderate' | 'Action-packed' | 'Immersive'>('Relaxed');
  const [selectedStayCategories, setSelectedStayCategories] = useState<string[]>(['Homestay', 'Tea Estate']);
  const [explanationLocale, setExplanationLocale] = useState<LocaleKey>('ml');
  const [activeQueryChip, setActiveQueryChip] = useState<string>(
    initialSearchQuery || 'Relaxing places near Munnar'
  );

  // Active filter removable chips
  const [activeChips, setActiveChips] = useState<string[]>([
    'Munnar, Kerala',
    'Under ₹10,000 / night',
    'Relaxed Pace',
    'Boutique Stays & Resorts',
  ]);

  // Selected property for the bottom "Why Sarathi recommended this" attribution section
  const [activeAttributionProperty, setActiveAttributionProperty] = useState<DestinationTrip>(
    RECOMMENDED_PLACES[0]
  );
  const [showAttribution, setShowAttribution] = useState(true);
  const [showRawSignalsModal, setShowRawSignalsModal] = useState(false);
  const [showWeightingsModal, setShowWeightingsModal] = useState(false);

  // Fine-tuned weights state
  const [customWeights, setCustomWeights] = useState({
    queryMatch: 92,
    preferenceProfile: 84,
    sessionMemory: 73,
    budgetCeiling: 100,
  });

  const attributionRef = useRef<HTMLDivElement>(null);

  const removeChip = (chipText: string) => {
    setActiveChips((prev) => prev.filter((c) => c !== chipText));
    if (chipText.includes('Under ₹')) {
      setNightlyBudgetMax(25000);
    }
    if (chipText.includes('Munnar')) {
      setDestinationFilter('');
    }
  };

  const handleResetFilters = () => {
    setDestinationFilter('Munnar, Kerala');
    setNightlyBudgetMax(10000);
    setNightlyBudgetMin(2500);
    setCadence('Relaxed');
    setSelectedStayCategories(['Homestay', 'Tea Estate']);
    setExplanationLocale('ml');
    setActiveChips([
      'Munnar, Kerala',
      'Under ₹10,000 / night',
      'Relaxed Pace',
      'Boutique Stays & Resorts',
    ]);
  };

  const toggleStayCategory = (cat: string) => {
    setSelectedStayCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleExplainSignals = (place: DestinationTrip) => {
    setActiveAttributionProperty(place);
    setShowAttribution(true);
    if (place.signals) {
      setCustomWeights({
        queryMatch: place.signals.semanticQueryMatch,
        preferenceProfile: place.signals.preferenceProfile,
        sessionMemory: place.signals.sessionMemoryFlow,
        budgetCeiling: place.signals.budgetCeilingFit,
      });
    }
    setTimeout(() => {
      attributionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  // Combine RECOMMENDED_PLACES with DESTINATION_TRIPS for comprehensive coverage
  const allAvailablePlaces = useMemo(() => {
    const combined = [...RECOMMENDED_PLACES];
    // Add additional items from mockData if destination search is broadened
    DESTINATION_TRIPS.forEach((trip) => {
      if (!combined.some((p) => p.id === trip.id)) {
        combined.push(trip);
      }
    });
    return combined;
  }, []);

  const filteredPlaces = useMemo(() => {
    return allAvailablePlaces.filter((place) => {
      // Destination filter
      if (destinationFilter.trim()) {
        const dQuery = destinationFilter.toLowerCase();
        const matchesRegion = place.region.toLowerCase().includes(dQuery);
        const matchesTitle = place.title.toLowerCase().includes(dQuery);
        if (!matchesRegion && !matchesTitle) {
          // If filtering specifically for Munnar and this is one of our 3 recommended places
          if (dQuery.includes('munnar') && RECOMMENDED_PLACES.some((r) => r.id === place.id)) {
            // Keep it
          } else {
            return false;
          }
        }
      }

      // Budget filter
      if (place.costNumeric > nightlyBudgetMax) {
        return false;
      }

      // Stay categories filter (if any selected)
      if (selectedStayCategories.length > 0 && place.stayCategory) {
        if (!selectedStayCategories.includes(place.stayCategory)) {
          // check if tags match any
          const matchesTags = place.intentTags.some((t) =>
            selectedStayCategories.some((sc) => t.toLowerCase().includes(sc.toLowerCase()))
          );
          if (!matchesTags) return false;
        }
      }

      return true;
    });
  }, [allAvailablePlaces, destinationFilter, nightlyBudgetMax, selectedStayCategories]);

  // Helper to fetch reasoning translation
  const getReasoningText = (place: DestinationTrip) => {
    if (place.whyPickedTranslations && place.whyPickedTranslations[explanationLocale]) {
      return place.whyPickedTranslations[explanationLocale];
    }
    return place.whyPicked || place.description;
  };

  return (
    <div className="flex flex-col w-full bg-[#fbf8fc]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-5 flex flex-col gap-5 max-w-[1440px] mx-auto">
        {/* Top Header & Subheader Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <div className="flex items-center gap-1.5 text-[#005f50] text-[11px] font-semibold tracking-wider">
              <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
              <span>SARATHI REASONING ENGINE ACTIVE</span>
            </div>
            <h1 className="text-3xl sm:text-[32px] font-semibold text-[#1b1b1e] tracking-tight leading-tight">
              Places picked for you
            </h1>
            <p className="text-sm text-[#3e4946]">
              Personalized from your preferences, natural language query, and recent session activity.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto bg-[#eae7eb]/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0d7a68] animate-ping"></span>
            <span className="text-[11px] font-semibold text-[#1b1b1e]">
              12 personalized recommendations
            </span>
            <span className="text-[#bdc9c4] select-none">•</span>
            <span className="text-[11px] text-[#3e4946]">Reranked with RecSys v2</span>
          </div>
        </div>

        {/* Active Filters / Applied Signal Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 p-2 bg-[#f6f2f7] rounded-xl border border-[#E5E7EB]/60">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-xs">
            <span className="material-symbols-outlined text-[#005f50] text-[16px]">travel_explore</span>
            <span className="text-xs text-[#1b1b1e] font-semibold">“{activeQueryChip}”</span>
          </div>

          {activeChips.map((chip) => (
            <div
              key={chip}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg text-[#3e4946] text-xs shadow-xs"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                aria-label={`Remove filter ${chip}`}
                className="hover:text-[#ba1a1a] transition-colors flex items-center p-0.5 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[13px]">close</span>
              </button>
            </div>
          ))}

          <div className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#e1e0ff]/60 text-[#2f2ebe] rounded-full text-[11px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">translate</span>
            <span>
              {explanationLocale === 'ml'
                ? 'Malayalam reasoning active'
                : explanationLocale === 'hi'
                ? 'Hindi reasoning active'
                : explanationLocale === 'ta'
                ? 'Tamil reasoning active'
                : 'English reasoning active'}
            </span>
          </div>
        </div>

        {/* Main Grid: Left Sidebar (3 Cols) & Right Results (9 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar: Filters & Signals */}
          <aside className="lg:col-span-3 flex flex-col gap-4 p-5 bg-white rounded-2xl shadow-xs border border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#1b1b1e]">
                <span className="material-symbols-outlined text-[20px] text-[#005f50]">tune</span>
                <span className="text-sm font-bold">Filters &amp; Signals</span>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-[#005f50] hover:underline text-[11px] font-semibold cursor-pointer"
                type="button"
              >
                Reset
              </button>
            </div>

            {/* Destination Input */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                Destination
              </label>
              <div className="flex items-center px-3 py-2 bg-[#f6f2f7] rounded-lg border border-[#E5E7EB]/50">
                <span className="material-symbols-outlined text-[#6e7a75] text-[18px] mr-1.5">
                  pin_drop
                </span>
                <input
                  className="bg-transparent text-xs text-[#1b1b1e] focus:outline-none w-full"
                  type="text"
                  value={destinationFilter}
                  onChange={(e) => setDestinationFilter(e.target.value)}
                  placeholder="e.g. Munnar, Kerala"
                />
              </div>
            </div>

            {/* Nightly Budget Slider */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                  Nightly Budget
                </label>
                <span className="text-xs text-[#005f50] font-bold">
                  ₹{nightlyBudgetMin.toLocaleString('en-IN')} — ₹{nightlyBudgetMax.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="py-2">
                <input
                  type="range"
                  min={1500}
                  max={25000}
                  step={500}
                  value={nightlyBudgetMax}
                  onChange={(e) => setNightlyBudgetMax(Number(e.target.value))}
                  className="w-full accent-[#005f50] cursor-pointer"
                />
              </div>

              <div className="flex justify-between text-[#6e7a75] text-[11px]">
                <span>₹1,500</span>
                <span>₹25,000+</span>
              </div>
            </div>

            {/* Travel Cadence Radio Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                Travel Cadence
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Relaxed', 'Moderate', 'Action-packed', 'Immersive'] as const).map((mode) => (
                  <label
                    key={mode}
                    onClick={() => setCadence(mode)}
                    className={`flex items-center gap-1.5 p-2 rounded-lg cursor-pointer transition-colors ${
                      cadence === mode ? 'bg-[#f0edf1] border border-[#005f50]/30' : 'bg-[#f6f2f7] hover:bg-[#f0edf1]'
                    }`}
                  >
                    <input
                      checked={cadence === mode}
                      onChange={() => setCadence(mode)}
                      className="text-[#005f50] focus:ring-0 accent-[#005f50]"
                      name="cadence"
                      type="radio"
                    />
                    <span className="text-xs text-[#1b1b1e]">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stay Categories Badges */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                Stay Categories
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['Homestay', 'Tea Estate', 'Boutique Villa', 'Eco-Cottage'].map((cat) => {
                  const isSelected = selectedStayCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleStayCategory(cat)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#005f50] text-white shadow-xs'
                          : 'bg-[#eae7eb] text-[#3e4946] hover:bg-[#e4e1e6]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Guest Rating Filter Indicator */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                Guest Rating
              </label>
              <div className="flex items-center justify-between p-2 bg-[#f6f2f7] rounded-lg border border-[#E5E7EB]/50">
                <span className="text-xs text-[#1b1b1e] flex items-center gap-1 font-medium">
                  <span
                    className="material-symbols-outlined text-[#005f50] text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  4.5+ Excellent
                </span>
                <span className="text-[11px] text-[#005f50] font-bold">Active</span>
              </div>
            </div>

            {/* Cognitive Explanation Locale Dropdown */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                Cognitive Explanation Locale
              </label>
              <div className="flex items-center bg-[#f6f2f7] rounded-lg px-2.5 py-1.5 border border-[#E5E7EB]/50">
                <span className="material-symbols-outlined text-[#6e7a75] text-[18px] mr-1.5">
                  psychology
                </span>
                <select
                  aria-label="Explanation Language"
                  value={explanationLocale}
                  onChange={(e) => setExplanationLocale(e.target.value as LocaleKey)}
                  className="bg-transparent text-xs text-[#1b1b1e] focus:outline-none w-full cursor-pointer font-medium"
                >
                  <option value="en">English (Reasoning Engine)</option>
                  <option value="ml">Malayalam (മലയാളം)</option>
                  <option value="hi">Hindi (हिन्दी)</option>
                  <option value="ta">Tamil (தமிழ்)</option>
                </select>
              </div>
            </div>

            {/* Live Session Context Card */}
            <div className="mt-1 p-2.5 bg-[#eae7eb] rounded-xl flex items-start gap-2">
              <span className="material-symbols-outlined text-[#005f50] text-[18px] mt-0.5">
                neurology
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#1b1b1e] font-semibold">Live Session Context</span>
                <span className="text-[11px] text-[#3e4946]">
                  3 interactions recorded this session influencing weights.
                </span>
              </div>
            </div>
          </aside>

          {/* Right Main Column: Result Articles (9 Cols) */}
          <main className="lg:col-span-9 flex flex-col gap-5">
            {filteredPlaces.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-[#E5E7EB] shadow-xs">
                <span className="material-symbols-outlined text-[44px] text-[#6e7a75] mb-2">
                  travel_explore
                </span>
                <h3 className="text-base font-bold text-[#1b1b1e]">No stays match the active criteria</h3>
                <p className="text-xs text-[#6e7a75] mt-1">
                  Try adjusting the budget slider or clearing the stay categories filter.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#005f50] text-white text-xs font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredPlaces.map((place) => {
                const isSaved = savedTripIds.includes(place.id);
                const isInspected = activeAttributionProperty.id === place.id;

                return (
                  <article
                    key={place.id}
                    className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl group border ${
                      isInspected ? 'border-[#005f50]/40 ring-2 ring-[#005f50]/20' : 'border-[#E5E7EB]'
                    }`}
                  >
                    {/* Left Column: Image with badges */}
                    <div className="md:w-5/12 relative overflow-hidden h-64 md:h-auto min-h-[220px]">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={place.imageUrl}
                        alt={place.title}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src =
                            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';
                        }}
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                        <span className="px-2.5 py-1 bg-[#005f50] text-white text-[11px] font-semibold rounded-full shadow-md flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">verified</span>
                          <span>{place.matchScore}% Match</span>
                        </span>
                      </div>

                      <button
                        onClick={() => onSaveTrip(place)}
                        aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#ba1a1a] text-white shadow-md'
                            : 'bg-white/80 text-[#1b1b1e] hover:text-[#ba1a1a]'
                        }`}
                        type="button"
                      >
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={isSaved ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Right Column: Place Information */}
                    <div className="p-5 md:w-7/12 flex flex-col justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        {/* Location and Rating */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[#3e4946] text-[11px]">
                            <span className="material-symbols-outlined text-[14px] text-[#005f50]">
                              location_on
                            </span>
                            <span>{place.region}</span>
                          </div>

                          <div className="flex items-center gap-1 text-[#1b1b1e] text-xs">
                            <span
                              className="material-symbols-outlined text-[#005f50] text-[16px]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                            <span className="font-bold">{place.rating?.score ?? 4.8}</span>
                            <span className="text-[#6e7a75]">({place.rating?.count ?? 112})</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#1b1b1e] tracking-tight mt-0.5">
                          {place.title}
                        </h2>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 my-1">
                          {place.intentTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-[#f0edf1] text-[11px] text-[#3e4946]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Why Sarathi picked this for you Box */}
                        <div className="p-3 bg-[#99f3dd]/20 rounded-xl flex flex-col gap-1 border border-[#005f50]/10">
                          <div className="flex items-center gap-1.5 text-[#005f50] text-[11px] font-semibold">
                            <span className="material-symbols-outlined text-[16px]">
                              psychology_alt
                            </span>
                            <span>Why Sarathi picked this for you:</span>
                          </div>
                          <p className="text-xs text-[#1b1b1e] leading-relaxed">
                            {getReasoningText(place)}
                          </p>
                        </div>
                      </div>

                      {/* Pricing and Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#f0edf1]">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-semibold text-[#6e7a75]">
                            Per night
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-[#1b1b1e]">{place.cost}</span>
                            <span className="text-[10px] text-[#6e7a75]">+ taxes</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSaveTrip(place)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                              isSaved
                                ? 'bg-[#99f3dd] text-[#00201a] border border-[#005f50]'
                                : 'bg-[#eae7eb] hover:bg-[#e4e1e6] text-[#1b1b1e]'
                            }`}
                            type="button"
                          >
                            {isSaved ? 'Saved in Trip' : 'Save to Trip'}
                          </button>

                          {place.signals ? (
                            <button
                              onClick={() => handleExplainSignals(place)}
                              className="px-3.5 py-1.5 bg-[#005f50] hover:bg-[#0d7a68] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                              type="button"
                            >
                              <span>Explain Signals</span>
                              <span className="material-symbols-outlined text-[16px]">
                                visibility
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => onSelectTrip(place)}
                              className="px-3.5 py-1.5 bg-[#f0edf1] hover:bg-[#eae7eb] text-[#1b1b1e] rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                              type="button"
                            >
                              <span>View Details</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </main>
        </div>

        {/* Bottom Explainability Section: "Why Sarathi recommended this" (Transparent AI Layer) */}
        {showAttribution && (
          <section
            ref={attributionRef}
            className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-[#E5E7EB] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#99f3dd]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-5 border-b border-[#f0edf1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#005f50] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-[#1b1b1e]">Why Sarathi recommended this</h2>
                    <span className="px-2 py-0.5 rounded-full bg-[#e1e0ff] text-[#07006c] text-[11px] font-semibold">
                      Transparent AI Layer
                    </span>
                  </div>
                  <span className="text-xs text-[#3e4946]">
                    Live telemetry and weight attribution for{' '}
                    <strong>{activeAttributionProperty.title}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAttribution(false)}
                  className="px-3 py-1.5 bg-[#f0edf1] text-[#1b1b1e] rounded-lg text-xs font-semibold hover:bg-[#eae7eb] transition-colors cursor-pointer"
                  type="button"
                >
                  Dismiss this feature
                </button>
                <button
                  onClick={() => setShowWeightingsModal(true)}
                  className="px-3.5 py-1.5 bg-[#005f50] text-white rounded-lg text-xs font-semibold hover:bg-[#0d7a68] transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  <span>Fine-tune weightings</span>
                </button>
              </div>
            </div>

            {/* 4 Attribution Progress Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {/* Metric 1 */}
              <div className="p-4 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                    Semantic Query Match
                  </span>
                  <span className="text-xs text-[#005f50] font-bold">{customWeights.queryMatch}%</span>
                </div>
                <div className="w-full h-2 bg-[#e4e1e6] rounded-full overflow-hidden my-1">
                  <div
                    className="h-full bg-[#005f50] rounded-full transition-all duration-700"
                    style={{ width: `${customWeights.queryMatch}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#3e4946]">
                  High correspondence to “Relaxing places near Munnar”.
                </span>
              </div>

              {/* Metric 2 */}
              <div className="p-4 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                    Preference Profile
                  </span>
                  <span className="text-xs text-[#005f50] font-bold">
                    {customWeights.preferenceProfile}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e4e1e6] rounded-full overflow-hidden my-1">
                  <div
                    className="h-full bg-[#005f50] rounded-full transition-all duration-700"
                    style={{ width: `${customWeights.preferenceProfile}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#3e4946]">
                  Matches verified calm nature immersion and quiet zones.
                </span>
              </div>

              {/* Metric 3 */}
              <div className="p-4 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                    Session Memory Flow
                  </span>
                  <span className="text-xs text-[#005f50] font-bold">
                    {customWeights.sessionMemory}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e4e1e6] rounded-full overflow-hidden my-1">
                  <div
                    className="h-full bg-[#005f50] rounded-full transition-all duration-700"
                    style={{ width: `${customWeights.sessionMemory}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#3e4946]">
                  Reflects 3 recent clicks exploring offbeat boutique properties.
                </span>
              </div>

              {/* Metric 4 */}
              <div className="p-4 bg-[#f6f2f7] rounded-xl flex flex-col gap-1 border border-[#E5E7EB]/50">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#3e4946] uppercase tracking-wider font-semibold">
                    Budget Ceiling Fit
                  </span>
                  <span className="text-xs text-[#005f50] font-bold">
                    {customWeights.budgetCeiling}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e4e1e6] rounded-full overflow-hidden my-1">
                  <div
                    className="h-full bg-[#005f50] rounded-full transition-all duration-700"
                    style={{ width: `${customWeights.budgetCeiling}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#3e4946]">
                  {activeAttributionProperty.cost} is comfortably below your ₹10,000 threshold.
                </span>
              </div>
            </div>

            {/* Quote Block & View Raw Signals */}
            <div className="mt-5 p-4 bg-[#f0edf1] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#005f50] text-[22px] mt-0.5 shrink-0">
                  format_quote
                </span>
                <p className="text-sm text-[#1b1b1e] italic max-w-4xl leading-relaxed">
                  {activeAttributionProperty.signals?.quote ||
                    '“Your recent activity suggests you prefer relaxed destinations with nature immersion over crowded viewpoints. This recommendation also aligns with your selected ₹10,000 budget ceiling and Malayalam culinary affinity.”'}
                </p>
              </div>

              <button
                onClick={() => setShowRawSignalsModal(true)}
                className="whitespace-nowrap px-4 py-2 bg-white text-[#005f50] hover:bg-[#fbf8fc] rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer border border-[#E5E7EB]"
                type="button"
              >
                View Raw Signals
              </button>
            </div>
          </section>
        )}

        {/* Modal: View Raw Signals */}
        {showRawSignalsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-[#E5E7EB] relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setShowRawSignalsModal(false)}
                className="absolute top-4 right-4 text-[#6e7a75] hover:text-[#1b1b1e] p-1.5 rounded-full hover:bg-[#f0edf1]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#005f50] text-[22px]">code</span>
                <h3 className="text-base font-bold text-[#1b1b1e]">
                  Raw Vector Telemetry & Weight Coefficients
                </h3>
              </div>
              <p className="text-xs text-[#6e7a75] mb-4">
                Telemetry trace for <strong>{activeAttributionProperty.title}</strong>
              </p>

              <div className="space-y-2 text-xs font-mono bg-[#f6f2f7] p-4 rounded-xl border border-[#E5E7EB] text-[#1b1b1e] overflow-x-auto">
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">entity_id:</span>
                  <span className="font-bold">{activeAttributionProperty.id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">vector_cosine_similarity:</span>
                  <span className="font-bold text-[#005f50]">0.9421 (+0.038 baseline lift)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">geo_anchor:</span>
                  <span>{activeAttributionProperty.coordinates?.lat.toFixed(4)}°N, {activeAttributionProperty.coordinates?.lon.toFixed(4)}°E</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">elevation_msl:</span>
                  <span>{activeAttributionProperty.elevation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">crowd_friction_decay:</span>
                  <span className="text-[#4648d4]">0.082 (Low dispersion)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#eae7eb]">
                  <span className="text-[#6e7a75]">session_relevance_lambda:</span>
                  <span>0.875</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6e7a75]">recsys_model_version:</span>
                  <span className="font-semibold">RecSys-v2-SarathiDenseEmbed</span>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setShowRawSignalsModal(false)}
                  className="px-4 py-2 bg-[#005f50] text-white text-xs font-semibold rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Fine-tune Weightings */}
        {showWeightingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E5E7EB] relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setShowWeightingsModal(false)}
                className="absolute top-4 right-4 text-[#6e7a75] hover:text-[#1b1b1e] p-1.5 rounded-full hover:bg-[#f0edf1]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#005f50] text-[22px]">tune</span>
                <h3 className="text-base font-bold text-[#1b1b1e]">
                  Fine-Tune Cognitive Weightings
                </h3>
              </div>
              <p className="text-xs text-[#6e7a75] mb-5">
                Adjust how much Sarathi emphasizes your query words versus historical browsing memory.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Semantic Query Strictness</span>
                    <span className="text-[#005f50] font-bold">{customWeights.queryMatch}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={100}
                    value={customWeights.queryMatch}
                    onChange={(e) =>
                      setCustomWeights({ ...customWeights, queryMatch: Number(e.target.value) })
                    }
                    className="w-full accent-[#005f50]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Traveler Profile Prior</span>
                    <span className="text-[#005f50] font-bold">{customWeights.preferenceProfile}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={100}
                    value={customWeights.preferenceProfile}
                    onChange={(e) =>
                      setCustomWeights({ ...customWeights, preferenceProfile: Number(e.target.value) })
                    }
                    className="w-full accent-[#005f50]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Session Memory Influence</span>
                    <span className="text-[#005f50] font-bold">{customWeights.sessionMemory}%</span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={100}
                    value={customWeights.sessionMemory}
                    onChange={(e) =>
                      setCustomWeights({ ...customWeights, sessionMemory: Number(e.target.value) })
                    }
                    className="w-full accent-[#005f50]"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setCustomWeights({
                      queryMatch: 92,
                      preferenceProfile: 84,
                      sessionMemory: 73,
                      budgetCeiling: 100,
                    });
                  }}
                  className="px-3 py-1.5 text-xs text-[#6e7a75] hover:text-[#1b1b1e]"
                >
                  Reset Defaults
                </button>
                <button
                  onClick={() => setShowWeightingsModal(false)}
                  className="px-4 py-2 bg-[#005f50] text-white text-xs font-semibold rounded-xl"
                >
                  Apply &amp; Re-rank
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
