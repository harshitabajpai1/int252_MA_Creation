// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BookList from './components/BookList';
// import About from './components/About';
// import Contact from './components/Contact';
// import BookDetails from './components/BookDetail';
// import Cart from './components/Cart';
// import Slider from './components/slider';
// import Notification from './components/Notification';
// import Login from './components/Login'; // Assume Login page exists
// import Register from './components/Register'; // Assume Register page exists
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CartProvider } from './components/CartContext';
// import DiscountBanner from './components/DiscountBanner';
// import Checkout from './components/Checkout';

// function App() {
//   const [username, setUsername] = useState(''); // State to store username

//   return (
//     <CartProvider>
//       <Router>
//         <DiscountBanner />
//         <Header username={username} /> {/* Pass username to Header */}
//         <ConditionalSlider /> {/* Conditionally render the slider */}
//         <main style={{ backgroundColor: '#F5F5DC', minHeight: '100vh' }} className="py-4 px-3 px-md-5">
//           <Routes>
//             <Route path="/" element={<BookList />} />
//             <Route path="/products" element={<BookList />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/book/:id" element={<BookDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/notifications" element={<Notification />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/login" element={<Login onLogin={(name) => setUsername(name)} />} /> {/* Pass setUsername function */}
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// // Separate component to conditionally render Slider only on the homepage
// function ConditionalSlider() {
//   const location = useLocation();

//   return location.pathname === '/' ? <Slider /> : null;
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';  // Renamed from BookList
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetail';  // Renamed from BookDetails
import Cart from './components/Cart';
import SareeSlider from './components/slider';  // Renamed from Slider
import Notification from './components/Notification';
import Login from './components/Login'; // Assume Login page exists
import Register from './components/Register'; // Assume Register page exists
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/CartContext';
// import DiscountBanner from './components/DiscountBanner';
import Checkout from './components/Checkout';

function App() {
  const [username, setUsername] = useState(''); // State to store username

  return (
    <CartProvider>
      <Router>
        {/* <DiscountBanner /> */}
        <Header username={username} /> {/* Pass username to Header */}
        <ConditionalSareeSlider /> {/* Conditionally render the saree slider */}
        <main style={{ backgroundColor: '#F5F5DC', minHeight: '100vh' }} className="py-4 px-3 px-md-5">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/saree/:id" element={<ProductDetails />} /> {/* Renamed to ProductDetails */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login onLogin={(name) => setUsername(name)} />} /> {/* Pass setUsername function */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

// Separate component to conditionally render the SareeSlider only on the homepage
function ConditionalSareeSlider() {
  const location = useLocation();

  return location.pathname === '/' ? <SareeSlider /> : null;
}

export default App;
