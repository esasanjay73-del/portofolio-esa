/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileTechStack } from './components/ProfileTechStack';
import { HobbiesGrid } from './components/HobbiesGrid';
import { FavoriteTeamsSplit } from './components/FavoriteTeamsSplit';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';
import { SourceCodeModal } from './components/SourceCodeModal';
import { InteractiveChessDemo } from './components/InteractiveChessDemo';
import { HardwareBenchmarkModal } from './components/HardwareBenchmarkModal';

export default function App() {
  const [sourceModalOpen, setSourceModalOpen] = useState(false);
  const [chessModalOpen, setChessModalOpen] = useState(false);
  const [hardwareModalOpen, setHardwareModalOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSourceModalOpen(false);
        setChessModalOpen(false);
        setHardwareModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 flex flex-col font-sans selection:bg-[#00f3ff] selection:text-black">
      {/* Sticky & Glassmorphism Header */}
      <Navbar onOpenSourceModal={() => setSourceModalOpen(true)} />

      {/* Main Semantic Sections */}
      <main className="flex-1">
        {/* Seksi Hero (Beranda with Binary Rain & Terminal Typing) */}
        <Hero />

        {/* Seksi Profil & Tech Stack */}
        <ProfileTechStack />

        {/* Seksi Hobi & Eksplorasi (3D Tilt Cards) */}
        <HobbiesGrid
          onOpenChessDemo={() => setChessModalOpen(true)}
          onOpenHardwareDemo={() => setHardwareModalOpen(true)}
        />

        {/* Seksi Sorotan Khusus (Tim Favorit - Parallax Split: Madrid & Ferrari) */}
        <FavoriteTeamsSplit />

        {/* Seksi Kontak & Form (Terminal Gateway & Form Validation) */}
        <ContactTerminal onOpenSourceModal={() => setSourceModalOpen(true)} />
      </main>

      {/* Footer with Big Inline SVGs and Exact Copyright */}
      <Footer onOpenSourceModal={() => setSourceModalOpen(true)} />

      {/* Modals */}
      <SourceCodeModal
        isOpen={sourceModalOpen}
        onClose={() => setSourceModalOpen(false)}
      />

      <InteractiveChessDemo
        isOpen={chessModalOpen}
        onClose={() => setChessModalOpen(false)}
      />

      <HardwareBenchmarkModal
        isOpen={hardwareModalOpen}
        onClose={() => setHardwareModalOpen(false)}
      />
    </div>
  );
}
