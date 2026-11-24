import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, ZoomIn, X } from 'lucide-react';
import { INITIAL_PRODUCTS, STORE_INFO } from '../data/mockData';
import { ProductItem } from '../types';

interface ProductsShowcaseProps {
  onTriggerToast: (msg: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onTriggerToast }) => {
  const [products] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="produtos" className="py-20 bg-[#070709] border-t border-neutral-900 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C71A24]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Centered RSWF Emblem and Titles */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Subtitle pill: Studio PeliCar Peliculas Especiais */}
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E0222D] mb-3 bg-[#55080E]/40 border border-[#8F0F16]/60 px-4 py-1.5 rounded-full shadow-lg shadow-[#55080E]/30">
            <ShieldCheck className="w-4 h-4 text-[#C71A24]" />
            <span>Studio PeliCar Peliculas Especiais</span>
          </div>

          {/* Heading: Aplicador autorizado */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight uppercase mb-6">
            Aplicador autorizado
          </h2>

          {/* Centered Highlighted Logo RSWF Películas Especiais */}
          <div className="inline-flex items-center justify-center p-6 sm:p-8 bg-gradient-to-b from-[#140608]/90 via-[#0a0a0d] to-[#070709] border border-[#8F0F16]/70 rounded-2xl shadow-2xl shadow-[#8F0F16]/40 backdrop-blur-xl group transition-all duration-300 hover:border-[#C71A24]">
            <img
              src="/assets/aistudio/Logo_R5WF_0a1e4b2c.png"
              alt="RSWF Películas Especiais - Aplicador Autorizado"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_24px_rgba(199,26,36,0.6)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 4 Film Lines Catalog Grid - Enlarged 2-column layout for high visibility of technical specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0b0b0f] border border-neutral-800/80 hover:border-[#8F0F16] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#55080E]/50 flex flex-col"
            >
              {/* Flyer Poster Visual Card - enlarged unaltered full flyer */}
              <div
                className="relative w-full aspect-[1206/1480] overflow-hidden bg-black cursor-pointer flex items-center justify-center"
                onClick={() => setSelectedImage(item.imageUrl)}
                title={`Clique para ampliar ${item.name}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay with Zoom Prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5">
                  <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-700 mx-auto shadow-2xl">
                    <ZoomIn className="w-4 h-4 text-[#C71A24]" />
                    <span>Clique para Ampliar em Tela Cheia</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-850">
                <a
                  href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Olá PELICAR! Gostaria de um orçamento para a linha ${item.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl rswf-gradient-btn text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.01] shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Orçar {item.name} no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL: View Full High-Res Poster */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[95vh] w-full bg-neutral-950 border border-[#8F0F16]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/85 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors shadow-lg"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-auto max-h-[90vh] p-2 sm:p-4 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Ampliação do Catálogo"
                className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
