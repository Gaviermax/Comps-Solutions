import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { useNavigate }from "react-router-dom"
import { auth, database } from "../config/firebase-config";
import { ref, child, set } from "firebase/database"

export default function SignUp() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateAndSignUp = () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      alert("Email or Password is in the wrong format! (Password must be at least 6 characters long.");
      return;
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      alert("Passwords do not match!");
      return;
    }

    if (!validateField(firstName) || !validateField(lastName)) {
      alert("One or more fields are empty.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Push user details to the database
        const userRef = ref(database);
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName,
        };

        set(child(userRef, `users/${user.uid}`), userData).then(() => {
          console.log("Validation passed");
          alert('User Created!');
          history("/login");
        }).catch((error) => {
          console.error(error);
          // Handle database update errors
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle signup errors
      });

  };

  // Validation functions
  const validateEmail = (email) => {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const validateField = (field) => {
    return field && field.trim().length > 0;
  };
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center bg-black"
        style={{ minHeight: "100vh" }}
      >
        <div className="container d-flex align-items-center justify-evenly shadow rounded px-5 pb-5 text-white">
          <div className="form p-3" style={{ width: "100%" }}>
            <h2 className="mb-5 fw-bold" style={{ color: "#178582" }}>
              Comp<span className="text-white">Solution</span>
            </h2>
            <h1>Create an Account</h1>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span
                  className="fw-bold"
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#178582",
                  }}
                >
                  Sign In
                </span>
              </Link>
            </p>
            <div className="container card bg-white text-black my-5 rounded-5">
              <form className="card-body" action="">
                <div class="row g-4 align-items-center mb-4 mt-1">
                  <div class="col-6">
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      placeholder="First Name"
                      id = "firstName"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div class="col-6">
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      placeholder="Last Name"
                      id = "lastName"
                      style={{ height: "50px" }}
                    />
                  </div>
                </div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control my-4"
                  placeholder="example@org.com"
                  type="email"
                  id = "email"
                  style={{ height: "50px" }}
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control my-4"
                  placeholder="Password"
                  type="password"
                  style={{ height: "50px" }}
                />
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control my-4"
                  placeholder="Confirm Password"
                  type="password"
                  style={{ height: "50px" }}
                />
              </form>
            </div>
            <p className="mb-3">
              By continuing, you agree to Comps Solutions'{" "}
              <span style={{ textDecoration: "underline" }}>
                Terms of Service
              </span>{" "}
              &{" "}
              <span style={{ textDecoration: "underline" }}>
                Privacy Policy
              </span>
            </p>
            <button onClick={validateAndSignUp}
              type="button"
              className="btn btn-success rounded-5 text-light px-5 py-2"
            >
              Sign Up
            </button>
          </div>
          <div className="desc" style={{ width: "100%" }}>
            <h1 className="ms-3 fw-bold" style={{ color: "#178582" }}>
              Upgrade your{" "}
              <span className="text-white">
                computer with high-quality parts
              </span>
            </h1>
            {/* <p>See hoe experience developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
