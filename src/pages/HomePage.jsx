import React from "react";
import './style.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



const HomePage = () => {
    return (
        
        <div className="content">
            <Header/>
           
                    <div className="page-container">
                        <div className="college-image">
                            <img src="/Images/college.jpg" alt="VCK" className="college-image"></img>
                            <div className="front-image">
                                <h1><b>Welcome to Vivekanand College!</b></h1>
                                <p>Your journey to excellence starts here.</p>
                                <a href="AdmissionPage" id="main1"><u>Apply Now!</u></a>
                            </div>
                        </div>
                        <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, 
                        innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], 
                        we have proudly served generations of students, empowering them to achieve their full potential.</p>
                        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. 
                        Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique
                        ecosystem where curiosity thrives and future leaders are shaped.</p>
                        <h2>Why Choose Vivekanand College?</h2>
                        <hr></hr>
                        <ul>
                            <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                            <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                            <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                            <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                            <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
                        </ul>
                        <h2>Campus Life & Facilities </h2>
                        <div>
                            <img src="/Images/vck1.jpg" className="page1-container"></img>
                            <img src="/Images/campus.jpg" className="page2-container"></img>
                        </div>
            
                        <p className="demo"> Ready to explore our courses? </p>
                        <a href="CoursesPage" className="demo1">Explore Courses</a>
                    
                    </div>
            <Footer/>
        </div>
    )
}

export default HomePage;