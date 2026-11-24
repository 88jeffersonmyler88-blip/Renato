import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Share2, 
  Phone, 
  X, 
  Eye, 
  Camera, 
  MessageSquare,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface QuickActionsModalProps {
  activeModal: 'rotas' | 'salvar' | 'compartilhar' | 'fachada' | null;
  onClose: () => void;
  onTriggerToast: (msg: string) => void;
}

export const QuickActionsModal: React.FC<QuickActionsModalProps> = ({
  activeModal,
  onClose,
  onTriggerToast
}) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!activeModal) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    onTriggerToast(`${label} copiado com sucesso!`);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:PELICAR - Películas de Controle Solar
ORG:PELICAR Películas Especiais
TEL;TYPE=WORK,VOICE:+5547984675758
TEL;TYPE=CELL,VOICE:+5547984675758
ADR;TYPE=WORK:;;R. Pedro Cristiano de Miranda\\, 761 - Sl 02;São Vicente;Itajaí;SC;88309-430;Brasil
NOTE:Insuflador de vidros em Itajaí - Especialista em Controle Solar e Alta Performance.
URL:https://pelicar.com.br
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'PELICAR_Contato.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onTriggerToast("Cartão de contato baixado (.vcf)!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0b0b0f] border border-[#8F0F16]/50 rounded-2xl p-6 shadow-2xl shadow-[#55080E]/70 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Neon top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C71A24] to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ROTAS MODAL */}
        {activeModal === 'rotas' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#55080E]/80 border border-[#8F0F16]/60 flex items-center justify-center text-[#E0222D]">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Traçar Rotas até a PELICAR</h3>
                <p className="text-xs text-neutral-400">Escolha o seu aplicativo de navegação favorito</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-300">
              <p className="font-semibold text-white mb-1">Endereço:</p>
              <p className="text-neutral-400 text-xs leading-relaxed">{STORE_INFO.address}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#55080E]/50"
              >
                <MapPin className="w-4 h-4" />
                Google Maps
              </a>
              <a
                href={STORE_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                Abrir no Waze
              </a>
            </div>

            <button
              onClick={() => handleCopy(STORE_INFO.address, "Endereço")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-colors"
            >
              {copiedText === "Endereço" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedText === "Endereço" ? "Copiado para a área de transferência!" : "Copiar Endereço Completo"}</span>
            </button>
          </div>
        )}

        {/* SALVAR CONTATO MODAL */}
        {activeModal === 'salvar' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#55080E]/80 border border-[#8F0F16]/60 flex items-center justify-center text-[#E0222D]">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Salvar Contato PELICAR</h3>
                <p className="text-xs text-neutral-400">Adicione aos seus contatos do celular com um clique</p>
              </div>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-neutral-900">
                <span className="text-xs text-neutral-400">Nome:</span>
                <span className="font-semibold text-white">PELICAR · Películas de Controle Solar</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-neutral-900">
                <span className="text-xs text-neutral-400">Telefone:</span>
                <span className="font-semibold text-white">{STORE_INFO.phone}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-xs text-neutral-400">Cidade:</span>
                <span className="font-semibold text-white">Itajaí - SC</span>
              </div>
            </div>

            <button
              onClick={handleDownloadVCard}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#55080E]/50"
            >
              <Download className="w-4 h-4" />
              Baixar Contato Direto (.vcf)
            </button>

            <button
              onClick={() => handleCopy(STORE_INFO.phone, "Telefone")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-colors"
            >
              {copiedText === "Telefone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedText === "Telefone" ? "Telefone Copiado!" : "Copiar Número (47) 98467-5758"}</span>
            </button>
          </div>
        )}

        {/* COMPARTILHAR MODAL */}
        {activeModal === 'compartilhar' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#55080E]/80 border border-[#8F0F16]/60 flex items-center justify-center text-[#E0222D]">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Compartilhar PELICAR</h3>
                <p className="text-xs text-neutral-400">Indique o melhor insuflador de vidros de Itajaí</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Conheça a PeliCar · Películas de Controle Solar em Itajaí (5.0★ no Google com nota máxima): ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'PELICAR · Películas de Controle Solar',
                      text: 'Especialista em películas automotivas de controle solar e nano cerâmica em Itajaí - SC',
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    handleCopy(window.location.href, "Link");
                  }
                }}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>

            <button
              onClick={() => handleCopy(window.location.href, "Link")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-colors"
            >
              {copiedText === "Link" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedText === "Link" ? "Link Copiado!" : "Copiar Link do Site"}</span>
            </button>
          </div>
        )}

        {/* VER POR FORA / FACHADA MODAL */}
        {activeModal === 'fachada' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#55080E]/80 border border-[#8F0F16]/60 flex items-center justify-center text-[#E0222D]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">PELICAR por Fora</h3>
                  <p className="text-xs text-neutral-400">R. Pedro Cristiano de Miranda, 761 - São Vicente, Itajaí</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-neutral-800 aspect-video bg-neutral-950">
              <img
                src="/assets/aistudio/IMG_2120_f9b1e0a2.jpg"
                alt="Fachada e Estúdio Pelicar"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
                <div>
                  <span className="text-xs font-bold text-[#E0222D] uppercase tracking-wider">Unidade São Vicente · Itajaí</span>
                  <p className="text-sm font-semibold text-white">Sala 02 · Espaço climatizado para aplicação de películas especiais livre de poeira</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl rswf-gradient-btn text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Ver no Google Street View
              </a>
              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
