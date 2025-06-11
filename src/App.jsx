import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <Routes>

      <Route  path='/' element={<HomePage/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/coursespage' element={<CoursesPage/>}/>
    </Routes>
    
    </BrowserRouter>

  </div>
  )
}

export default App
