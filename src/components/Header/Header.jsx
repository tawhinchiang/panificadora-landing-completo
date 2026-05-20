import { Menu, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Encomendas', href: '#encomendas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
];

export function Header() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  return (
    <header className="site-header">
      <div className="container header-content">
        <a href="#inicio" className="brand" aria-label="Ir para o início">
          <span className="brand-icon">
            <img
              src="/imagens/optimized/logo-256.png"
              alt={`Logo da ${businessInfo.nome}`}
              width="256"
              height="256"
              fetchPriority="high"
              decoding="async"
            />
          </span>
          <span>{businessInfo.nome}</span>
        </a>

        <nav className="desktop-menu" aria-label="Menu principal">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Pedir agora
        </a>

        <button className="mobile-menu-button" type="button" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
