import React from "react";
import { Link } from "react-router-dom";

const NotAFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-3 my-0">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <Link
          to="/stores"
          className="nav-link nav-link px-4 text-body-secondary"
          onClick={scrollToTop}
        >
          סניפים
        </Link>
        <Link
          to="/terms"
          className="nav-link nav-link px-4 text-body-secondary"
          id="termsFooter"
          onClick={scrollToTop}
        >
          פגישות ייעוץ
        </Link>
        <Link
          to="/trainers"
          className="nav-link nav-link px-4 text-body-secondary"
          onClick={scrollToTop}
        >
          יועצים
        </Link>
        <Link
          to="/about"
          className="nav-link nav-link px-4 text-body-secondary"
          onClick={scrollToTop}
        >
          אודות
        </Link>
      </ul>
      <p className="text-center text-body-secondary" style={{ color: "white" }}>
        &copy; 2001-2023 Israelbody
      </p>
    </footer>
  );
};

export default NotAFooter;
