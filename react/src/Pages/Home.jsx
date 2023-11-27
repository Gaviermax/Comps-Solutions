import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        
      {/* hero section */}
      <body className="bg-black text-light">
      

          <div
            className="container-fluid bg-secondar d-flex flex-column align-items-start justify-content-center g-5"
            style={{ minHeight: "95vh", backgroundColor: "#95969D" }}
          >
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
              <Link href="#" className="btn btn-dark me-4 fw-medium rounded-0">
                Shop
              </Link>
              <button
                className="btn btn-outline-light  fw-medium me-4 rounded-0"
                type="button"
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
            <h1 style={{ maxWidth: "30ch", color: '#555FFF' }}>
              Long heading is what you see here in this feature section
            </h1>
            <div
              className="container-fluid cardArea d-flex flew-column justify-content-evenly align-items-evenly"
              style={{ width: "100%" }}
            >
              <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5 text-center">
                  <h5 className="card-title py-3">
                    Long heading is what you see here in this feature section
                    <span className="fade">feature section</span>{""}
                  </h5>
                  <p className="card-text py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <Link href="#" className="btn btn-light px-5">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5">
                  <h5 className="card-title py-3">
                    Long heading is what you see here in this feature section
                  </h5>
                  <p className="card-text py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <Link href="#" className="btn btn-light px-5">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="text-center my-5" style={{ width: "25rem" }}>
                <div className="card-body py-5">
                  <h5 className="card-title py-3">
                    Long heading is what you see here in this feature section
                  </h5>
                  <p className="card-text py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <Link href="#" className="btn btn-light px-5">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-light text-dark">
            <div className="container d-flex flew-col bg-light">
              <div className="left container m-5 py-4">
                <p>Quality</p>
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
                <Link href="#" className="btn btn-dark">
                  Shop Now
                </Link>
                <button
                  className="btn btn-outline-light  fw-medium me-4 rounded-0"
                  type="button"
                >
                  Learn More
                </button>
              </div>
              <div className="right d-flex justify-content-center align-items-center bg-success">
                <h1 className="100">image</h1>
                <img className="" src="" alt="" />
              </div>
            </div>
          </div>
          <div className="container my-5 py-5">
            <div className="left"></div>
            <div className="right">
              <h1 style={{color: '#555FFF'}}>Medium length heading goes here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="accordion p-5 m-5 pb-1 bg-black" id="accordionExample">
            <h1 className="text-center fw-bold fs-1" style={{color:'#555FFF'}}>FAQ</h1>
            <h3 className="text-center pb-4" >Frequently Asked Questions</h3>

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
                <Link className="text-center btn btn-light" style={{width:'13%'}}>Contact Us!</Link>
            </div>
      </body>
    </>
  );
}

export default Home;
