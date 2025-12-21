import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import ScrollToTop from "./component/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

 
  window.scrollTo(0, 0);
}, []);
  return (
    <BrowserRouter>
      {<ScrollToTop />}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
