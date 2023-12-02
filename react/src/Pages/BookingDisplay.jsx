// BookingDisplay.jsx
import React from "react";

const BookingDisplay = ({ bookings }) => {
  return (
    <div className="container shadow rounded my-3 p-3">
      <h1 className="text-center pt-4 pb-2">Admin List of Reservation</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDisplay;
