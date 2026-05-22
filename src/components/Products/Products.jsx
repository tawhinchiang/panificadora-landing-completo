import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { products } from '../../data/products';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

function ProductImageCarousel({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasCarousel = product.imagens.length > 1;

  useEffect(() => {
    if (!hasCarousel) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === product.imagens.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3600);

    return () => window.clearInterval(interval);
  }, [hasCarousel, product.imagens.length]);

  return (
    <div className={`product-image ${hasCarousel ? 'has-carousel' : ''}`}>
      <span className="product-badge">{product.categoria}</span>

      <div className="product-carousel">
        {product.imagens.map((image, index) => (
          <img
            className={index === activeIndex ? 'is-active' : ''}
            src={image.src}
            alt={image.alt}
            key={image.src}
            loading="lazy"
            decoding="async"
            width="960"
            height="960"
          />
        ))}
      </div>

      {hasCarousel ? (
        <div className="product-dots" aria-label={`Fotos de ${product.titulo}`}>
          {product.imagens.map((image, index) => (
            <button
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              key={image.src}
              aria-label={`Mostrar foto ${index + 1} de ${product.titulo}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Products() {
  return (
    <section id="produtos" className="section deferred-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Nossos produtos</span>
          <h2>Feitos para o seu dia ficar mais gostoso</h2>
          <p>
            Veja algumas opções disponíveis na panificadora e chame no WhatsApp
            para consultar sabores, valores e disponibilidade.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            const whatsappLink = buildWhatsappLink(
              businessInfo.whatsapp,
              product.mensagem,
            );

            return (
              <article className="product-card" key={product.titulo}>
                <ProductImageCarousel product={product} />

                <div className="product-content">
                  <h3>{product.titulo}</h3>
                  <p>{product.descricao}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle size={17} />
                    Consultar no WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
