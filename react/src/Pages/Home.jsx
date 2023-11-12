import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        {/* hero section */}
            <div className="container-fluid bg-secondar d-flex flex-column align-items-start justify-content-center g-5" style={{minHeight: "95vh",backgroundColor: "#95969D"}}>
                <div className="container text-light">
                    <h1 className="fw-bold mb-4" style={{maxWidth: "25ch"}}><span style={{borderBottom:"5px solid #DC3545"}}>Upgrade your computer </span>with high-quality parts</h1>
                    <p className="mb-4" style={{maxWidth: "50ch"}}>We offer a wide range of computer parts and accessories to enhance your computing experience. From processors to graphics cards, we have everything you need to build or upgrade your PC.</p>
                    <button className="btn btn-light text-danger me-4 fw-medium rounded-0" type="button">Shop</button>
                    <button className="btn btn-outline-light  fw-medium me-4 rounded-0" type="button">Learn More</button>
                </div>
            </div>
        {/* end of hero */}

        <div className="container-fluid d-flex justify-content-evenly align-items-center flex-column text-center" style={{minHeight: "100vh"}}>
            <h1 style={{maxWidth: "30ch"}}>Long heading is what you see here in this feature section</h1>
            <div className="container-fluid cardArea d-flex flew-column justify-content-evenly align-items-evenly bg-danger" style={{width: "100%"}}>
                <div className="card text-center my-5" style={{width: "25rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Long heading is what you see here in this feature section</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <Link href="#" className="btn btn-danger">Learn More</Link>
                    </div>
                 </div>
                <div className="card text-center my-5" style={{width: "25rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Long heading is what you see here in this feature section</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <Link href="#" className="btn btn-danger">Learn More</Link>
                    </div>
                 </div>
                <div className="card text-center my-5" style={{width: "25rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Long heading is what you see here in this feature section</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <Link href="#" className="btn btn-danger">Learn More</Link>
                    </div>
                 </div>
                
            </div>
            
        </div>
        </>
    )
}

export default Home;