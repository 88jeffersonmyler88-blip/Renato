import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Share2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface GoogleProfileBarProps {
  onOpenModal: (modal: 'rotas' | 'salvar' | 'compartilhar' | 'fachada') => void;
  onScrollToGallery: () => void;
  onScrollToMap: () => void;
}

export const GoogleProfileBar: React.FC<GoogleProfileBarProps> = ({
  onOpenModal,
  onScrollToGallery,
  onScrollToMap,
}) => {
  // Check if store is open right now based on local time
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 4 is Thursday, etc.
  const hours = now.getHours();
  
  let isOpenNow = false;
  let statusText = "Fechado · Abre qui. às 08:00";

  if (day >= 1 && day <= 5) {
    if (hours >= 8 && hours < 18) {
      isOpenNow = true;
      statusText = "Aberto agora · Fecha às 18:00";
    } else if (hours < 8) {
      statusText = "Fechado · Abre hoje às 08:00";
    } else {
      statusText = "Fechado · Abre amanhã às 08:00";
    }
  } else if (day === 6) {
    if (hours >= 8 && hours < 12) {
      isOpenNow = true;
      statusText = "Aberto agora · Fecha às 12:00";
    } else {
      statusText = "Fechado · Abre seg. às 08:00";
    }
  } else {
    statusText = "Fechado · Abre seg. às 08:00";
  }

  return (
    <div className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0b0b0f]/95 border border-[#8F0F16]/40 rounded-2xl p-5 sm:p-7 shadow-2xl shadow-[#55080E]/40 backdrop-blur-xl">
        
        {/* Top Google header strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800/80">
          
          {/* Business Info Lockup with Official PeliCar Logo */}
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-2.5 rounded-xl bg-black/60 border border-[#8F0F16]/50 shrink-0 shadow-lg shadow-[#55080E]/40">
              <img
                src={STORE_INFO.logoUrl}
                alt="PeliCar - Películas de Controle Solar"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                <span className="text-[#E0222D] font-bold uppercase tracking-wider">Perfil Verificado no Google</span>
                <span>·</span>
                <span>{STORE_INFO.category}</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2">
                <h1 className="text-xl sm:text-2xl font-black italic text-white tracking-tight uppercase">
                  PELICAR <span className="font-light text-neutral-300 text-sm sm:text-base not-italic">· Películas de Controle Solar</span>
                </h1>
              </div>

              {/* Google 5.0 Star Rating */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <div className="flex items-center gap-1 bg-[#180a0c] border border-[#8F0F16]/60 px-2.5 py-1 rounded-lg">
                  <span className="font-black text-amber-400 text-base tabular-nums">5.0</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <a 
                  href="#avaliacoes" 
                  className="text-sm font-semibold text-neutral-300 hover:text-[#E0222D] transition-colors underline underline-offset-4 decoration-[#8F0F16]"
                >
                  {STORE_INFO.reviewCount} avaliações no Google
                </a>

                <span className="text-xs text-neutral-500 hidden sm:inline">·</span>

                <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Nota Máxima em Itajaí
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Google Action Buttons (Rotas, Compartilhar, Ligar) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5 border-b border-neutral-800/80">
          <button
            onClick={() => onOpenModal('rotas')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl rswf-gradient-btn text-white transition-all hover:-translate-y-0.5 group"
          >
            <Navigation className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">Rotas</span>
            <span className="text-[10px] text-red-100 mt-0.5">Google Maps / Waze</span>
          </button>

          <button
            onClick={() => onOpenModal('compartilhar')}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-[#8F0F16]/80 text-white transition-all hover:-translate-y-0.5 group"
          >
            <Share2 className="w-5 h-5 mb-1 text-[#E0222D] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Compartilhar</span>
            <span className="text-[10px] text-neutral-400 mt-0.5">Indicar Amigos</span>
          </button>

          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-[#8F0F16]/80 text-white transition-all hover:-translate-y-0.5 group"
          >
            <Phone className="w-5 h-5 mb-1 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Ligar</span>
            <span className="text-[10px] text-neutral-400 mt-0.5">(47) 98467-5758</span>
          </a>
        </div>

        {/* Address, Phone and Schedule details directly from Google */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 text-xs text-neutral-300">
          
          {/* Address */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-900">
            <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Endereço:</span>
              <p className="text-neutral-400 leading-relaxed">
                {STORE_INFO.address}
              </p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-900">
            <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Telefone & WhatsApp:</span>
              <p className="text-neutral-400 leading-relaxed font-semibold">
                {STORE_INFO.phone}
              </p>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-medium inline-flex items-center gap-1 mt-1"
              >
                Atendimento rápido online <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-900">
            <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Horário de funcionamento:</span>
              <p className={`font-semibold ${isOpenNow ? 'text-emerald-400' : 'text-amber-400'}`}>
                {statusText}
              </p>
              <p className="text-neutral-400 mt-0.5">
                Segunda a Sexta: 08:00 – 18:00 | Sábado: 08:00 – 12:00 (Com Agendamento)
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
