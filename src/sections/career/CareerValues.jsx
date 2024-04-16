import React from 'react';

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
    <div className="justify-center py-24 text-center">
      <BelieveIn />
    </div>
  );
}

export default CareerValues;
