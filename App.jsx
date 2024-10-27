import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Components from './Components/components'; // Your main/home component
import Contact from './Components/Contact'; 
import TermsPrivacy from './Components/TermsPrivacy'; 
import Admin from './Components/admin';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
     
      <div style={{ padding: '20px' }}>
        <Outlet /> {/* This renders the content for each route */}
      </div>
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <Router>
    <Routes>
      {/* Wrap all routes in the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* Define individual routes that render within the Layout */}
        <Route index element={<Components />} /> {/* Default route */}
        <Route path="contact" element={<Contact />} />
        <Route path="terms-privacy" element={<TermsPrivacy />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
