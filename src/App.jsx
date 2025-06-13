import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import { useState } from 'react'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
 

  return (
  <>
  <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Kirti Sandeep Khot"
          studentPhotoUrl="/Images/K.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
  <div>
    <BrowserRouter>
    <Routes>

      <Route  path='/' element={<HomePage/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/coursespage' element={<CoursesPage/>}/>
      <Route path='/contactpage' element={<ContactPage/>}/>
      <Route path='/admissionpage' element={<AdmissionPage/>}/>
    </Routes>
    <ChatbotComponent/>
    </BrowserRouter>
  
  </div>
  </>
  
  )
}

export default App;
