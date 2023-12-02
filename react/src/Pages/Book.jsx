// import bookingScript from "../scripts/bookingScript"
import { getFirestore, collection, addDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../config/firebase-config'; // Make sure to import your auth object
import { query, where, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

function Book() {
    const db = getFirestore();
    const submitBooking = async (e) => {
        e.preventDefault();

        // Check if a user is logged in
        const user = auth.currentUser;
        if (!user) {
            alert('You need to be logged in to make a booking.');
            return;
        }

        try {
            // Check if the user has already made a booking
            const bookingsRef = collection(db, 'bookings');
            const userBookingsQuery = query(bookingsRef, where('userId', '==', user.uid));
            const userBookingsSnapshot = await getDocs(userBookingsQuery);

            if (!userBookingsSnapshot.empty) {
                alert('You have already made a booking. You can only book once at a time. Complete or cancel your booking first before booking again.');
                return;
            }

            // Get form values
            const firstName = document.getElementById('firstname').value;
            const lastName = document.getElementById('lastname').value;
            const description = document.getElementById('description').value;
            const contactInput = document.getElementById('contact');
            const email = document.getElementById('email').value;
            const bookingType = document.getElementById('bookingType').value;
            const date = document.getElementById('date').value;

            // Validate and format contact number
            let contact = contactInput.value.trim();
            const contactRegex = /^9\d{9}$/;

            if (!contactRegex.test(contact)) {
                alert('Invalid contact number. It should start with "9" and have 10 digits.');
                return;
            }

            // Add the booking details to Firestore with userId and server timestamp
            const newBookingRef = await addDoc(bookingsRef, {
                userId: user.uid, // Connect the user's ID to the booking
                firstName,
                lastName,
                description,
                contact,
                email,
                bookingType,
                date,
                timestamp: serverTimestamp(), // Add server timestamp
            });

            alert('Booking Successful!');

            // Fetch the newly added booking document to show the user their booking information
            const newBookingDoc = await getDoc(doc(bookingsRef, newBookingRef.id));
            const bookingData = newBookingDoc.data();

            // Show the user their booking information in an alert
            alert(`Your Booking Information:\nName: ${bookingData.firstName} ${bookingData.lastName}\nDescription: ${bookingData.description}\nContact: +63 ${bookingData.contact}\nEmail: ${bookingData.email}\nType: ${bookingData.bookingType}\nDate: ${bookingData.date}\nTime Booked: ${new Date(bookingData.timestamp?.seconds * 1000).toLocaleString()}`);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Booking failed. Please try again.');
        }
    };
    

      const handleContactInput = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 10) {
          e.target.value = inputValue.slice(0, 10);
        }
      };

      const [minDate, setMinDate] = useState('');

        useEffect(() => {
            // Set minDate to the current date in the format YYYY-MM-DD
            const currentDate = new Date().toISOString().split('T')[0];
            setMinDate(currentDate);
        }, []);
        

    return(
        <>
            <div className="bg-black d-flex justify-content-center align-items-center px-5 shadow" style={{minHeight:'100vh'}}>
                <div className="container leftDescription text-light px-5">
                    <h1 className="mb-4"> <span style={{borderBottom:'5px solid #555FFF'}}>Booking F</span>orm</h1>
                    <p className="fs-4">Start the first step for building your dream PC by filling out the form</p>
                    <br />
                    <p className="fs-4">after submitting the application form, we will be reaching out to you via email address or phone number for the next steps.</p>
                    <br />
                    <p className="fs-4">We are excited to be part of your journey!</p>
                </div>
                <div className="container shadow p-4 rounded mt- bg-light">
                    <h1 className="text-center mt-3">Booking Details</h1>

                    <form action="#" id="bookingForm" onSubmit={submitBooking}>
                        <div className="row g-4 align-items-center mb-3 mt-1">
                            <div className="col-6">

                                <label htmlFor="firstname">First Name:</label>  
                                <input
                                id="firstname"
                                type="text"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder="Enter your first name"
                                required
                                />
                            </div>
                            <div class="col-6">
                                <label htmlFor="lastname">Last Name:</label>  
                                <input
                                id="lastname"
                                type="text"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder="Enter your First name"
                                />
                            </div>
                        </div>

                        <label htmlFor="description">Description:</label>
                        <input id="description" type="text" class="form-control mb-3" placeholder="Input description for the booking" required />

                        <label htmlFor="contact">Contact Number:</label>

                         <div className="input-group mb-3">
                            <span className="input-group-text">+63</span>
                                 <input
                                    id="contact"
                                    type="number"
                                    className="form-control"
                                    required
                                    placeholder="Enter your 10-digit phone number"
                                    onInput={handleContactInput}
                                />
                        </div>


                        <label htmlFor="email">Email Address:</label>
                        <input id="email" type="email" class="form-control mb-3" required placeholder="Enter active email address"/>

                        <label htmlFor="bookingType">Booking Type:</label>

                        <select id="bookingType" className="form-control mb-3" required>
                            <option value="PC Build">PC Build</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Repair Service">Repair Service</option>
                        </select>
                        <label htmlFor="date">Date:</label>
                        <input id="date" type="date" className="form-control mb-3" required min={minDate}/>


                        <button type="submit" class="btn btn-dark mt-3 px-4" onclick="submit">Book</button>
                    </form>

                </div>
            </div>
            
            

        </>
        

    )
    
}

export default Book;
