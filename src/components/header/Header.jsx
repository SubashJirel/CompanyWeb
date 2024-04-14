import { Link, NavLink } from 'react-router-dom';
import metalogo from '../../assets/photos/metalogo.png';
export default function Header() {
  return (
    <header className="">
      <nav className="bg-[#001C48]  px-4 lg:px-6 py-2.5">
        <div className="flex  justify-between items-center mx-auto ">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img src={metalogo} className="mr-3 h-12" alt="Logo" />
              <h1 className="  text-3xl font-bold tracking-widest text-white">
                MetaLogic
              </h1>
            </div>
          </Link>

          <div className=" justify-between items-center flex w-auto ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange' : 'text-white'
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
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange' : 'text-white'
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
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange' : 'text-white'
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
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange' : 'text-white'
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
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange' : 'text-white'
                    } `
                  }
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link
              to="#"
              className="text-white bg-orange font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 "
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
