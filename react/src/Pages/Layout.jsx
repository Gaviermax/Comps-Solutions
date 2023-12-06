import { Outlet, Link } from "react-router-dom";
import '../App.css';


function Layout(){
    return(
        <>
             <nav className="navbar navbar-expand-lg bg-black shadow sticky-top">
                <div className="container-fluid">

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
                            <Link to="/book" className="nav-link text-light" href="#">Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/manageProduct" className="nav-link text-light" href="#">Manage</Link>
                        </li>
                    
                    </ul>

                <form className="d-flex" role="search">
                    <ul className="navbar-nav me-4 mb-2 mb-lg-0 bg-light">
                        <li className="nav-item">
                            <button className="btn nav-link text-light bg-black rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">🛍️</button>

                        </li>
                    </ul>
                    <Link to="/signup"><button className="btn outline-purple fw-medium me-4 rounded-0 text-white" type="button" style={{borderColor:"#555FFF"}}>Sign Up</button></Link>
                    <Link to="/login"><button className="btn btn-purple text-white me-5 fw-medium rounded-0" type="button">Log In</button></Link>
                </form>
                </div>
            </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;