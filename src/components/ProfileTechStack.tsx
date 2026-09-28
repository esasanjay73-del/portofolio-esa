import React, { useState } from 'react';
import { ShieldCheck, Terminal, Cpu, Lock, Network, Binary, CheckCircle2, Server, Award } from 'lucide-react';
import avatarImg from '../assets/images/regenerated_image_1790605847690.jpg';
import cyberTerminalImg from '../assets/images/cyber_security_terminal_1790599097930.jpg';

export const ProfileTechStack: React.FC = () => {
  const skills = [
    {
      name: "Python",
      category: "Scripting, Automation & Security Tooling",
      level: 90,
      badge: "Advanced",
      desc: "Eksplorasi automasi audit, soket jaringan, dan parser log keamanan."
    },
    {
      name: "Linux (Debian / Kali / Arch)",
      category: "OS & Terminal Administration",
      level: 86,
      badge: "Core OS",
      desc: "Manajemen hak akses file, proses sistem, bash scripting, dan pengamanan server."
    },
    {
      name: "Jaringan Komputer (Networking)",
      category: "TCP/IP, Wireshark, Subnetting & Routing",
      level: 84,
      badge: "Architecture",
      desc: "Analisis lalu lintas paket data, arsitektur OSI Layer, dan konfigurasi firewall."
    },
    {
      name: "Logika Algoritma & Kriptografi",
      category: "Hashing, AES/RSA, Complexity",
      level: 88,
      badge: "Theoretical",
      desc: "Pemecahan masalah deterministik, struktur data graf & pohon, enkripsi modern."
    },
    {
      name: "Visual Studio Code",
      category: "Primary Engineering Workspace",
      level: 95,
      badge: "Environment",
      desc: "Integrasi Git, debugging interaktif, ekstensi linting, dan environment terisolasi."
    }
  ];

  return (
    <section id="profil" className="relative py-24 px-4 sm:px-6 bg-[#0c0e14] border-t border-b border-white/[0.08]">
      {/* Background Neon ambient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00f3ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f3ff] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>// 01 · PROFIL & INFRASTRUKTUR TEKNOLOGI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
            Visi Keamanan Siber <span className="text-zinc-600">&</span> Tech Stack
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Narrative & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* About Cyber Vision Glass Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl relative overflow-hidden border border-cyan-500/20">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00f3ff] to-[#00ff41]" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#00ff41] bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                  MAHASISWA ILMU KOMPUTER UNIMED
                </span>
                <span className="text-xs font-mono text-zinc-500">ID: SEC-2026</span>
              </div>

              <h3 className="text-xl font-mono font-bold text-white mb-3">
                Dedikasi Menuju Cyber Security Engineer
              </h3>
              
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-4 font-sans">
                Sebagai mahasiswa Ilmu Komputer di <strong>Universitas Negeri Medan</strong>, visi utama saya adalah bertumbuh menjadi seorang <strong>Cyber Security Engineer</strong> yang tangguh dan adaptif. Saya memusatkan fokus pembelajaran pada pengamanan infrastruktur digital modern, pendalaman prinsip-prinsip kriptografi, serta identifikasi dan mitigasi celah kerentanan dalam arsitektur jaringan komputer.
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base font-sans">
                Dalam era komputasi terdistribusi di mana ancaman siber kian mutakhir, mengamankan data dan integritas sistem bukan lagi sekadar opsi teknis, melainkan sebuah tanggung jawab etis dan strategis. Saya terus mengasah kemampuan analitis untuk memahami bagaimana sebuah celah dieksploitasi agar dapat merancang pertahanan berlapis (*defense-in-depth*) yang kebal terhadap serangan.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-[#00f3ff] mb-1.5 font-mono text-xs font-bold">
                  <Lock className="w-4 h-4" />
                  <span>KRIPTOGRAFI</span>
                </div>
                <div className="text-sm font-bold text-white">Integritas Data</div>
                <p className="text-xs text-zinc-400 mt-1">Pemahaman algoritma enkripsi simetris, asimetris, dan hashing aman.</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-[#00ff41] mb-1.5 font-mono text-xs font-bold">
                  <Network className="w-4 h-4" />
                  <span>JARINGAN</span>
                </div>
                <div className="text-sm font-bold text-white">Analisis Protokol</div>
                <p className="text-xs text-zinc-400 mt-1">Inspeksi paket TCP/IP, segmentasi jaringan, dan deteksi intrusi.</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-[#00f3ff] mb-1.5 font-mono text-xs font-bold">
                  <Server className="w-4 h-4" />
                  <span>HARDENING</span>
                </div>
                <div className="text-sm font-bold text-white">Sistem Linux</div>
                <p className="text-xs text-zinc-400 mt-1">Konfigurasi hak akses minim (*least privilege*) dan manajemen firewall.</p>
              </div>
            </div>

            {/* Terminal Skill Barcharts */}
            <div className="glass-panel p-6 sm:p-7 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                  <Terminal className="w-4 h-4 text-[#00f3ff]" />
                  <span>TERMINAL TECH STACK & PROFICIENCY</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">v4.8 - SEC_LEVEL_READY</span>
              </div>

              <div className="space-y-4 pt-1">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-white font-bold flex items-center gap-1.5">
                        <span className="text-[#00f3ff]">&gt;</span> {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 text-[10px] hidden sm:inline">{skill.category}</span>
                        <span className="text-[#00ff41] font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Terminal Progress Bar */}
                    <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/10 p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-[#00f3ff] to-[#00ff41] rounded-full transition-all duration-1000 shadow-[0_0_8px_#00f3ff]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Profile Cyber ID & Visual Assets (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Cyber ID Card */}
            <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 shadow-2xl relative group">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-black mb-4">
                <img
                  src={avatarImg}
                  alt="Esa Sanjaya - Cyber Security Student"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Cyber HUD Overlays */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-500/30 text-[11px] font-mono text-[#00f3ff] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00ff41]" />
                  <span>ESA SANJAYA</span>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-zinc-400">
                  UNIMED · CS
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-2.5 rounded border border-white/10 flex justify-between items-center font-mono text-xs">
                  <span className="text-zinc-400">SECURITY ROLE:</span>
                  <span className="text-[#00ff41] font-bold">DEFENDER & ANALYST</span>
                </div>
              </div>

              {/* Quick Spec List */}
              <div className="space-y-2 font-mono text-xs p-2">
                <div className="flex justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span>Institusi Akademis:</span>
                  <span className="text-white font-semibold">Universitas Negeri Medan</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span>Program Studi:</span>
                  <span className="text-white font-semibold">S-1 Ilmu Komputer</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span>Fokus Riset:</span>
                  <span className="text-[#00f3ff] font-semibold">Kriptografi & Network Defense</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Status Sistem:</span>
                  <span className="text-[#00ff41] font-semibold">Aktif Mempelajari Vulnerability</span>
                </div>
              </div>
            </div>

            {/* Cyber Terminal Preview Image */}
            <div className="glass-panel p-3 rounded-xl border border-white/10 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black">
                <img
                  src={cyberTerminalImg}
                  alt="Cyber Security Operations Console"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-zinc-300">
                  <div className="text-[10px] text-[#00f3ff]">SIMULASI LAB KEAMANAN:</div>
                  <div className="font-bold text-white">Inspeksi Paket Data & Audit Enkripsi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
