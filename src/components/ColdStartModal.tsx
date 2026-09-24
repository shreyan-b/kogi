import React, { useState } from 'react';
import { UserPreferences } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LOCALIZED_COLD_START } from '../i18n/localizedData';

interface ColdStartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePreferences: (prefs: UserPreferences) => void;
}

export const ColdStartModal: React.FC<ColdStartModalProps> = ({
  isOpen,
  onClose,
  onSavePreferences,
}) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [pace, setPace] = useState<UserPreferences['pace']>('slow');
  const [atmosphere, setAtmosphere] = useState<UserPreferences['atmosphere']>('mist-mountain');
  const [budgetTier, setBudgetTier] = useState<UserPreferences['budgetTier']>('comfort');
  const [transitMode, setTransitMode] = useState<UserPreferences['transitMode']>('private-chauffeur');

  if (!isOpen) return null;

  const content = LOCALIZED_COLD_START[language] || LOCALIZED_COLD_START['en-IN'];

  const handleFinish = () => {
    onSavePreferences({
      pace,
      atmosphere,
      budgetTier,
      transitMode,
      dietary: 'Local seasonal culinary focus',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#E5E7EB] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6e7a75] hover:text-[#1b1b1e] p-1.5 rounded-full hover:bg-[#f0edf1]"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Progress header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#4648d4] text-[20px]">tune</span>
          <span className="text-xs font-bold text-[#4648d4] uppercase tracking-wider">
            {t.coldStartStepOf || 'Cold-Start Calibration • Step'} {step} / 3
          </span>
        </div>

        <div className="w-full bg-[#f0edf1] h-1.5 rounded-full overflow-hidden mb-6">
          <div
            className="bg-[#4648d4] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-[#1b1b1e] mb-1">
              {content.step1.question}
            </h3>
            <p className="text-xs text-[#6e7a75] mb-5">
              {content.step1.sub}
            </p>

            <div className="space-y-3">
              {content.step1.options.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setPace(item.id as UserPreferences['pace'])}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    pace === item.id
                      ? 'border-[#005f50] bg-[#fbf8fc] shadow-xs'
                      : 'border-[#E5E7EB] hover:border-[#bdc9c4]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#1b1b1e]">{item.title}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f0edf1] text-[#005f50]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#6e7a75] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-[#1b1b1e] mb-1">
              {content.step2.question}
            </h3>
            <p className="text-xs text-[#6e7a75] mb-5">
              {content.step2.sub}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {content.step2.options.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setAtmosphere(item.id as UserPreferences['atmosphere'])}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                    atmosphere === item.id
                      ? 'border-[#005f50] bg-[#99f3dd]/20 shadow-xs'
                      : 'border-[#E5E7EB] hover:border-[#bdc9c4]'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f0edf1] flex items-center justify-center text-[#005f50] mb-2">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1b1b1e]">{item.name}</h4>
                    <span className="text-[11px] text-[#6e7a75]">{item.temp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold text-[#1b1b1e] mb-1">
              {content.step3.question}
            </h3>
            <p className="text-xs text-[#6e7a75] mb-5">
              {content.step3.sub}
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#1b1b1e] uppercase tracking-wider block mb-2">
                  {content.step3.budgetLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {content.step3.budgets.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBudgetTier(b.id as UserPreferences['budgetTier'])}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        budgetTier === b.id
                          ? 'border-[#005f50] bg-[#005f50] text-white'
                          : 'border-[#E5E7EB] bg-white text-[#1b1b1e] hover:bg-[#f6f2f7]'
                      }`}
                    >
                      <div className="text-xs font-bold">{b.label}</div>
                      <div className={`text-[10px] mt-0.5 ${budgetTier === b.id ? 'text-white/80' : 'text-[#6e7a75]'}`}>
                        {b.range}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1b1b1e] uppercase tracking-wider block mb-2">
                  {content.step3.transitLabel}
                </label>
                <div className="space-y-2">
                  {content.step3.transits.map((tItem) => (
                    <div
                      key={tItem.id}
                      onClick={() => setTransitMode(tItem.id as UserPreferences['transitMode'])}
                      className={`px-3.5 py-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                        transitMode === tItem.id
                          ? 'border-[#005f50] bg-[#fbf8fc]'
                          : 'border-[#E5E7EB] hover:bg-[#f6f2f7]'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#1b1b1e]">{tItem.label}</span>
                      <span className="text-[11px] text-[#6e7a75]">{tItem.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Controls */}
        <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#6e7a75] hover:text-[#1b1b1e] hover:bg-[#f0edf1] cursor-pointer"
            >
              {t.back || 'Back'}
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-5 py-2.5 rounded-xl bg-[#4648d4] text-white text-xs font-semibold hover:bg-[#3b3dbb] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.nextStep || t.continueBtn}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-xl bg-[#005f50] text-white text-xs font-semibold hover:bg-[#0d7a68] transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>{t.savePreferences || 'Activate Personalized Engine'}</span>
              <span className="material-symbols-outlined text-[16px]">check</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
