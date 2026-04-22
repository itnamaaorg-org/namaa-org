import Header from '@/components/Header'
import Partners from '@/components/Partner';
import Ourjourney from '@/components/Ourjourney'
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';
import Impactsection from '@/components/Impactsection';
import NewsSection from '@/components/NewsSection';
export const metadata = {
  title: 'نماء - جمعية تنموية شبابية',
  description: 'جمعية تنموية شبابية غير ربحية...',
};

const Home = () => {
  return (
    <div>
      <Impactsection />
      <Partners />
      <Ourjourney />
      <Achievements />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;