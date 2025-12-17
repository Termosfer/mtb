import logo from "../assets/mtb.png";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  id: string;
}

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu: MenuItem[] = [
    { name: "Haqqımızda", id: "about" },
    { name: "Məqsəd", id: "mission" },
    { name: "Fəaliyyət", id: "features" },
    { name: "Təlimlər", id: "training" },
    { name: "Əlaqə", id: "footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop < 200) {
        setActive(null);
        return;
      }

      if (scrollTop + windowHeight >= docHeight - 50) {
        setActive("footer");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow flex justify-between items-center px-4 sm:px-10  h-15 md:h-20">
      <img src={logo} alt="Logo" className="h-15 w-30 sm:h-15 sm:w-50  md:w-50  xl:w-75 2xl:w-100 object-cover" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-6 text-base sm:text-xl font-medium">
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={700}
              offset={-100}
              spy={true}
              onSetActive={(id: string) => setActive(id)}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer transition px-3 py-2 rounded-md ${
                active === item.id ? "bg-blue-600 text-white" : "text-black"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black focus:outline-none"
        >
          {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          {menu.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={700}
              offset={-100}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 w-50 text-center transition rounded-md ${
                active === item.id ? "bg-blue-600 text-white" : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
