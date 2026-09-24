import React, { useState } from 'react';
import { DestinationTrip } from '../types';
import { WeatherForecastWidget } from './WeatherForecastWidget';

interface TripDetailModalProps {
  trip: DestinationTrip | null;
  onClose: () => void;
  onSaveTrip: (trip: DestinationTrip) => void;
  isSaved: boolean;
}

export const TripDetailModal: React.FC<TripDetailModalProps> = ({
  trip,
  onClose,
  onSaveTrip,
  isSaved,
}) => {
  const [activeDay, setActiveDay] = useState(1);
  const [bookingToast, setBookingToast] = useState(false);
  const [selectedTargetDate, setSelectedTargetDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  if (!trip) return null;

  const handleBook = () => {
    setBookingToast(true);
    setTimeout(() => setBookingToast(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-[#E5E7EB] overflow-hidden my-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
          aria-label="Close details"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero Banner with Hotlinked Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={trip.imageUrl}
            alt={trip.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback placeholder gradient if external URL fails
              const target = e.currentTarget;
              target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1e]/90 via-[#1b1b1e]/30 to-transparent"></div>

          {/* Banner Overlays */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#005f50] text-white text-[11px] font-semibold">
                  {trip.style}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold">
                  {trip.metaBadge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{trip.title}</h2>
              <p className="text-xs sm:text-sm text-white/90">{trip.region}</p>
            </div>

            <div className="flex items-center sm:flex-col sm:items-end gap-2 sm:gap-1">
              <span className="px-2.5 py-1 rounded-lg bg-[#99f3dd] text-[#00201a] font-bold text-xs">
                {trip.matchScore}% Cognitive Match
              </span>
              <span className="text-lg font-bold text-white">{trip.cost}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Prompt Quote & Intent Synthesis */}
          <div className="p-4 rounded-2xl bg-[#f6f2f7] border border-[#E5E7EB]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#005f50]">
              Synthesized Traveler Intent
            </span>
            <p className="text-xs sm:text-sm text-[#1b1b1e] italic mt-1 leading-relaxed">
              {trip.quotePrompt}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {trip.intentTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-[#3e4946] border border-[#E5E7EB]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3 rounded-xl bg-[#fbf8fc] border border-[#E5E7EB]">
              <span className="text-[10px] text-[#6e7a75] uppercase block">Micro-Climate</span>
              <span className="text-xs font-bold text-[#1b1b1e] mt-0.5 block">{trip.climate}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbf8fc] border border-[#E5E7EB]">
              <span className="text-[10px] text-[#6e7a75] uppercase block">Elevation</span>
              <span className="text-xs font-bold text-[#1b1b1e] mt-0.5 block">{trip.elevation}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbf8fc] border border-[#E5E7EB]">
              <span className="text-[10px] text-[#6e7a75] uppercase block">Crowd Friction</span>
              <span className="text-xs font-bold text-[#005f50] mt-0.5 block">{trip.crowdLevel} (Sparse)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbf8fc] border border-[#E5E7EB]">
              <span className="text-[10px] text-[#6e7a75] uppercase block">Optimal Window</span>
              <span className="text-xs font-bold text-[#1b1b1e] mt-0.5 block">{trip.bestTime}</span>
            </div>
          </div>

          {/* Integrated Live Weather Forecast Widget */}
          <WeatherForecastWidget
            trip={trip}
            initialTargetDate={selectedTargetDate}
            onTargetDateChange={(date) => setSelectedTargetDate(date)}
          />

          {/* Day-by-Day Detailed Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#1b1b1e] uppercase tracking-wider">
                Daily Cadence & Itinerary
              </h3>
              <div className="flex gap-1">
                {trip.itinerary.map((item) => (
                  <button
                    key={item.day}
                    onClick={() => setActiveDay(item.day)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeDay === item.day
                        ? 'bg-[#005f50] text-white'
                        : 'bg-[#f0edf1] text-[#3e4946] hover:bg-[#eae7eb]'
                    }`}
                  >
                    Day {item.day}
                  </button>
                ))}
              </div>
            </div>

            {trip.itinerary
              .filter((item) => item.day === activeDay)
              .map((dayItem) => (
                <div key={dayItem.day} className="p-4 rounded-2xl border border-[#E5E7EB] bg-white space-y-3">
                  <div className="flex items-center justify-between border-b border-[#f0edf1] pb-2">
                    <h4 className="text-sm font-bold text-[#1b1b1e]">{dayItem.title}</h4>
                    <span className="text-[11px] text-[#005f50] font-semibold">
                      Stay: {dayItem.stay}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="w-16 font-semibold text-[#6e7a75] shrink-0">Morning</span>
                      <span className="text-[#1b1b1e]">{dayItem.morning}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-16 font-semibold text-[#6e7a75] shrink-0">Afternoon</span>
                      <span className="text-[#1b1b1e]">{dayItem.afternoon}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-16 font-semibold text-[#6e7a75] shrink-0">Evening</span>
                      <span className="text-[#1b1b1e]">{dayItem.evening}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f0edf1] flex items-center gap-2 text-xs text-[#4648d4] font-medium bg-[#f6f2f7] p-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    <span><strong>Key moment:</strong> {dayItem.highlight}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-[#E5E7EB] bg-[#fbf8fc] flex items-center justify-between gap-3">
          <button
            onClick={() => onSaveTrip(trip)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              isSaved
                ? 'bg-[#99f3dd] text-[#00201a] border-[#005f50]'
                : 'bg-white text-[#1b1b1e] border-[#E5E7EB] hover:bg-[#f6f2f7]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isSaved ? 'bookmark_added' : 'bookmark_add'}
            </span>
            <span>{isSaved ? 'Saved in My Trips' : 'Save Itinerary'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleBook}
              className="px-6 py-2.5 rounded-xl bg-[#005f50] text-white text-xs font-semibold hover:bg-[#0d7a68] transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Instant Reserve for {selectedTargetDate}</span>
              <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
            </button>
          </div>
        </div>

        {/* Toast confirmation */}
        {bookingToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#005f50] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2 animate-in slide-in-from-top duration-300">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>Route hold initiated for departure on {selectedTargetDate}!</span>
          </div>
        )}
      </div>
    </div>
  );
};
