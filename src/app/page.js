import Header from '@/app/components/Header'
import Partners from './components/Partner';
import Ourjourney from './components/Ourjourney'
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Impactsection from './components/Impactsection';

import Head from 'next/head';



const Home = () => {
  
  return (
<div>
        <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap" 
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Tajawal', sans-serif;
            overflow-x: hidden;
          }
        `}</style>
      </Head>

   <Header></Header>
   <Impactsection></Impactsection>

    <Partners></Partners>
    <Ourjourney></Ourjourney>
    <Achievements></Achievements>
    <Footer></Footer>


    </div>
   
  );
};

export default Home;