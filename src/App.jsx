import { useState } from "react";

import "./App.css";
import Home from "pages/Home.jsx";
import Projects from "pages/Projects.jsx";
import Contact from "pages/Contact.jsx";
import Navbar from "common/Navbar.jsx";
import Footer from "common/Footer.jsx";
import Background from "./layout/Background";

function App() {
  const [pageId, setPageId] = useState("home");
  return (
    <Background>
      <Navbar setPageId={setPageId} pageId={pageId} />
      {pageId === "home" && <Home></Home>}
      {pageId === "projects" && <Projects />}
      {pageId === "contact" && <Contact />}
      <Footer />
    </Background>
  );
}

export default App;
