import React, { useState, useEffect } from 'react';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyQuery: (query: string) => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({
  isOpen,
  onClose,
  onApplyQuery,
}) => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(true);

  const sampleVoicePrompts = [
    'Somewhere relaxing near Munnar, not too pricey with mist views and warm fireplace...',
    'Find a quiet riverside wood cabin near Idukki with good local food and stargazing...',
    'Peaceful weekend getaway within 2 hours drive from Kochi with calm backwaters...',
    'Solo hike in high altitude Himalayas with traditional mud house homestay...',
  ];

  useEffect(() => {
    if (!isOpen) {
      setTranscript('');
      setIsListening(true);
      return;
    }

    const randomPrompt = sampleVoicePrompts[Math.floor(Math.random() * sampleVoicePrompts.length)];
    let index = 0;
    setTranscript('');
    setIsListening(true);

    const interval = setInterval(() => {
      if (index < randomPrompt.length) {
        setTranscript(randomPrompt.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsListening(false);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E5E7EB] text-center relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6e7a75] hover:text-[#1b1b1e] p-1.5 rounded-full hover:bg-[#f0edf1]"
          aria-label="Close speech search"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="mx-auto w-16 h-16 rounded-full bg-[#99f3dd] text-[#005f50] flex items-center justify-center relative mb-4">
          <span className="material-symbols-outlined text-[32px] animate-pulse">mic</span>
          {isListening && (
            <span className="absolute inset-0 rounded-full border-2 border-[#005f50] animate-ping opacity-30"></span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#1b1b1e]">
          {isListening ? 'Sarathi is listening to your intent...' : 'Natural Query Captured'}
        </h3>
        <p className="text-xs text-[#6e7a75] mt-1">
          Speak freely: mention mood, travel cadence, climate, companions, or sensory wishes
        </p>

        {/* Audio Wave Visualizer */}
        <div className="flex items-center justify-center gap-1.5 h-10 my-4">
          {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 35].map((height, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full bg-[#005f50] transition-all duration-300 ${
                isListening ? 'animate-bounce' : 'opacity-40'
              }`}
              style={{
                height: isListening ? `${height}%` : '20%',
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>

        {/* Transcript Box */}
        <div className="p-4 rounded-2xl bg-[#f6f2f7] border border-[#E5E7EB] min-h-[72px] flex items-center justify-center text-sm font-medium text-[#1b1b1e] italic">
          "{transcript || 'Listening for acoustic nuance...'}"
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#6e7a75] hover:text-[#1b1b1e] rounded-xl hover:bg-[#f0edf1]"
          >
            Cancel
          </button>
          <button
            disabled={!transcript}
            onClick={() => {
              onApplyQuery(transcript);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#005f50] text-white font-semibold text-xs flex items-center gap-1.5 hover:bg-[#0d7a68] shadow-md disabled:opacity-50"
          >
            <span>Ask Sarathi</span>
            <span className="material-symbols-outlined text-[16px]">explore</span>
          </button>
        </div>
      </div>
    </div>
  );
};
