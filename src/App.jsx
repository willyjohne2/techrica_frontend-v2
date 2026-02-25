import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Conversation from "./pages/contact/Conversation.jsx";
import "./index.css"
function App() {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/conversation/:threadId" element={<Conversation />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
