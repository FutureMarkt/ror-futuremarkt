import AboutUs from '@/components/Layout/AboutUs';
import AdvantagesROR from '@/components/Layout/AdvantagesROR';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import OurCases from '@/components/Layout/OurCases';
import OurHelp from '@/components/Layout/OurHelp';
import WeInMedia from '@/components/Layout/WeInMedia';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <OurHelp />
        <OurCases />
        <AdvantagesROR />
        <AboutUs />
        <WeInMedia />
      </main>
      <Footer />
    </>
  );
}
