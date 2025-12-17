const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 xl:px-30 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-6">
        
       
        <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-auto">
          <div className="flex items-center gap-3 md:gap-5 justify-center md:justify-start">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-xs md:text-sm">Bakı, Azərbaycan</p>
          </div>

          <div className="flex items-center gap-3 md:gap-5 justify-center md:justify-start">
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
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
            <p className="text-xs md:text-sm">+994 XX XXX XX XX</p>
          </div>

          <div className="flex items-center gap-3 md:gap-5 justify-center md:justify-start">
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
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
            <p className="text-xs md:text-sm">info@mtbcorporate.az</p>
          </div>
        </div>

       
        <div className="flex gap-4 justify-center md:justify-start w-full md:w-auto">
          <a href="#" className="hover:text-blue-400 transition text-xs md:text-sm">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-400 transition text-xs md:text-sm">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-400 transition text-xs md:text-sm">
            LinkedIn
          </a>
        </div>
      </div>

      
      <div className="mt-6 text-center text-gray-400 text-sm md:text-base">
        &copy; {new Date().getFullYear()} MTB İncorporate MMC. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
};

export default Footer;
