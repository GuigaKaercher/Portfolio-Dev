import { useState, useEffect } from 'react'
import laursaImage from './assets/laursa-project.png'
import todolistImage from './assets/todolist-project.png'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const role = 'Full Stack Developer';

  // Efeito de digitação que se repete a cada 2 segundos
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      currentIndex = 0;

      typingInterval = setInterval(() => {
        if (currentIndex <= role.length) {
          setDisplayedText(role.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          // Espera 2 segundos e recomeça
          setTimeout(() => {
            setDisplayedText('');
            startTyping();
          }, 2000);
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
          >
            {'Guilherme Kaercher Dev'}
          </a>

          {/* Links de navegação */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Início
            </a>
            <a
              href="#projetos"
              onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projetos
            </a>
            <a
              href="#habilidades"
              onClick={(e) => { e.preventDefault(); scrollToSection('habilidades'); }}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Habilidades
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Menu */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 py-16 pt-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Lado Esquerdo - Ilustração */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              {/* Ilustração principal */}
              <svg viewBox="0 0 500 500" className="relative z-10 w-full h-auto">

                {/* Círculo de fundo */}
                <circle cx="250" cy="250" r="200" fill="url(#gradient1)" opacity="0.3"/>

                {/* Tela do laptop */}
                <rect x="150" y="180" width="200" height="140" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
                <rect x="160" y="190" width="180" height="110" fill="#0f172a"/>

                {/* Linhas de código */}
                <line x1="170" y1="205" x2="220" y2="205" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
                <line x1="170" y1="220" x2="250" y2="220" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round"/>
                <line x1="170" y1="235" x2="200" y2="235" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round"/>
                <line x1="170" y1="250" x2="270" y2="250" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
                <line x1="170" y1="265" x2="230" y2="265" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
                <line x1="170" y1="280" x2="260" y2="280" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>

                {/* Base do laptop */}
                <path d="M140 320 L360 320 L370 340 L130 340 Z" fill="#1e293b" stroke="#475569" strokeWidth="2"/>

                {/* Símbolos de código flutuantes */}
                <text x="80" y="150" fontSize="40" fill="#3b82f6" opacity="0.6" fontFamily="monospace">{"<>"}</text>
                <text x="370" y="160" fontSize="35" fill="#8b5cf6" opacity="0.6" fontFamily="monospace">{"{}"}</text>
                <text x="360" y="350" fontSize="30" fill="#06b6d4" opacity="0.6" fontFamily="monospace">{"()"}</text>
                <text x="90" y="360" fontSize="32" fill="#10b981" opacity="0.6" fontFamily="monospace">{"[]"}</text>

                {/* Definição de gradiente */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Partículas flutuantes da img */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="absolute bottom-24 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-40 right-12 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Guilherme Kaercher
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">{'>'}</span>
                <p className="text-lg md:text-xl tracking-wide text-purple-300 font-mono">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-xl">
               desenvolvo aplicações web que focam na experiência do usuário utilizando as melhores tecnologias presentes no mercado. Sou muito organizado e procuro um aprendizado contínuo para aumentar meu conhecimento.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LINKEDIN
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-3 rounded font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ===== SEÇÃO PROJETOS ===== */}
      <section id="projetos" className="py-20 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Projeto 1 - La Ursa */}
            <a
              href="https://github.com/GuigaKaercher/LaUrsa-Emprel"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700/50 cursor-pointer block"
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <img
                  src={laursaImage}
                  alt="Projeto LaUrsa"
                  className="w-full h-full object-cover"
                />
                {/* Ícone GitHub no hover */}
                <div className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Projeto LaUrsa</h3>
              <p className="text-gray-400 text-sm mb-4">Biblioteca de componentes para sites</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">React</span>
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Tailwind</span>
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Typescript</span>
              </div>
            </a>

            {/* Projeto 2 - To-do-list */}
            <a
              href="https://guigakaercher.github.io/To-do-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700/50 cursor-pointer block"
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <img
                  src={todolistImage}
                  alt="Projeto To-do-list"
                  className="w-full h-full object-cover"
                />
                {/* Ícone externo no hover */}
                <div className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">To-do-List</h3>
              <p className="text-gray-400 text-sm mb-4">Projeto de To-do-list feito com assistência de IA.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Html</span>
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Css</span>
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Javascript</span>
              </div>
            </a>

            {/* Projeto 3 - Em breve */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700/50">
              <div className="aspect-video bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projeto em breve</h3>
              <p className="text-gray-400 text-sm mb-4">Descrição do projeto será adicionada aqui.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Tag</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SEÇÃO HABILIDADES ===== */}
      <section id="habilidades" className="py-20 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Habilidades</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* HTML5 */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">HTML5</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* CSS3 */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">CSS3</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">JavaScript</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* TypeScript */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">TypeScript</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* React.js */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">React.js</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* Next.js */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">Next.js</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">Tailwind CSS</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* Node.js */}
            <div className="group bg-slate-800/50 backdrop-blur rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="text-purple-500 mb-3">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                </svg>
              </div>
              <p className="text-purple-400 font-semibold text-sm">Node.js</p>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODAL DE CONTATO ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
             onClick={() => setIsModalOpen(false)}>

          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 border border-purple-600/50 shadow-2xl shadow-purple-600/20"
               onClick={(e) => e.stopPropagation()}>

            {/* Botão fechar */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Título */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Entre em Contato!</h3>
            </div>

            {/* Informações */}
            <div className="space-y-6">

              {/* Telefone */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/80 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <a href="tel:+5581991357172" className="text-white font-semibold hover:text-purple-400 transition-colors">
                    (81) 99135-7172
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/80 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-white font-semibold">Recife, PE</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/80 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <a href="https://instagram.com/guigakaercher_" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-purple-400 transition-colors">
                    @guigakaercher_
                  </a>
                </div>
              </div>

            </div>

            {/* Botão fechar no rodapé */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Fechar
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default App
