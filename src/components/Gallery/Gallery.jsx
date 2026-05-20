import { gallery } from '../../data/gallery';

export function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Galeria</span>
          <h2>Um pouco do que preparamos por aqui</h2>
          <p>
            Substitua essas áreas por fotos reais da panificadora, dos produtos,
            da fachada e do balcão.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className="gallery-item" key={item.alt}>
              <span>{index + 1}</span>
              <small>{item.alt}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
