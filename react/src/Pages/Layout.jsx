import { Outlet, Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Shop from "./Shop";
import { Button } from "bootstrap";

function Layout() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);
    const [initialRender, setInitialRender] = useState(true);
  
    useEffect(() => {
        // Listen for changes in the authentication state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Check if the user is logged in and has admin privileges
            setIsAdmin(user && user.email === "admin@gmail.com");
            setUser(user);

            // If it's the initial render and the user is logged in, sign them out
            if (initialRender) {
                signOut(auth);
                setInitialRender(false);
            }
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, [initialRender]);
    
    const handleSignOut = () => {
        // Ask for confirmation before signing out
        const confirmSignOut = window.confirm("Are you sure you want to sign out?");
        
        if (confirmSignOut) {
        // Sign out the user
        auth.signOut();
        window.location.reload();
        }
    };

    return(
        <>

             <nav className="navbar navbar-expand-lg bg-black shadow sticky-top fw-bold py-3">
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
                        className="btn outline-main text-light fw-bold me-4 rounded-2"
                        type="button"
                        style={{letterSpacing:"1px"}}
                        >
                        Sign Out
                        </button>
                    </>
                    ) : (
                    <>
                        <Link to="/signup">
                        <button className="btn outline-main bg-* text-light fw-bold me-4 rounded-2" type="button" style={{borderCoor:"#555FFF"}}>
                            Sign Up
                        </button>
                        </Link>
                        <Link to="/login">
                        <button className="btn btn-purple text-white fw-bold rounded-2" type="button">
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

            <footer className="bg-dark text-white py-5">
                <div className="container py-5">
                    <div className="row mb-3">
                        <div className="col-2">
                            <h5>logo</h5>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold ">About Us</h5>
                            <Link className="text-decoration-none text-light footer-links my-2">Products</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Services</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Contact Us</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">FAQ</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Support</Link>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold ">Terms</h5>
                            <Link className="text-decoration-none text-light footer-links my-2">Privacy</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Shipping</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Returns</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Warranty</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Blog</Link>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <h5 className="fw-bold ">Follow us on</h5>
                            <Link className="text-decoration-none text-light footer-links my-2">Facebook</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Instagram</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Github</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">LinkedIn</Link>
                            <Link className="text-decoration-none text-light footer-links my-2">Twitter</Link>
                        </div>
                        <div className="col-4">
                            <h5 className="fw-bold ">Subscribe</h5>
                            <p>Join our mailing list for the latest updates and promotions.</p>
                            <div className="row">
                                <div className="col-8">
                                <input type="email" className="col-10 form-control" placeholder="Enter your Email" />
                                </div>
                                <div className="col-4 mx-0">
                                    <Link className="btn btn-purple me-4 ms-0 form-control col-2 rounded-1 py-1">Send</Link>
                                </div>
                                <small style={{fontSize:"12px"}} className="mt-2">By subscribing, you agree to our Privacy Policy and consent to receive updates.</small>
                            </div>
                        </div>
                    </div>

                    <div className="copyright" style={{borderTop:"1px solid white"}}>
                        <p className="text-center mt-3">@2023 CompSolutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;
