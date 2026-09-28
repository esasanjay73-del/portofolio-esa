import React, { useState } from 'react';
import { X, Film, Sparkles, Copy, Check, Scissors, Layers, Sliders } from 'lucide-react';

interface PromptEngineeringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptEngineeringModal: React.FC<PromptEngineeringModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const promptRecipes = [
    {
      title: "2D Cyberpunk Anime Character Motion",
      style: "Kyoto Animation x Studio Trigger Aesthetic",
      prompt: "2D anime character running across neon rain rooftops, dynamic keyframe poses, sharp vector outlines, cinematic rim lighting in Rosso Corsa red and obsidian, fluid 24fps motion interpolation, masterpiece --ar 16:9 --v 6.0",
      notes: "Digunakan untuk video intro animasi dan b-roll motion graphics."
    },
    {
      title: "Fisika & Partikel Sains 2D Cinematic",
      style: "Scientific Motion Graphics",
      prompt: "Abstract visualization of quantum orbital paths and gravity waves, sleek red laser trajectories, dark minimalist slate background, high precision particle physics vector aesthetic, 4k resolution.",
      notes: "Aset visual untuk materi presentasi dan visualisasi konsep fisika komputasi."
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121219] border border-white/10 rounded-2xl w-full max-w-3xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161622]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#DC0000]/20 border border-[#DC0000]/40 flex items-center justify-center text-[#FF2800]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white">
                Studio Kreatif: CapCut & Rekayasa Prompt AI
              </h3>
              <p className="text-xs text-zinc-400">
                Penyuntingan Video Ritmis & Generasi Animasi 2D
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          {/* CapCut Workflow Breakdown */}
          <div className="p-5 bg-black/50 border border-white/10 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF2800]">
              <Scissors className="w-4 h-4" />
              <span>ALUR KERJA PENYUNTINGAN CAPCUT</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              Teknik Editing Berbasis Tempo & Presisi Visual
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5">
                <div className="text-[11px] font-mono text-zinc-400">01 / BEAT-SYNC</div>
                <div className="text-xs font-semibold text-white mt-0.5">Sinkronisasi Audio Waveform</div>
                <p className="text-[10px] text-zinc-400 mt-1">Pemotongan klip tepat pada transisi drum kick & synth drop.</p>
              </div>

              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5">
                <div className="text-[11px] font-mono text-zinc-400">02 / SPEED RAMPING</div>
                <div className="text-xs font-semibold text-white mt-0.5">Kurva Kecepatan Halus</div>
                <p className="text-[10px] text-zinc-400 mt-1">Transisi dinamis dari slow-motion 0.3x ke hentakan 2.5x kecepatan tinggi.</p>
              </div>

              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5">
                <div className="text-[11px] font-mono text-zinc-400">03 / COLOR GRADING</div>
                <div className="text-xs font-semibold text-white mt-0.5">Palet Sinematik Dark & Red</div>
                <p className="text-[10px] text-zinc-400 mt-1">Koreksi kontras kurva S dengan penekanan aksen merah khas balap.</p>
              </div>
            </div>
          </div>

          {/* AI Prompt Engineering Recipes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>FORMULASI PROMPT ANIMASI 2D</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Structured Prompting</span>
            </div>

            {promptRecipes.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#181822] border border-white/10 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{item.title}</span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    {item.style}
                  </span>
                </div>

                <div className="p-3 bg-black/60 rounded-lg border border-white/5 font-mono text-xs text-zinc-300 relative group">
                  <p className="pr-8">{item.prompt}</p>
                  <button
                    onClick={() => handleCopy(item.prompt, idx)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded bg-white/10 hover:bg-[#DC0000] text-zinc-300 hover:text-white transition-colors"
                    title="Salin Prompt"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-zinc-400">{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
