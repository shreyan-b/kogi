import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RECOMMENDED_PLACES, DESTINATION_TRIPS } from '../data/mockData';
import { DestinationTrip, LanguageCode } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { buildRecommendationRequest } from '../services/recommendationApi';

interface RecommendationsScreenProps {
  onSelectTrip: (trip: DestinationTrip) => void;
  onSaveTrip: (trip: DestinationTrip) => void;
  savedTripIds: string[];
  initialSearchQuery: string;
}

interface EvidenceChip {
  label: string;
  icon: string;
}

export const RecommendationsScreen: React.FC<RecommendationsScreenProps> = ({
  onSelectTrip,
  onSaveTrip,
  savedTripIds,
  initialSearchQuery,
}) => {
  const { language, setLanguage, t, langShort, localizeTrip, localizeContent, formatCurrency } = useLanguage();

  // Query & Editing state
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || 'Relaxing places near Munnar');
  const [isEditingQuery, setIsEditingQuery] = useState(false);
  const [queryInputValue, setQueryInputValue] = useState(searchQuery);

  // Active filter chips
  const [activeChips, setActiveChips] = useState<string[]>([
    'Munnar',
    'Under ₹10,000',
    'Relaxed',
    'Nature',
  ]);

  // Filters state
  const [destinationInput, setDestinationInput] = useState('Munnar, Kerala');
  const [nightlyBudgetMax, setNightlyBudgetMax] = useState<number>(10000);
  const [cadence, setCadence] = useState<'Relaxed' | 'Moderate' | 'Action-packed' | 'Immersive'>('Relaxed');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Homestay', 'Tea Estate']);

  // Expanded card IDs for in-place "Why this pick" deep dive
  const [expandedCardIds, setExpandedCardIds] = useState<Set<string>>(
    new Set(['cloud-valley-tea-estate']) // expanded first by default to show immediate value
  );

  // Session adaptation notification state (subtle product banner)
  const [showAdaptationNotice, setShowAdaptationNotice] = useState(true);

  const removeChip = (chip: string) => {
    setActiveChips((prev) => prev.filter((c) => c !== chip));
    if (chip === 'Under ₹10,000') {
      setNightlyBudgetMax(25000);
    }
    if (chip === 'Munnar') {
      setDestinationInput('');
    }
  };

  const handleResetFilters = () => {
    setDestinationInput('Munnar, Kerala');
    setNightlyBudgetMax(10000);
    setCadence('Relaxed');
    setSelectedCategories(['Homestay', 'Tea Estate']);
    setActiveChips(['Munnar', 'Under ₹10,000', 'Relaxed', 'Nature']);
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCardIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const handleSaveWithNotice = (trip: DestinationTrip) => {
    onSaveTrip(trip);
    setShowAdaptationNotice(true);
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (queryInputValue.trim()) {
      const trimmed = queryInputValue.trim();
      setSearchQuery(trimmed);
      setIsEditingQuery(false);
      setShowAdaptationNotice(true);
      // Future-proof backend language contract: transmits active language with search query
      const req = buildRecommendationRequest(trimmed, language, {
        destination: destinationInput,
        nightlyBudgetMax,
        cadence,
        categories: selectedCategories,
      });
      if (typeof window !== 'undefined') {
        (window as any).__lastRecommendationRequest = req;
      }
    }
  };

  // Combine places while prioritizing the tailored recommended retreats
  const allAvailablePlaces = useMemo(() => {
    const combined = [...RECOMMENDED_PLACES];
    DESTINATION_TRIPS.forEach((trip) => {
      if (!combined.some((p) => p.id === trip.id)) {
        combined.push(trip);
      }
    });
    return combined;
  }, []);

  // Filter logic
  const filteredPlaces = useMemo(() => {
    return allAvailablePlaces.filter((place) => {
      // Destination matching
      if (destinationInput.trim()) {
        const query = destinationInput.toLowerCase();
        const matchesRegion = place.region.toLowerCase().includes(query);
        const matchesTitle = place.title.toLowerCase().includes(query);
        if (!matchesRegion && !matchesTitle) {
          if (query.includes('munnar') && RECOMMENDED_PLACES.some((r) => r.id === place.id)) {
            // Keep Munnar recommendations
          } else {
            return false;
          }
        }
      }

      // Budget ceiling
      if (place.costNumeric > nightlyBudgetMax) {
        return false;
      }

      // Cadence filtering
      if (cadence !== 'Relaxed' && place.style.toLowerCase() !== cadence.toLowerCase()) {
        return false;
      }

      // Stay Category
      if (selectedCategories.length > 0 && place.stayCategory) {
        const matchesCat = selectedCategories.some((cat) =>
          place.stayCategory?.toLowerCase().includes(cat.toLowerCase())
        );
        if (!matchesCat && selectedCategories.length >= 2) {
          return false;
        }
      }

      return true;
    });
  }, [allAvailablePlaces, destinationInput, nightlyBudgetMax, cadence, selectedCategories]);

  // Three compact evidence chips helper
  const getEvidenceChips = (): EvidenceChip[] => {
    return [
      { label: t.evidenceRelaxed, icon: 'self_improvement' },
      { label: t.evidenceBudget, icon: 'savings' },
      { label: t.evidenceMunnar, icon: 'landscape' },
    ];
  };

  // Universal expanded bullet points resolved dynamically through localization layer
  const getExpandedBullets = (place: DestinationTrip): string[] => {
    return localizeTrip(place).localizedBullets;
  };

  // Influencing factor pills helper
  const getInfluencingFactors = (): string[] => {
    return [t.factorRelaxed, t.factorNature, t.factorBudget, t.factorMunnar];
  };

  // Universal explanation text helper resolved dynamically through localization layer
  const getExplanationText = (place: DestinationTrip): string => {
    return localizeTrip(place).localizedWhyPicked;
  };

  return (
    <div className="flex flex-col w-full bg-[#fbf8fc] min-h-screen text-[#1b1b1e] antialiased">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-7 flex flex-col gap-6">

        {/* 1. Page Header Hierarchy */}
        <header className="flex flex-col gap-4 border-b border-[#E5E7EB]/70 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <div className="flex items-center gap-1.5 text-[#005f50]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005f50]"></span>
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
                  {t.recEyebrow}
                </span>
              </div>
              <h1 className="text-3xl sm:text-[34px] font-semibold text-[#18181B] tracking-[-0.025em] leading-tight">
                {t.recTitle}
              </h1>
              <p className="text-sm text-[#52525B] leading-relaxed">
                {t.recSubtitle}
              </p>
            </div>

            {/* Language Reasoning Switcher */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-white px-3 py-1.5 rounded-xl border border-[#E5E7EB] shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-[#005f50]">translate</span>
              <span className="text-xs text-[#52525B]">{t.filterLanguage}:</span>
              <select
                aria-label="Cognitive Reasoning Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="bg-transparent text-xs font-semibold text-[#18181B] focus:outline-none cursor-pointer pr-1"
              >
                <option value="en-IN">English</option>
                <option value="hi-IN">Hindi (हिन्दी)</option>
                <option value="ml-IN">Malayalam (മലയാളം)</option>
                <option value="kn-IN">Kannada (ಕನ್ನಡ)</option>
                <option value="ta-IN">Tamil (தமிழ்)</option>
              </select>
            </div>
          </div>

          {/* Compact Query Bar & Active Filter Chips */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-1">
            {/* Search / Query Bar */}
            <div className="w-full md:w-auto flex-1 max-w-xl">
              {isEditingQuery ? (
                <form onSubmit={handleQuerySubmit} className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#71717A]">
                      search
                    </span>
                    <input
                      type="text"
                      value={queryInputValue}
                      onChange={(e) => setQueryInputValue(e.target.value)}
                      placeholder={t.searchPlaceholder}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-xl border border-[#005f50] focus:outline-none focus:ring-2 focus:ring-[#005f50]/20 text-[#18181B] shadow-xs"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#005f50] text-white text-xs font-medium rounded-xl hover:bg-[#0d7a68] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setQueryInputValue(searchQuery);
                      setIsEditingQuery(false);
                    }}
                    className="px-2.5 py-2 text-xs text-[#71717A] hover:text-[#18181B] cursor-pointer"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div
                  onClick={() => setIsEditingQuery(true)}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#005f50]/40 transition-all shadow-xs cursor-pointer"
                  title="Click to edit prompt"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#005f50]">
                    travel_explore
                  </span>
                  <span className="text-xs font-semibold text-[#18181B] tracking-tight">
                    “{searchQuery}”
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-[#71717A] group-hover:text-[#005f50] transition-colors ml-1">
                    edit
                  </span>
                </div>
              )}
            </div>

            {/* Active Filter Chips with Framer Motion layout animation */}
            <div className="flex flex-wrap items-center gap-1.5">
              <AnimatePresence mode="popLayout">
                {activeChips.map((chip) => (
                  <motion.div
                    key={chip}
                    layout
                    initial={{ opacity: 0, scale: 0.82, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -4 }}
                    transition={{
                      layout: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                      opacity: { duration: 0.18 },
                      scale: { duration: 0.18 },
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-lg border border-[#E5E7EB] text-[#3e4946] text-xs shadow-2xs group hover:border-[#bdc9c4] transition-colors"
                  >
                    <span>{chip}</span>
                    <button
                      type="button"
                      onClick={() => removeChip(chip)}
                      aria-label={`Remove ${chip} filter`}
                      className="text-[#71717A] hover:text-[#ba1a1a] transition-colors flex items-center cursor-pointer p-0.5"
                    >
                      <span className="material-symbols-outlined text-[12px]">close</span>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {activeChips.length < 4 && (
                  <motion.button
                    layout
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                    type="button"
                    onClick={handleResetFilters}
                    className="text-[11px] text-[#005f50] font-semibold hover:underline px-2 py-1 cursor-pointer"
                  >
                    {t.resetFilters}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* 2. Main Layout Grid: Filters Sidebar (3 cols) + Recommendations Feed (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* Subtle Filters Sidebar (3 Cols) */}
          <aside className="lg:col-span-3 flex flex-col gap-4 p-4.5 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
              <div className="flex items-center gap-1.5 text-[#18181B]">
                <span className="material-symbols-outlined text-[18px] text-[#005f50]">tune</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#52525B]">{t.filterTitle || 'Filters'}</span>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[#005f50] hover:underline text-[11px] font-semibold cursor-pointer"
              >
                {t.resetFilters}
              </button>
            </div>

            {/* Destination */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#52525B] uppercase tracking-wider">
                {t.filterDestination}
              </label>
              <div className="flex items-center px-3 py-1.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB]">
                <span className="material-symbols-outlined text-[16px] text-[#71717A] mr-1.5">
                  location_on
                </span>
                <input
                  type="text"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="e.g. Munnar, Kerala"
                  className="bg-transparent text-xs text-[#18181B] focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Budget Slider */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[11px] font-semibold text-[#52525B] uppercase tracking-wider">
                  {t.filterBudget}
                </span>
                <span className="font-bold text-[#005f50]">Up to ₹{nightlyBudgetMax.toLocaleString('en-IN')}/nt</span>
              </div>
              <input
                type="range"
                min={2500}
                max={25000}
                step={500}
                value={nightlyBudgetMax}
                onChange={(e) => setNightlyBudgetMax(Number(e.target.value))}
                className="w-full accent-[#005f50] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#71717A]">
                <span>₹2,500</span>
                <span>₹25,000+</span>
              </div>
            </div>

            {/* Travel Style / Cadence */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#52525B] uppercase tracking-wider">
                {t.filterTravelStyle}
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Relaxed', 'Moderate', 'Action-packed', 'Immersive'] as const).map((mode) => (
                  <motion.button
                    layout
                    whileTap={{ scale: 0.96 }}
                    transition={{ layout: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
                    key={mode}
                    type="button"
                    onClick={() => setCadence(mode)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-medium text-center transition-colors cursor-pointer border ${
                      cadence === mode
                        ? 'bg-[#005f50] text-white border-[#005f50] shadow-2xs'
                        : 'bg-[#FAF9F6] text-[#52525B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
                    }`}
                  >
                    {localizeContent(mode)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stay Category */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#52525B] uppercase tracking-wider">
                {t.filterCategory}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Homestay', 'Tea Estate', 'Boutique Villa', 'Eco-Cottage'].map((cat) => {
                  const isSelected = selectedCategories.includes(cat);
                  return (
                    <motion.button
                      layout
                      whileTap={{ scale: 0.94 }}
                      transition={{ layout: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                        isSelected
                          ? 'bg-[#E6F4F1] text-[#005f50] border-[#005f50]/30 font-semibold shadow-2xs'
                          : 'bg-[#FAF9F6] text-[#52525B] border-[#E5E7EB] hover:bg-[#F4F4F5]'
                      }`}
                    >
                      {localizeContent(cat)}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#52525B] uppercase tracking-wider">
                {t.filterRating}
              </span>
              <div className="flex items-center justify-between p-2 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB]">
                <div className="flex items-center gap-1 text-xs font-medium text-[#18181B]">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#005f50]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span>4.5+ Excellent</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#005f50] bg-[#E6F4F1] px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
            </div>

            {/* Subtle Context Note */}
            <div className="mt-1 pt-3 border-t border-[#F4F4F5] flex items-center gap-2 text-[#71717A] text-[11px]">
              <span className="material-symbols-outlined text-[16px] text-[#005f50]">
                psychology
              </span>
              <span>Learns from your saves &amp; clicks in real time.</span>
            </div>
          </aside>

          {/* Recommendations Feed (9 Cols) */}
          <main className="lg:col-span-9 flex flex-col gap-5">
            
            {/* 3. Subtle Session Adaptation Contextual Indicator */}
            {showAdaptationNotice && (
              <div className="flex items-center justify-between px-4 py-3 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005f50] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005f50]"></span>
                  </span>
                  <div>
                    <span className="font-semibold text-[#18181B]">
                      {t.adaptationNoticeTitle}
                    </span>
                    <span className="text-[#52525B] ml-1.5 hidden sm:inline">
                      {t.adaptationNoticeSub}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAdaptationNotice(false)}
                  className="text-[#71717A] hover:text-[#18181B] p-1 cursor-pointer"
                  aria-label="Dismiss notice"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            )}

            {/* List of Recommendation Cards with Framer Motion Layout Animations */}
            <div className="flex flex-col gap-5">
              <AnimatePresence mode="popLayout">
                {filteredPlaces.length === 0 ? (
                  <motion.div
                    key="empty-recommendations"
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="p-12 text-center bg-white rounded-2xl border border-[#E5E7EB] shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[36px] text-[#71717A] mb-2">
                      travel_explore
                    </span>
                    <h3 className="text-base font-semibold text-[#18181B]">{t.emptyRecommendations}</h3>
                    <p className="text-xs text-[#71717A] mt-1">
                      {t.emptyRecommendationsSub}
                    </p>
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="mt-4 px-4 py-2 bg-[#005f50] text-white text-xs font-semibold rounded-xl hover:bg-[#0d7a68] transition-colors cursor-pointer"
                    >
                      {t.resetFilters}
                    </button>
                  </motion.div>
                ) : (
                  filteredPlaces.map((place) => {
                    const isSaved = savedTripIds.includes(place.id);
                    const isExpanded = expandedCardIds.has(place.id);
                    const loc = localizeTrip(place);
                    const evidenceChips = getEvidenceChips();
                    const expandedBullets = loc.localizedBullets;
                    const influencingFactors = getInfluencingFactors();

                    return (
                      <motion.article
                        key={place.id}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.98 }}
                        transition={{
                          layout: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.22 },
                          scale: { duration: 0.22 },
                        }}
                        className="flex flex-col md:flex-row bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                      >
                        {/* Left: Large High-Quality Travel Image */}
                        <div className="md:w-5/12 relative overflow-hidden h-64 md:h-auto min-h-[240px] bg-[#F4F4F5] shrink-0">
                          <img
                            src={place.imageUrl}
                            alt={place.title}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src =
                                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';
                            }}
                          />

                          {/* Small Personalization Badge */}
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-white/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#005f50]"></span>
                            <span className="text-[11px] font-bold text-[#005f50] tracking-tight">
                              {place.matchScore}% {t.matchBadge}
                            </span>
                          </div>

                          {/* Save Heart Button */}
                          <button
                            type="button"
                            onClick={() => handleSaveWithNotice(place)}
                            aria-label={isSaved ? 'Remove from saved' : 'Save to trip'}
                            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md ${
                              isSaved
                                ? 'bg-[#ba1a1a] text-white shadow-sm'
                                : 'bg-white/85 text-[#18181B] hover:bg-white hover:text-[#ba1a1a] shadow-xs'
                            }`}
                          >
                            <span
                              className="material-symbols-outlined text-[17px]"
                              style={isSaved ? { fontVariationSettings: "'FILL' 1" } : {}}
                            >
                              favorite
                            </span>
                          </button>
                        </div>

                        {/* Right: Property Details & Cognitive Reasoning */}
                        <div className="p-5 md:w-7/12 flex flex-col justify-between gap-4 flex-1">
                          <div className="flex flex-col gap-2">
                            {/* Title, Location, Rating & Price Row */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex flex-col">
                                <h2 className="text-xl font-bold text-[#18181B] tracking-tight leading-snug">
                                  {loc.localizedTitle}
                                </h2>
                                <span className="text-xs text-[#52525B] mt-0.5">
                                  {place.region}
                                </span>
                              </div>

                              <div className="text-right shrink-0">
                                <div className="text-lg font-bold text-[#18181B] tracking-tight">
                                  {loc.localizedCost}
                                  <span className="text-[11px] font-normal text-[#71717A]">{t.nightRate}</span>
                                </div>
                                <div className="flex items-center justify-end gap-1 text-xs text-[#18181B] mt-0.5">
                                  <span
                                    className="material-symbols-outlined text-[#005f50] text-[15px]"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                  >
                                    star
                                  </span>
                                  <span className="font-bold">{place.rating?.score ?? 4.9}</span>
                                  <span className="text-[#71717A] text-[11px]">
                                    ({place.rating?.count ?? 142})
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Travel-style Metadata Tags */}
                            <div className="flex items-center gap-1.5 text-xs text-[#52525B] font-medium pt-0.5">
                              <span>{t.factorRelaxed}</span>
                              <span>·</span>
                              <span>{t.factorNature}</span>
                              <span>·</span>
                              <span>{loc.localizedCategory}</span>
                            </div>

                            {/* Prominent "Why this pick" Section */}
                            <motion.div
                              layout
                              transition={{ layout: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } }}
                              className="mt-2 p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-2.5"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 text-[#005f50]">
                                  <span className="material-symbols-outlined text-[16px]">
                                    psychology_alt
                                  </span>
                                  <h3 className="text-xs font-bold uppercase tracking-wider">
                                    {t.whyThisPick}
                                  </h3>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => toggleCardExpansion(place.id)}
                                  className="text-[11px] font-semibold text-[#005f50] hover:text-[#0d7a68] flex items-center gap-0.5 cursor-pointer transition-colors"
                                >
                                  <span>{isExpanded ? (t.less || 'Less') : (t.whySarathiPickedThis || t.whySarathiRecommended)}</span>
                                  <motion.span
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                    className="material-symbols-outlined text-[15px]"
                                  >
                                    expand_more
                                  </motion.span>
                                </button>
                              </div>

                              <p className="text-xs text-[#18181B] leading-relaxed">
                                {loc.localizedWhyPicked}
                              </p>

                              {/* Three Compact Evidence Chips */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                {evidenceChips.map((chip, idx) => (
                                  <motion.div
                                    key={idx}
                                    layout
                                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-lg border border-[#E5E7EB] text-[11px] font-medium text-[#3e4946] shadow-2xs"
                                  >
                                    <span className="material-symbols-outlined text-[13px] text-[#005f50]">
                                      {chip.icon}
                                    </span>
                                    <span>{chip.label}</span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Expanded Recommendation State (Smooth animated in-place card expansion) */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    key="card-expanded-drawer"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                      height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                                      opacity: { duration: 0.22, ease: 'easeInOut' },
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-2 pt-3 border-t border-[#E5E7EB]/80 flex flex-col gap-3">
                                      <div className="flex flex-col gap-1.5">
                                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#52525B]">
                                          {t.whySarathiRecommended}
                                        </h4>
                                        <ul className="space-y-1 text-xs text-[#18181B]">
                                          {expandedBullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-1.5">
                                              <span className="text-[#005f50] font-bold">•</span>
                                              <span>{bullet}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div className="flex flex-col gap-1.5">
                                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#52525B]">
                                          {t.whatInfluenced}
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                          {influencingFactors.map((factor, fIdx) => (
                                            <span
                                              key={fIdx}
                                              className="px-2 py-0.5 bg-[#E6F4F1] text-[#005f50] rounded-md text-[11px] font-semibold"
                                            >
                                              {factor}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          </div>

                          {/* Save and Details Actions */}
                          <div className="flex items-center justify-between pt-3 border-t border-[#F4F4F5] mt-1">
                            <span className="text-[11px] text-[#71717A]">
                              {t.verifiedQuietZone || 'Verified quiet zone · Zero tour-bus noise'}
                            </span>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleSaveWithNotice(place)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                                  isSaved
                                    ? 'bg-[#E6F4F1] text-[#005f50] border border-[#005f50]/30'
                                    : 'bg-[#FAF9F6] hover:bg-[#F4F4F5] text-[#18181B] border border-[#E5E7EB]'
                                }`}
                              >
                                <span className="material-symbols-outlined text-[15px]">
                                  {isSaved ? 'check' : 'bookmark_border'}
                                </span>
                                <span>{isSaved ? t.savedInTrip : t.saveToTrip}</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => onSelectTrip(place)}
                                className="px-4 py-1.5 bg-[#005f50] hover:bg-[#0d7a68] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <span>{t.viewDetails}</span>
                                <span className="material-symbols-outlined text-[15px]">
                                  arrow_forward
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            {/* 4. Personalization Visualization (Product Summary, NOT ML Debug Console) */}
            <section className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4F4F5]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#005f50]">
                    psychology
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#18181B] tracking-tight">
                      {t.personalizedForYou}
                    </h3>
                    <p className="text-xs text-[#52525B]">
                      {t.personalizedSub}
                    </p>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[11px] font-semibold text-[#005f50] bg-[#E6F4F1] px-2.5 py-1 rounded-full">
                  Real-time cognitive alignment
                </span>
              </div>

              {/* Three Compact Horizontal Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {/* 1. Query Match */}
                <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#18181B]">{t.queryMatch}</span>
                    <span className="font-bold text-[#005f50]">92%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#005f50] h-full rounded-full w-[92%] transition-all duration-700"></div>
                  </div>
                  <span className="text-[11px] text-[#71717A] mt-0.5">
                    High correspondence to “{searchQuery}”
                  </span>
                </div>

                {/* 2. Preference Match */}
                <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#18181B]">{t.preferenceMatch}</span>
                    <span className="font-bold text-[#005f50]">84%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#005f50] h-full rounded-full w-[84%] transition-all duration-700"></div>
                  </div>
                  <span className="text-[11px] text-[#71717A] mt-0.5">
                    Prioritizes calm nature immersion and quiet zone stays
                  </span>
                </div>

                {/* 3. Session Relevance */}
                <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#18181B]">{t.sessionRelevance}</span>
                    <span className="font-bold text-[#005f50]">73%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#005f50] h-full rounded-full w-[73%] transition-all duration-700"></div>
                  </div>
                  <span className="text-[11px] text-[#71717A] mt-0.5">
                    Reflects recent interactions exploring offbeat properties
                  </span>
                </div>
              </div>

              {/* Human Narrative Rationale */}
              <div className="mt-4 p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E5E7EB] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#005f50] mt-0.5 shrink-0">
                  format_quote
                </span>
                <p className="text-xs text-[#52525B] leading-relaxed italic">
                  “We prioritize properties with verified quiet zones, nature trails, and authentic regional culinary offerings over busy central hotels. Results adapt dynamically as you bookmark and explore.”
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
