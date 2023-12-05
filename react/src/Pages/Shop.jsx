import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import cpu from "../images/cpu.webp";
import gpu from "../images/gpu.png";
import cpuCase from "../images/case.png";
import ram from "../images/ram.png";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, onSnapshot} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
// import { getStorage} from "firebase/storage";


function Shop(){
    const [image,setImage] = useState(null);
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD1nO8GEMuUryXWwLIi92eEPf5QfNYNhJ8",
        authDomain: "loginsignup-801b6.firebaseapp.com",
        databaseURL: "https://loginsignup-801b6-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "loginsignup-801b6",
        storageBucket: "loginsignup-801b6.appspot.com",
        messagingSenderId: "409222316795",
        appId: "1:409222316795:web:80c979400122d9e028665e",
        measurementId: "G-TFTY28FEK6"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // const storage = getStorage(app)



    onSnapshot(collection(db,"products"), snapshot => {
        document.querySelector("#productArea").innerHTML = "";
        snapshot.forEach(product =>{
            let showProduct = 

            // `<tr>
            //     <td>${booking.data().lastname}</td>
            //     <td>${booking.data().firstname}</td>
            //     <td>${booking.data().description}</td>
            //     <td>${booking.data().contact}</td>
            //     <td>${booking.data().email}</td>
            //     <td>${booking.data().bookingType}</td>
            //     <td>${booking.data().date}</td>
            // </tr>`;
            `
            <div class="col card-deck">
                        <div class="card bg-dark text-light" data-aos="zoom-out-right">
                            <Link><img src=${product.data().imageURL} class="card-img-top" alt="..."/></Link>



                            <div class="modal fade" id=${product.data().productName} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen text-light">
                                    <div class="container mx-5 mb-5 modal-content bg-dark">
                                        <div class="modal-header" data-bs-theme="dark">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${product.data().productName}</h1>
                                            <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body d-flex justify-content-evenly align-items-center">
                                            <div class="" style="min-height:">
                                                <img src=${gpu} alt="cpu" />
                                            </div>
                                            <div class="col p-5" style={{maxWidth:'50%'}}>
                                                <h2 class = "mb-4" style="max-width:20ch">${product.data().productName}</h2>
                                                <p class = "mb-4 text-justify">${product.data().productDescription}</p>
                                                <h4>$${product.data().productPrice}</h4>
                                                <div class="buttonGroup row mt-5">
                                                    <div class="btn-group col-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn outline-purple text-purple" style="border-color:$555FFF">-</button>
                                                        <button type="button" class="btn disabled btn-purple text-light" style="border-color:$555FFF">0</button>
                                                        <button type="button" class="btn outline-purple text-purple" style="border-color:$555FFF">+</button>
                                                    </div>
                                                    <br />
                                                    <div class="col-8 d-flex justify-content-end">
                                                        <a href="#" class="btn btn-purple mx-auto px-5 w-50" id=${product}>🛒 Add to Cart</a>
                                                    </div>
                                                    <p class="card-text mt-3"><small class="text-purple">Available stocks: ${product.data().stocks}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">${product.data().productName}</h5>
                                <p class="card-text">${product.data().productDescription}</p>
                                <button class="btn btn-light px-2 py-0"data-bs-toggle="modal" data-bs-target=#${product.data().productName}>⇱</button>
                            <div class="text-end">
                                
                                <p class="text-urple fw-bold"><span class="badge bg-danger me-2">-10%</span>$${product.data().productPrice}</p>
                                <a to="#" class="btn outline-purple text-light px-2 me-2" style="border-color:#555FFF">♡</a>
                                <a href="/" class="btn btn-purple fw-bold px-2" id= ${product.id} >Buy Now</a></div>
                            </div>
                        </div>
                    </div>
            `
            document.querySelector("#productArea").innerHTML += showProduct;

        });
    });

    return(

        <body className="bg-black" style={{minHeight:"100vh"}}>
            {/* add to cart modal */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body card">
                    <div className="row">
                        <img src={cpu} alt="" className="col-3 img-fluid rounded-3"/>
                        <div className="col-7">
                            <p className="col-">Ryzen 5 7000 Series</p>
                            <small className="text-secondary">1 x $199</small>
                        </div>
                        <button type="button" class="btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <hr className="mt-3"/>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <h1 className="mb-5 fw-bold text-center" style={{
                    color: 'white'
                }}>Search Product</h1>
                <input id="search-bar" className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="🔍 Search for item" aria-label="Search" />
            </div>


            <div className="container py-5">
                <h1 className="text-light badge bg-success">Best Collections</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4" id="productArea">
                     {/* <div className="col">
                        <div className="card bg-dark text-light" data-aos="zoom-out-right">
                            <Link><img src={cpu} className="card-img-top" alt="..."/></Link>

                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen text-light">
                                    <div class="container mx-5 mb-5 modal-content bg-dark">
                                        <div class="modal-header" data-bs-theme="dark">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Ryzen 5 7000 Series</h1>
                                            <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body d-flex justify-content-evenly align-items-center">
                                            <div className="">
                                                <img src={gpu} alt="cpu" />
                                            </div>
                                            <div className="col p-5" style={{maxWidth:'50%'}}>
                                                <h2 class = "mb-4">Product Name</h2>
                                                <p class = "mb-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ratione possimus perferendis quos iusto adipisci consequuntur aliquid quod, totam tempora iste quo dicta deleniti cum ducimus incidunt facilis autem sint.</p>
                                                <h4>Product price <span class="badge bg-danger">less</span></h4>
                                                <div className="buttonGroup row mt-5">
                                                    <div class="btn-group col-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn outline-purple text-purple" style={{borderColor:"#555FFF"}}>-</button>
                                                        <button type="button" class="btn disabled btn-purple text-light" style={{borderColor:"#555FFF"}}>0</button>
                                                        <button type="button" class="btn outline-purple text-purple" style={{borderColor:"#555FFF"}}>+</button>
                                                    </div>
                                                    <br />
                                                    <div className="col-8 d-flex justify-content-end">
                                                        <a href="#" class="btn btn-purple mx-auto px-5 w-50" onClick={(e)=>(
                                                            e.querySelector("")
                                                        )}>Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
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
                    </div> */}

                    {/* <div className="col">
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
                     </div> */}

                   {/* <div className="col">
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
                     </div> */}
                    
                    
                </div>
            </div>
        </body>

    )
}

export default Shop;