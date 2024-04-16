import { Link, NavLink } from 'react-router-dom';
import metalogo from '../../assets/photos/metalogo.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LogoContainer = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center py-2">
        <img src={metalogo} className="mr-3 h-12  md:h-14" alt="Logo" />
        <h1 className="text-[28px]   md:text-3xl font-bold tracking-widest text-primary_blue">
          MetaLogic
        </h1>
      </div>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      <ul className="flex flex-col mt-4 font-medium mini-desktop:flex-row lg:space-x-4 lg:mt-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 font-semibold ${
                isActive ? 'text-orange' : 'text-black'
              } `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 font-semibold ${
                isActive ? 'text-orange' : 'text-black'
              }  `
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 font-semibold ${
                isActive ? 'text-orange' : 'text-black'
              } `
            }
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 font-semibold ${
                isActive ? 'text-orange' : 'text-black'
              } `
            }
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 font-semibold ${
                isActive ? 'text-orange' : 'text-black'
              } `
            }
          >
            About us
          </NavLink>
        </li>
      </ul>
    </>
  );
};

const TouchContainer = () => {
  return (
    <div className="flex items-center">
      <Link
        to="#"
        className="hidden mini-desktop:block text-white bg-orange font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 "
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="">
      <nav className="bg-[#C3C1C1]  px-4 lg:px-6 py-1">
        <div className="flex  justify-between items-center mx-auto ">
          <LogoContainer />
          <div className=" hidden mini-desktop:flex justify-between items-center  w-auto ">
            <NavLinks />
          </div>

          <TouchContainer />
          <div className="mini-desktop:hidden flex flex-col  flex-wrap relative">
            <button onClick={toggleNavBar}>
              {' '}
              {isOpen ? <X /> : <Menu />}{' '}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center basis-full  ">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}
