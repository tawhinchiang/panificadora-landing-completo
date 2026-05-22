import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

const heroStats = [
  { value: '7h', label: 'produção começando cedo' },
  { value: '20h', label: 'atendimento até a noite' },
  { value: '42', label: 'pedidos pelo WhatsApp' },
];

export function Hero() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="section-kicker">Padaria de bairro, vitrine de afeto</span>
          <h1>{businessInfo.nome}</h1>
          <p>
            Pães, bolos, tortas e salgados feitos todos os dias para quem quer
            resolver o café, a visita ou a encomenda da semana com praticidade.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Fazer pedido no WhatsApp
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#produtos">
              Ver vitrine
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

          <div className="hero-stats" aria-label="Destaques da panificadora">
            {heroStats.map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Produtos e ambiente da panificadora">
          <figure className="hero-photo hero-photo-main">
            <img
              src="/imagens/optimized/site/ambiente-3.jpg"
              alt="Vitrine e ambiente da panificadora"
              width="900"
              height="900"
              loading="eager"
              decoding="async"
            />
          </figure>
          <figure className="hero-photo hero-photo-secondary">
            <img
              src="/imagens/optimized/site/bolo_ninho_morango.jpg"
              alt="Bolo de leite Ninho com morango"
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
