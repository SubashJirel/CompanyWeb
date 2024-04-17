import React from 'react';
import '@radix-ui/themes/styles.css';
import CareerOpportunitiesDropdown from './CareerOpportunitiesDropdown';
import { Search } from 'lucide-react';

const CareerOpportunitiesSearchButton = () => {
  return (
    <button className="rounded-lg bg-orange px-6 text-white">
      <Search />
    </button>
  );
};

function CareerOpportunities() {
  return (
    <div className="py-24">
      <div className="flex flex-col gap-4 py-24 text-center">
        <h5 className="text-xl font-semibold text-yellow-500">Opportunities</h5>
        <h2 className="text-4xl font-bold text-blue-950">
          Available Vacancies
        </h2>
        <div className="flex flex-wrap gap-4 px-2 md:mx-auto md:w-[50%]">
          <input
            className="flex-1 rounded-lg border p-2 focus:outline-none"
            placeholder="Job Title/Keyword"
          />
          <div className="flex border-2 border-green-600 w-full gap-2">
            <CareerOpportunitiesDropdown />
            <CareerOpportunitiesSearchButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerOpportunities;
