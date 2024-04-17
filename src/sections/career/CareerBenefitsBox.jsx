import React from 'react';

function CareerBenefitsBox({ imgSrc, heading, paragraph }) {
  return (
    <div className="group flex flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300  hover:border-gray-200 hover:shadow-lg">
      <img
        src={imgSrc}
        alt={heading}
        className="w-10 transition-all duration-300 group-hover:scale-110"
      />
      <h3 className="text-xl font-bold text-primary_blue">{heading}</h3>
      <p className="text-sm text-ui-500">{paragraph}</p>
    </div>
  );
}

export default CareerBenefitsBox;
