import { Link } from "react-router-dom";

export default function SignUp(){
    return(
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-black" style={{minHeight: "100vh"}}>
                <div className="container d-flex align-items-center justify-evenly shadow rounded px-5 pb-5 text-white">
                    <div className="form p-3" style={{width:'100%'}}>
                        <h2 className="mb-5 fw-bold" style={{color:'#555FFF'}}>Comp<span className="text-white">Solution</span></h2>
                        <h1>Create an Account</h1>
                        <p>Already have an account? <Link to='/login'><span className="fw-bold" style={{textDecoration:'underline', cursor:'pointer',color:'#555FFF'}}>Sign In</span></Link></p>
                        <div className="container card bg-white text-black my-5 rounded-5">
                            <form className="card-body" action="">
                            <div class="row g-4 align-items-center mb-4 mt-1">
                                <div class="col-6">
                                <input type="text"  className="form-control" aria-describedby="passwordHelpInline" placeholder="First Name" style={{height:'50px'}}/>
                                </div>
                                <div class="col-6">
                                    <input type="text" className="form-control" aria-describedby="passwordHelpInline" placeholder="Last Name" style={{height:'50px'}} />
                                </div>
                            </div>
                                <input className="form-control my-4" placeholder="example@org.com" type="email" style={{height:'50px'}} />
                                <input className="form-control my-4" placeholder="Password" type="password" style={{height:'50px'}} />
                                <input className="form-control my-4" placeholder="Confirm Password" type="password" style={{height:'50px'}} />
                            </form>
                        </div>
                        <p className="mb-3">By conitnuing, you agree to Comps Solutions' <span style={{textDecoration: 'underline'}}>Terms of Service</span> & <span style={{textDecoration: 'underline'}}>Privacy Policy</span></p>
                        <button type="button" className="btn btn-success rounded-5 text-light px-5 py-2">Sign Up</button>
                    </div>
                    <div className="desc" style={{width:'100%'}}>
                        <h1 className="ms-3 fw-bold" style={{color:'#555FFF'}}>Upgrade your <span className="text-white">computer with high-quality parts</span></h1>
                        {/* <p>See hoe experience developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p> */}
                    </div>
                </div>

            </div>
        </>
    )
}