import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import {LandingPage} from './pages/LandingPage';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/Home';
const App = () => {
  return (
   <div className='App'>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/auth' element={<Authentication />}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/:url' element={<VideoMeetComponent />}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
   </div>
  )
}

export default App;