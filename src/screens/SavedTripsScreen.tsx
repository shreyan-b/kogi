import React, { useState } from 'react';
import { DestinationTrip, SavedTripItem } from '../types';

interface SavedTripsScreenProps {
  savedTrips: SavedTripItem[];
  onRemoveTrip: (tripId: string) => void;
  onSelectTrip: (trip: DestinationTrip) => void;
  onNavigateDiscover: () => void;
  onUpdateNotes: (tripId: string, notes: string) => void;
}

export const SavedTripsScreen: React.FC<SavedTripsScreenProps> = ({
  savedTrips,
  onRemoveTrip,
  onSelectTrip,
  onNavigateDiscover,
  onUpdateNotes,
}) => {
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');
  const [exportToast, setExportToast] = useState(false);

  const totalBudget = savedTrips.reduce((acc, curr) => acc + curr.trip.costNumeric, 0);

  const handleStartEditNotes = (item: SavedTripItem) => {
    setEditingNotesId(item.id);
    setTempNotes(item.notes || '');
  };

  const handleSaveNotes = (id: string) => {
    onUpdateNotes(id, tempNotes);
    setEditingNotesId(null);
  };

  const handleExport = () => {
    setExportToast(true);
    setTimeout(() => setExportToast(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
      {/* Header & Travel Portfolio Overview */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#005f50]"></span>
            <span className="text-[11px] text-[#005f50] uppercase font-bold tracking-wider">
              Travel Portfolio
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#1b1b1e] tracking-tight">
            Your Curated Journeys
          </h1>
          <p className="text-sm text-[#3e4946] mt-1">
            Personalized itineraries ready for departures, tailored to your pace and climatic preferences.
          </p>
        </div>

        {savedTrips.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs font-semibold text-[#1b1b1e] hover:bg-[#f6f2f7] shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
              <span>Export Portfolio</span>
            </button>
          </div>
        )}
      </div>

      {/* Portfolio Quick Stats Bar */}
      {savedTrips.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#99f3dd] text-[#00201a] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">map</span>
            </div>
            <div>
              <span className="text-[11px] text-[#6e7a75] uppercase">Total Saved</span>
              <span className="text-lg font-bold text-[#1b1b1e] block">
                {savedTrips.length} Destinations
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e1e0ff] text-[#2f2ebe] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <div>
              <span className="text-[11px] text-[#6e7a75] uppercase">Combined Estimated Budget</span>
              <span className="text-lg font-bold text-[#4648d4] block">
                ₹{totalBudget.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#71f8e4] text-[#00201c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <div>
              <span className="text-[11px] text-[#6e7a75] uppercase">Vector Coherence</span>
              <span className="text-lg font-bold text-[#005f50] block">96.8% Average</span>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {savedTrips.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#E5E7EB] shadow-xs max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#f6f2f7] text-[#005f50] flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-[32px]">bookmark_border</span>
          </div>
          <h3 className="text-lg font-bold text-[#1b1b1e]">No saved itineraries yet</h3>
          <p className="text-xs text-[#6e7a75] mt-1 max-w-sm mx-auto leading-relaxed">
            Bookmark trajectories from the Discover feed or Recommendations page to assemble your dream South India or Himalayan journey.
          </p>
          <button
            onClick={onNavigateDiscover}
            className="mt-6 px-6 py-2.5 rounded-xl bg-[#005f50] text-white text-xs font-semibold hover:bg-[#0d7a68] transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Destinations</span>
            <span className="material-symbols-outlined text-[16px]">explore</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {savedTrips.map((item) => {
            const trip = item.trip;
            const isEditing = editingNotesId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xs p-5 md:p-6 flex flex-col lg:flex-row gap-6 hover:shadow-lg transition-all"
              >
                {/* Image view */}
                <div
                  onClick={() => onSelectTrip(trip)}
                  className="relative lg:w-72 h-48 rounded-2xl overflow-hidden shrink-0 cursor-pointer group"
                >
                  <img
                    src={trip.imageUrl}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold bg-[#005f50] px-2 py-0.5 rounded-md">
                      {trip.style}
                    </span>
                    <h3 className="text-base font-bold mt-1">{trip.title}</h3>
                  </div>
                </div>

                {/* Details & Day breakdown */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#005f50]">
                          {trip.region}
                        </span>
                        <span className="text-xs text-[#bdc9c4]">•</span>
                        <span className="text-xs text-[#6e7a75]">
                          Saved on {item.savedAt}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1b1b1e]">
                          {trip.duration} • {trip.cost}
                        </span>
                        <button
                          onClick={() => onRemoveTrip(item.id)}
                          className="text-[#6e7a75] hover:text-[#ba1a1a] p-1 rounded-lg hover:bg-[#ffdad6]/40 transition-colors"
                          title="Remove from saved"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#3e4946] italic mb-3">
                      {trip.quotePrompt}
                    </p>

                    {/* Highlights pill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {trip.itinerary.map((day) => (
                        <div
                          key={day.day}
                          className="px-2.5 py-1 rounded-xl bg-[#f6f2f7] border border-[#E5E7EB] text-[11px] text-[#1b1b1e]"
                        >
                          <strong className="text-[#005f50]">Day {day.day}:</strong> {day.title.slice(0, 32)}...
                        </div>
                      ))}
                    </div>

                    {/* Personal Traveler Notes */}
                    <div className="p-3 rounded-2xl bg-[#fbf8fc] border border-[#E5E7EB]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-bold text-[#6e7a75] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">edit_note</span>
                          Traveler Custom Notes & Special Requests
                        </span>
                        {!isEditing && (
                          <button
                            onClick={() => handleStartEditNotes(item)}
                            className="text-[11px] text-[#005f50] font-semibold hover:underline"
                          >
                            Edit
                          </button>
                        )}
                      </div>

                      {isEditing ? (
                        <div className="space-y-2">
                          <textarea
                            value={tempNotes}
                            onChange={(e) => setTempNotes(e.target.value)}
                            placeholder="Add your departure date, room preference, dietary requests..."
                            className="w-full text-xs p-2.5 rounded-xl border border-[#005f50] bg-white focus:outline-none"
                            rows={2}
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setEditingNotesId(null)}
                              className="px-2.5 py-1 text-xs text-[#6e7a75]"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveNotes(item.id)}
                              className="px-3 py-1 bg-[#005f50] text-white text-xs font-semibold rounded-lg"
                            >
                              Save Note
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-[#3e4946]">
                          {item.notes || 'No custom notes added. Click Edit to add requests or travel companion details.'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-[#f0edf1] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[11px] text-[#6e7a75] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-[#005f50]">
                        verified
                      </span>
                      Local concierge verified for {item.travelers} traveler(s)
                    </span>

                    <button
                      onClick={() => onSelectTrip(trip)}
                      className="px-4 py-2 rounded-xl bg-[#005f50] text-white text-xs font-semibold hover:bg-[#0d7a68] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Full Daily Plan</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Export feedback toast */}
      {exportToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1b1b1e] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold shadow-2xl flex items-center gap-2 z-50 animate-in fade-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-[18px] text-[#99f3dd]">download_done</span>
          <span>Curated Travel Portfolio compiled! Shareable link copied to clipboard.</span>
        </div>
      )}
    </div>
  );
};
