import { MessageCircle } from 'lucide-react';
import { products } from '../../data/products';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

export function Products() {
  return (
    <section id="produtos" className="section">
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
                <div
                  className="product-image"
                  role="img"
                  aria-label={product.titulo}
                  style={{
                    backgroundImage: `linear-gradient(rgba(58, 35, 23, 0.12), rgba(58, 35, 23, 0.3)), url('${product.imagem}')`,
                  }}
                />
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
