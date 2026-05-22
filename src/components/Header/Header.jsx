import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 921px)');

    const handleDesktopChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopMedia.addEventListener('change', handleDesktopChange);

    return () => {
      desktopMedia.removeEventListener('change', handleDesktopChange);
    };
  }, []);

  const openMenu = () => {
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
    setIsMenuOpen(true);
  };
  const closeMenu = () => setIsMenuOpen(false);

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

        <a
          className="btn btn-primary header-cta"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          Pedir agora
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-controls="mobile-menu-panel"
          aria-expanded={isMenuOpen}
          onClick={openMenu}
        >
          <Menu size={24} />
        </button>
      </div>

      <button
        className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Fechar menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu-panel"
        className={`mobile-menu-panel ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            className="mobile-menu-close"
            type="button"
            aria-label="Fechar menu"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-menu-links" aria-label="Menu principal mobile">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary mobile-menu-cta"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <MessageCircle size={18} />
          Pedir pelo WhatsApp
        </a>
      </aside>
    </header>
  );
}
