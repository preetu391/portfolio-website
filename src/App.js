import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/about/About";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  const personalDetails = {
    name: "Priyanshi Porwal",
    location: "India",
    availability: "I am available",
    brand: "I am a web developer",
    email: "priyanshi@something.com",
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Landing name={personalDetails.name} />}
        ></Route>
        <Route
          path="/about"
          element={
            <About
              name={personalDetails.name}
              location={personalDetails.location}
              availability={personalDetails.availability}
              brand={personalDetails.brand}
              email={personalDetails.email}
            />
          }
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </>
  );
}

export default App;
