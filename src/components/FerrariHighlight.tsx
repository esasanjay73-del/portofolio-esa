import React, { useState } from 'react';
import { Flame, Wind, Gauge, ShieldCheck, Trophy, Sparkles, Volume2, ChevronRight } from 'lucide-react';
import ferrariImg from '../assets/images/ferrari_f1_aerodynamics_1790598209249.jpg';

export const FerrariHighlight: React.FC = () => {
  const [activeTelemetry, setActiveTelemetry] = useState<'aero' | 'engine' | 'passion'>('aero');
  const [soundPlayed, setSoundPlayed] = useState(false);

  // Play simulated engine acoustic rev using Web Audio API synthesis
  const playFerrariRevSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      // F1 V6 turbo-hybrid scream sweep
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.4);
      osc.frequency.exponentialRampToValueAtTime(950, ctx.currentTime + 0.7);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 1.2);
      
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
      setSoundPlayed(true);
      setTimeout(() => setSoundPlayed(false), 1500);
    } catch {
      // Audio fallback
    }
  };

  return (
    <section id="ferrari" className="relative py-28 px-4 sm:px-6 overflow-hidden bg-black text-white">
      {/* Background Parallax Banner & Image Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={ferrariImg}
          alt="Scuderia Ferrari Aerodinamika F1"
          className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Aggressive Rosso Corsa gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-[#240000]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="carbon-pattern absolute inset-0 opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Racing Ribbon Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#DC0000]/20 border border-[#DC0000]/50 text-xs font-mono text-white mb-6 backdrop-blur-md">
          <Flame className="w-4 h-4 text-[#FF2800] fill-[#FF2800]" />
          <span className="font-bold tracking-widest text-[#FF2800]">SCUDERIA FERRARI</span>
          <span className="text-zinc-500">|</span>
          <span>EST. 1929 · MARANELLO</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase leading-none mb-6">
            Tifosi Sejati <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC0000] via-[#FF2800] to-yellow-500">
              Mengapa Harus Jadi Tifosi Ferrari
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-[#DC0000] mb-6" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Dedication Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#101015]/80 backdrop-blur-md border border-[#DC0000]/30 p-6 sm:p-8 rounded-2xl relative shadow-2xl shadow-[#DC0000]/10">
              <div className="text-xs font-mono text-[#FF2800] tracking-wider uppercase mb-3">
                DEDIKASI, GAIRAH & FILOSOFI BALAP
              </div>
              
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-sans mb-4">
                Menjadi seorang <strong>Tifosi Ferrari</strong> bukan sekadar mendukung tim olahraga bermotor; ini adalah komitmen spiritual terhadap gairah kompetitif tanpa kompromi, sejarah legendaris Enzo Ferrari, dan keberanian mengejar batas tertinggi kecepatan manusia.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                Sebagai mahasiswa fisika, apresiasi saya berlipat ganda saat membedah <strong>mahakaraya aerodinamika</strong> mobil Formula 1 Ferrari. Efek Venturi di bawah lantai <em>ground-effect chassis</em>, pengaturan <em>vortices</em> pada <em>front wing</em>, manajemen aliran turbulensi ban, hingga efisiensi sistem pendingin <em>sidepods</em> yang dirancang dengan presisi matematis ekstrem adalah bukti nyata bagaimana sains fisika membuahkan seni mekanika tercepat di muka bumi.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-[#DC0000] pl-3 py-1">
                "Bagi kami, merah bukan sekadar warna. Warna merah adalah detak jantung, kebanggaan, dan tekad pantang menyerah meski dalam kondisi sirkuit tersulit sekalipun."
              </p>

              {/* Sound & Telemetry interactive trigger */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={playFerrariRevSound}
                  className="flex items-center gap-2 px-4 py-2 bg-[#DC0000] hover:bg-[#FF2800] text-white text-xs font-mono font-bold rounded-lg transition-transform active:scale-95 shadow-md shadow-[#DC0000]/40"
                >
                  <Volume2 className={`w-4 h-4 ${soundPlayed ? 'animate-ping' : ''}`} />
                  <span>{soundPlayed ? 'REV ACTIVATED!' : 'Dengarkan Rev Mesin V6'}</span>
                </button>
                <div className="text-xs font-mono text-zinc-400">
                  Tagline: <span className="text-white font-semibold">#EssereFerrari</span>
                </div>
              </div>
            </div>

            {/* Aerodynamic Pillars for Physics Appreciator */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 text-[#FF2800] mb-1">
                  <Wind className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">AERODINAMIKA</span>
                </div>
                <div className="text-sm font-bold text-white">Downforce & Venturi</div>
                <p className="text-[11px] text-zinc-400 mt-1">Ground effect tunneled floor menghasilkan grip optimal di tikungan kecepatan tinggi.</p>
              </div>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">WARISAN JUARA</span>
                </div>
                <div className="text-sm font-bold text-white">DNA Paling Ikonik</div>
                <p className="text-[11px] text-zinc-400 mt-1">Satu-satunya konstruktor yang berlaga sejak musim perdana 1950 tanpa absen.</p>
              </div>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">EFISIENSI TERMAL</span>
                </div>
                <div className="text-sm font-bold text-white">MGU-K & MGU-H</div>
                <p className="text-[11px] text-zinc-400 mt-1">Pemulihan energi kinetik & termal terintegrasi 1000+ Horsepower.</p>
              </div>
            </div>
          </div>

          {/* Prancing Horse Badge & Visual Aerodynamic Stage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Elegant Shield Container for Prancing Horse Emblem */}
            <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#1c1c24] to-[#0c0c10] border border-[#DC0000]/40 p-6 shadow-2xl flex flex-col items-center text-center overflow-hidden">
              {/* Subtle top spotlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#DC0000]/30 rounded-full blur-2xl" />

              {/* Prancing Horse Artistic Silhouette Badge */}
              <div className="relative w-36 h-48 mb-6 flex items-center justify-center">
                {/* Yellow Ferrari Shield Silhouette */}
                <div className="w-32 h-44 bg-gradient-to-b from-[#ffea00] to-[#f4c20d] rounded-t-xl rounded-b-[40px] shadow-[0_0_30px_rgba(255,234,0,0.25)] border-2 border-black flex flex-col items-center justify-between p-3 relative">
                  {/* Italian Tricolor Top */}
                  <div className="w-full flex h-2 rounded-t overflow-hidden border-b border-black/40">
                    <div className="w-1/3 bg-[#009246]" />
                    <div className="w-1/3 bg-[#f1f2f1]" />
                    <div className="w-1/3 bg-[#ce2b37]" />
                  </div>

                  {/* Prancing Horse Vector Art */}
                  <div className="my-auto flex flex-col items-center">
                    <svg
                      viewBox="0 0 100 130"
                      className="w-20 h-28 fill-black filter drop-shadow-sm"
                      aria-label="Cavallino Rampante"
                    >
                      {/* Stylized Prancing Horse Silhouette */}
                      <path d="M52 10 C50 12, 45 15, 42 16 C39 17, 36 21, 38 23 C41 24, 46 22, 49 20 C48 24, 44 28, 41 31 C38 34, 34 40, 36 43 C38 45, 43 41, 46 38 C44 44, 41 50, 37 56 C33 62, 28 69, 29 74 C31 77, 36 74, 39 69 C41 65, 44 59, 47 54 C48 57, 50 63, 53 70 C56 77, 60 88, 64 96 C67 101, 71 106, 73 111 C75 115, 78 122, 80 122 C81 122, 80 116, 78 111 C75 104, 71 94, 67 86 C64 80, 60 72, 57 66 C59 62, 63 56, 67 48 C71 39, 74 30, 72 23 C70 17, 64 12, 57 10 Z" />
                      <circle cx="58" cy="18" r="2" fill="#ffea00" />
                    </svg>
                    <div className="text-[10px] font-black tracking-widest text-black mt-1 font-mono">
                      S F
                    </div>
                  </div>

                  {/* Bottom Black trim */}
                  <div className="text-[8px] font-bold text-black uppercase tracking-widest font-mono">
                    Ferrari
                  </div>
                </div>
              </div>

              {/* Emblem Details */}
              <h4 className="text-xl font-heading font-black text-white uppercase tracking-wider">
                Cavallino Rampante
              </h4>
              <p className="text-xs text-zinc-400 mt-1 mb-5">
                Simbol keberanian, presisi balap, dan kehormatan Italia di setiap sirkuit dunia.
              </p>

              {/* Telemetry Indicator */}
              <div className="w-full bg-black/60 border border-white/10 rounded-xl p-3 grid grid-cols-3 gap-2 text-center font-mono">
                <div>
                  <div className="text-[10px] text-zinc-500">MAX SPEED</div>
                  <div className="text-sm font-bold text-white tabular-nums">355+ km/h</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500">CORNER G</div>
                  <div className="text-sm font-bold text-[#FF2800] tabular-nums">5.8 G</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500">DOWNFORCE</div>
                  <div className="text-sm font-bold text-white tabular-nums">750 kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
