import React from "react";

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#828282' }}>
        <div className="container-fluid ">
          <a className="navbar-brand text-white" href="#"><strong>QTemu</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white mx-4" href="#about">Create Meetup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-4" href="#services">Explore</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarComponent