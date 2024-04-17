import React from 'react';

function CareerNewsLetter() {
  return (
    <div className="bg-[#E6E6E6]  py-20 text-center ">
      <h4 className="text-xl font-semibold text-ui-700">
        Subscribe to our News Letters
      </h4>
      <p className="py-4 font-medium md:mx-auto md:w-[70%]">
        Stay informed, inspired, and equipped with the latest trends and
        breakthroughs in your field.
      </p>
      <form
        action="#"
        className="flex flex-col gap-4 px-4 py-3 sm:flex-row md:mx-auto md:w-[50%]"
      >
        <div className="flex-1">
          <input
            className="flex h-9 w-full rounded-md border border-input px-3 text-sm shadow-sm  placeholder:text-gray-400 focus-visible:outline-none  bg-white py-6"
            placeholder="Please Enter Your Email"
            name="email"
          />
        </div>
        <button className="flex h-fit items-center justify-center gap-2 rounded-lg bg-orange px-4 py-3 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail "
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default CareerNewsLetter;
