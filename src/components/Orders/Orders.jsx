import { CakeSlice, PartyPopper, Send } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

export function Orders() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemEncomenda,
  );

  return (
    <section id="encomendas" className="section orders-section deferred-section">
      <div className="container orders-card">
        <div>
          <span className="section-kicker">Encomendas</span>
          <h2>Faça sua encomenda pelo WhatsApp</h2>
          <p>
            Aceitamos encomendas de bolos, tortas, salgados, doces e kits para
            café da manhã. Ideal para festas, reuniões, empresas e momentos
            especiais em família.
          </p>

          <div className="orders-features">
            <span>
              <CakeSlice size={18} />
              Bolos e tortas
            </span>
            <span>
              <PartyPopper size={18} />
              Salgados para festas
            </span>
          </div>
        </div>

        <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Solicitar orçamento
          <Send size={18} />
        </a>
      </div>
    </section>
  );
}
