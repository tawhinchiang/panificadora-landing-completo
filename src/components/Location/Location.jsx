import { MapPin, Clock, Navigation } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function Location() {
  return (
    <section id="localizacao" className="section location-section deferred-section">
      <div className="container location-grid">
        <div>
          <span className="section-kicker">Localização</span>
          <h2>Venha nos visitar</h2>

          <div className="location-info">
            <p>
              <MapPin size={19} />
              <span>
                {businessInfo.endereco}
                <br />
                {businessInfo.cidade}
              </span>
            </p>
            <p>
              <Clock size={19} />
              <span>{businessInfo.horario}</span>
            </p>
            <p>
              <a href={businessInfo.instagram} target="_blank" rel="noreferrer">
                Acompanhar no Instagram
              </a>
            </p>
          </div>

          <a
            className="btn btn-secondary"
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir rota
            <Navigation size={18} />
          </a>
        </div>

        <div className="map-embed">
          <iframe
            src={businessInfo.googleMapsEmbedUrl}
            title={`Mapa de ${businessInfo.nome}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
