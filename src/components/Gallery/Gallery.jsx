import { gallery } from '../../data/gallery';

export function Gallery() {
  return (
    <section className="section gallery-section">
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
            <div
              className="gallery-item"
              key={item.alt}
              role="img"
              aria-label={item.alt}
              style={{
                backgroundImage: `linear-gradient(180deg, transparent, rgba(58, 35, 23, 0.78)), url('${item.imagem}')`,
              }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <small>{item.alt}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
