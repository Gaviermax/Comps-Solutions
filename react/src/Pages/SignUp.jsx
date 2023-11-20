export default function SignUp(){
    return(
        <>
            <div className="container d-flex align-items-center justify-content-center bg-danger" style={{minHeight: "100vh"}}>
                <div className="container-fluid d-flex align-items-center justify-content-center shadow">
                    <div className="form">
                        <h2 className="mb-5">CompSolution</h2>
                        <h1>Create an Account</h1>
                        <p>Already have an account? <span style={{textDecoration:'underline'}}>Sign In</span></p>
                        <div className="container card">
                            <form className="card-body" action="">
                                <input placeholder="First Name" type="text" />
                                <input placeholder="Last Name" type="text" />
                                <input placeholder="Email" type="email" />
                                <input placeholder="Password" type="password" />
                                <input placeholder="Confirm Password" type="password" />
                            </form>
                        </div>
                        <p>By conitnuing, you agree to Comps Solutions' <span style={{textDecoration: 'underline'}}>Terms of Service</span> & <span style={{textDecoration: 'underline'}}>Privacy Policy</span></p>
                        <button type="button" className="btn btn-info rounded-5 text-light px-5 py-2">Sign Up</button>
                    </div>
                    <div className="desc">
                        <h1>Learn to code by watching others</h1>
                        <p>See hoe experience developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                    </div>
                </div>

            </div>
        </>
    )
}