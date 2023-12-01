function Book(){
    return(
        <>
            <div className="bg-black d-flex justify-content-center align-items-center px-5" style={{minHeight:'100vh'}}>
                <div className="container leftDescription text-light px-5">
                    <h1 className="mb-4"> <span style={{borderBottom:'5px solid #555FFF'}}>Booking F</span>orm</h1>
                    <p className="fs-4">Start the first step for building your dream PC by filling out the form</p>
                    <br />
                    <p className="fs-4">after submitting the application form, we will be reaching out to you via email address or phone number for the next steps.</p>
                    <br />
                    <p className="fs-4">We are excited to be part of your journey!</p>
                </div>
                <div className="container shadow p-4 rounded mt- bg-light">
                    <h1 class="text-center my-3">Booking Details</h1>
                    <form action="#" id="bookingForm">
                        <label htmlFor="firstname">First Name:</label>
                        <input id="firstname" type="text" class="form-control" required />
                        <label htmlFor="lastname">Last Name:</label>
                        <input id="lastname" type="text" class="form-control" required />
                        <label htmlFor="contact">Contact Number:</label>
                        <input id="contact" type="number" class="form-control" required />
                        <label htmlFor="email">Email Address:</label>
                        <input id="email" type="number" class="form-control" required />
                        <label htmlFor="type">Booking Type:</label>
                        <input id="type" type="text" class="form-control" required />
                        <label htmlFor="date">Date:</label>
                        <input id="date" type="date" class="form-control" required />

                        <button type="submit" class="btn btn-dark mt-3 px-4" onclick="submit">Book</button>
                    </form>

                </div>
            </div>
            <script src=""></script>
        </>

    )
}

export default Book;