import React, { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDocs, query, where } from 'firebase/firestore';
import { updateDoc, doc } from 'firebase/firestore';

function ManageProduct() {
  const db = getFirestore();
  const storage = getStorage();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [productImgFile, setProductImgFile] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      setProductImgFile(file);
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProductImgFile(null);
      setImagePreview(null);
    }
  };

  const submitProduct = async (e) => {
    const confirmAdd = window.confirm("Complete product addition?");
  
    if (confirmAdd) {
      e.preventDefault();
  
      try {
        setLoading(true);
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const stocks = parseInt(document.getElementById('stocks').value);
        const productDescription = document.getElementById('productDescription').value;
  
        // Check if a product with the same name already exists
        const productQuery = collection(db, 'products');
        const matchingProduct = await getDocs(query(productQuery, where('productName', '==', productName)));
  
        if (matchingProduct.size > 0) {
          // If the product already exists, update its stocks
          const existingProduct = matchingProduct.docs[0];
          const existingStocks = existingProduct.data().stocks;
          const updatedStocks = existingStocks + stocks;
  
          await updateDoc(doc(db, 'products', existingProduct.id), {
            stocks: updatedStocks,
            timestamp: serverTimestamp(),
          });
  
          alert(`Product "${productName}" already exists. Stocks updated successfully!`);
        } else {
          // If the product doesn't exist, add a new product
          const storageRef = ref(storage, `productImages/${productName}-${Date.now()}`);
          await uploadBytes(storageRef, productImgFile);
          const imageUrl = await getDownloadURL(storageRef);
  
          await addDoc(collection(db, 'products'), {
            productName,
            productPrice,
            stocks,
            imageUrl,
            productDescription,
            timestamp: serverTimestamp(),
          });
  
          alert('Product added successfully!');
        }
      } catch (error) {
        console.error('Error adding product: ', error);
        alert('Failed to add product. Please try again.');
      } finally {
        setLoading(false);
      }
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
