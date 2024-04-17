import React from 'react';
import CareerBenefitsBox from './CareerBenefitsBox';

const careerBenefitContent = [
  {
    imgSrc: '/flexibility.svg',
    heading: 'Flexibility at Work',
    paragraph:
      'Do your best work at a time and place that fits us and your work-life balance.',
  },
  {
    imgSrc: '/ownership.svg',
    heading: 'Take Ownership',
    paragraph:
      'Take responsibility to solve customer challenges by acting as your own boss.',
  },
  {
    imgSrc: '/growth.svg',
    heading: 'Unlimited Growth',
    paragraph:
      'With no inner circle, absolutely everyone has the same opportunity to thrive.',
  },
  {
    imgSrc: '/voice.svg',
    heading: 'Make Yourself Heard',
    paragraph:
      'We encourage diverse perspectives, making it count in achieving our collective goals.',
  },
  {
    imgSrc: '/team-spirit.svg',
    heading: 'Team Spirit',
    paragraph:
      'Come together, work as one – this is at the heart of how we work, achieve results, and collaborate.',
  },
  {
    imgSrc: '/inclusivity.svg',
    heading: 'Inclusivity at Work',
    paragraph:
      'We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions.',
  },
  {
    imgSrc: '/transparency.svg',
    heading: 'Transparent Environment',
    paragraph:
      'Build confidence in a culture of trust and open communication - with each other and our clients.',
  },
  {
    imgSrc: '/passion.svg',
    heading: 'Fuel Your Passion',
    paragraph:
      'We encourage you to strive, push the limits, and achieve your dreams by being the best you can be.',
  },
];

const LifeAt = () => {
  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <h5 className="text-orange text-xl font-semibold text-secondary-300">
          Benefits
        </h5>
        <h2 className="text-primary_blue text-4xl font-bold ">
          Life At Metalogic
        </h2>
      </div>
    </>
  );
};
function CareerBenefits() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="2xl:container">
        <div className="justify-center py-16 text-center">
          <LifeAt />
          <div className=" border-2 border-green-500 grid gap-x-8 gap-y-8 px-2 text-left md:grid-cols-3 md:gap-y-12 md:px-4 lg:grid-cols-4 lg:px-12">
            {careerBenefitContent.map((val, index) => {
              return (
                <CareerBenefitsBox
                  key={index}
                  imgSrc={val.imgSrc}
                  heading={val.heading}
                  paragraph={val.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerBenefits;
