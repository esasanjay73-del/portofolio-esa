import React, { useState } from 'react';
import { BookOpen, Gamepad2, Cpu, Sparkles, ChevronRight, Eye, Layers } from 'lucide-react';
import comicImg from '../assets/images/comic_manga_reading_1790599085158.jpg';
import gamingImg from '../assets/images/gaming_hardware_setup_1790598222160.jpg';

interface HobbiesGridProps {
  onOpenChessDemo: () => void;
  onOpenHardwareDemo: () => void;
}

export const HobbiesGrid: React.FC<HobbiesGridProps> = ({
  onOpenChessDemo,
  onOpenHardwareDemo,
}) => {
  return (
    <section id="hobi" className="relative py-24 px-4 sm:px-6 bg-[#0a0a0f]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#00f3ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f3ff] uppercase tracking-wider mb-2">
            <Gamepad2 className="w-4 h-4" />
            <span>// 02 · HOBI & EKSPLORASI INTERAKTIF</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                Ruang Imajinasi <span className="text-zinc-600">&</span> Dunia Virtual
              </h2>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl font-sans">
                Keseimbangan antara stimulasi visual naratif komik dan analisis komputasi kinerja game berskala besar.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500 hidden sm:block">
              [ ARAHKAN KURSOR UNTUK EFEK 3D TILT ]
            </div>
          </div>
        </div>

        {/* 2-Column or 3-Column Responsive Grid with 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kartu 1: Membaca Komik */}
          <div className="group glass-panel rounded-xl border border-white/10 overflow-hidden tilt-card flex flex-col justify-between">
            <div>
              {/* Image Box */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={comicImg}
                  alt="Membaca Komik & Manga Inspiratif"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-[#0e111a]/40 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded text-xs font-mono text-[#00f3ff] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Manga & Graphic Novels</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="text-xs font-mono text-zinc-400 mb-1">01 / ESKAPISME & KREATIVITAS</div>
                <h3 className="text-2xl font-mono font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors">
                  Membaca Komik
                </h3>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                  Bagi saya, membaca komik dan manga bukan sekadar hiburan pengisi waktu luang, melainkan sebuah <strong>ruang eskapisme yang kaya</strong> dan sarana stimulasi imajinasi kreatif. Melalui struktur panel dinamis, visual storytelling yang ekspresif, dan alur konflik terstruktur, saya menemukan inspirasi seni desain dan pola pikir penyelesaian masalah (*lateral thinking*).
                </p>

                <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff]" />
                    <span>Stimulasi visual grafis, konsep ilustrasi, dan desain UI futuristik.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff]" />
                    <span>Memperluas perspektif narasi kompleks dan pemikiran out-of-the-box.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff]" />
                    <span>Refresh mental yang efektif setelah sesi coding & riset keamanan yang intens.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-6 pb-6 pt-2">
              <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Genre Favorit: Sci-Fi, Psychological, Cyberpunk</span>
                <span className="text-[#00f3ff]">Narrative Focus</span>
              </div>
            </div>
          </div>

          {/* Kartu 2: Gaming & Hardware Tuning */}
          <div className="group glass-panel rounded-xl border border-white/10 overflow-hidden tilt-card flex flex-col justify-between">
            <div>
              {/* Image Box */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={gamingImg}
                  alt="Gaming & Hardware Tuning Genshin Impact Wuthering Waves"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-[#0e111a]/40 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded text-xs font-mono text-[#00ff41] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Hardware & Open World</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="text-xs font-mono text-zinc-400 mb-1">02 / TAKTIK & PERFORMA KOMPUTASI</div>
                <h3 className="text-2xl font-mono font-bold text-white mb-3 group-hover:text-[#00ff41] transition-colors">
                  Gaming & Hardware
                </h3>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                  Aktivitas bermain game mencakup spektrum luas: mulai dari <strong>merancang taktik matematis</strong> dalam game kompetitif dan strategi bidak catur, hingga mengeksplorasi dunia terbuka (*Open World*) berskala kolosal seperti <strong>Genshin Impact</strong> dan <strong>Wuthering Waves</strong> sembari menguji dan mengoptimalkan performa batas hardware laptop.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
                    <span>Strategi catur, kalkulasi probabilitas keputusan, dan tree analysis.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
                    <span>Tuning laptop: Undervolting GPU/CPU, thermal management, stabilisasi framerate.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
                    <span>Apresiasi grafis rendering engine kompleks (Unreal Engine 4 & Unity).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Actions */}
            <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={onOpenChessDemo}
                className="py-2.5 px-3 text-xs font-mono text-white bg-white/5 hover:bg-[#00f3ff] hover:text-black border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Taktik Catur</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenHardwareDemo}
                className="py-2.5 px-3 text-xs font-mono text-white bg-white/5 hover:bg-[#00ff41] hover:text-black border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Uji Hardware</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
