import { Link } from "react-router-dom";
import { auth } from "../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate }from "react-router-dom"
import React, { useState } from "react";

export default function Login(){
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const isAdmin = email === "admin@gmail.com";
        localStorage.setItem("isAdmin", isAdmin);
        // Redirect or perform any other actions after successful login
        history("/"); // Change the destination as needed
      } catch (err) {
        console.error(err);
        alert("Incorrect email or password!")
        // Handle login errors, display a message, etc.
      }
    };
      
    return(
        <>
            <>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black" style={{minHeight: "100vh"}}>
                <div className="container d-flex align-items-center justify-evenly shadow rounded px-5 pb-5 text-white">
                    <div className="form p-3 d-flex align-items-center justify-content-center flex-column" style={{width:'100%'}}>
                        <h1 className="mb-5 fw-bold" style={{color:'#555FFF'}}>Comp<span className="text-white">Solution</span></h1>
                        <h1>Log In Account</h1>
                        <p>Don't have account yet? <Link to='/signup'><span className="fw-bold" style={{textDecoration:'underline', cursor:'pointer',color:'#555FFF'}}>Sign Up Now!</span></Link></p>
                        <p className="fw-semibold fs-5" style={{color:'#555FFF', letterSpacing:'1.5px'}}>Discover a great amount of new opportunities!</p>
                        <div className="container card bg-white text-black mb-5 mt-3 rounded-5" style={{width:'50%'}}>
                            <form className="card-body" action="">
                                <input onChange={(e) => setEmail(e.target.value)} className="form-control my-4" placeholder="example@org.com" type="email" style={{height:'50px'}} />
                                <input onChange={(e) => setPassword(e.target.value)} className="form-control my-4" placeholder="Password" type="password" style={{height:'50px'}} />
                                <Link className="my-5" style={{textDecoration:'none', color:'#949494'}}>Forgot password?</Link>
                                <br />
                                <button onClick={login} type="button" className="btn btn-success rounded-5 text-light py-2 mt-4 fw-bold" style={{width:'100%', letterSpacing:'2px'}}>LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
        </>
    )
}
