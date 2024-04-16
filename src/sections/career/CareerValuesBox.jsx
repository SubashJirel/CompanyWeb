import React from 'react';

function CareerValuesBox({ imgSrc, heading, paragraph }) {
  return (
    <div className=" flex w-[360px] flex-col items-start gap-3 rounded-2xl bg-white p-8 shadow-lg">
      <div className="w-16 rounded-2xl bg-gray-100 p-4">
        <img src={imgSrc} alt="continuous learning" />
      </div>
      <h3 className="text-xl font-bold text-blue-950">{heading}</h3>
      <p className="text-sm text-ui-500">{paragraph}</p>
    </div>
  );
}

export default CareerValuesBox;
