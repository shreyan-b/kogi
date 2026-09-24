export type TravelTab = 'discover' | 'recommendations' | 'saved-trips' | 'live-session-adaptation' | 'evaluation-dashboard';

export interface TravelStyle {
  id: string;
  name: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  icon: string;
  description: string;
  statLabel: string;
  intentQuery: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  stay: string;
  highlight: string;
}

export interface DestinationTrip {
  id: string;
  title: string;
  region: string;
  matchScore: number;
  imageUrl: string;
  quotePrompt: string;
  metaBadge: string;
  metaIcon: string;
  duration: string;
  cost: string;
  costNumeric: number;
  climate: string;
  elevation: string;
  crowdLevel: 'Low' | 'Moderate' | 'High';
  style: 'Relaxed' | 'Adventure' | 'Luxury' | 'Family' | 'Budget' | 'Culture';
  description: string;
  bestTime: string;
  intentTags: string[];
  itinerary: DayItinerary[];
  coordinates: {
    lat: number;
    lon: number;
  };
  rating?: {
    score: number;
    count: number;
  };
  distanceText?: string;
  stayCategory?: string;
  whyPicked?: string;
  whyPickedTranslations?: {
    en: string;
    ml: string;
    hi: string;
    ta: string;
  };
  signals?: {
    semanticQueryMatch: number;
    preferenceProfile: number;
    sessionMemoryFlow: number;
    budgetCeilingFit: number;
    quote: string;
  };
}

export interface SavedTripItem {
  id: string;
  trip: DestinationTrip;
  savedAt: string;
  notes: string;
  travelers: number;
  targetDate: string;
}

export interface UserPreferences {
  pace: 'slow' | 'balanced' | 'fast';
  atmosphere: 'mist-mountain' | 'backwaters' | 'coastal' | 'heritage' | 'dense-forest';
  budgetTier: 'value' | 'comfort' | 'luxury';
  transitMode: 'scenic-train' | 'private-chauffeur' | 'self-drive';
  dietary: string;
}
