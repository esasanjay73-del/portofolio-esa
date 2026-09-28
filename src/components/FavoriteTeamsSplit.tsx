import React, { useState } from 'react';
import { Trophy, Flame, Wind, Crown, Shield, Star, Volume2, Sparkles, ChevronRight } from 'lucide-react';
import madridImg from '../assets/images/real_madrid_champions_1790599068601.jpg';
import ferrariImg from '../assets/images/ferrari_f1_aerodynamics_1790598209249.jpg';

export const FavoriteTeamsSplit: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'both' | 'madrid' | 'ferrari'>('both');
  const [soundActive, setSoundActive] = useState(false);

  // Synthesize sound effects using Web Audio API
  const playSoundEffect = (type: 'madrid' | 'ferrari') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      setSoundActive(true);

      if (type === 'ferrari') {
        // High rev acoustic sweep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(170, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.4);
        osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.8);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 1.2);
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.2);
      } else {
        // Regal fanfare chime
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
          gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.15);
          osc.stop(ctx.currentTime + i * 0.15 + 0.6);
        });
      }

      setTimeout(() => setSoundActive(false), 1400);
    } catch {
      // fallback
    }
  };

  return (
    <section id="tim-favorit" className="relative py-28 px-4 sm:px-6 overflow-hidden bg-black text-white">
      {/* Background Section Header */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <Star className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>SHOWSTOPPER · DUALITAS GAIRAH & PRESTASI</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-black text-white tracking-tight uppercase">
          Tim Favorit <span className="text-zinc-600">//</span> Mentalitas Pemenang
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-sans">
          Dua kutub inspirasi: Keteguhan mentalitas juara tanpa tanding di lapangan hijau sepak bola Eropa dan obsesi mahakarya aerodinamika di sirkuit balap Formula 1.
        </p>

        {/* View Mode Switcher */}
        <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-xl mt-6 font-mono text-xs">
          <button
            onClick={() => setActiveSide('both')}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              activeSide === 'both' ? 'bg-white/20 text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Split View (50 / 50)
          </button>
          <button
            onClick={() => setActiveSide('madrid')}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              activeSide === 'madrid' ? 'bg-[#ffd700] text-black font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Hala Madrid (Gold)
          </button>
          <button
            onClick={() => setActiveSide('ferrari')}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              activeSide === 'ferrari' ? 'bg-[#DC0000] text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Scuderia Ferrari (Red)
          </button>
        </div>
      </div>

      {/* Parallax Split Screen Layout (Side by side on desktop, stacked on mobile) */}
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ========================================================
              LEFT SIDE: REAL MADRID (WHITE & GOLD ELEGANCE)
             ======================================================== */}
          {(activeSide === 'both' || activeSide === 'madrid') && (
            <div
              className={`relative p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden transition-all duration-500 ${
                activeSide === 'madrid' ? 'lg:col-span-2' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(20, 18, 10, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%)',
              }}
            >
              {/* Background Image Layer with Golden Scrim */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={madridImg}
                  alt="Real Madrid Santiago Bernabeu Champions"
                  className="w-full h-full object-cover opacity-25 filter contrast-125 scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ffd700]/15 rounded-full blur-[120px]" />
              </div>

              {/* Madrid Content Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ffd700]/15 border border-[#ffd700]/40 text-xs font-mono text-[#ffd700] font-bold">
                    <Crown className="w-4 h-4 text-[#ffd700]" />
                    <span>KINGS OF EUROPE · EST. 1902</span>
                  </div>

                  <button
                    onClick={() => playSoundEffect('madrid')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#ffd700] text-zinc-400 hover:text-black border border-white/10 transition-colors"
                    title="Mainkan Suara Perayaan Madrid"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-tight uppercase leading-none mb-4">
                  Hala <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd700] to-amber-200">Madrid</span>
                </h3>
                <div className="w-20 h-1 bg-[#ffd700] mb-6 shadow-[0_0_10px_#ffd700]" />

                <div className="bg-black/60 backdrop-blur-md border border-[#ffd700]/30 rounded-xl p-6 sm:p-7 space-y-4 shadow-xl">
                  <h4 className="text-lg font-mono font-bold text-[#ffd700]">
                    Mentalitas Juara Tak Tertandingi
                  </h4>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans">
                    Dukungan penuh saya kepada <strong>Real Madrid</strong> berakar pada kekaguman terhadap DNA pemenang (*mentalidad ganadora*) yang tidak pernah mengenal kata menyerah. Menjadi raja kompetisi Eropa dengan rekor gelar <strong>UEFA Champions League</strong> terbanyak adalah manifestasi nyata dari ketahanan psikologis, kepemimpinan di saat genting, dan standar keunggulan tanpa kompromi.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    Di bawah gemerlap stadion Santiago Bernabéu yang megah, setiap pertandingan mengajarkan filosofi hidup: bahwa dengan persiapan matang, disiplin baja, dan keyakinan teguh, situasi tersulit pun dapat dibalikkan menjadi kemenangan bersejarah (*remontada*).
                  </p>
                  <div className="p-3 bg-[#ffd700]/10 border border-[#ffd700]/25 rounded-lg text-xs font-mono text-amber-200 italic">
                    "¡Hasta el final, vamos Real! — Bukan sekadar slogan, melainkan etos hidup untuk berjuang hingga detik penghabisan."
                  </div>
                </div>
              </div>

              {/* Madrid Bottom Stat Highlights */}
              <div className="relative z-10 mt-8 pt-6 border-t border-[#ffd700]/20 grid grid-cols-3 gap-3 text-center font-mono">
                <div className="p-3 bg-white/[0.04] border border-[#ffd700]/20 rounded-lg">
                  <div className="text-[10px] text-zinc-400">EUROPEAN CUPS</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#ffd700]">15+ UCL</div>
                </div>
                <div className="p-3 bg-white/[0.04] border border-[#ffd700]/20 rounded-lg">
                  <div className="text-[10px] text-zinc-400">STATUS</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">Club of the Century</div>
                </div>
                <div className="p-3 bg-white/[0.04] border border-[#ffd700]/20 rounded-lg">
                  <div className="text-[10px] text-zinc-400">SANCTUARY</div>
                  <div className="text-sm sm:text-base font-bold text-[#ffd700] mt-1">Bernabéu</div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              RIGHT SIDE: SCUDERIA FERRARI (OBSIDIAN & ROSSO CORSA)
             ======================================================== */}
          {(activeSide === 'both' || activeSide === 'ferrari') && (
            <div
              className={`relative p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden border-t lg:border-t-0 lg:border-l border-[#DC0000]/40 transition-all duration-500 ${
                activeSide === 'ferrari' ? 'lg:col-span-2' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(28, 5, 5, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%)',
              }}
            >
              {/* Background Image Layer with Rosso Corsa Scrim */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={ferrariImg}
                  alt="Scuderia Ferrari Aerodinamika F1"
                  className="w-full h-full object-cover opacity-25 filter contrast-125 scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#DC0000]/20 rounded-full blur-[120px]" />
              </div>

              {/* Ferrari Content Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DC0000]/20 border border-[#DC0000]/50 text-xs font-mono text-[#FF2800] font-bold">
                    <Flame className="w-4 h-4 text-[#FF2800] fill-[#FF2800]" />
                    <span>SCUDERIA FERRARI · EST. 1929</span>
                  </div>

                  <button
                    onClick={() => playSoundEffect('ferrari')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#DC0000] text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    title="Mainkan Rev Mesin Ferrari V6"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-tight uppercase leading-none mb-4">
                  Scuderia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC0000] via-[#FF2800] to-rose-400">Ferrari</span>
                </h3>
                <div className="w-20 h-1 bg-[#DC0000] mb-6 shadow-[0_0_10px_#DC0000]" />

                <div className="bg-black/60 backdrop-blur-md border border-[#DC0000]/30 rounded-xl p-6 sm:p-7 space-y-4 shadow-xl">
                  <h4 className="text-lg font-mono font-bold text-[#FF2800]">
                    Aerodinamika & Gairah Tifosi Sejati
                  </h4>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans">
                    Apresiasi terhadap <strong>Scuderia Ferrari</strong> memadukan cinta mendalam terhadap balapan Formula 1 dan kekaguman atas kejeniusan rekayasa aerodinamika. Aliran fluida di bawah lantai <em>ground-effect</em>, kontrol turbulensi <em>vortices</em> sayap depan, hingga keindahan sasis serat karbon adalah mahakarya seni teknologi berkecepatan lebih dari 350 km/jam.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    Sebagai seorang Tifosi, warna merah bukan sekadar tampilan visual, melainkan lambang dedikasi tak tergoyahkan. Di Maranello, presisi mekanika dan detak gairah manusia menyatu demi meraih batas tertinggi performa sirkuit dunia.
                  </p>
                  <div className="p-3 bg-[#DC0000]/15 border border-[#DC0000]/30 rounded-lg text-xs font-mono text-rose-300 italic">
                    "#EssereFerrari — Keberanian melangkah hingga batas ekstrem, didorong oleh jiwa dan warisan Enzo Ferrari."
                  </div>
                </div>
              </div>

              {/* Ferrari Bottom Telemetry Highlights */}
              <div className="relative z-10 mt-8 pt-6 border-t border-[#DC0000]/30 grid grid-cols-3 gap-3 text-center font-mono">
                <div className="p-3 bg-white/[0.04] border border-[#DC0000]/30 rounded-lg">
                  <div className="text-[10px] text-zinc-400">V-MAX SPEED</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#FF2800]">355+ km/h</div>
                </div>
                <div className="p-3 bg-white/[0.04] border border-[#DC0000]/30 rounded-lg">
                  <div className="text-[10px] text-zinc-400">DOWNFORCE</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">Ground Effect</div>
                </div>
                <div className="p-3 bg-white/[0.04] border border-[#DC0000]/30 rounded-lg">
                  <div className="text-[10px] text-zinc-400">TIFOSI SPIRIT</div>
                  <div className="text-sm sm:text-base font-bold text-[#FF2800] mt-1">Rosso Corsa</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
