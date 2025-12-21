import { useEffect } from "react";
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
