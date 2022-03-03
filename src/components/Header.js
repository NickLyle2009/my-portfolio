import { useState } from "react";
import React from "react";
import AboutMe from "./pages/AboutMe";
import Navbar from "./Navbar";
import MyWork from "./pages/MyWork";
import Contact from './pages/Contact'
import "../App.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact/>;
    }
    return <MyWork />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <div className="header px-4">
        <h1>Welcome!</h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
    </div>
  );
}
