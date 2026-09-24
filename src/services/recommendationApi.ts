import { LanguageCode, DestinationTrip } from '../types';
import { RECOMMENDED_PLACES, DESTINATION_TRIPS } from '../data/mockData';
import { localizeTrip } from './localizationEngine';

/**
 * Standard recommendation request contract for future backend integration.
 * Ensures that the user's selected locale is always transmitted with every query,
 * search request, and filter application.
 */
export interface RecommendationRequest {
  query?: string;
  language: LanguageCode; // Explicit language contract (e.g. 'hi-IN', 'ml-IN', etc.)
  filters?: {
    destination?: string;
    nightlyBudgetMax?: number;
    cadence?: string;
    categories?: string[];
    ratingMin?: number;
  };
  userContext?: {
    archetype?: string;
    savedTripIds?: string[];
    recentInteractions?: Array<{ event: string; timestamp: number }>;
  };
}

/**
 * Standard AI explanation response contract.
 * Allows future LLMs/agents to return explanations in any requested or synthesized language
 * with language metadata and optional multilingual fallback variants.
 */
export interface AIExplanationPayload {
  explanation: string;
  language: LanguageCode | string;
  translations?: Partial<Record<LanguageCode, string>>;
  confidence?: number;
  factors?: string[];
  generatedAt?: string;
}

/**
 * Standard recommendation response contract returned by the API layer.
 */
export interface RecommendationApiResponse {
  places: DestinationTrip[];
  language: LanguageCode;
  totalCount: number;
  modelVersion: string;
  timestamp: string;
  metadata?: {
    serverTranslated: boolean;
    latencyMs: number;
    intentDecomposition?: {
      cadence: string;
      atmosphere: string;
      budgetTier: string;
    };
  };
}

/**
 * Request Builder: Prepares clean recommendation requests with locale contract
 */
export const buildRecommendationRequest = (
  query: string,
  language: LanguageCode,
  filters?: RecommendationRequest['filters'],
  userContext?: RecommendationRequest['userContext']
): RecommendationRequest => {
  return {
    query,
    language,
    filters,
    userContext,
  };
};

/**
 * Future-proof API Client for recommendations.
 * Today: Emulates the backend service while validating the language contract.
 * Tomorrow: Simple switch to real `fetch('/api/recommendations', { method: 'POST', body: JSON.stringify(req) })`.
 */
export const fetchRecommendations = async (
  request: RecommendationRequest
): Promise<RecommendationApiResponse> => {
  const startTime = performance.now();

  // Combine places while prioritizing tailored retreats
  const allPlaces = [...RECOMMENDED_PLACES];
  DESTINATION_TRIPS.forEach((trip) => {
    if (!allPlaces.some((p) => p.id === trip.id)) {
      allPlaces.push(trip);
    }
  });

  // Apply filters if provided
  let filtered = allPlaces;

  if (request.filters?.destination?.trim()) {
    const destQuery = request.filters.destination.toLowerCase();
    filtered = filtered.filter((place) =>
      place.region.toLowerCase().includes(destQuery) ||
      place.title.toLowerCase().includes(destQuery)
    );
  }

  if (request.filters?.nightlyBudgetMax) {
    filtered = filtered.filter((p) => p.costNumeric <= request.filters!.nightlyBudgetMax!);
  }

  if (request.filters?.cadence && request.filters.cadence !== 'Relaxed') {
    filtered = filtered.filter(
      (p) => p.style.toLowerCase() === request.filters!.cadence!.toLowerCase()
    );
  }

  if (request.filters?.categories && request.filters.categories.length > 0) {
    filtered = filtered.filter((p) =>
      p.stayCategory &&
      request.filters!.categories!.some((cat) =>
        p.stayCategory!.toLowerCase().includes(cat.toLowerCase())
      )
    );
  }

  const latencyMs = Math.round(performance.now() - startTime);

  return {
    places: filtered,
    language: request.language,
    totalCount: filtered.length,
    modelVersion: 'sarathi-cognition-v2.6',
    timestamp: new Date().toISOString(),
    metadata: {
      serverTranslated: false,
      latencyMs: Math.max(latencyMs, 14),
      intentDecomposition: {
        cadence: request.filters?.cadence || 'Relaxed',
        atmosphere: 'mist-mountain',
        budgetTier: request.filters?.nightlyBudgetMax && request.filters.nightlyBudgetMax < 12000 ? 'value' : 'comfort',
      },
    },
  };
};

/**
 * Future-proof AI Explanation Client.
 * Allows fetching dynamic on-demand cognitive explanations from the backend in the user's language.
 */
export const fetchAIExplanation = async (
  place: DestinationTrip,
  targetLang: LanguageCode
): Promise<AIExplanationPayload> => {
  const localized = localizeTrip(place, targetLang);
  return {
    explanation: localized.localizedWhyPicked,
    language: targetLang,
    confidence: place.matchScore / 100,
    factors: localized.localizedBullets,
    generatedAt: new Date().toISOString(),
  };
};
