import { Outlet, Link } from "react-router-dom";
import '../App.css';

import { useEffect, useState } from "react";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "bootstrap";

function Layout() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      // Listen for changes in the authentication state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Check if the user is logged in and has admin privileges
        setIsAdmin(user && user.email === "admin@gmail.com");
        setUser(user);
      });
  
      // Clean up the subscription when the component unmounts
      return () => unsubscribe();
    }, []);
  
    
    const handleSignOut = () => {
        // Ask for confirmation before signing out
        const confirmSignOut = window.confirm("Are you sure you want to sign out?");
        
        if (confirmSignOut) {
        // Sign out the user
        auth.signOut();
        }
    };

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
                        {isAdmin && (
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link text-light" href="#">
                        Listings
                        </Link>
                         </li>
                        )}
                        <li className="nav-item">
                            <Link to="/book" className="nav-link text-light" href="#">Book</Link>
                        </li>
                        {isAdmin && (
                        <li className="nav-item">
                            <Link to="/manageProduct" className="nav-link text-light" href="#">Manage</Link>
                        </li>
                    )}
                    </ul>

                <form className="d-flex" role="search">
                    <ul className="navbar-nav me-4 mb-2 mb-lg-0 bg-light">
                        <li className="nav-item">
                            <button className="btn nav-link text-light bg-black rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">🛍️</button>

                        </li>
                    </ul>

                    {user ? (
                    <>
                        <button
                        onClick={handleSignOut}
                        className="btn btn-outline-light fw-medium me-4 rounded-0"
                        type="button"
                        >
                        Sign Out
                        </button>
                    </>
                    ) : (
                    <>
                        <Link to="/signup">
                        <button className="btn btn-outline-light fw-medium me-4 rounded-0" type="button">
                            Sign Up
                        </button>
                        </Link>
                        <Link to="/login">
                        <button className="btn btn-light text-black me-5 fw-medium rounded-0" type="button">
                            Log In
                        </button>
                        </Link>
                    </>
                    )}

                </form>
                </div>
            </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;
