import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './component/Layout/MainPage';
import Chatbot from './component/pages/Chatbot';
import Createpost from './component/pages/Createpost';
import UserProfile from './component/pages/UserProfile';
import ProfilePage from './component/pages/ProfilePage';
import Signup from './component/pages/SignUp';
import Login from './component/pages/Login';
import NonVerifyPage from './component/Admin/NonVerifyPage';
import VerifyPage from './component/Admin/VerifyPage';
import Categories from './component/Admin/Catagories';

// Create a function to check if the user is logged in
const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;  // Check if the auth token is in localStorage
};

// ProtectedRoute component to protect routes
const ProtectedRoute = ({ element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;  // Redirect to login if not authenticated
  }
  return element;
};

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/chatbot" element={<Chatbot />} />
    //     <Route path="/create-post" element={<ProtectedRoute element={<Createpost />} />} />
    //     <Route path="/UserProfile" element={<ProtectedRoute element={<UserProfile />} />} />
    //     <Route path="/Account" element={<ProtectedRoute element={<ProfilePage />} />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/admin" element={<ProtectedRoute element={<Main />} />} />
    //     <Route path="/notverify" element={<NonVerifyPage />} />
    //     <Route path="/verify" element={<VerifyPage />} />
    //     <Route path="/report" element={<Categories />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Chatbot />} />
        <Route path="/community" element={<MainPage />} />
        <Route path="/create-post"  element={<Createpost />}  />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Account" element={<ProfilePage />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notverify" element={<NonVerifyPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/report" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
