export default function ManageProduct(){
    return(
        <>
            <div className="bg-black d-flex justify-content-center align-items-center px-5 shadow" style={{minHeight:'100vh'}}>
               
                <div className="container shadow p-4 rounded mt- bg-light w-50">
                    <h1 className="text-center mt-3">Add Products</h1>
                    <form action="#" id="bookingForm" >
                        

                        <label htmlFor="productName">Product Name:</label>
                        <input id="productName" type="text" class="form-control mb-3" placeholder="Name of product" required />

                        <label htmlFor="productPrice">Product Price:</label>
                        <input id="productPrice" type="number" class="form-control mb-3" required placeholder="Price per item" />

                        <label htmlFor="stocks">Number of Stocks:</label>
                        <input id="stocks" type="email" class="form-control mb-3" required placeholder="Enter the number of available stocks"/>

                        <label htmlFor="productImg">Choose Image File:</label>
                        <input id="productImg" type="file" class="form-control mb-3" accept="image/png, image/jpeg" required />

                        <label htmlFor="productDescription">Product Description:</label>
                        <textarea id="productDescription" class="form-control mb-3" accept="image/png, image/jpeg" required />

                        <button type="submit" class="btn btn-dark mt-3 px-4" onclick="submit">Book</button>
                    </form>

                </div>
            </div>
        
        </>
    )
}