import { Heart, Sparkles, Wheat } from 'lucide-react';
import { environmentImages } from '../../data/gallery';

export function About() {
  return (
    <section id="sobre" className="section about-section deferred-section">
      <div className="container about-grid">
        <div
          className="about-image-gallery"
          aria-label="Fotos do ambiente da panificadora"
        >
          {environmentImages.map((image, index) => (
            <figure
              className={index === 0 ? 'is-featured' : ''}
              key={image.imagem}
            >
              <img
                src={image.imagem}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width="720"
                height="720"
              />
            </figure>
          ))}
        </div>

        <div className="about-text">
          <span className="section-kicker">Sobre nós</span>
          <h2>Tradição, carinho e sabor em cada receita</h2>
          <p>
            Há anos levando sabor, qualidade e carinho para a mesa dos nossos
            clientes. Trabalhamos com produção diária e ingredientes selecionados
            para entregar produtos fresquinhos todos os dias.
          </p>

          <div className="about-list">
            <div>
              <Wheat size={20} />
              <span>Produção diária</span>
            </div>
            <div>
              <Sparkles size={20} />
              <span>Ingredientes selecionados</span>
            </div>
            <div>
              <Heart size={20} />
              <span>Atendimento com carinho</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
