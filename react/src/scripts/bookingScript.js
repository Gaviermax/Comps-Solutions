import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

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


document.querySelector("#bookingForm").addEventListener("submit", ()=>{

    addDoc(collection(db,"bookings"), {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        description: document.querySelector("#description").value,
        email: document.querySelector("#email").value,
        contact: document.querySelector("#contact").value,
        boookingType: document.querySelector("#boookingType").value,
        date: document.querySelector("#date").value

    });

    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#description").value = "";
     document.querySelector("#email").value = "";
    document.querySelector("#contact").value = "";
    document.querySelector("#boookingType").value = "";
    document.querySelector("#date").value = "";
});