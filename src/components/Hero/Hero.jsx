import { ArrowRight, Clock, Clock3, MapPin, Wheat } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

const heroStats = [
  {
    value: '7h',
    title: 'Primeira fornada',
    label: 'produção fresca logo cedo',
    Icon: Wheat,
  },
  {
    value: '20h',
    title: 'Atendimento estendido',
    label: 'para pedir com calma até a noite',
    Icon: Clock3,
  },
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
              <article className="hero-stat-card" key={stat.title}>
                <span className="hero-stat-icon" aria-hidden="true">
                  <stat.Icon size={19} strokeWidth={2.2} />
                </span>
                <strong>{stat.value}</strong>
                <span className="hero-stat-copy">
                  <span>{stat.title}</span>
                  {stat.label}
                </span>
              </article>
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
