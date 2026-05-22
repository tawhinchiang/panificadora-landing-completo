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
        <div className="orders-copy">
          <span className="section-kicker">Encomendas</span>
          <h2>Do balcão para a sua comemoração</h2>
          <p>
            Aceitamos encomendas de bolos, tortas, salgados, doces e kits para
            café da manhã. A conversa começa pelo WhatsApp e a produção é
            alinhada conforme o seu momento.
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

          <a
            className="btn btn-primary"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
            <Send size={18} />
          </a>
        </div>

        <div className="orders-visual" aria-hidden="true">
          <img
            src="/imagens/optimized/site/torta_banoffe_2.jpg"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            src="/imagens/optimized/site/salgado_salsicha.jpg"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <strong>Festas, cafés e encontros</strong>
        </div>
      </div>
    </section>
  );
}
