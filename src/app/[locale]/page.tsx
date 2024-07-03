import { Suspense } from 'react';

import AboutUs from '@/components/Layout/AboutUs';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import OurCases from '@/components/Layout/OurCases';
import OurHelp from '@/components/Layout/OurHelp';
import AdvantagesROR from '@/components/Layout/RORAdvantages';
import WeInMedia from '@/components/Layout/WeInMedia';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <OurHelp />
        <Suspense>
          <OurCases />
        </Suspense>
        <AdvantagesROR />
        <AboutUs />
        <WeInMedia />
      </main>
      <Footer />
    </div>
  );
}
