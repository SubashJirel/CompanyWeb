import React from 'react';

function CareerHero() {
  return (
    <>
      <div className=" h-[500px] items-center justify-center bg-[#C3C1C1] lg:px-32 h  ">
        <h4 className="py-12 text-xl text-center  md:text-[22px] font-semibold">
          Careers
        </h4>
        <h1 className="text-3xl md:text-5xl text-center font-bold capitalize lg:text-6xl">
          navigate your next <br />{' '}
          <span className="text-[#228B22]">career</span> move
        </h1>
        <div className="px-4 text-center md:w-[300px] py-10 mx-auto ">
          We&apos;re continiously searching for the right talent. Check if
          you&apos;re a good match.
        </div>
        <div className="text-center">
          <button className=" text-white bg-primary_blue font-semibold rounded-lg text-sm  px-7 py-3  mr-2 ">
            Explore Opportunities
          </button>
        </div>
      </div>
    </>
  );
}

export default CareerHero;
