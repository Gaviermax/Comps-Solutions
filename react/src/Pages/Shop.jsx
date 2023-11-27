import { Link } from "react-router-dom";
import "../App.css";
import cpu from "../images/cpu.webp";
import gpu from "../images/gpu.png";
import cpuCase from "../images/case.png";
import ram from "../images/ram.png";

function Shop(){
    return(

        <body className="bg-black">
            <div class="container py-3">
                <h1 class="mb-5 fw-bold text-center" style={{
                    color: 'white'
                }}>Search for Sale</h1>
                <input id="search-bar" class="form-control me-2 mb-3 rounded-pill " type="search" placeholder="🔍 Search for item" aria-label="Search" />
            </div>


            <div class="container py-5">
                <h1 className="text-light badge bg-success">Best Collections</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card bg-dark text-light" data-aos="zoom-out-right">
                            <Link to="/"><img src={cpu} class="card-img-top" alt="..."/></Link>
                            <div class="card-body">
                                <h5 class="card-title">Ryzen 5</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="text-end">
                                <Link to="#" className="btn text-light px-2 me-2" style={{borderColor:"#555FFF",}}>C</Link>
                                <a href="#" class="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p class="card-text"><small class="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>

                    <div class="col">
                        <div class="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={gpu} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mitsubishi Lancer</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="text-end">
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>C</Link>
                                <a href="#" class="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p class="card-text"><small class="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>

                    <div class="col">
                        <div class="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={cpuCase} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mitsubishi Lancer</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="text-end">
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>C</Link>
                                <a href="#" class="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p class="card-text"><small class="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>
                    
                    <div class="col">
                        <div class="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={ram} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mitsubishi Lancer</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="text-end">
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>C</Link>
                                <a href="#" class="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p class="card-text"><small class="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>
                    
                    
                </div>
            </div>
        </body>

    )
}

export default Shop;