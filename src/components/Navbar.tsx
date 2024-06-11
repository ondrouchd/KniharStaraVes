import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#3e3f3a] flex flex-row justify-between items-center p-5">
      <div className="ml-8 items-center flex flex-row">
        <NavLink to="/" className="w-40 text-white">Darebníčková Radka</NavLink>
        <div className="hidden sm:inline text-sm">
          <ul className="flex flex-row space-x-1">
            <NavLink to="/"
              className="py-1 px-1 pl-5
                        text-[#98978b]
                        hover:bg-gray-800
                        hover:rounded-lg
                        cursor-pointer"
            >
              Informace
            </NavLink>
            <NavLink to="/contact"
              className="py-1 px-1
                        text-[#98978b]
                        hover:bg-gray-800
                        hover:rounded-lg
                        cursor-pointer"
            >
              Kontakt
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="sm:block">
        <button
          className="inline-flex items-center p-2 w-10 h-10 
                        justify-center text-sm text-gray-500 
                        rounded-lg sm:hidden hover:bg-gray-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* <ul className="flex flex-col space-y-0 mr-2">
              <li
                className="py-1 px-1
                        text-white
                        hover:bg-slate-400
                        hover:rounded-lg
                        cursor-pointer"
              >
                Informace
              </li>
              <li
                className="py-1 px-1
                        text-white
                        hover:bg-slate-400
                        hover:rounded-lg
                        cursor-pointer"
              >
                Kontakt
              </li>
            </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
