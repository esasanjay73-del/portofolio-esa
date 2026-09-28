import React, { useState } from 'react';
import { X, Cpu, Gauge, Zap, Flame, Thermometer, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface HardwareBenchmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HardwareBenchmarkModal: React.FC<HardwareBenchmarkModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'eco' | 'balanced' | 'overclock'>('overclock');
  const [selectedGame, setSelectedGame] = useState<'genshin' | 'wuwa'>('wuwa');

  const configs = {
    eco: {
      label: 'Eco Battery Saver',
      fps: selectedGame === 'wuwa' ? 45 : 52,
      temp: 61,
      power: '35W TDP',
      vram: '3.8 GB',
      fanNoise: 'Quiet (28 dB)',
      color: 'text-emerald-400',
    },
    balanced: {
      label: 'Balanced Studio',
      fps: selectedGame === 'wuwa' ? 60 : 60,
      temp: 72,
      power: '65W TDP',
      vram: '5.2 GB',
      fanNoise: 'Moderate (36 dB)',
      color: 'text-amber-400',
    },
    overclock: {
      label: 'Rosso Corsa Max Perf',
      fps: selectedGame === 'wuwa' ? 118 : 120,
      temp: 78,
      power: '105W Boosted TDP',
      vram: '6.9 GB',
      fanNoise: 'High Flow (44 dB)',
      color: 'text-[#FF2800]',
    },
  };

  const currentConfig = configs[mode];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121219] border border-white/10 rounded-2xl w-full max-w-3xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161622]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#DC0000]/20 border border-[#DC0000]/40 flex items-center justify-center text-[#FF2800]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white">
                Simulasi Tuning Hardware & Benchmark Laptop
              </h3>
              <p className="text-xs text-zinc-400">
                Optimasi Kinerja untuk Genshin Impact & Wuthering Waves
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

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          {/* Game Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-black/40 border border-white/10 rounded-xl">
            <div>
              <div className="text-xs font-mono text-zinc-400">TARGET PENGUJIAN DUNIA VIRTUAL:</div>
              <div className="text-sm font-bold text-white">
                {selectedGame === 'wuwa' ? 'Wuthering Waves (Unreal Engine 4)' : 'Genshin Impact (Unity Custom Engine)'}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSelectedGame('wuwa')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedGame === 'wuwa'
                    ? 'bg-[#DC0000] text-white font-bold shadow-md shadow-[#DC0000]/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Wuthering Waves
              </button>
              <button
                onClick={() => setSelectedGame('genshin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedGame === 'genshin'
                    ? 'bg-[#DC0000] text-white font-bold shadow-md shadow-[#DC0000]/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Genshin Impact
              </button>
            </div>
          </div>

          {/* Mode Switcher */}
          <div>
            <div className="text-xs font-mono text-zinc-400 mb-2">PROFIL DAYA & TUNING LAPTOP:</div>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setMode('eco')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  mode === 'eco'
                    ? 'bg-emerald-950/30 border-emerald-500/50 ring-1 ring-emerald-500'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[11px] font-mono text-emerald-400">01 / HEMAT DAYA</div>
                <div className="text-sm font-bold text-white">Eco Quiet</div>
                <div className="text-[10px] text-zinc-400 mt-1">Efisiensi baterai & suhu dingin.</div>
              </button>

              <button
                onClick={() => setMode('balanced')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  mode === 'balanced'
                    ? 'bg-amber-950/30 border-amber-500/50 ring-1 ring-amber-500'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[11px] font-mono text-amber-400">02 / STANDARD</div>
                <div className="text-sm font-bold text-white">Balanced 60FPS</div>
                <div className="text-[10px] text-zinc-400 mt-1">Stabilitas frame rate tanpa throttling.</div>
              </button>

              <button
                onClick={() => setMode('overclock')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  mode === 'overclock'
                    ? 'bg-[#DC0000]/20 border-[#DC0000] ring-1 ring-[#FF2800]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[11px] font-mono text-[#FF2800] flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-[#FF2800]" />
                  <span>03 / ROSSO CORSA</span>
                </div>
                <div className="text-sm font-bold text-white">Max Boost 120Hz</div>
                <div className="text-[10px] text-zinc-400 mt-1">Undervolt + Turbo fan curve.</div>
              </button>
            </div>
          </div>

          {/* Real-time Telemetry Dashboard */}
          <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-zinc-400">STATUS TELEMETRI HARDWARE</span>
              <span className={`text-xs font-mono font-bold ${currentConfig.color}`}>
                ● {currentConfig.label}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
              <div className="p-3 bg-white/[0.03] rounded-lg">
                <div className="text-[10px] text-zinc-500">FRAME RATE</div>
                <div className="text-2xl font-bold text-white mt-1 tabular-nums">
                  {currentConfig.fps} <span className="text-xs text-[#FF2800]">FPS</span>
                </div>
              </div>

              <div className="p-3 bg-white/[0.03] rounded-lg">
                <div className="text-[10px] text-zinc-500">SUHU GPU/CPU</div>
                <div className="text-2xl font-bold text-white mt-1 tabular-nums">
                  {currentConfig.temp}°C
                </div>
              </div>

              <div className="p-3 bg-white/[0.03] rounded-lg">
                <div className="text-[10px] text-zinc-500">POWER DRAW</div>
                <div className="text-sm font-bold text-white mt-2">
                  {currentConfig.power}
                </div>
              </div>

              <div className="p-3 bg-white/[0.03] rounded-lg">
                <div className="text-[10px] text-zinc-500">VRAM USAGE</div>
                <div className="text-sm font-bold text-white mt-2">
                  {currentConfig.vram}
                </div>
              </div>
            </div>

            {/* Insight from Esa */}
            <div className="p-3 bg-[#DC0000]/10 border border-[#DC0000]/20 rounded-lg text-xs text-zinc-300">
              <strong className="text-white">Catatan Teknis Esa Sanjaya:</strong> Melalui teknik <em>undervolting CPU -80mV</em> dan modifikasi kurva kipas laptop, kestabilan 1% low FPS meningkat sebesar 24% tanpa menimbulkan <em>thermal throttling</em> saat menjelajahi area render intensif seperti Fontaine (Genshin) atau Jinzhou (Wuthering Waves).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
