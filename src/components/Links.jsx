import React, { useState } from "react";
import open from "../images/open.svg";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

const Links = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <button
          className="dropdown-toggle"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          {isModalOpen ? (
            <img className="closeMenu" src={close} alt="close" />
          ) : (
            <img className="openMenu" src={open} alt="open" />
          )}
        </button>
      </div>
      <nav className={`links ${isModalOpen ? "open" : "closed"}`}>
        <Link
          to="/"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          {" "}
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          {" "}
          Projects
        </Link>
      </nav>
    </>
  );
};

export default Links;
