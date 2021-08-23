import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">Carlos Aguilar</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/Blog">
                    <a className="nav-link active" aria-current="page">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Github">
                    <a className="nav-link">
                     Github 
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    
    /*
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Carlos Aguilar</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="w-100">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/About">
                                <a className="nav-link">About me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Portfolio">
                                <a className="nav-link">Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Github">
                                <a className="nav-link">Github</a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    */
    }

export default Navbar;