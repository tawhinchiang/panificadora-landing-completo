import { gallery } from '../../data/gallery';

export function Gallery() {
  return (
    <section className="section gallery-section deferred-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Galeria</span>
          <h2>Um pouco do que preparamos por aqui</h2>
          <p>
            Alguns registros da vitrine, dos produtos e da fachada da
            panificadora.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className="gallery-item" key={item.alt}>
              <img
                src={item.imagem}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width="960"
                height="1440"
              />
              <figcaption className="gallery-caption">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <small>{item.alt}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
