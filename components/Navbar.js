import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Portfolio</a>
            </Link>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link  href="/About">
                            <a className="nav-link">About me</a>
                        </Link>                        
                    </li>
                    <li className="nav-item">
                        <Link  href="/Blog">
                            <a className="nav-link">Blog</a>
                        </Link>                        
                    </li>
                    <li className="nav-item">
                        <Link  href="/Github">
                            <a className="nav-link">Github</a>
                        </Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;