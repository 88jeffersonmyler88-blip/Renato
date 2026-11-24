import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  Compass, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface StoreLocationMapProps {
  onTriggerToast: (msg: string) => void;
  onOpenRotasModal: () => void;
}

export const StoreLocationMap: React.FC<StoreLocationMapProps> = ({ 
  onTriggerToast,
  onOpenRotasModal
}) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    onTriggerToast("Endereço copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 bg-[#070709] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E0222D] mb-2">
            <Compass className="w-4 h-4" />
            <span>Localização Fácil & Estúdio Climatizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black italic text-white tracking-tight uppercase">
            Mapa de PELICAR · Como Chegar
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Localizado no bairro São Vicente em Itajaí - SC, com fácil acesso pelas principais vias e estacionamento seguro para o seu carro.
          </p>
        </div>

        {/* Main Grid: Details (5 Cols) + Map (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact and Hours Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-[#0b0b0f] border border-[#8F0F16]/40 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#55080E]/70 border border-[#8F0F16]/50 flex items-center justify-center text-[#E0222D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs text-neutral-400">São Vicente · Itajaí - SC</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-850 text-xs text-neutral-300 leading-relaxed font-medium">
                {STORE_INFO.address}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyAddress}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Copiado!" : "Copiar Endereço"}</span>
                </button>

                <button
                  onClick={onOpenRotasModal}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl rswf-gradient-btn text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota</span>
                </button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0b0b0f] border border-neutral-800/80 rounded-2xl p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                  <Clock className="w-4 h-4 text-[#C71A24]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    Horários de Funcionamento
                  </h4>
                  <span className="text-[11px] text-emerald-400 font-semibold">Atendimento Seg a Sáb</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-300 divide-y divide-neutral-900">
                {STORE_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center pt-1.5 first:pt-0">
                    <span className="text-neutral-400">{h.day}</span>
                    <span className={`font-semibold ${h.hours === 'Fechado' ? 'text-neutral-500' : 'text-neutral-200'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone / WhatsApp Button */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#55080E]/60 to-neutral-950 border border-[#8F0F16]/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E0222D]" />
                <div>
                  <span className="text-xs text-neutral-400 block font-medium">Dúvidas ou agendamento:</span>
                  <span className="text-sm font-black text-white">{STORE_INFO.phone}</span>
                </div>
              </div>

              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Chamar Agora
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Iframe (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-red-900/40 shadow-2xl relative bg-neutral-950">
              <iframe
                title="Mapa de Localização PELICAR"
                src="https://maps.google.com/maps?q=R.+Pedro+Cristiano+de+Miranda,+761+-+São+Vicente,+Itajaí+-+SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-125"
              />

              {/* Floating Map Navigation Badge */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#8F0F16]/60 rounded-xl p-3 shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C71A24] animate-pulse" />
                  <span className="text-xs font-black text-white uppercase tracking-wider">PELICAR Itajaí</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  R. Pedro Cristiano de Miranda, 761 - Sl 02 (Anexo Posto Thiavan)
                </p>
                <div className="flex gap-2 mt-2 pt-2 border-t border-neutral-800">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#E0222D] hover:text-[#C71A24] font-bold uppercase flex items-center gap-1"
                  >
                    Google Maps <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-neutral-600">·</span>
                  <a
                    href={STORE_INFO.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-cyan-400 hover:text-cyan-300 font-bold uppercase flex items-center gap-1"
                  >
                    Waze <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
