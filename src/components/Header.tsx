import React, { useState } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, Flame } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070709]/95 backdrop-blur-md border-b border-[#8F0F16]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Official PeliCar Brand Logo */}
          <a href="#" className="flex items-center gap-3 group whitespace-nowrap shrink-0 py-1" aria-label="PeliCar - Películas de Controle Solar">
            <img
              src={STORE_INFO.logoUrl}
              alt="PeliCar - Películas de Controle Solar"
              className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)]"
            />
          </a>

          {/* Zone 2: 4-5 Navigation Links (Clean single-line text with hover underlines) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#produtos" className="hover:text-[#E0222D] transition-colors whitespace-nowrap shrink-0">
              Produtos
            </a>
            <a href="#galeria" className="hover:text-[#E0222D] transition-colors whitespace-nowrap shrink-0">
              Galeria de Serviços
            </a>
            <a href="#avaliacoes" className="hover:text-[#E0222D] transition-colors whitespace-nowrap shrink-0">
              Avaliações (30)
            </a>
            <a href="#localizacao" className="hover:text-[#E0222D] transition-colors whitespace-nowrap shrink-0">
              Localização & Mapa
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Instagram */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
              title="Siga @Pelicarrenato no Instagram"
            >
              <span className="text-pink-500 font-bold">@</span>
              <span>Pelicarrenato</span>
            </a>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl rswf-gradient-btn text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Orçamento WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-[#8F0F16]/40 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 hover:text-[#E0222D] transition-colors"
            >
              Produtos & Películas
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 hover:text-[#E0222D] transition-colors"
            >
              Galeria de Serviços
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 hover:text-[#E0222D] transition-colors"
            >
              30 Avaliações no Google
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-900 hover:text-[#E0222D] transition-colors"
            >
              Mapa & Rotas
            </a>
          </nav>
          <div className="pt-2 border-t border-neutral-800">
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
