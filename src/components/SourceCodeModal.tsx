import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2, Sparkles } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  // The pristine, complete single-file index.html satisfying all user constraints
  const standaloneSingleFileHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Esa Sanjaya | Cyber Security & CS Portfolio</title>
  <meta name="description" content="Portofolio resmi Esa Sanjaya - Mahasiswa Ilmu Komputer Universitas Negeri Medan, Calon Cyber Security Engineer & Tech Innovator.">

  <!-- Google Fonts: JetBrains Mono & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">

  <style>
    /* ========================================================
       1. CSS VARIABLES & DASAR TEMA CYBERPUNK (OBSIDIAN DARK)
       ======================================================== */
    :root {
      --bg-dark: #0a0a0f;
      --bg-surface: #10131d;
      --bg-glass: rgba(16, 20, 32, 0.75);
      --border-glass: rgba(255, 255, 255, 0.08);
      --border-cyan: rgba(0, 243, 255, 0.35);
      
      /* Aksen Cyber Security */
      --neon-cyan: #00f3ff;
      --neon-cyan-glow: rgba(0, 243, 255, 0.4);
      --matrix-green: #00ff41;
      --matrix-glow: rgba(0, 255, 65, 0.35);
      
      /* Aksen Real Madrid */
      --madrid-gold: #ffd700;
      --madrid-gold-glow: rgba(255, 215, 0, 0.4);
      --madrid-white: #ffffff;
      
      /* Aksen Scuderia Ferrari */
      --ferrari-red: #DC0000;
      --ferrari-bright: #FF2800;
      --ferrari-glow: rgba(220, 0, 0, 0.4);

      /* Tipografi */
      --font-body: 'Inter', -apple-system, sans-serif;
      --font-code: 'JetBrains Mono', monospace;
      --text-main: #f4f4f7;
      --text-muted: #8b92a4;
      
      --container-width: 1200px;
      --transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: 1.6;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, .font-code {
      font-family: var(--font-code);
      letter-spacing: -0.02em;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font-family: var(--font-code);
      cursor: pointer;
      border: none;
      outline: none;
    }

    .container {
      max-width: var(--container-width);
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Kustomisasi Scrollbar Cyber */
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #07070b;
    }
    ::-webkit-scrollbar-thumb {
      background: #1b2333;
      border-radius: 2px;
      border: 1px solid var(--border-cyan);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--neon-cyan);
      box-shadow: 0 0 10px var(--neon-cyan);
    }

    /* Efek Glassmorphism */
    .glassmorphism {
      background: var(--bg-glass);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid var(--border-glass);
    }

    /* Cyber Button Chamfered */
    .cyber-btn {
      position: relative;
      padding: 0.75rem 1.6rem;
      background: var(--neon-cyan);
      color: #000;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px);
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cyber-btn:hover {
      background: var(--matrix-green);
      transform: translateY(-2px);
      box-shadow: 0 0 20px var(--matrix-glow);
    }

    /* ========================================================
       2. HEADER & NAVBAR (STICKY & GLASSMORPHISM)
       ======================================================== */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 0;
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border-glass);
      transition: var(--transition);
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      font-family: var(--font-code);
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      transition: var(--transition);
    }

    .brand-logo span {
      color: var(--neon-cyan);
      transition: var(--transition);
    }

    .brand-logo:hover span {
      color: var(--matrix-green);
      text-shadow: 0 0 12px var(--matrix-green);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
      font-family: var(--font-code);
      font-size: 0.85rem;
    }

    .nav-link {
      color: var(--text-muted);
      transition: var(--transition);
      position: relative;
      padding: 0.3rem 0;
    }

    .nav-link:hover, .nav-link.active {
      color: var(--neon-cyan);
      text-shadow: 0 0 8px rgba(0, 243, 255, 0.5);
    }

    .menu-toggle {
      display: none;
      background: transparent;
      color: var(--neon-cyan);
      font-size: 1.6rem;
      padding: 0.3rem;
    }

    /* ========================================================
       3. SEKSI HERO (BINARY RAIN & TERMINAL TYPING)
       ======================================================== */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 7rem 1.5rem 4rem;
      overflow: hidden;
      background: radial-gradient(circle at 50% 35%, rgba(0, 243, 255, 0.08) 0%, rgba(10, 10, 15, 1) 75%);
    }

    #matrix-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0.45;
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 820px;
    }

    .hero-badge {
      display: inline-block;
      font-family: var(--font-code);
      font-size: 0.75rem;
      color: var(--neon-cyan);
      background: rgba(0, 243, 255, 0.08);
      border: 1px solid var(--border-cyan);
      padding: 0.35rem 1rem;
      border-radius: 99px;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .glitch-title {
      font-size: clamp(2.5rem, 7vw, 5.5rem);
      font-weight: 900;
      line-height: 1.05;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      color: #fff;
      cursor: default;
      transition: text-shadow 0.2s ease;
    }

    .glitch-title:hover {
      text-shadow: 2px 2px 0px var(--neon-cyan), -2px -2px 0px #ff0055, 0 0 20px var(--neon-cyan);
    }

    .glitch-title span {
      color: var(--neon-cyan);
    }

    /* Terminal Box Typing */
    .terminal-box {
      background: rgba(10, 14, 22, 0.85);
      border: 1px solid var(--border-cyan);
      border-radius: 10px;
      padding: 1.25rem 1.75rem;
      margin: 0 auto 2.5rem;
      text-align: left;
      font-family: var(--font-code);
      font-size: clamp(0.85rem, 2vw, 1rem);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
      max-width: 600px;
    }

    .terminal-header {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.6rem;
      margin-bottom: 0.8rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }

    .typing-line {
      min-height: 1.4em;
      margin-bottom: 0.35rem;
    }

    .cursor {
      display: inline-block;
      width: 8px;
      height: 1.1em;
      background: var(--neon-cyan);
      vertical-align: middle;
      margin-left: 4px;
      animation: blink 0.8s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* ========================================================
       4. SEKSI PROFIL & TECH STACK
       ======================================================== */
    .section-padding {
      padding: 6rem 0;
    }

    .section-tag {
      font-family: var(--font-code);
      font-size: 0.8rem;
      color: var(--neon-cyan);
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      margin-bottom: 3rem;
      color: #fff;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 3.5rem;
      align-items: start;
    }

    .bio-card {
      padding: 2.2rem;
      border-radius: 12px;
      border-left: 4px solid var(--neon-cyan);
      margin-bottom: 2rem;
    }

    .bio-card h3 {
      font-size: 1.35rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    .bio-card p {
      color: #a7adb9;
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.7;
    }

    .skill-card {
      padding: 2rem;
      border-radius: 12px;
    }

    .skill-item {
      margin-bottom: 1.25rem;
    }

    .skill-meta {
      display: flex;
      justify-content: space-between;
      font-family: var(--font-code);
      font-size: 0.85rem;
      margin-bottom: 0.35rem;
    }

    .skill-meta strong {
      color: #fff;
    }

    .skill-meta span {
      color: var(--matrix-green);
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--neon-cyan), var(--matrix-green));
      border-radius: 4px;
      box-shadow: 0 0 8px var(--neon-cyan);
    }

    /* ========================================================
       5. SEKSI HOBI & EKSPLORASI (3D TILT CARDS)
       ======================================================== */
    .hobbies-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }

    .hobby-card {
      border-radius: 14px;
      padding: 2.2rem;
      transition: var(--transition);
      transform-style: preserve-3d;
      border: 1px solid var(--border-glass);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Efek 3D Tilt saat di-hover */
    .hobby-card:hover {
      transform: translateY(-8px) rotateX(3deg) rotateY(-3deg);
      border-color: var(--neon-cyan);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 243, 255, 0.25);
    }

    .hobby-kicker {
      font-family: var(--font-code);
      font-size: 0.75rem;
      color: var(--neon-cyan);
      margin-bottom: 0.4rem;
    }

    .hobby-title {
      font-size: 1.45rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 1rem;
    }

    .hobby-desc {
      color: #a4aab9;
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .hobby-tags {
      list-style: none;
      font-family: var(--font-code);
      font-size: 0.8rem;
      color: #8b92a4;
    }

    .hobby-tags li {
      padding: 0.25rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hobby-tags li::before {
      content: '>';
      color: var(--matrix-green);
      font-weight: bold;
    }

    /* ========================================================
       6. SEKSI TIM FAVORIT (PARALLAX SPLIT SCREEN)
       ======================================================== */
    .split-section {
      padding: 6rem 0;
      background: #000;
    }

    .split-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
    }

    /* Kiri / Atas: Real Madrid */
    .madrid-side {
      background: linear-gradient(135deg, rgba(24, 22, 12, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%);
      padding: 3.5rem 3rem;
      border-right: 1px solid rgba(255, 215, 0, 0.25);
      position: relative;
    }

    .madrid-side::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #fff, var(--madrid-gold));
    }

    .madrid-tag {
      display: inline-block;
      font-family: var(--font-code);
      font-size: 0.75rem;
      color: var(--madrid-gold);
      background: rgba(255, 215, 0, 0.12);
      border: 1px solid var(--madrid-gold);
      padding: 0.3rem 0.8rem;
      border-radius: 4px;
      margin-bottom: 1.25rem;
      font-weight: bold;
    }

    .madrid-title {
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 900;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    .madrid-title span {
      color: var(--madrid-gold);
      text-shadow: 0 0 15px var(--madrid-gold-glow);
    }

    .madrid-desc {
      color: #d8d8e2;
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    /* Kanan / Bawah: Scuderia Ferrari */
    .ferrari-side {
      background: linear-gradient(135deg, rgba(28, 6, 6, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%);
      padding: 3.5rem 3rem;
      position: relative;
    }

    .ferrari-side::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--ferrari-red), var(--ferrari-bright));
    }

    .ferrari-tag {
      display: inline-block;
      font-family: var(--font-code);
      font-size: 0.75rem;
      color: #fff;
      background: var(--ferrari-red);
      padding: 0.3rem 0.8rem;
      border-radius: 4px;
      margin-bottom: 1.25rem;
      font-weight: bold;
    }

    .ferrari-title {
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 900;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    .ferrari-title span {
      color: var(--ferrari-bright);
      text-shadow: 0 0 15px var(--ferrari-glow);
    }

    .ferrari-desc {
      color: #d8d8e2;
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    /* ========================================================
       7. SEKSI KONTAK & TERMINAL FORM
       ======================================================== */
    .contact-wrapper {
      max-width: 760px;
      margin: 0 auto;
    }

    .terminal-form {
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border-cyan);
    }

    .form-topbar {
      background: #131724;
      padding: 0.8rem 1.25rem;
      border-bottom: 1px solid var(--border-glass);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-code);
      font-size: 0.8rem;
      color: #8b92a4;
    }

    .form-inner {
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.25rem;
    }

    .form-label {
      display: block;
      font-family: var(--font-code);
      font-size: 0.75rem;
      color: var(--neon-cyan);
      margin-bottom: 0.35rem;
    }

    .form-input, .form-textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid var(--border-glass);
      border-radius: 6px;
      padding: 0.75rem 1rem;
      color: #fff;
      font-family: var(--font-code);
      font-size: 0.9rem;
      transition: var(--transition);
    }

    .form-input:focus, .form-textarea:focus {
      outline: none;
      border-color: var(--neon-cyan);
      box-shadow: 0 0 12px var(--neon-cyan-glow);
    }

    /* Cyber Alert Modal */
    .cyber-alert-modal {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 2000;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .cyber-alert-modal.active {
      display: flex;
    }

    .cyber-alert-box {
      background: #0d111a;
      border: 2px solid var(--neon-cyan);
      border-radius: 12px;
      padding: 2.2rem;
      max-width: 440px;
      width: 100%;
      text-align: center;
      font-family: var(--font-code);
      box-shadow: 0 0 35px var(--neon-cyan-glow);
    }

    .cyber-alert-box h4 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 0.6rem;
    }

    .cyber-alert-box p {
      font-family: var(--font-body);
      font-size: 0.9rem;
      color: #a4aab9;
      margin-bottom: 1.5rem;
    }

    /* ========================================================
       8. FOOTER & PINTASAN MEDIA SOSIAL
       ======================================================== */
    footer {
      background: #06070a;
      border-top: 1px solid var(--border-glass);
      padding: 4rem 0 2.5rem;
      text-align: center;
    }

    .social-icons-wrapper {
      display: flex;
      justify-content: center;
      gap: 1.8rem;
      margin-bottom: 2rem;
    }

    .social-link-btn {
      width: 58px;
      height: 58px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a4aab9;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-glass);
      transition: var(--transition);
    }

    .social-link-btn svg {
      width: 26px;
      height: 26px;
      fill: currentColor;
      transition: var(--transition);
    }

    /* Animasi Floating saat di-hover */
    .social-link-btn:hover {
      transform: translateY(-8px) scale(1.1);
      color: var(--neon-cyan);
      border-color: var(--neon-cyan);
      box-shadow: 0 10px 25px var(--neon-cyan-glow);
    }

    .footer-copy {
      font-family: var(--font-code);
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    /* ========================================================
       9. ANIMASI SCROLL REVEAL (FADE-IN UP)
       ======================================================== */
    .fade-in-up {
      opacity: 0;
      transform: translateY(35px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .fade-in-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ========================================================
       10. MEDIA QUERIES (100% RESPONSIVE)
       ======================================================== */
    @media (max-width: 992px) {
      .profile-grid, .split-container {
        grid-template-columns: 1fr;
      }
      .madrid-side {
        border-right: none;
        border-bottom: 1px solid rgba(255, 215, 0, 0.25);
      }
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #0d111a;
        flex-direction: column;
        padding: 1.5rem 2rem;
        gap: 1.25rem;
        border-bottom: 1px solid var(--border-glass);
      }
      .nav-links.open {
        display: flex;
      }
      .hobbies-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- ========================================== -->
  <!-- A. NAVBAR (STICKY & GLASSMORPHISM)         -->
  <!-- ========================================== -->
  <header id="main-header">
    <div class="container nav-inner">
      <a href="#beranda" class="brand-logo">
        <span>{</span> ES <span>}</span>
      </a>

      <!-- Hamburger Menu Mobile -->
      <button class="menu-toggle" id="menu-btn" aria-label="Toggle Menu">☰</button>

      <ul class="nav-links" id="nav-list">
        <li><a href="#beranda" class="nav-link active">Beranda</a></li>
        <li><a href="#profil" class="nav-link">Profil & Keahlian</a></li>
        <li><a href="#hobi" class="nav-link">Hobi</a></li>
        <li><a href="#tim-favorit" class="nav-link">Tim Favorit</a></li>
        <li><a href="#kontak" class="nav-link">Kontak</a></li>
      </ul>
    </div>
  </header>

  <main>
    <!-- ========================================== -->
    <!-- B. SEKSI HERO (BERANDA)                    -->
    <!-- ========================================== -->
    <section id="beranda" class="hero-section">
      <!-- HTML5 Canvas Binary Rain -->
      <canvas id="matrix-canvas"></canvas>

      <div class="hero-content">
        <span class="hero-badge">ROOT ACCESS // SYSTEM VERIFIED</span>
        <h1 class="glitch-title">Esa <span>Sanjaya</span></h1>

        <!-- Terminal Typing Box -->
        <div class="terminal-box">
          <div class="terminal-header">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span style="color:#6e7687; font-size:0.75rem; margin-left:0.5rem;">bash - session://esa-sec</span>
          </div>
          <div id="typing-container">
            <div class="typing-line" style="color:var(--matrix-green); font-weight:600;"><span id="line-1"></span></div>
            <div class="typing-line" style="color:var(--neon-cyan); font-weight:600;"><span id="line-2"></span></div>
            <div class="typing-line" style="color:#fff;"><span id="line-3"></span><span class="cursor"></span></div>
          </div>
        </div>

        <a href="#profil" class="cyber-btn">
          Akses Portofolio &rarr;
        </a>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- C. SEKSI PROFIL & TECH STACK               -->
    <!-- ========================================== -->
    <section id="profil" class="section-padding">
      <div class="container">
        <div class="section-tag">// 01 · PROFIL & VISI REKAYASA</div>
        <h2 class="section-title">Tentang Saya & Keahlian Teknis</h2>

        <div class="profile-grid">
          <!-- Tentang Saya -->
          <article class="bio-card glassmorphism fade-in-up">
            <h3>Visi Menuju Ahli Keamanan Siber</h3>
            <p>
              Saya adalah mahasiswa Ilmu Komputer di <strong>Universitas Negeri Medan</strong> dengan ambisi kuat untuk menjadi seorang <strong>Cyber Security Engineer</strong>. Fokus utama saya tertuju pada upaya mengamankan infrastruktur digital, mempelajari mekanisme algoritma kriptografi modern, serta menganalisis dan memecahkan celah keamanan jaringan.
            </p>
            <p>
              Bagi saya, keamanan siber adalah disiplin berpikir logis yang menuntut pemahaman menyeluruh tentang bagaimana arsitektur komputer dan protokol transmisi beroperasi. Dengan menguasai fondasi algoritma dan administrasi sistem, saya bertekad membangun ekosistem digital yang tangguh dan terlindungi.
            </p>
          </article>

          <!-- Keahlian Teknis (Barchart) -->
          <div class="skill-card glassmorphism fade-in-up">
            <h3 style="font-size:1.15rem; margin-bottom:1.5rem; color:#fff;">Tech Stack & Kemahiran Terminal</h3>

            <div class="skill-item">
              <div class="skill-meta">
                <strong>Python</strong>
                <span>90%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 90%;"></div></div>
            </div>

            <div class="skill-item">
              <div class="skill-meta">
                <strong>Linux (Administration & Shell)</strong>
                <span>86%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 86%;"></div></div>
            </div>

            <div class="skill-item">
              <div class="skill-meta">
                <strong>Jaringan Komputer (TCP/IP & Packet Analysis)</strong>
                <span>84%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 84%;"></div></div>
            </div>

            <div class="skill-item">
              <div class="skill-meta">
                <strong>Logika Algoritma & Kriptografi</strong>
                <span>88%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 88%;"></div></div>
            </div>

            <div class="skill-item">
              <div class="skill-meta">
                <strong>Visual Studio Code</strong>
                <span>95%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 95%;"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- D. SEKSI HOBI & EKSPLORASI (3D TILT CARDS) -->
    <!-- ========================================== -->
    <section id="hobi" class="section-padding" style="background:#0c0f16;">
      <div class="container">
        <div class="section-tag">// 02 · HOBI & EKSPLORASI KREATIF</div>
        <h2 class="section-title">Ruang Eskapisme & Dunia Virtual</h2>

        <div class="hobbies-grid">
          <!-- Kartu 1: Membaca Komik -->
          <article class="hobby-card glassmorphism fade-in-up">
            <div>
              <div class="hobby-kicker">01 / ESKAPISME & NARATIF</div>
              <h3 class="hobby-title">Membaca Komik</h3>
              <p class="hobby-desc">
                Membaca komik dan manga menjadi ruang eskapisme yang menyenangkan sekaligus sarana stimulasi imajinasi kreatif. Dinamika visual cerita, eksplorasi plot yang kompleks, serta konsep seni futuristik memberi kesegaran pikiran dan inspirasi desain baru di luar dunia pengkodean.
              </p>
            </div>
            <ul class="hobby-tags">
              <li>Stimulasi imajinasi naratif dan visual</li>
              <li>Ruang relaksasi setelah sesi coding intensif</li>
              <li>Apresiasi seni ilustrasi dan tata letak panel</li>
            </ul>
          </article>

          <!-- Kartu 2: Gaming & Hardware -->
          <article class="hobby-card glassmorphism fade-in-up">
            <div>
              <div class="hobby-kicker">02 / TAKTIK & PERFORMA HARDWARE</div>
              <h3 class="hobby-title">Gaming & Hardware</h3>
              <p class="hobby-desc">
                Aktivitas bermain game mencakup perancangan taktik dalam game kompetitif dan kalkulasi langkah catur, menguji stabilitas performa hardware laptop melalui undervolting, serta mengeksplorasi dunia terbuka (*Open World*) megah seperti Genshin Impact dan Wuthering Waves.
              </p>
            </div>
            <ul class="hobby-tags">
              <li>Strategi taktis & probabilitas keputusan</li>
              <li>Optimasi termal dan efisiensi grafis laptop</li>
              <li>Eksplorasi open world berdensitas tinggi</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- E. SEKSI TIM FAVORIT (PARALLAX SPLIT)      -->
    <!-- ========================================== -->
    <section id="tim-favorit" class="split-section">
      <div class="container">
        <div style="text-align:center; margin-bottom:3rem;">
          <div class="section-tag" style="color:var(--madrid-gold);">// 03 · SHOWSTOPPER HIGHLIGHT</div>
          <h2 class="section-title" style="margin-bottom:0.5rem;">Tim Favorit: Dua Kutub Kejayaan</h2>
          <p style="color:#8b92a4; font-size:0.95rem;">Dedikasi terhadap sejarah epik sepak bola Eropa dan mahakarya aerodinamika Formula 1.</p>
        </div>

        <div class="split-container fade-in-up">
          <!-- Kiri / Atas: Real Madrid -->
          <article class="madrid-side">
            <span class="madrid-tag">REAL MADRID C.F. · KINGS OF EUROPE</span>
            <h3 class="madrid-title">Hala <span>Madrid</span></h3>
            <p class="madrid-desc">
              Kekaguman mendalam terhadap <strong>Real Madrid</strong> lahir dari mentalitas juara Eropa yang tak tertandingi (*Kings of Europe*). Rekor epik trofi Liga Champions dan sejarah emas di Santiago Bernabéu adalah bukti nyata tentang keteguhan mental pantang menyerah hingga peluit akhir berbunyi.
            </p>
            <div style="font-family:var(--font-code); font-size:0.8rem; color:var(--madrid-gold);">
              "¡Hasta el final, vamos Real! — DNA pemenang sejati."
            </div>
          </article>

          <!-- Kanan / Bawah: Scuderia Ferrari -->
          <article class="ferrari-side">
            <span class="ferrari-tag">SCUDERIA FERRARI · FORMULA 1</span>
            <h3 class="ferrari-title">Scuderia <span>Ferrari</span></h3>
            <p class="ferrari-desc">
              Apresiasi penuh untuk <strong>Scuderia Ferrari</strong> berakar pada keindahan teknik aerodinamika sasis *ground effect*, presisi mesin berkecepatan tinggi di sirkuit balap dunia, dan gairah murni para Tifosi yang setia membara melintasi era.
            </p>
            <div style="font-family:var(--font-code); font-size:0.8rem; color:var(--ferrari-bright);">
              "#EssereFerrari — Dedikasi dan kecepatan tanpa kompromi."
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- F. SEKSI KONTAK (TERMINAL FORM)            -->
    <!-- ========================================== -->
    <section id="kontak" class="section-padding">
      <div class="container contact-wrapper">
        <div style="text-align:center; margin-bottom:2.5rem;">
          <div class="section-tag">// 04 · GERBANG KOMUNIKASI TERENKRIPSI</div>
          <h2 class="section-title" style="margin-bottom:0.5rem;">Hubungi Saya</h2>
          <p style="color:#8b92a4; font-size:0.95rem;">Kirimkan pesan Anda secara aman melalui antarmuka konsol interaktif di bawah ini.</p>
        </div>

        <div class="terminal-form glassmorphism fade-in-up">
          <div class="form-topbar">
            <span>SOCKET: 443 // SHA-256 ENCRYPTION</span>
            <span>STATUS: LISTENING</span>
          </div>

          <form class="form-inner" id="cyber-contact-form" onsubmit="handleCyberSubmit(event)">
            <div class="form-group">
              <label class="form-label" for="client-name">&gt; NAMA PENGIRIM:</label>
              <input type="text" id="client-name" class="form-input" placeholder="Nama / Alias Anda" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="client-email">&gt; EMAIL [VALIDASI RFC]:</label>
              <input type="email" id="client-email" class="form-input" placeholder="user@domain.com" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="client-message">&gt; PESAN / PAYLOAD:</label>
              <textarea id="client-message" class="form-textarea" rows="4" placeholder="Tuliskan gagasan atau tawaran proyek Anda..." required></textarea>
            </div>

            <button type="submit" class="cyber-btn" style="width:100%; justify-content:center;">
              Kirim Enkripsi Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- ========================================== -->
  <!-- G. FOOTER & PINTASAN MEDIA SOSIAL          -->
  <!-- ========================================== -->
  <footer>
    <div class="container">
      <!-- Deretan Ikon Media Sosial Besar (Inline SVG) -->
      <div class="social-icons-wrapper">
        <!-- LinkedIn -->
        <a href="https://id.linkedin.com/in/esa-sanjaya-b69982414" target="_blank" rel="noopener noreferrer" class="social-link-btn" title="LinkedIn Esa Sanjaya">
          <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/esasanjay73-del" target="_blank" rel="noopener noreferrer" class="social-link-btn" title="GitHub Esa Sanjaya">
          <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>

        <!-- Instagram -->
        <a href="https://instagram.com/es,anjay4" target="_blank" rel="noopener noreferrer" class="social-link-btn" title="Instagram Esa Sanjaya">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>

      <!-- Copyright Resmi -->
      <p class="footer-copy">
        &copy; 2026 Esa Sanjaya | System Secured & Engineered with Passion.
      </p>
    </div>
  </footer>

  <!-- Cyber Alert Pop-up Modal -->
  <div class="cyber-alert-modal" id="cyber-modal">
    <div class="cyber-alert-box">
      <div style="font-size:2rem; margin-bottom:0.5rem; color:var(--neon-cyan);">[ SECURED ]</div>
      <h4>Pesan Berhasil Dikirim!</h4>
      <p>Muatan data telah dienkripsi dengan standar TLS 1.3 dan dipancarkan ke inbox Esa Sanjaya.</p>
      <button class="cyber-btn" style="width:100%; justify-content:center;" onclick="closeCyberAlert()">Tutup Alert</button>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- JAVASCRIPT MURNI (LOGIKA LENGKAP)          -->
  <!-- ========================================== -->
  <script>
    // --------------------------------------------------
    // 1. ANIMASI MATRIX BINARY RAIN DI HTML5 CANVAS
    // --------------------------------------------------
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const binaryChars = '011010010110111001010011010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));

    function drawMatrix() {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px 'JetBrains Mono', monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        ctx.fillStyle = Math.random() > 0.85 ? '#00f3ff' : 'rgba(0, 255, 65, 0.35)';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(drawMatrix);
    }
    drawMatrix();

    // --------------------------------------------------
    // 2. ANIMASI MENGETIK (REAL-TIME TERMINAL TYPING)
    // --------------------------------------------------
    const terminalLines = [
      "> Status: Mahasiswa Ilmu Komputer...",
      "> Target: Cyber Security Engineer...",
      "> System: Universitas Negeri Medan_"
    ];

    let lineIdx = 0;
    let charIdx = 0;

    function typeTerminal() {
      if (lineIdx < terminalLines.length) {
        const currentLine = terminalLines[lineIdx];
        const targetEl = document.getElementById('line-' + (lineIdx + 1));

        if (charIdx < currentLine.length) {
          targetEl.textContent = currentLine.substring(0, charIdx + 1);
          charIdx++;
          setTimeout(typeTerminal, 45);
        } else {
          lineIdx++;
          charIdx = 0;
          setTimeout(typeTerminal, 250);
        }
      } else {
        // Berhenti sejenak lalu ulang kembali
        setTimeout(() => {
          document.getElementById('line-1').textContent = '';
          document.getElementById('line-2').textContent = '';
          document.getElementById('line-3').textContent = '';
          lineIdx = 0;
          charIdx = 0;
          typeTerminal();
        }, 4500);
      }
    }
    document.addEventListener('DOMContentLoaded', typeTerminal);

    // --------------------------------------------------
    // 3. MENU HAMBURGER RESPONSIF MOBILE
    // --------------------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');

    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
      });
    });

    // --------------------------------------------------
    // 4. INTERSECTION OBSERVER (SCROLL REVEAL FADE-IN UP)
    // --------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));

    // Highlight menu aktif saat scroll
    window.addEventListener('scroll', () => {
      const sections = ['beranda', 'profil', 'hobi', 'tim-favorit', 'kontak'];
      const scrollPos = window.scrollY + 200;

      sections.forEach(id => {
        const el = document.getElementById(id);
        const navItem = document.querySelector('.nav-link[href="#' + id + '"]');
        if (el && navItem) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            navItem.classList.add('active');
          }
        }
      });
    });

    // --------------------------------------------------
    // 5. VALIDASI & PENANGANAN FORM KONTAK ENKRIPSI
    // --------------------------------------------------
    function handleCyberSubmit(event) {
      event.preventDefault();
      const email = document.getElementById('client-email').value;
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("SYNTAX ERROR: Format email tidak valid.");
        return;
      }

      // Tampilkan Cyber Alert Modal
      document.getElementById('cyber-modal').classList.add('active');
      document.getElementById('cyber-contact-form').reset();
    }

    function closeCyberAlert() {
      document.getElementById('cyber-modal').classList.remove('active');
    }
  </script>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneSingleFileHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneSingleFileHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e111a] border border-cyan-500/30 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-mono">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121624]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#00f3ff] flex items-center justify-center text-black font-bold shadow-md shadow-[#00f3ff]/40">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Kode Sumber index.html Mandiri (Pure HTML, CSS & Vanilla JS)
              </h3>
              <p className="text-xs text-zinc-400">
                1 File utuh tanpa dependensi luar, siap klik dua kali dan jalan di peramban web offline.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded bg-white/10 hover:bg-[#00f3ff] text-zinc-200 hover:text-black transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Semua Kode'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded bg-[#00f3ff] hover:bg-[#00ff41] text-black transition-colors shadow-md shadow-[#00f3ff]/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh index.html</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content View */}
        <div className="p-4 bg-[#07080d] overflow-auto flex-1 text-xs text-zinc-300">
          <pre className="p-3 bg-black/70 rounded-xl border border-white/5 whitespace-pre leading-relaxed">
            {standaloneSingleFileHtml}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#121624] border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <span>Struktur: Semantic HTML5 + CSS Variables + Vanilla JS + Inline SVG</span>
          <span className="text-[#00f3ff]">Siap simpan dan eksekusi langsung</span>
        </div>
      </div>
    </div>
  );
};
