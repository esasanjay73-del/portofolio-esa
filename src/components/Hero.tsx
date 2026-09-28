import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Terminal, Shield, Lock, ChevronRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Terminal Typing effect states
  const terminalLines = [
    "> Status: Mahasiswa Ilmu Komputer...",
    "> Target: Cyber Security Engineer...",
    "> System: Universitas Negeri Medan_"
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", "", ""]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Canvas Matrix Binary Rain effect (0s and 1s)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '0101011001010011010111001010110010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const render = () => {
      // Semi-transparent black background creates fade trail
      ctx.fillStyle = 'rgba(10, 10, 15, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomly tint bright cyan or matrix green
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#00f3ff'; // Bright cyan head
        } else if (Math.random() > 0.4) {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.35)'; // Matrix green
        } else {
          ctx.fillStyle = 'rgba(0, 243, 255, 0.15)'; // Dim cyan
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Real-time terminal multi-line typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentLineIndex < terminalLines.length) {
          const currentFullLine = terminalLines[currentLineIndex];

          if (currentCharIndex < currentFullLine.length) {
            setDisplayedLines((prev) => {
              const updated = [...prev];
              updated[currentLineIndex] = currentFullLine.slice(0, currentCharIndex + 1);
              return updated;
            });
            setCurrentCharIndex((prev) => prev + 1);
            timeout = setTimeout(handleTyping, 45);
          } else {
            // Move to next line
            if (currentLineIndex + 1 < terminalLines.length) {
              setCurrentLineIndex((prev) => prev + 1);
              setCurrentCharIndex(0);
              timeout = setTimeout(handleTyping, 220);
            } else {
              // Pause at the end of all 3 lines before looping
              timeout = setTimeout(() => {
                setIsDeleting(true);
                handleTyping();
              }, 4000);
            }
          }
        }
      } else {
        // Clear and restart
        setDisplayedLines(["", "", ""]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsDeleting(false);
        timeout = setTimeout(handleTyping, 400);
      }
    };

    timeout = setTimeout(handleTyping, 400);
    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex, isDeleting]);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-[#0a0a0f]"
    >
      {/* HTML5 Canvas Binary Rain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-45 z-0"
      />

      {/* Cyber Grid & Radial Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00f3ff]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,243,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto w-full text-center z-10 flex flex-col items-center">
        {/* Terminal Protocol Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f3ff] mb-6 glass-panel px-4 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-ping" />
          <span>SECURITY PROTOCOL: ONLINE</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">UNIMED COMPUTER SCIENCE</span>
        </div>

        {/* Massive Dominant Name with Glitch / Neon Hover Effect */}
        <div className="mb-6 relative group cursor-pointer">
          <h1 className="glitch-text font-mono font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase select-none">
            Esa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#00ff41] to-cyan-300">Sanjaya</span>
          </h1>
          <div className="text-[11px] font-mono text-zinc-500 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
            [ HOVER NAMA UNTUK SENSASI GLITCH & NEON ]
          </div>
        </div>

        {/* Real-time Terminal Window for Typing Effect */}
        <div className="w-full max-w-2xl bg-black/80 border border-cyan-500/30 rounded-xl p-4 sm:p-6 mb-10 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden group">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-zinc-400 ml-2">bash - session://esa-sanjaya</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#00f3ff]">
              <Lock className="w-3 h-3" />
              <span>TLS 1.3 ENCRYPTED</span>
            </div>
          </div>

          {/* Terminal Typing Lines */}
          <div className="font-mono text-xs sm:text-sm space-y-2 text-zinc-300 min-h-[85px]">
            <p className="text-[#00ff41] font-semibold">
              {displayedLines[0]}
              {currentLineIndex === 0 && <span className="terminal-cursor" />}
            </p>
            <p className="text-[#00f3ff] font-semibold">
              {displayedLines[1]}
              {currentLineIndex === 1 && <span className="terminal-cursor" />}
            </p>
            <p className="text-zinc-200">
              {displayedLines[2]}
              {currentLineIndex === 2 && <span className="terminal-cursor" />}
            </p>
          </div>

          {/* Decorative corner cyber marks */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00f3ff] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00f3ff] pointer-events-none" />
        </div>

        {/* Cyber Button CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#profil"
            className="cyber-button px-8 py-3.5 text-sm font-mono font-bold text-black bg-[#00f3ff] hover:bg-[#00ff41] transition-all duration-200 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)] flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Akses Portofolio</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#tim-favorit"
            className="px-6 py-3.5 text-sm font-mono text-zinc-300 hover:text-white glass-panel hover:border-cyan-500/40 rounded transition-all duration-200"
          >
            <span>Eksplorasi Madrid & Ferrari &rarr;</span>
          </a>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#profil"
        aria-label="Scroll to Profile & Tech Stack"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500 hover:text-[#00f3ff] transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest mb-1 text-zinc-400">SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#00f3ff]" />
      </a>
    </section>
  );
};
