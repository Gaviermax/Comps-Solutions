import { Outlet, Link } from "react-router-dom";
import '../App.css';

function Layout(){
    return(
        <>
             <nav className="navbar navbar-expand-lg bg-danger shadow sticky-top">
                <div className="container">

                    <Link to="/" className="navbar-brand fw-bold text-light">COMPS</Link>
                    {/* burger menu for mobile view */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link active text-light" aria-current="page" href="#">Shop Now</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-light" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link text-light" href="#">Book</Link>
                        </li>
                    
                    </ul>

                <form className="d-flex" role="search">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                    <ul className="navbar-nav me-4 mb-2 mb-lg-0 bg-light">
                        <li className="nav-item">
                            <Link to="/services" className="nav-link text-light" href="#">🛒🛍️</Link> {/*temp pani, will find image */}
                        </li>
                    </ul>
                    <button className="btn btn-outline-light  fw-medium me-4 rounded-0" type="button">Sign Up</button>
                    <button className="btn btn-light text-danger me-5 fw-medium rounded-0" type="button">Log In</button>
                </form>
                </div>
            </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;