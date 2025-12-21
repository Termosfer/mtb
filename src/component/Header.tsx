/* import logo from "../assets/mtb.png";
import { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  id: string;
}

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Haqqımızda", id: "haqqimizda" },
    { name: "Məqsəd", id: "məqsəd" },
    { name: "Fəaliyyət", id: "fəaliyyət" },
    { name: "Təlimlər", id: "təlimlər" },
    { name: "Əlaqə", id: "əlaqə" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; 

      let current: string | null = null;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        if (scrollPos >= section.offsetTop) {
          current = item.id;
        }
      });

      
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        current = "əlaqə";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow flex justify-between items-center px-4 sm:px-10  h-15 md:h-20">
      <img
        src={logo}
        alt="Logo"
        className="h-15 w-30 sm:h-15   md:w-40  lg:w-40 2xl:w-50  2xl:h-20 object-cover"
      />

      <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-sm  2xl:text-base font-medium">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)} 
              className={`px-3 py-2 rounded-md transition ${
                active === item.id ? "bg-blue-600 text-white" : "text-black"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          {menuItems.map((item) => (
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)} 
              className={`px-3 py-2 rounded-md transition ${
                active === item.id ? "bg-blue-600 text-white" : "text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
 */



import logo from "../assets/mtb.png";
import { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  id: string;
}

const HEADER_HEIGHT = 80; // px, fixed header height

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Haqqımızda", id: "haqqimizda" },
    { name: "Məqsəd", id: "məqsəd" },
    { name: "Fəaliyyət", id: "fəaliyyət" },
    { name: "Təlimlər", id: "təlimlər" },
    { name: "Əlaqə", id: "əlaqə" },
  ];

  // Scroll ilə active update
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + HEADER_HEIGHT + 10; // header offset + margin
      let current: string | null = null;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && scrollPos >= section.offsetTop) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial active

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.offsetTop - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });

    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow flex justify-between items-center px-4 sm:px-10 h-20">
      <img src={logo} alt="Logo" className="h-15 w-30 md:w-40 object-cover" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-base">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md transition ${
                active === item.id ? "bg-blue-600 text-white" : "text-black"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md transition ${
                  active === item.id ? "bg-blue-600 text-white" : "text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
