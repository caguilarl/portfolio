import Link from 'next/link'
import Classname from 'classnames';

const Navbar = ({page}) => {
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
              <Link href="/About">
                <a className="nav-link" aria-current="page">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Blog">
                <a className="nav-link" aria-current="page">
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
            <li className={Classname({'nav-item':true, 'text-light': page === "Contact"? true: false })}>
              <Link href="/Contact">
                <a className="nav-link">
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;