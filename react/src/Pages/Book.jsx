// import bookingScript from "../scripts/bookingScript"

function Book(){
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
                    <form action="#" id="bookingForm">
                        <div className="row g-4 align-items-center mb-3 mt-1">
                            <div className="col-6">
                                <label htmlFor="firstname">First Name:</label>  
                                <input
                                id="firstname"
                                type="text"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder="Enter your first name"
                                required
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastname">Last Name:</label>  
                                <input
                                id="lastname"
                                type="text"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder="Enter your First name"
                                />
                            </div>
                        </div>

                        <label htmlFor="description">Description:</label>
                        <input id="description" type="text" className="form-control mb-3" placeholder="Input description for the booking" required />

                        <label htmlFor="contact">Contact Number:</label>
                        <input id="contact" type="number" className="form-control mb-3" required placeholder="Enter your current phone number" />

                        <label htmlFor="email">Email Address:</label>
                        <input id="email" type="email" className="form-control mb-3" required placeholder="Enter active email address"/>

                        <label htmlFor="bookingType">Booking Type:</label>
                        <input id="bookingType" type="text" className="form-control mb-3" required placeholder="e.g PC build, Repair, warranty"/>
                        <label htmlFor="date">Date:</label>
                        <input id="date" type="date" className="form-control mb-3" required/>

                        <button type="submit" className="btn btn-dark mt-3 px-4" onclick="submit">Book</button>
                    </form>

                </div>
            </div>

        </>

    )
}

export default Book;