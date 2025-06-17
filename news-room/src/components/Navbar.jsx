import React from 'react';

export const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <span className="badge">News-Room</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("technology")} className="nav-link">Technology</div>
              </li>
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("business")} className="nav-link">Business</div>
              </li>
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("health")} className="nav-link">Health</div>
              </li>
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("science")} className="nav-link">Science</div>
              </li>
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("sports")} className="nav-link">Sports</div>
              </li>
              <li className="nav-item">
                <div style={{cursor:'pointer'}} onClick={() => setCategory("entertainment")} className="nav-link">Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
