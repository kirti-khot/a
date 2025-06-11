import React from "react";

import './style.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
    return (
        <div className="content">
         <Header />
                <div className="page-container">
                    <h1 className="demo2">Contact Us</h1>

                    <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, 
                    our team is here to help.</p>

                    <h2>General Enquiries</h2>
                    <hr></hr>
                    <h5>Vivekanand college Main Campus</h5>
                    <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                    India</p>
                    <p>Phone: **+91 12345 67890**</p>
                    <p>Email: **info@vivekanandcollege.edu**</p>
                    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

                    <h2>Admission Office</h2>  
                    <hr></hr>
                    <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Email: admissions@vivekanandcollege.edu</p>

                    <h2>Student Support Services</h2>
                    <hr></hr>
                    <p>For current student support, academic advising, or general assistance:</p>
                    <p>Phone: +91 87654 32109</p> 
                    <p>Email: studentsupport@vivekanandcollege.edu</p>

                    <h2>Find Us on the Map</h2> 
                    <hr></hr>
                    <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                    <a href="https://maps.google.com/?q=Vivekanand+College"><u>View on Google Maps</u></a>

                    <h2>Send Us a Message</h2>
                    <hr></hr>
                    <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
                </div>
           
        <Footer />
     
        </div>
    )
}
export default ContactPage;