import { CustomerExperiences, HeroSec, NewsLetter, PopularProducts, ServiceSec, SpecialOffers, SuperQuality } from '@/components';
import React from 'react';

const App = () => {
  return (
    <main className=' main__body'>
      <section className='hero__section'>
        <HeroSec/>
      </section>

      <section className='popular__products__section'>
      <PopularProducts /> 
      </section>

      <section className='superquality__section'>
        <SuperQuality/>
      </section>


      <section className='service__section'>
        <ServiceSec/>
      </section>

      <section className='special__offers__section'>
        <SpecialOffers/>
      </section>

      <section className='customer__experiences__section'>
        <CustomerExperiences/>
      </section>

      <section className='newsletter__section w-full'>
        <NewsLetter/>
      </section>
    
    </main>
  );
}

export default App;
