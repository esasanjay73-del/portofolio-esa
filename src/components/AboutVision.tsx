import React, { useState } from 'react';
import { Atom, Compass, Code, Users, Award, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import avatarImg from '../assets/images/regenerated_image_1790605847690.jpg';

export const AboutVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'akademik' | 'visi' | 'organisasi'>('visi');

  return (
    <section id="profil" className="relative py-24 px-4 sm:px-6 bg-[#0c0c10] border-t border-b border-white/[0.06]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC0000]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF2800] uppercase tracking-wider mb-2">
            <Atom className="w-4 h-4" />
            <span>01 · Tentang Saya & Rekayasa Masa Depan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Profil Akademis <span className="text-zinc-500">&</span> Visi Teknologi
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Comprehensive Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#14141b] border border-white/[0.08] p-6 sm:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC0000]" />
              
              <h3 className="text-xl font-heading font-bold text-white mb-3 flex items-center gap-2">
                <span>Mahasiswa Fisika, Universitas Negeri Medan</span>
              </h3>
              
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-4 font-sans">
                Saya adalah mahasiswa Fisika di <strong>Universitas Negeri Medan</strong> yang menaruh minat besar pada bagaimana hukum fundamental alam dapat diubah menjadi algoritma komputasi. Tidak hanya mendalami mekanika klasik, termodinamika, dan fisika komputasi, saya juga aktif mengasah <strong>kepemimpinan organisasional</strong> dan <strong>literasi data</strong> yang kuat untuk memecahkan persoalan dunia nyata secara terstruktur.
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base font-sans">
                Bagi saya, fisika bukan sekadar teori di atas kertas; ia adalah pola pikir logis yang mengajarkan bagaimana menganalisis sistem yang kompleks, memecahnya menjadi variabel-variabel inti, dan merumuskan model matematis yang teruji.
              </p>
            </div>

            {/* Comprehensive Aspiration / Visi */}
            <div className="bg-[#14141b] border border-white/[0.08] p-6 sm:p-8 rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#DC0000]" />
                  <span>Cita-Cita & Visi Inovator</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">Jangka Panjang</span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Bercita-cita menjadi seorang <strong>pengembang perangkat lunak handal dan inovator teknologi terdepan</strong> yang mampu menjembatani ilmu fisika terapan dengan rekayasa pemrograman modern. Visi saya berfokus pada:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-black/40 border border-white/[0.05] rounded-lg">
                  <div className="text-xs font-mono text-[#FF2800] mb-1">01 / SIMULASI & INTERAKSI</div>
                  <div className="text-sm font-semibold text-white">Simulasi Fisika Interaktif</div>
                  <p className="text-xs text-zinc-400 mt-1">Mengembangkan software simulasi game engine & visualisasi mekanika digital.</p>
                </div>
                <div className="p-3.5 bg-black/40 border border-white/[0.05] rounded-lg">
                  <div className="text-xs font-mono text-[#FF2800] mb-1">02 / SOLUSI DIGITAL</div>
                  <div className="text-sm font-semibold text-white">Aplikasi Terapan Bernilai Nyata</div>
                  <p className="text-xs text-zinc-400 mt-1">Menciptakan perangkat lunak responsif untuk automasi dan analisis data.</p>
                </div>
                <div className="p-3.5 bg-black/40 border border-white/[0.05] rounded-lg">
                  <div className="text-xs font-mono text-[#FF2800] mb-1">03 / LOGIKA GAME</div>
                  <div className="text-sm font-semibold text-white">Game Development & AI Logic</div>
                  <p className="text-xs text-zinc-400 mt-1">Implementasi algoritma keputusan seperti sistem evaluasi papan catur.</p>
                </div>
                <div className="p-3.5 bg-black/40 border border-white/[0.05] rounded-lg">
                  <div className="text-xs font-mono text-[#FF2800] mb-1">04 / KEPEMIMPINAN</div>
                  <div className="text-sm font-semibold text-white">Kolaborasi Tim & Literasi Data</div>
                  <p className="text-xs text-zinc-400 mt-1">Membawa etos kerja disiplin, scientific rigor, dan adaptabilitas tinggi.</p>
                </div>
              </div>
            </div>

            {/* Quick Interactive Pillar Selector */}
            <div className="p-5 bg-gradient-to-r from-red-950/20 to-black/40 border border-[#DC0000]/20 rounded-xl">
              <div className="text-xs font-mono text-zinc-400 mb-2">FOKUS PENGEMBANGAN DIRI:</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-white/[0.06] text-zinc-200 border border-white/10 rounded">Mekanika Teoretis & Terapan</span>
                <span className="px-3 py-1 bg-white/[0.06] text-zinc-200 border border-white/10 rounded">Python & Algoritma OOP</span>
                <span className="px-3 py-1 bg-white/[0.06] text-zinc-200 border border-white/10 rounded">Visual Studio Code Mastery</span>
                <span className="px-3 py-1 bg-white/[0.06] text-zinc-200 border border-white/10 rounded">Data-Driven Decision Making</span>
                <span className="px-3 py-1 bg-[#DC0000]/20 text-rose-300 border border-[#DC0000]/40 rounded">Scuderia Engineering Mindset</span>
              </div>
            </div>
          </div>

          {/* Column 2: Profile Picture with Artistic Border & Metric Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Artistic Border Frame */}
            <div className="relative group w-full max-w-sm">
              {/* Outer decorative glowing elements & corner brackets */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#DC0000] via-rose-600 to-amber-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Corner tech accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FF2800] z-20 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#FF2800] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#FF2800] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FF2800] z-20 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-[#111116] border border-white/10 rounded-xl overflow-hidden p-3 shadow-2xl">
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-zinc-900">
                  <img
                    src={avatarImg}
                    alt="Esa Sanjaya - Mahasiswa Fisika & Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled container if image ever fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle red gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-2 rounded border border-white/10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Esa Sanjaya</span>
                    </span>
                    <span className="text-[#FF2800]">UNIMED</span>
                  </div>
                </div>

                {/* Subtext info under photo */}
                <div className="pt-4 px-2 pb-1 space-y-3">
                  <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-white/[0.06] pb-2">
                    <span>Program Studi</span>
                    <span className="font-semibold text-white">S-1 Fisika</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-white/[0.06] pb-2">
                    <span>Institusi</span>
                    <span className="font-semibold text-white">Univ. Negeri Medan</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-white/[0.06] pb-2">
                    <span>Minat Riset & Dev</span>
                    <span className="font-semibold text-white">Komputasi & Simulasi Game</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-400">
                    <span>Filosofi Kerja</span>
                    <span className="font-semibold text-[#FF2800]">Precision & Passion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote pill */}
            <div className="mt-6 text-center max-w-sm px-4">
              <p className="text-xs italic text-zinc-400 border-l-2 border-[#DC0000] pl-3 text-left">
                "Menguasai ilmu fisika memberi landasan bagaimana semesta bekerja; menguasai kode memberi kuasa untuk menyimulasikannya."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
