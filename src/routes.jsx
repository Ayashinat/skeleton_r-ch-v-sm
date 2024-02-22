import Home from "./pages/home";
import Contact from "./pages/contact";
import About from './pages/about';
import { Route, Routes } from "react-router-dom";

const SiteRoutes = () => {
    return (
      <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apropos" element={<About />} />
          </Routes>
      </>
    );
  };

    


export default SiteRoutes;