import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/homePage'; //In jsconfig.js, we have set up the term, so that dont need to do ../
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';


function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
