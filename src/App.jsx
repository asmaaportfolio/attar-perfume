
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";


function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center scroll-smooth"
      style={{ backgroundImage: `url('/home.png')` }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <section id="home"><Home /></section>
              <Offer />
              <section id="about"><About /></section>
              <section id="products"><Products /></section>
              <section id="testimonials"><Testimonials /></section>
              <section id="contact"><Contact /></section>
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


