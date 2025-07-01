import React, { useCallback, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./Navbar.css";
import Logo from "@/components/common/logo";

const NAVIGATION_ITEMS = [
  { key: "home", label: "Home", path: "/", type: "route" },
  { key: "how-it-works", label: "How it Works", path: "#how-it-works-section", type: "scroll" },
  { key: "testing-location", label: "Testing Location", path: "#testing-location-section", type: "scroll" },
  { key: "order-test", label: "Order Test", path: "#testing-location-section", type: "scroll" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleNavClick = useCallback((e, item) => {
    e.preventDefault();
    
    if (item.type === "route") {
      navigate(item.path);
      return;
    }

    const sectionId = item.path.replace("#", "");
    
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 300);
    } else {
      scrollToSection(sectionId);
    }
  }, [location.pathname, navigate, scrollToSection]);

  const navigationLinks = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item) => {
        const isActive = item.type === "route" 
          ? location.pathname === item.path
          : location.pathname === "/" && location.hash === item.path;

        const linkClass = `nav-link ${isActive ? "nav-link--active" : ""}`;

        if (item.type === "route") {
          return (
            <Link
              key={item.key}
              to={item.path}
              className={linkClass}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <a
            key={item.key}
            href={item.path}
            className={linkClass}
            onClick={(e) => handleNavClick(e, item)}
            aria-label={`Scroll to ${item.label}`}
          >
            {item.label}
          </a>
        );
      }),
    [location.pathname, location.hash, handleNavClick]
  );

  return (
    <header className="navbar">
      <Logo />
      <nav className="navbar-navigation">
        {navigationLinks}
        <div className="navbar-actions">
          <Button type="default" className="login-btn">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;