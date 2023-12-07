// Contact.jsx
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import BookingDisplay from "./BookingDisplay";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Contact = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking data from Firestore
    const fetchBookings = async () => {
      const bookingsCollection = collection(db, "bookings");
      const bookingsSnapshot = await getDocs(bookingsCollection);

      const bookingData = bookingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        
      }));
      console.log("Fetched Bookings:", bookingData);

      setBookings(bookingData);
    };

    fetchBookings();
  }, []); // Run once on component mount

  return (
    <>
      <body style={{minHeight:"100vh"}}>
        <BookingDisplay bookings={bookings} />
      </body>
    </>
  );
};

export default Contact;
