// components/Header/Header.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-light shadow-sm" id="header">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-md-4">
            <div className="logo">
              <img
                src="src/assets/images/logo5.png"
                alt="ALSITA-E"
                width="200px"
              />
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-end">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isMenuOpen ? "show" : ""
                }`}
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-bold">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      {t("nav.home")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link active">
                      {t("nav.knowAbout")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Patient" className="nav-link active">
                      {t("nav.patientSupport")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Medicine" className="nav-link active">
                      {t("nav.medicineAvailability")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="ms-3">
              <select
                className="form-select"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                value={i18n.resolvedLanguage}
              >
                <option value="en">English</option>
                <option value="bn">Bengali</option>
                <option value="gu">Gujarati</option>
                <option value="hi">Hindi</option>
                <option value="kn">Kannada</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="or">Oriya</option>
                <option value="pa">Punjabi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
