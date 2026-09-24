import React, { useState } from 'react';
import { DESTINATION_TRIPS } from './data/mockData';
import { DestinationTrip, SavedTripItem, TravelTab, UserPreferences } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { ColdStartModal } from './components/ColdStartModal';
import { TripDetailModal } from './components/TripDetailModal';
import { DiscoverScreen } from './screens/DiscoverScreen';
import { RecommendationsScreen } from './screens/RecommendationsScreen';
import { SavedTripsScreen } from './screens/SavedTripsScreen';
import { LiveAdaptationScreen } from './screens/LiveAdaptationScreen';
import { EvaluationDashboardScreen } from './screens/EvaluationDashboardScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TravelTab>('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLatency, setSearchLatency] = useState(38);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [onboardingModalOpen, setOnboardingModalOpen] = useState(false);
  const [selectedTripForModal, setSelectedTripForModal] = useState<DestinationTrip | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pre-seed saved trips with 1 item so users see how it works immediately
  const [savedTrips, setSavedTrips] = useState<SavedTripItem[]>([
    {
      id: 'saved-munnar-1',
      trip: DESTINATION_TRIPS[0],
      savedAt: 'Today, 2:15 PM',
      notes: 'Requested room with sunrise balcony view facing Chokramudi peak. Need early morning 6:30 AM fresh cardamom tea.',
      travelers: 2,
      targetDate: '2026-11-14',
    },
  ]);

  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    pace: 'slow',
    atmosphere: 'mist-mountain',
    budgetTier: 'comfort',
    transitMode: 'private-chauffeur',
    dietary: 'Local seasonal culinary focus',
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulate realistic cognition inference latency (35-42ms)
    const simulatedLatency = Math.floor(35 + Math.random() * 8);
    setSearchLatency(simulatedLatency);
    setCurrentTab('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveTrip = (trip: DestinationTrip) => {
    const existingIndex = savedTrips.findIndex((s) => s.trip.id === trip.id);
    if (existingIndex >= 0) {
      setSavedTrips(savedTrips.filter((s) => s.trip.id !== trip.id));
      showToast(`Removed "${trip.title}" from Saved Trips`);
    } else {
      const newItem: SavedTripItem = {
        id: `saved-${trip.id}-${Date.now()}`,
        trip,
        savedAt: 'Just now',
        notes: '',
        travelers: 2,
        targetDate: '2026-10-20',
      };
      setSavedTrips([newItem, ...savedTrips]);
      showToast(`Saved "${trip.title}" to your Travel Portfolio`);
    }
  };

  const handleRemoveTrip = (tripId: string) => {
    setSavedTrips(savedTrips.filter((s) => s.id !== tripId));
    showToast('Itinerary removed from saved trips');
  };

  const handleUpdateNotes = (tripId: string, notes: string) => {
    setSavedTrips(
      savedTrips.map((s) => (s.id === tripId ? { ...s, notes } : s))
    );
    showToast('Traveler notes updated successfully');
  };

  const handleSavePreferences = (prefs: UserPreferences) => {
    setUserPreferences(prefs);
    showToast('Preference baseline calibrated: Cognitive matrix re-indexed!');
  };

  const savedTripIds = savedTrips.map((s) => s.trip.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf8fc] text-[#1b1b1e]">
      {/* Universal Top Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedTrips.length}
        onOpenOnboarding={() => setOnboardingModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {currentTab === 'discover' && (
          <DiscoverScreen
            onSearch={handleSearch}
            onSelectTrip={(trip) => setSelectedTripForModal(trip)}
            onOpenVoiceSearch={() => setVoiceModalOpen(true)}
            onOpenOnboarding={() => setOnboardingModalOpen(true)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            searchLatency={searchLatency}
          />
        )}

        {currentTab === 'recommendations' && (
          <RecommendationsScreen
            onSelectTrip={(trip) => setSelectedTripForModal(trip)}
            onSaveTrip={handleSaveTrip}
            savedTripIds={savedTripIds}
            initialSearchQuery={searchQuery}
          />
        )}

        {currentTab === 'saved-trips' && (
          <SavedTripsScreen
            savedTrips={savedTrips}
            onRemoveTrip={handleRemoveTrip}
            onSelectTrip={(trip) => setSelectedTripForModal(trip)}
            onNavigateDiscover={() => {
              setCurrentTab('discover');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onUpdateNotes={handleUpdateNotes}
          />
        )}

        {currentTab === 'live-session-adaptation' && (
          <LiveAdaptationScreen
            onSelectTrip={(trip) => setSelectedTripForModal(trip)}
          />
        )}

        {currentTab === 'evaluation-dashboard' && (
          <EvaluationDashboardScreen />
        )}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VoiceSearchModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        onApplyQuery={handleSearch}
      />

      <ColdStartModal
        isOpen={onboardingModalOpen}
        onClose={() => setOnboardingModalOpen(false)}
        onSavePreferences={handleSavePreferences}
      />

      <TripDetailModal
        trip={selectedTripForModal}
        onClose={() => setSelectedTripForModal(null)}
        onSaveTrip={handleSaveTrip}
        isSaved={selectedTripForModal ? savedTripIds.includes(selectedTripForModal.id) : false}
      />

      {/* Global Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1b1b1e] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-200">
          <span className="material-symbols-outlined text-[18px] text-[#99f3dd]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
