import React from 'react';

function CareerCaresBox({ imgSrc, heading }) {
  return (
    <div className="group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md">
      <img
        src={imgSrc}
        alt={heading}
        className="w-10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
      />
      <h3 className="font-semibold text-blue-950">{heading}</h3>
    </div>
  );
}

export default CareerCaresBox;
