import { Link } from "react-router-dom";
import "../App.css";
import cpu from "../images/cpu.webp";
import gpu from "../images/gpu.png";
import cpuCase from "../images/case.png";
import ram from "../images/ram.png";


function Shop(){
    return(

        <body className="bg-black">
            <div className="container py-3">
                <h1 className="mb-5 fw-bold text-center" style={{
                    color: 'white'
                }}>Search Product</h1>
                <input id="search-bar" className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="🔍 Search for item" aria-label="Search" />
            </div>


            <div className="container py-5">
                <h1 className="text-light badge bg-success">Best Collections</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card bg-dark text-light" data-aos="zoom-out-right">
                            <Link><img src={cpu} className="card-img-top" alt="..."/></Link>

                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Ryzen 5</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className="btn btn-light px-2 py-0"data-bs-toggle="modal" data-bs-target="#staticBackdrop">⇱</button>
                            <div className="text-end">
                                
                                <p className="text-urple fw-bold"><span className="badge bg-danger me-2">-10%</span>$499</p>
                                <Link to="#" className="btn outline-purple text-light px-2 me-2" style={{borderColor:"#555FFF",}}>♡</Link>
                                <a href="#" className="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p className="card-text"><small className="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>

                    <div className="col">
                        <div className="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={gpu} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Mitsubishi Lancer</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className="btn btn-light px-2 py-0"data-bs-toggle="modal" data-bs-target="#staticBackdrop">⇱</button>
                            <div className="text-end">
                                <p className="text-urple fw-bold"><span className="badge bg-danger me-2">-10%</span>$199</p>
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>♡</Link>
                                <a href="#" className="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p className="card-text"><small className="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>

                    <div className="col">
                        <div className="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={cpuCase} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Mitsubishi Lancer</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className="btn btn-light px-2 py-0"data-bs-toggle="modal" data-bs-target="#staticBackdrop">⇱</button>
                            <div className="text-end">
                                <p className="text-urple fw-bold"><span className="badge bg-danger me-2">-10%</span>$19</p>
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>♡</Link>
                                <a href="#" className="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p className="card-text"><small className="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>
                    
                    <div className="col">
                        <div className="card bg-dark text-light" data-aos="zoom-out-right">
                            <img src={ram} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Mitsubishi Lancer</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className="btn btn-light px-2 py-0"data-bs-toggle="modal" data-bs-target="#staticBackdrop">⇱</button>
                            <div className="text-end">
                                <p className="text-urple fw-bold"><span className="badge bg-danger me-2">-10%</span>$29</p>
                                <Link to="#" className="btn text-light outline-purple px-2 me-2" style={{borderColor:"#555FFF",}}>♡</Link>
                                <a href="#" className="btn btn-purple fw-bold px-2">Buy Now</a></div>
                                <p className="card-text"><small className="text-purple">Available in stock</small></p>
                            </div>
                        </div>
                     </div>
                    
                    
                </div>
            </div>
        </body>

    )
}

export default Shop;