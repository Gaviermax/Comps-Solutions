import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        
      {/* hero section */}
      <body className="bg-black text-light">
      

        <div className="hero container-fluid bg-secondar d-flex flex-column align-items-start justify-content-center g-5"
            style={{ minHeight: "95vh", backgroundColor: "#95969D" }}>
            <div className="container text-light">
              <h1 className="fw-bold mb-4" style={{ maxWidth: "25ch" }}>
                <span>
                  Upgrade your</span> <br></br>computer{" "}
                
                with high-<br></br>
                <span className="quality">quality parts</span>
              </h1>
              <p className="mb-4" style={{ maxWidth: "50ch" }}>
                We offer a wide range of computer parts and accessories to enhance
                your computing experience. From processors to graphics cards, we
                have everything you need to build or upgrade your PC.
              </p>
              {/* <button className="btn btn-light text-danger me-4 fw-medium rounded-0" type="button">Shop</button> */}
              <Link to="/shop" className="btn btn-purple me-4 fw-medium px-4 ">
                Shop
              </Link>
              <button
                className="btn outline-purple text-light fw-medium me-4"
                type="button"
                style={{borderColor:"#555FFF"}}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* end of hero */}
          <div
            className="container-fluid d-flex justify-content-evenly align-items-center flex-column text-center my-5"
            style={{ minHeight: "100vh" }}
          >
            <h1 style={{ maxWidth: "30ch"}} className="quality text-light">
              <span className="" style={{borderTop:"4px solid #555FFF"}}>Most Searched </span>Computer Parts
            </h1>
            <div
              className="container-fluid cardArea d-flex flew-column justify-content-evenly align-items-evenly"
              style={{ width: "100%" }}
            >
            <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5 text-center d-flex justify-content-end flex-column">
                  <h5 className="card-title py-3 text-center">
                    Central Processing Unit (CPU)

                  </h5>
                  <p className="card-text py-3 ">
                  The CPU is often considered the brain of the computer. It performs calculations and executes instructions required to run programs and applications. It handles tasks like arithmetic, logic operations, and overall system control.
                  </p>
                  <Link href="#" className="btn btn-purple px-5 w-75 mx-auto">
                    Learn More
                  </Link>
                </div>
            </div>

              <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5 d-flex flex-column">
                  <h5 className="card-title py-3">
                  Random Access Memory (RAM)
                  </h5>
                  <p className="card-text py-3" >
                    RAM is the temporary memory that allows the CPU to access and manipulate data quickly. When a computer is running, it loads data from the hard drive or SSD into RAM for faster access by the CPU. 
                  </p>
                  <Link href="#" className="btn btn-purple px-5 w-75 mx-auto">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5">
                  <h5 className="card-title py-3">
                  Storage (HDD or SSD)
                  </h5>
                  <p className="card-text py-3">
                  Storage devices, such as hard disk drives (HDDs) and solid-state drives (SSDs), store the computer's operating system, software applications, files, and data. HDDs use spinning magnetic disks to store data, while SSDs use flash memory, providing faster read and write speeds
                  </p>
                  <Link href="#" className="btn btn-purple px-5 w-75">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-light text-dark">
            <div className="container d-flex flew-col bg-light">
              <div className="left container m-5 py-4">
                <p className="badge bg-success">Quality</p>
                <h2
                  className="py-3 fw-bold"
                  style={{ maxWidth: "20ch", fontSize: "3em" }}
                >
                  <span style={{borderBottom: '6px solid #555FFF'}}>Find the Perfect </span>Computer Parts for Your Needs
                </h2>
                <p style={{ maxWidth: "55ch" }}>
                  At our store, we offer a wide range of high-quality computer parts
                  to meet your needs. Whether you're building a new PC or upgrading
                  your current setup, we have the components you need to enhance
                  your computing experience.
                </p>
                <ul className="py-4">
                  <li className="py-2">Fast and Reliable Shipping</li>
                  <li className="py-2">Competitive Prices for Top Brands</li>
                  <li className="py-2">
                    Knowledgeable Customer Support for Hassle-Free Shopping
                  </li>
                </ul>
                <Link href="#" className="btn btn-purple px-5">
                  Shop Now
                </Link>
              </div>
              <div className="rightQuality d-flex justify-content-center align-items-center bg-success my-5 p-0" style={{borderRadius:"0 200px 0 200px"}}>
                <img className="" src="../images/quality.webp" alt="" style={{minWidth:"95vh"}}/>
              </div>
            </div>
          </div>

          <div className="container my-5 py-5 d-flex flex-column justify-content-center align-items-center">

              <h1 className="text-center" style={{color: '#555FFF'}}>OUR HISTORY</h1>
              <p className="text-center mx-auto my-5" style={{maxWidth:"100ch", lineHeight:"2em"}}>
              Comps, established in 2045, originated from the collective passion for computers among a close-knit group of friends. Their shared enthusiasm and expertise in computing led to the inception of Comps. What began as a venture fueled by friendship and a love for technology quickly blossomed into a thriving company. Comps' foundation is rooted in this camaraderie, as our team continues to blend technical prowess with a shared dedication to innovation and customer satisfaction, propelling us to new heights in the computer industry. 
              </p>

              <Link to="about" className="btn btn-purple w-25">Learn More</Link>
          </div>
          <div className="accordion p-5 m-5 pb-1 bg-black" id="accordionExample">
            <div className="topFaq d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center fw-bold fs-1" style={{color:'#555FFF'}}>FAQ</h1>
                <h3 className="text-center pb-4" >Frequently Asked Questions</h3>
                <p className="text-secondary text-center w-75 mb-5">Explore our  FAQ section, covering a diverse range of commonly asked questions about our products, services, shipping, returns, and more, providing quick and detailed answers to assist you in making informed decisions and finding solutions effortlessly.</p>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What are computer parts?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                    <p>Computer parts are the individual components that make up a computer system, such as the processor, memory, storage, and graphics card.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I purchase computer parts?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                   <p>To purchase computer parts, simply browse our online store, select the items you need, and proceed to checkout. You can also visit our physical store location.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I make a booking/reservation?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>To make a booking or reservation, please contact our customer service team either by phone, email, or through our online booking system.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Can I cancel my booking/reservation?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Yes, you can cancel your booking or reservation. Please refer to our cancellation policy for more information.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How long is the warranty?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>The length of the warranty varies depending on the specific computer part. Please check the product description or contact our customer service team for details.</p>
                </div>
              </div>
            </div>
          </div>
            <div className="container d-flex flex-column justify-content-center align-items-center p-5">
                <h3 className="text-center">Still have questions?</h3>
                <Link to="/contact" className="text-center btn btn-purple" style={{width:'13%'}}>Contact Us!</Link>
            </div>
      </body>
    </>
  );
}

export default Home;
