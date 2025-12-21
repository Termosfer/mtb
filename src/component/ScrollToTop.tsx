/* import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", pathname);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
 */

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

    // İlk load-da scroll 0,0
    if (firstLoad.current) {
      firstLoad.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    // Refresh zamanı hash varsa sil
    if (window.location.hash) {
      // scrollBeforeRemoval: browser default-un qarışmaması üçün əvvəl scroll
      const y = window.scrollY;
      window.history.replaceState(null, "", pathname);
      window.scrollTo(0, y); // scroll pozulmasın
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
