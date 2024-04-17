import React from 'react';
import CareerValuesBox from './CareerValuesBox';

const careerValueContent = [
  {
    imgSrc: '/learning.svg',
    heading: 'Continuous Learning',
    paragraph:
      "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
  },
  {
    imgSrc: '/work.svg',
    heading: 'Team Work',
    paragraph:
      'We believe that the best solutions come from diverse perspectives and collaborative efforts.',
  },
  {
    imgSrc: '/innovation.svg',
    heading: 'Innovation',
    paragraph:
      "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
  },
  {
    imgSrc: '/mentorship.svg',
    heading: 'Mentorship',
    paragraph:
      'We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.',
  },
  {
    imgSrc: '/tangible.svg',
    heading: 'Tangible Impact',
    paragraph:
      "We're committed to delivering solutions that not only meet but exceed expectations.",
  },
  {
    imgSrc: '/adaptability.svg',
    heading: 'Adaptability',
    paragraph:
      'Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey.',
  },
];

const BelieveIn = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h5 className="text-orange text-xl font-semibold text-secondary-300">
          Values
        </h5>
        <h2 className="text-primary_blue text-4xl font-bold ">We Believe in</h2>
        <p className="mx-auto px-2 pb-8 text-ui-500 md:w-[40%]">
          We believe in creating an environment where individuals can thrive and
          make a meaningful impact.
        </p>
      </div>
    </>
  );
};

function CareerValues() {
  return (
    <section className="bg-[#F6F8FF]">
      <div className="2xl:container mx-auto">
        <div className="justify-center py-24 text-center border-2 border-red-600 ">
          <BelieveIn />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 px-2 text-left md:gap-y-12">
            {careerValueContent.map((val, index) => (
              <CareerValuesBox
                key={index}
                imgSrc={val.imgSrc}
                heading={val.heading}
                paragraph={val.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerValues;
