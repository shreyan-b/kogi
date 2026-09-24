import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'transparency' | 'telemetry' | null>(null);

  return (
    <>
      <footer className="w-full bg-[#f6f2f7] border-t border-[#E5E7EB] py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-[#1b1b1e]">Sarathi</span>
            <span className="text-xs text-[#3e4946]">
              © 2026 AI Travel Cognition Engine. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#3e4946]">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#1b1b1e] transition-colors cursor-pointer"
            >
              {t.privacyPolicy || 'Privacy Policy'}
            </button>
            <button
              onClick={() => setActiveModal('transparency')}
              className="hover:text-[#1b1b1e] transition-colors cursor-pointer"
            >
              {t.modelTransparency || 'Model Transparency'}
            </button>
            <button
              onClick={() => setActiveModal('telemetry')}
              className="hover:text-[#1b1b1e] transition-colors cursor-pointer"
            >
              {t.systemTelemetry || 'System Telemetry'}
            </button>
          </div>
        </div>
      </footer>

      {/* Info Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E5E7EB] relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#6e7a75] hover:text-[#1b1b1e] p-1.5 rounded-full hover:bg-[#f0edf1]"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {activeModal === 'privacy' && (
              <div>
                <h3 className="text-lg font-bold text-[#1b1b1e] mb-2">{t.privacyModalTitle || 'Privacy & Vector Safety'}</h3>
                <p className="text-xs text-[#3e4946] leading-relaxed mb-3">
                  Sarathi utilizes client-side session vectorization. Your personal itinerary drafts, voice transcripts, and accommodation preferences are processed ephemerally. We do not sell query telemetry to third-party commercial OTA brokers.
                </p>
                <div className="p-3 bg-[#f6f2f7] rounded-xl text-[11px] text-[#005f50] font-semibold">
                  Zero permanent PII storage • Encrypted local cache
                </div>
              </div>
            )}

            {activeModal === 'transparency' && (
              <div>
                <h3 className="text-lg font-bold text-[#1b1b1e] mb-2">{t.transparencyModalTitle || 'Model Transparency & Intent Graph'}</h3>
                <p className="text-xs text-[#3e4946] leading-relaxed mb-3">
                  Recommendations are synthesized via dual-layer semantic embeddings (128-dimensional dense vector space) weighted with real-time geospatial factors (rainfall, humidity, elevation, crowd density, and transit road roughness).
                </p>
                <div className="space-y-1.5 text-xs text-[#1b1b1e]">
                  <div className="flex justify-between py-1 border-b border-[#f0edf1]">
                    <span className="text-[#6e7a75]">Base Embedding Model</span>
                    <span className="font-semibold">Sarathi-GeoEmbed-v4.2</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f0edf1]">
                    <span className="text-[#6e7a75]">Semantic Similarity Metric</span>
                    <span className="font-semibold">Cosine with Climatic Decay</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6e7a75]">Grounding Benchmark</span>
                    <span className="font-semibold">Sarathi Core 2026</span>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'telemetry' && (
              <div>
                <h3 className="text-lg font-bold text-[#1b1b1e] mb-2">{t.systemTelemetryModalTitle || 'Live System Telemetry'}</h3>
                <div className="grid grid-cols-2 gap-3 my-3">
                  <div className="p-3 bg-[#fbf8fc] rounded-xl border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#6e7a75] uppercase">{t.vectorQueryLatency || 'Vector Query Latency'}</span>
                    <span className="text-lg font-bold text-[#4648d4] block mt-0.5">38ms</span>
                  </div>
                  <div className="p-3 bg-[#fbf8fc] rounded-xl border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#6e7a75] uppercase">{t.indexedZones || 'Indexed Micro-zones'}</span>
                    <span className="text-lg font-bold text-[#005f50] block mt-0.5">14,280</span>
                  </div>
                  <div className="p-3 bg-[#fbf8fc] rounded-xl border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#6e7a75] uppercase">{t.cacheHitRatio || 'Cache Hit Ratio'}</span>
                    <span className="text-lg font-bold text-[#1b1b1e] block mt-0.5">99.2%</span>
                  </div>
                  <div className="p-3 bg-[#fbf8fc] rounded-xl border border-[#E5E7EB]">
                    <span className="text-[10px] text-[#6e7a75] uppercase">{t.sensorStreams || 'Climatic Sensor Streams'}</span>
                    <span className="text-lg font-bold text-[#1b1b1e] block mt-0.5">418 nodes</span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-4 py-2 rounded-xl bg-[#f0edf1] hover:bg-[#eae7eb] text-xs font-semibold text-[#1b1b1e] cursor-pointer"
            >
              {t.close || 'Close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
