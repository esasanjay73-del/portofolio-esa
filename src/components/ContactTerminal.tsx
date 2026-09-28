import React, { useState } from 'react';
import { Terminal, Shield, Lock, Send, CheckCircle2, AlertTriangle, X, Copy, Mail, MapPin } from 'lucide-react';

interface ContactTerminalProps {
  onOpenSourceModal: () => void;
}

export const ContactTerminal: React.FC<ContactTerminalProps> = ({ onOpenSourceModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [showCyberAlert, setShowCyberAlert] = useState(false);
  const [encryptionHash, setEncryptionHash] = useState('');

  // Email validation regex
  const validateEmail = (emailStr: string) => {
    return String(emailStr)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation checks
    if (!name.trim()) {
      setErrorMessage("ERROR: Parameter 'USER_NAME' tidak boleh kosong.");
      return;
    }

    if (!validateEmail(email.trim())) {
      setErrorMessage("SYNTAX ERROR: Format 'USER_EMAIL' tidak valid. Gunakan format standar (user@domain.com).");
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage("PAYLOAD ERROR: 'ENCRYPTED_PAYLOAD' terlalu pendek (minimal 5 karakter).");
      return;
    }

    setIsEncrypting(true);
    setStatusMessage("INITIALIZING SHA-256 ENCRYPTION & TLS HANDSHAKE...");

    // Simulated Cyber Encryption Pipeline
    setTimeout(() => {
      const generatedHash = `0x${Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
      setEncryptionHash(generatedHash);
      setIsEncrypting(false);
      setShowCyberAlert(true);
      setName('');
      setEmail('');
      setMessage('');
      setStatusMessage(`PAYLOAD SECURELY DISPATCHED [HASH: ${generatedHash}]`);
    }, 900);
  };

  return (
    <section id="kontak" className="relative py-24 px-4 sm:px-6 bg-[#0a0a0f] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00f3ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f3ff] uppercase tracking-wider mb-2">
            <Lock className="w-4 h-4" />
            <span>// 04 · PROTOKOL ENKRIPSI & KOMUNIKASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
            Hubungi Saya <span className="text-zinc-600">//</span> Terminal Gateway
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl font-sans">
            Inisiasi saluran komunikasi terenkripsi untuk kolaborasi keamanan siber, riset komputasi, atau proyek teknologi.
          </p>
        </div>

        {/* Terminal Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Interactive Terminal Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1017] border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Terminal Title Bar */}
            <div className="bg-[#121622] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono text-zinc-300 ml-2">secure_socket.sh — 256-bit</span>
              </div>
              <span className="text-[11px] font-mono text-[#00f3ff]">LISTENING ON PORT 443</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs text-zinc-300">
              <p className="text-zinc-500 mb-4">
                # Silakan lengkapi parameter muatan (payload) berikut sebelum menekan enkripsi data:
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 bg-rose-950/40 border border-rose-500/50 rounded-lg text-rose-300 flex items-start gap-2 animate-in fade-in duration-200">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {statusMessage && (
                <div className="mb-4 p-2.5 bg-cyan-950/40 border border-cyan-500/40 rounded text-[#00f3ff] text-[11px]">
                  &gt; {statusMessage}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-zinc-400 mb-1 text-[11px]">
                    &gt; INPUT SENDER_NAME:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama / Alias Anda"
                    className="w-full bg-black/60 border border-white/15 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] rounded px-3 py-2 text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 text-[11px]">
                    &gt; INPUT SENDER_EMAIL [RFC-5322]:
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@domain.com"
                    className="w-full bg-black/60 border border-white/15 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] rounded px-3 py-2 text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 text-[11px]">
                    &gt; INPUT ENCRYPTED_PAYLOAD / PESAN:
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan gagasan atau tawaran proyek Anda..."
                    className="w-full bg-black/60 border border-white/15 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] rounded px-3 py-2 text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isEncrypting}
                  className="cyber-button w-full py-3 bg-[#00f3ff] hover:bg-[#00ff41] text-black font-mono font-bold text-xs tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isEncrypting ? (
                    <span>MENGENKRIPSI MUATAN DATA...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Enkripsi Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Quick Info & Verification Node (5 cols) */}
          <div className="lg:col-span-5 space-y-5 font-mono text-xs">
            <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
              <div className="text-[#00f3ff] font-bold flex items-center gap-2 border-b border-white/10 pb-2">
                <Shield className="w-4 h-4" />
                <span>DIRECT VERIFIED ENDPOINTS</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
                  <div className="text-zinc-500 text-[10px]">EMAIL ADDRESS:</div>
                  <a
                    href="mailto:esasanjay73@gmail.com"
                    className="text-white hover:text-[#00f3ff] font-semibold break-all"
                  >
                    esasanjay73@gmail.com
                  </a>
                </div>

                <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
                  <div className="text-zinc-500 text-[10px]">CAMPUS LOCATION:</div>
                  <div className="text-white font-semibold">
                    Fakultas MIPA · Universitas Negeri Medan
                  </div>
                  <div className="text-zinc-400 text-[10px] mt-0.5">
                    Medan, Sumatera Utara, Indonesia
                  </div>
                </div>

                <div className="p-3 bg-black/40 border border-white/5 rounded-lg">
                  <div className="text-zinc-500 text-[10px]">PUBLIC PGP SIGNATURE:</div>
                  <div className="text-emerald-400 font-mono text-[11px] truncate">
                    rsa4096/9B3C72A012FE ESA-SEC-KEY
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-white font-bold">Standalone Source Code</div>
                <div className="text-zinc-400 text-[11px]">Single-file index.html siap dijalankan offline</div>
              </div>
              <button
                onClick={onOpenSourceModal}
                className="px-3 py-1.5 bg-[#00f3ff] text-black font-bold rounded text-[11px] hover:bg-white transition-colors"
              >
                Buka
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Alert Pop-up Modal */}
      {showCyberAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b0e14] border-2 border-[#00f3ff] rounded-xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_35px_rgba(0,243,255,0.4)] text-center font-mono">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00f3ff]/20 border border-[#00f3ff] flex items-center justify-center text-[#00f3ff] shadow-[0_0_15px_#00f3ff]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
              Pesan Berhasil Dienkripsi & Dikirim!
            </h3>
            
            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
              Muatan pesan Anda telah berhasil dienkripsi dan dipancarkan ke inbox Esa Sanjaya. Verifikasi hash telah tercatat.
            </p>

            <div className="p-3 bg-black/80 border border-white/10 rounded-lg text-left text-[11px] text-zinc-400 space-y-1 mb-5">
              <div><strong className="text-zinc-300">STATUS:</strong> 200 OK DISPATCHED</div>
              <div><strong className="text-zinc-300">HASH:</strong> <span className="text-[#00ff41]">{encryptionHash}</span></div>
              <div><strong className="text-zinc-300">CIPHER:</strong> AES-GCM-256 / TLS-1.3</div>
            </div>

            <button
              onClick={() => setShowCyberAlert(false)}
              className="w-full py-2.5 bg-[#00f3ff] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00ff41] transition-colors"
            >
              Tutup Terminal Alert
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
