import { Camera, MessageCircle, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

export function Footer() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-icon">🥖</span>
            <span>{businessInfo.nome}</span>
          </a>
          <p>{businessInfo.subtitulo}</p>
        </div>

        <div>
          <h3>Contato</h3>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a href={businessInfo.instagram} target="_blank" rel="noreferrer">
            <Camera size={18} />
            Instagram
          </a>
        </div>

        <div>
          <h3>Endereço</h3>
          <p>
            <MapPin size={18} />
            {businessInfo.endereco} - {businessInfo.cidade}
          </p>
          <p>{businessInfo.horario}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {businessInfo.nome}. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
