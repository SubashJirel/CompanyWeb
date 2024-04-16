import React from 'react';
import CareerCaresBox from './CareerCaresBox';
const careerCaresContent = [
  {
    imgSrc: '/performance.svg',
    heading: 'Performance Bonus',
  },
  {
    imgSrc: '/health.svg',
    heading: 'Health Benefits',
  },
  {
    imgSrc: '/paid.svg',
    heading: 'Paid Leave Policy',
  },
  {
    imgSrc: '/learningDev.svg',
    heading: 'Learning And Development',
  },
  {
    imgSrc: '/food.svg',
    heading: 'Food Credit',
  },
  {
    imgSrc: '/team.svg',
    heading: 'Team Activities',
  },
];
function CareerCares() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#ffffe1]">
      <div className="2xl:container">
        <div className="grid py-16 md:grid-cols-3">
          <div className="flex flex-col gap-4 px-6 pb-10 md:mx-auto lg:pl-20">
            <h2 className="text-3xl font-bold text-blue-950">
              Metalogic Cares For You
            </h2>
            <p className="text-sm text-ui-500">
              We&apos;re less about valuing perks and more about valuing people.
              Our employee benefits are built around enhancing your wellbeing -
              at work and at home
            </p>
          </div>
          <div className="col-span-2 ml-[12%] grid w-[80%] gap-y-8 px-2 text-left md:grid-cols-3 md:gap-y-6 md:px-4 lg:px-12">
            {careerCaresContent.map((val, index) => {
              return (
                <CareerCaresBox
                  key={index}
                  imgSrc={val.imgSrc}
                  heading={val.heading}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerCares;
