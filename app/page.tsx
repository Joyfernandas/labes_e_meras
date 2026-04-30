import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedGrid from '@/components/FeaturedGrid';
import CrossEditStrip from '@/components/CrossEditStrip';
import Categories from '@/components/Categories';
import AtelierStory from '@/components/AtelierStory';
import InstagramWall from '@/components/InstagramWall';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedGrid />
      <CrossEditStrip />
      <Categories />
      <AtelierStory />
      <InstagramWall />
      <Testimonials />
      <CTA />
      <TrustBadges />
      <Newsletter />
    </>
  );
}
