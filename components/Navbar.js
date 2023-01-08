const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary ">
        <div className="container-xxl">
          <a href="#intro" className="navbar-brand">
            <span className="fw-bold">
              <i class="bi bi-book-half"></i>
              Net Ninja Pro - the Book
            </span>
          </a>
          {/* toggle button foe mobile nav */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navbar links */}

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#topics">
                  About The Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Get in Touch
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-light" href="#pricing">
                  Buy now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
