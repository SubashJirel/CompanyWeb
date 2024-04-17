import React from 'react';
import CareerHero from '../../sections/career/CareerHero';
import CareerValues from '../../sections/career/CareerValues';
import CareerBenefits from '../../sections/career/CareerBenefits';
import CareerCares from '../../sections/career/CareerCares';
import CareerOpportunities from '../../sections/career/CareerOpportunities';
import CareerNewsLetter from '../../sections/career/CareerNewsLetter';

function Career() {
  return (
    <>
      <CareerHero />
      <CareerValues />
      <CareerBenefits />
      <CareerCares />
      <CareerOpportunities />
      <CareerNewsLetter />
    </>
  );
}

export default Career;
