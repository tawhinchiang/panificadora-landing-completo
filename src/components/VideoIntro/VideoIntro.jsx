import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { introImages } from '../../data/gallery';

export function VideoIntro() {
  const sectionRef = useRef(null);
  const [imageLayers, setImageLayers] = useState([
    { id: 0, imageIndex: 0, isActive: true },
  ]);
  const activeLayer = imageLayers.find((layer) => layer.isActive) ?? imageLayers[0];

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
      setImageLayers((currentLayers) => {
        const currentActiveLayer =
          currentLayers.find((layer) => layer.isActive) ?? currentLayers[0];
        const nextImageIndex =
          currentActiveLayer.imageIndex === introImages.length - 1
            ? 0
            : currentActiveLayer.imageIndex + 1;

        return [
          ...currentLayers.map((layer) => ({
            ...layer,
            isActive: false,
          })),
          {
            id: currentActiveLayer.id + 1,
            imageIndex: nextImageIndex,
            isActive: true,
          },
        ].slice(-2);
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageLayers.length <= 1) {
      return undefined;
    }

    const cleanupTimer = window.setTimeout(() => {
      setImageLayers((currentLayers) =>
        currentLayers.filter((layer) => layer.isActive),
      );
    }, 1300);

    return () => window.clearTimeout(cleanupTimer);
  }, [imageLayers]);

  return (
    <section id="inicio" ref={sectionRef} className="video-intro">
      <div className="video-intro-sticky">
        {imageLayers.map((layer) => {
          const image = introImages[layer.imageIndex];

          return (
            <img
              className={`video-intro-media ${
                layer.isActive ? 'is-active' : 'is-exiting'
              }`}
              src={image.imagem}
              alt=""
              key={layer.id}
              aria-hidden="true"
              loading={layer.imageIndex === 0 ? 'eager' : 'lazy'}
              fetchPriority={activeLayer?.id === layer.id ? 'high' : undefined}
              decoding="async"
              width="900"
              height="900"
            />
          );
        })}

        <div className="video-intro-overlay" aria-hidden="true" />
        <div className="video-intro-glow" aria-hidden="true" />

        <div className="container video-intro-content">
          <div className="video-intro-layout">
            <div className="video-intro-copy">
              <span className="section-kicker">Experiência artesanal</span>
              <strong className="video-intro-brand">
                {businessInfo.nome}
              </strong>
              <h2>{businessInfo.slogan}</h2>
              <p>
                Uma vitrine de bairro com produção diária, atendimento próximo e
                receitas feitas para acompanhar a rotina da família.
              </p>
              <a className="video-intro-link" href="#hero">
                Entrar no cardápio
              </a>
            </div>

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
