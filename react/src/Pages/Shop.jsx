import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import cpu from "../images/cpu.webp";
import gpu from "../images/gpu.png";
import cpuCase from "../images/case.png";
import ram from "../images/ram.png";
import { getFirestore, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import Layout from "./Layout";
import { useEffect } from "react";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
// import { getStorage} from "firebase/storage";


function Shop(){
   const [image, setImage] = useState(null);
   const [isAdmin, setIsAdmin] = useState(false);
   const [user, setUser] = useState(null);

   const db = getFirestore();
    // const storage = getStorage(app)
  
    useEffect(() => {
      // Listen for changes in the authentication state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Check if the user is logged in and has admin privileges
        setIsAdmin(user && user.email === "admin@gmail.com");
        setUser(user);
      });
  
      // Clean up the subscription when the component unmounts
      return () => unsubscribe();
    }, []);

    console.log("The value for isadmin is: " + isAdmin)
    const deleteProduct = async (productId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?")
        if(confirmDelete){
        try {
            await deleteDoc(doc(db, 'products', productId));
            alert('Product deleted successfully!');
        } catch (error) {
            console.error('Error deleting product: ', error);
            alert('Failed to delete product. Please try again.');
        }
    }
    };

    onSnapshot(collection(db,"products"), snapshot => {
        document.querySelector("#productArea").innerHTML = "";
        snapshot.forEach(product =>{

            let showProduct = 
            `
            <div class="col card-deck">
                        <div class="card bg-dark shadow text-light" data-aos="zoom-out-right">
                            <Link><img src=${product.data().imageUrl} class="card-img-top img-fluid" alt="..."/></Link>

                            <div class="modal fade" id=${product.data().productName} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen text-light">
                                    <div class="container mx-5 mb-5 modal-content bg-dark">
                                        <div class="modal-header" data-bs-theme="dark">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${product.data().productName}</h1>
                                            <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body d-flex justify-content-evenly align-items-center">
                                            <div class="" style="max-width:40%">
                                                <img class="img-fluid" src=${product.data().imageUrl} alt="cpu" style="max-width:100%"/>
                                            </div>
                                            <div class="col p-5" style={{maxWidth:'50%'}}>
                                                <h2 class = "mb-4" style="max-width:20ch">${product.data().productName}</h2>
                                                <p class = "mb-4 text-justify">${product.data().productDescription}</p>
                                                <h4>$${product.data().productPrice}</h4>
                                                <div class="buttonGroup row mt-5">
                                                    <div class="btn-group col-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn outline-purple text-purple" style="border-color:#178582">-</button>
                                                        <input type="text" class="btn btn-purple text-white form-control w-10" style="border-color:#178582" placeholder="0"></input>
                                                        <button type="button" class="btn outline-purple text-purple" style="border-color:#178582">+</button>
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

                                ${isAdmin ? `<button class="badge btn bg-danger me-2 mt-3 btn-delete" data-id=${product.id} onClick>Delete</button>` : ''}

                                <div class="text-end">
                                
                                <p class="text-urple fw-bold">$${product.data().productPrice}</p>
                                <a to="#" class="btn outline-purple text-light px-2 me-2" style="border-color:#555FFF">♡</a>
                                <a class="btn btn-purple fw-bold px-2 btn-buy" id= ${product.id} onClick>Buy Now</a></div>

                            </div>
                        </div>
                    </div>
            `

            document.querySelector("#productArea").innerHTML += showProduct;
        });

        const addToCart = (currentProd) => {
            // Check if the product is already in the cart
            const isProductInCart = Array.from(document.querySelectorAll("#cartArea .row"))
                .some((cartItem) => cartItem.dataset.productId === currentProd);
        
            snapshot.forEach((product) => {
                if (currentProd === product.id) {
                    if (isProductInCart) {
                        // Show alert if the product is already in the cart
                        alert('This product is already in the cart!');
                    } else {
                        // Add the product to the cart
                        let showCartItem = `
                            <div class="row" data-product-id="${currentProd}">
                                <img src=${product.data().imageUrl} alt="" class="col-3 img-fluid rounded-3" style="width: 97.25px; height: 73.25px;"/>
                                <div class="col-7">
                                    <p class="col-">${product.data().productName}</p>
                                    <small class="text-secondary">1 x ${product.data().productPrice}</small>
                                </div>
                                <button type="button" class="btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <hr class="mt-3"/>
                            </div>
                        `;
                        document.querySelector("#cartArea").innerHTML += showCartItem;
                    }
                }
            });
        };

        const deleteButtons = document.querySelectorAll(".btn-delete");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                // Access the product id from the button's data attribute or other source
                console.log("Delete button clicked");
        
                // Ensure you're accessing the correct attribute, for example, 'data-id'
                const productId = button.getAttribute("data-id");
        
                // Check if productId is not null before calling deleteProduct
                if (productId !== null) {
                    deleteProduct(productId);
                } else {
                    console.error("Product ID not found on the delete button.");
                }
            });
        });

        const buyButtons = document.querySelectorAll(".btn-buy");
        buyButtons.forEach((buybutton) => {

            buybutton.addEventListener("click", (event) => {

                console.log("Buy button clicked");

                const buyproductId = buybutton.getAttribute("id");
                addToCart(buyproductId);
            });
        });
    });

    return(

        <body className="bg-white" style={{minHeight:"100vh"}}>
            {/* add to cart modal */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body card" id="cartArea">
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
                <h1 className="mb-5 fw-bold text-center text-purple">Search Product</h1>
                <input id="search-bar" className="form-control me-2 mb-3 rounded-pill " type="search" placeholder="🔍 Search for item" aria-label="Search" />
            </div>


            <div className="container py-5">
                <h1 className="text-light badge bg-success">Best Collections</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4" id="productArea">
                    
                </div>
            </div>
        </body>

    )
}

export default Shop;
