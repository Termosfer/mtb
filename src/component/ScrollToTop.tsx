import { useEffect } from "react";
import { useLocation } from "react-router";

const Scrolltotop = () => {

 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // istəsən "auto" da ola bilər
    });
  }, [pathname]);

  return null;
};

export default Scrolltotop;
