import React from "react";
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const BookingDisplay = ({ bookings, onBookingDelete }) => {
  const db = getFirestore();

  const handleDelete = async (bookingId) => {
    try {
      // Delete the booking from Firestore
      await deleteDoc(doc(db, 'bookings', bookingId));

      // Check if the document still exists after deletion
      const bookingDoc = await getDoc(doc(db, 'bookings', bookingId));

      if (!bookingDoc.exists()) {
        // Show success alert after successful deletion
        alert('Booking has been successfully deleted! Refresh the page to see changes.');
      } else {
        // Show error alert if deletion fails
        alert('Error deleting booking. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting document: ', error);
      // Show error alert if deletion fails
      alert('Error deleting booking. Please try again.');
    }
  };

  return (
    <div className="container shadow rounded my-3 p-3">
      <h1 className="text-center pt-4 pb-2">Admin's List of Bookings</h1>
      <table className="table table-striped" id="datatable">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Description</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Type</th>
            <th>Date</th>
            <th>Action</th> {/* New column for the delete button */}
          </tr>
        </thead>
        <tbody id="tableArea">
          {bookings.map((booking, index) => (
            <tr key={booking.id} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f5f5f5" }}>
              <td>{booking.lastName}</td>
              <td>{booking.firstName}</td>
              <td>{booking.description}</td>
              <td>{`+63 ${booking.contact}`}</td>
              <td>{booking.email}</td>
              <td>{booking.bookingType}</td>
              <td>{booking.date}</td>
              <td>
                <button
                  onClick={() => handleDelete(booking.id)}
                  className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDisplay;
