import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Instagram, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onOpenSourceModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenSourceModal }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontak" className="relative py-24 px-4 sm:px-6 bg-[#0c0c10] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF2800] uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>03 · Hubungi & Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Mari Membangun <span className="text-zinc-500">&</span> Berinovasi
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
            Terbuka untuk diskusi proyek pengembangan perangkat lunak, simulasi interaktif, riset komputasi, atau sekadar bertukar wawasan seputar Formula 1.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#14141c] border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-6">
              <h3 className="text-lg font-heading font-bold text-white">
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#DC0000]/10 border border-[#DC0000]/30 flex items-center justify-center shrink-0 text-[#FF2800]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">EMAIL RESMI</div>
                    <a
                      href="mailto:esasanjay73@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#FF2800] transition-colors break-all"
                    >
                      esasanjay73@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-zinc-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">LOKASI STUDI</div>
                    <div className="text-sm font-semibold text-white">
                      Medan, Sumatera Utara, Indonesia
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Fakultas MIPA · Universitas Negeri Medan
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-zinc-400 mb-3">JARINGAN PROFESIONAL & SOSIAL</div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-[#DC0000] border border-white/10 hover:border-[#DC0000] text-zinc-300 hover:text-white text-xs font-medium transition-all group"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-[#DC0000] border border-white/10 hover:border-[#DC0000] text-zinc-300 hover:text-white text-xs font-medium transition-all group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-[#DC0000] border border-white/10 hover:border-[#DC0000] text-zinc-300 hover:text-white text-xs font-medium transition-all group"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>

            {/* Standalone code preview box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-black to-[#13131c] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-[#FF2800] mb-0.5">DOKUMENTASI KODE LENGKAP</div>
                <div className="text-sm font-semibold text-white">Sumber Kode Murni (HTML/CSS/JS)</div>
                <div className="text-xs text-zinc-400 mt-1">Siap disalin dan dijalankan langsung di browser lokal.</div>
              </div>
              <button
                onClick={onOpenSourceModal}
                className="px-3.5 py-2 text-xs font-mono font-medium text-white bg-[#DC0000] hover:bg-[#FF2800] rounded-md transition-colors shrink-0 shadow-md shadow-[#DC0000]/30"
              >
                Salin Skrip
              </button>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#14141c] border border-white/[0.08] p-6 sm:p-8 rounded-xl shadow-xl relative">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Isi formulir di bawah ini untuk mengirimkan tawaran kerja sama atau pesan santai.
              </p>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-[#DC0000]/10 border border-[#DC0000]/30 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#DC0000] flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white">
                    Pesan Terkirim dengan Presisi!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-sm">
                    Terima kasih telah menghubungi. Pesan Anda telah dicatat dan Esa Sanjaya akan segera menindaklanjuti.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        NAMA LENGKAP *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="cth. Charles Leclerc"
                        className="w-full bg-[#0a0a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#DC0000] focus:ring-1 focus:ring-[#DC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        ALAMAT EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="cth. name@domain.com"
                        className="w-full bg-[#0a0a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#DC0000] focus:ring-1 focus:ring-[#DC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      TOPIK / SUBJEK
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="cth. Diskusi Proyek Software / Kolaborasi Fisika"
                      className="w-full bg-[#0a0a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#DC0000] focus:ring-1 focus:ring-[#DC0000] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      PESAN ANDA *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan gagasan, pertanyaan, atau detail proyek Anda di sini..."
                      className="w-full bg-[#0a0a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#DC0000] focus:ring-1 focus:ring-[#DC0000] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-heading font-bold text-white bg-[#DC0000] hover:bg-[#FF2800] rounded-lg shadow-md shadow-[#DC0000]/30 hover:shadow-[#DC0000]/50 transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan data...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
