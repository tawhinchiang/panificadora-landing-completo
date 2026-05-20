import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

export function Hero() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="section-kicker">Produção diária</span>
          <h1>{businessInfo.slogan}</h1>
          <p>{businessInfo.subtitulo}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Fazer pedido no WhatsApp
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#produtos">
              Ver produtos
            </a>
          </div>

          <div className="hero-info">
            <span>
              <Clock size={18} />
              {businessInfo.horario}
            </span>
            <span>
              <MapPin size={18} />
              {businessInfo.cidade}
            </span>
          </div>
        </div>

        <div className="hero-image" role="img" aria-label="Pães fresquinhos da panificadora">
          <div className="hero-image-card">
            <span>🥐</span>
            <strong>Fresquinho todo dia</strong>
            <small>Pães, bolos, salgados e encomendas</small>
          </div>
        </div>
      </div>
    </section>
  );
}
