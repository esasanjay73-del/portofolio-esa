import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenSourceModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSourceModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'profil', 'hobi', 'tim-favorit', 'kontak'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Profil & Keahlian', href: '#profil', id: 'profil' },
    { name: 'Hobi', href: '#hobi', id: 'hobi' },
    { name: 'Tim Favorit', href: '#tim-favorit', id: 'tim-favorit' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-black/80 py-3.5 border-b border-cyan-500/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Zone with { ES } Curly Brackets that glow on hover */}
        <a
          href="#beranda"
          className="group flex items-center gap-2 text-white tracking-wider focus-visible:outline-none"
        >
          <div className="font-mono font-bold text-xl sm:text-2xl tracking-tighter text-[#00f3ff] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_#00f3ff] group-hover:scale-105">
            <span className="text-zinc-500 group-hover:text-[#00ff41] transition-colors">{'{ '}</span>
            <span className="text-white group-hover:text-[#00f3ff]">ES</span>
            <span className="text-zinc-500 group-hover:text-[#00ff41] transition-colors">{' }'}</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-zinc-400 border-l border-white/10 pl-2 group-hover:text-zinc-200">
            root@esa-sec:~#
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#00f3ff] font-semibold drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="text-zinc-600 mr-1">/</span>
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSourceModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-[#00f3ff] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00f3ff]/40 rounded transition-all"
            title="Lihat Kode HTML/CSS/JS Lengkap"
          >
            <Code2 className="w-3.5 h-3.5 text-[#00f3ff]" />
            <span>Lihat Kode</span>
          </button>
          
          <a
            href="#kontak"
            className="cyber-button px-4 py-2 text-xs font-mono font-bold text-black bg-[#00f3ff] hover:bg-[#00ff41] transition-all duration-200 shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]"
          >
            Enkripsi Pesan
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSourceModal}
            aria-label="Lihat Kode"
            className="p-2 text-zinc-300 hover:text-[#00f3ff] bg-white/5 border border-white/10 rounded"
          >
            <Code2 className="w-4 h-4 text-[#00f3ff]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-zinc-300 hover:text-[#00f3ff] bg-white/5 border border-white/10 rounded focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f3ff]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-6 py-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm border-l-2 pl-3 transition-colors ${
                activeSection === link.id
                  ? 'border-[#00f3ff] text-[#00f3ff] bg-cyan-950/20 font-bold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 text-xs font-mono font-bold text-black bg-[#00f3ff] rounded shadow-[0_0_12px_rgba(0,243,255,0.5)]"
            >
              Kirim Pesan Enkripsi
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
