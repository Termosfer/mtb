import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import ScrollToTop from "./component/ScrollToTop";

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
