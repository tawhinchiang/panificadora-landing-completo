import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { introImages } from '../../data/gallery';

export function VideoIntro() {
  const sectionRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      section.style.setProperty('--scroll-progress', '0');
      return undefined;
    }

    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;

      const { top, height } = section.getBoundingClientRect();
      const totalDistance = window.innerHeight + height;
      const progress = Math.min(
        Math.max((window.innerHeight - top) / totalDistance, 0),
        1,
      );

      section.style.setProperty('--scroll-progress', progress.toFixed(3));
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (introImages.length <= 1) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveImage((currentIndex) =>
        currentIndex === introImages.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="inicio" ref={sectionRef} className="video-intro">
      <div className="video-intro-sticky">
        {introImages.map((item, index) => (
          <img
            className={`video-intro-media ${
              activeImage === index ? 'is-active' : ''
            }`}
            src={item.imagem}
            alt=""
            key={item.imagem}
            aria-hidden="true"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : undefined}
            decoding="async"
            width="1600"
            height="1600"
          />
        ))}

        <div className="video-intro-overlay" aria-hidden="true" />
        <div className="video-intro-glow" aria-hidden="true" />

        <div className="container video-intro-content">
          <div className="video-intro-copy">
            <span className="section-kicker">Experiência artesanal</span>
            <strong className="video-intro-brand">{businessInfo.nome}</strong>
            <h2>{businessInfo.slogan}</h2>
            <p>{businessInfo.subtitulo}</p>
            <a className="video-intro-link" href="#hero">
              Entrar no cardápio
            </a>
          </div>

          <div className="video-intro-scroll" aria-hidden="true">
            <span />
            <ChevronDown size={18} />
            Role para descobrir
          </div>
        </div>
      </div>
    </section>
  );
}
