import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './components/AdminRoute/AdminRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import AdminDashboard from './pages/AdminDashboard';

import UserManagement from './pages/admin/UserManagement';
import Signup from './pages/Signup';
import QuickQuote from './pages/QuickQuote';
import PreviewPage from './pages/PreviewPage';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quick-quote" element={<QuickQuote />} />
              <Route path="/preview" element={<PreviewPage />} />
              {/* Protected Routes */}
              {/* <Route
                path="/invoices"
                element={
                  <ProtectedRoute>
                    <ListInvoices />
                  </ProtectedRoute>
                }
              /> */}
            
              
             
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserManagement />
                  </AdminRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App; 