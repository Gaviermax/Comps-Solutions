import React, { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function ManageProduct() {
  const db = getFirestore();
  const storage = getStorage();
  const [loading, setLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const submitProduct = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const productName = document.getElementById('productName').value;
      const productPrice = parseFloat(document.getElementById('productPrice').value);
      const stocks = parseInt(document.getElementById('stocks').value);
      const productDescription = document.getElementById('productDescription').value;

      // Handle image upload and get the download URL
      const productImgInput = document.getElementById('productImg');
      const productImgFile = productImgInput.files[0];

      if (!productImgFile) {
        alert('Please choose an image file.');
        return;
      }

      const storageRef = ref(storage, `productImages/${productName}-${Date.now()}`);
      await uploadBytes(storageRef, productImgFile);
      const imageUrl = await getDownloadURL(storageRef);

      // Add product details to Firestore
      await addDoc(collection(db, 'products'), {
        productName,
        productPrice,
        stocks,
        imageUrl,
        productDescription,
        timestamp: serverTimestamp(),
      });

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product: ', error);
      alert('Failed to add product. Please try again.');
    } finally {
        setLoading(false); // Set loading to false when the form submission completes (success or failure)
    }
  };

  return (
    <>
      <div className="bg-black d-flex justify-content-center align-items-center px-5 shadow" style={{ minHeight: '100vh' }}>

        <div className="container shadow p-4 rounded mt- bg-light w-50">
          <h1 className="text-center mt-3">Add Products</h1>
          <form action="#" id="productForm" onSubmit={submitProduct}>

            <label htmlFor="productName">Product Name:</label>
            <input id="productName" type="text" className="form-control mb-3" placeholder="Name of product" required />

            <label htmlFor="productPrice">Product Price:</label>
            <input id="productPrice" type="number" className="form-control mb-3" required placeholder="Price per item" />

            <label htmlFor="stocks">Number of Stocks:</label>
            <input id="stocks" type="number" className="form-control mb-3" required placeholder="Enter the number of available stocks" />

            <label htmlFor="productDescription">Product Description:</label>

            <textarea id="productDescription" className="form-control mb-3" required />
            
            <label htmlFor="productImg">Choose Image File:</label>
            <input
              id="productImg"
              type="file"
              className="form-control mb-3"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              required
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="img-fluid mb-3"
                style={{ maxHeight: '150px' }}
              />
            )}
            <br></br>
            <button type="submit" className="btn btn-dark mt-3 px-4" disabled={loading}>{loading ? 'Adding Product...' : 'Add Product'}</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default ManageProduct;
