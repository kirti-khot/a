import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <Routes>

      <Route  path='/' element={<HomePage/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/coursespage' element={<CoursesPage/>}/>
      <Route path='/contactpage' element={<ContactPage/>}/>
      <Route path='/admissionpage' element={<AdmissionPage/>}/>
    </Routes>
    
    </BrowserRouter>

  </div>
  )
}

export default App;
