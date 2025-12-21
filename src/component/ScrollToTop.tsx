import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    // Browser scroll restoration manual
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // İlk load-da scroll yuxarıdan başlasın
    if (firstLoad.current) {
      firstLoad.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    // Refresh zamanı hash varsa sil
    if (window.location.hash) {
      const y = window.scrollY;
      window.history.replaceState(null, "", pathname);
      window.scrollTo(0, y);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;


