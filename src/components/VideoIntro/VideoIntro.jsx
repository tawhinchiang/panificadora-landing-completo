import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function VideoIntro() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const activeVideoRef = useRef(0);
  const transitionRef = useRef(false);
  const resetTimerRef = useRef(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [mediaMode, setMediaMode] = useState('static');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactScreen = window.matchMedia('(max-width: 920px)').matches;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = connection?.saveData;
    const slowConnection = ['slow-2g', '2g', '3g'].includes(connection?.effectiveType);

    if (reducedMotion || compactScreen || saveData || slowConnection) {
      setMediaMode('static');
      return;
    }

    setMediaMode('video');
  }, []);

  const playVideo = (video) => {
    if (!video) {
      return;
    }

    const playPromise = video.play();

    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  };

  const swapVideos = () => {
    if (transitionRef.current) {
      return;
    }

    const currentIndex = activeVideoRef.current;
    const nextIndex = currentIndex === 0 ? 1 : 0;
    const currentVideo = videoRefs.current[currentIndex];
    const nextVideo = videoRefs.current[nextIndex];

    if (!currentVideo || !nextVideo) {
      return;
    }

    transitionRef.current = true;

    try {
      nextVideo.currentTime = 0;
    } catch {
      // Some browsers may briefly block seeking before metadata is ready.
    }

    playVideo(nextVideo);
    activeVideoRef.current = nextIndex;
    setActiveVideo(nextIndex);

    window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      currentVideo.pause();

      try {
        currentVideo.currentTime = 0;
      } catch {
        // Safe no-op when the browser is still updating video state.
      }

      transitionRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (mediaMode !== 'video') {
      return undefined;
    }

    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  }, [mediaMode]);

  useEffect(() => {
    if (mediaMode !== 'video') {
      return undefined;
    }

    const primaryVideo = videoRefs.current[0];
    const secondaryVideo = videoRefs.current[1];

    if (!primaryVideo || !secondaryVideo) {
      return undefined;
    }

    activeVideoRef.current = 0;
    setActiveVideo(0);
    transitionRef.current = false;

    secondaryVideo.pause();

    try {
      secondaryVideo.currentTime = 0;
    } catch {
      // Ignore initial seek race conditions.
    }

    playVideo(primaryVideo);

    return () => {
      window.clearTimeout(resetTimerRef.current);
      primaryVideo.pause();
      secondaryVideo.pause();
    };
  }, [mediaMode]);

  const handleVideoProgress = (index, event) => {
    if (index !== activeVideoRef.current || transitionRef.current) {
      return;
    }

    const { currentTime, duration } = event.currentTarget;

    if (!Number.isFinite(duration) || duration <= 0) {
      return;
    }

    if (duration - currentTime <= 0.42) {
      swapVideos();
    }
  };

  return (
    <section id="inicio" ref={sectionRef} className="video-intro">
      <div className="video-intro-sticky">
        {mediaMode === 'video' ? (
          [0, 1].map((index) => (
            <video
              key={index}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className={`video-intro-media ${activeVideo === index ? 'is-active' : ''}`}
              autoPlay={index === 0}
              muted
              playsInline
              preload={index === 0 ? 'metadata' : 'none'}
              poster="/imagens/optimized/breakfast-1600.jpg"
              aria-hidden="true"
              onTimeUpdate={(event) => handleVideoProgress(index, event)}
              onEnded={swapVideos}
            >
              <source src="/imagens/croaassaint_video.mp4" type="video/mp4" />
            </video>
          ))
        ) : (
          <img
            className="video-intro-media video-intro-poster is-active"
            src="/imagens/optimized/breakfast-1600.jpg"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="2400"
          />
        )}

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
