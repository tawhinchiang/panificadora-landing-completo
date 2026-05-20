import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { VideoIntro } from './components/VideoIntro/VideoIntro';
import { Products } from './components/Products/Products';
import { Orders } from './components/Orders/Orders';
import { About } from './components/About/About';
import { Gallery } from './components/Gallery/Gallery';
import { Location } from './components/Location/Location';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <VideoIntro />
        <Hero />
        <Products />
        <Orders />
        <About />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
