import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-3 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="">
          <img src={headerLogo} alt="" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-9 max-lg:hidden ml-0  ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className={`flex justify-center rounded-xl p-4 w-[132px]
              }`}
            >
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
