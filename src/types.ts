export type LanguageCode = 'en-IN' | 'hi-IN' | 'ml-IN' | 'kn-IN' | 'ta-IN';

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
  latitude?: number;
  longitude?: number;
  formattedAddress?: string;
  location?: string;
  nearbyCity?: string;
  placeId?: string;
  travelStyles?: string[];
  rating?: {
    score: number;
    count: number;
  };
  distanceText?: string;
  stayCategory?: string;
  whyPicked?: string;
  whyPickedTranslations?: {
    en?: string;
    ml?: string;
    hi?: string;
    ta?: string;
    kn?: string;
    [key: string]: string | undefined;
  };
  aiExplanation?: {
    explanation: string;
    language?: LanguageCode | string;
    translations?: Record<string, string>;
    confidence?: number;
    factors?: string[];
  };
  translations?: Record<string, Partial<DestinationTrip>>;
  bullets?: string[];
  bulletTranslations?: Record<string, string[]>;
  weatherSummary?: string;
  signals?: {
    semanticQueryMatch: number;
    preferenceProfile: number;
    sessionMemoryFlow: number;
    budgetCeilingFit: number;
    quote: string;
  };
}

export interface LocalizedDestinationTrip extends DestinationTrip {
  localizedTitle: string;
  localizedCategory: string;
  localizedBadge: string;
  localizedClimate: string;
  localizedWhyPicked: string;
  localizedBullets: string[];
  localizedTags: string[];
  localizedItinerary: DayItinerary[];
  localizedCost: string;
}

export interface LocalizedTravelStyle extends TravelStyle {
  localizedName: string;
  localizedBadge: string;
  localizedDesc: string;
  localizedStat: string;
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

export interface AblationReportItem {
  id: string;
  metric: string;
  description: string;
  retrievalOnly: number;
  retrievalPlusReranking: number;
  delta: number;
  numQueries: number;
  deltaExplanation: string;
}

export interface DestinationLocation {
  name: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  placeId?: string;
  nearbyCity?: string;
}

export type SortOption = 'recommended' | 'rating' | 'price_low' | 'price_high';
