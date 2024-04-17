import React, { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

const CareerOpportunitiesDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, label: 'Internship' },
    { id: 2, label: 'Junior Level' },
    { id: 3, label: 'Mid Level' },
    { id: 4, label: 'Senior' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative border border-pink-600  w-full">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full "
      >
        {selectedOption ? (
          <>
            <span className="mr-2">{selectedOption.label}</span>
          </>
        ) : (
          <span>Level</span>
        )}
      </button>
      <ChevronsUpDown className="absolute right-2 top-2 w-4 h-4 text-gray-600" />
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full  bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedOption && selectedOption.id === option.id
                  ? 'bg-blue-100'
                  : ''
              }`}
            >
              {option.label}
              {selectedOption && selectedOption.id === option.id && (
                <Check className="inline-block ml-2 w-4 h-4" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerOpportunitiesDropdown;
