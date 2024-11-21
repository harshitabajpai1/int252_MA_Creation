// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
// import { Link, useNavigate, NavLink } from 'react-router-dom';
// import logo from '../assets/logo.jpg';
// import '../style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';  // Import user icon

// const Header = ({ username }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         const trimmedSearchTerm = searchTerm.trim();
//         if (trimmedSearchTerm) {
//             navigate(`/products?search=${trimmedSearchTerm}`);
//             setSearchTerm('');
//         }
//     };

//     const handleCategorySelect = (category) => {
//         navigate(`/products?category=${category}`);
//     };

//     const handleCartClick = () => {
//         navigate('/cart');  // Redirect to cart page
//     };

//     const handleNotificationClick = () => {
//         navigate('/notifications');  // Redirect to notifications page
//     };

//     const handleLogout = () => {
//         // Add logout logic if needed
//         navigate('/login');
//     };

//     return (
//         <Navbar className="custom-navbar" variant="dark" expand="lg" style={{ backgroundColor: '#7D0552' background: hsla(302, 82%, 76%, 1);

//             background: linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%);
            
//             background: -moz-linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%);
            
//             background: -webkit-linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%);
            
//             filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F492F0", endColorstr="#A18DCE", GradientType=1 );}}>
//             <Container>
//                 <Navbar.Brand as={Link} to="/">
//                     <img
//                         src={logo}
//                         alt="Logo"
//                         style={{ width: '100px', marginRight: '10px', borderRadius: '20px' }}
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' }}>
//                             Home
//                         </NavLink>
//                         <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' }}>
//                             Products
//                         </NavLink>
//                         <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ marginRight: '20px' }}>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('traditional-saree')}>Traditional Sarees</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('lehenga')}>Festive lehenga</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('modern-saree')}>Modern Saree</NavDropdown.Item>
//                             {/* <NavDropdown.Item onClick={() => handleCategorySelect('romance')}>Romance</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('fantasy')}>Fantasy</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('mystery')}>Mystery</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('thriller')}>Thriller</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleCategorySelect('dystopian')}>Dystopian</NavDropdown.Item> */}
//                         </NavDropdown>
//                         <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' }}>
//                             About
//                         </NavLink>
//                         <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' }}>
//                             Contact
//                         </NavLink>
//                     </Nav>

//                     <Form className="d-flex" onSubmit={handleSearch}>
//                         <FormControl
//                             type="search"
//                             placeholder="Search"
//                             className="me-3"
//                             aria-label="Search"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <div style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             border: '1px solid white',
//                             borderRadius: '5px',
//                             padding: '0.5rem',
//                             cursor: 'pointer',
//                             width: '70px',
//                         }} onClick={handleSearch}>
//                             <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5rem', color: 'white' }} />
//                         </div>
//                     </Form>

//                     {/* Cart Icon */}
//                     <div
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             marginLeft: '20px',
//                             cursor: 'pointer',
//                             position: 'relative'
//                         }}
//                         onClick={handleCartClick}
//                     >
//                         <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.8rem', color: 'white' }} />
//                     </div>

//                     {/* Notification Icon */}
//                     <div
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             marginLeft: '20px',
//                             cursor: 'pointer',
//                             position: 'relative'
//                         }}
//                         onClick={handleNotificationClick}
//                     >
//                         <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.8rem', color: 'white' }} />
//                     </div>

//                     {/* Profile Icon and Username Dropdown */}
//                     <NavDropdown
//                         title={<FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '1.8rem', color: 'white' }} />}
//                         id="profile-nav-dropdown"
//                         align="end"
//                         style={{ marginLeft: '15px' }}  // Increased margin to move the profile icon to the right
//                     >
//                         {username ? (
//                             <>
//                                 <NavDropdown.ItemText>{`Hello, ${username}`}</NavDropdown.ItemText>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
//                             </>
//                         ) : (
//                             <>
//                                 <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
//                                 <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
//                             </>
//                         )}
//                     </NavDropdown>

//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';  // Import user icon

const Header = ({ username }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmedSearchTerm = searchTerm.trim();
        if (trimmedSearchTerm) {
            navigate(`/products?search=${trimmedSearchTerm}`);
            setSearchTerm('');
        }
    };

    const handleCategorySelect = (category) => {
        navigate(`/products?category=${category}`);
    };

    const handleCartClick = () => {
        navigate('/cart');  // Redirect to cart page
    };

    const handleNotificationClick = () => {
        navigate('/notifications');  // Redirect to notifications page
    };

    const handleLogout = () => {
        // Add logout logic if needed
        navigate('/login');
    };

    return (
        <Navbar
            className="custom-navbar"
            variant="dark"
            expand="lg"
            style={{
                backgroundColor: '#EF745C',  // Fallback for older browsers
                background: 'linear-gradient(90deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)',
                background: '-moz-linear-gradient(90deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)',
                background: '-webkit-linear-gradient(90deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)',
                filter: 'progid: DXImageTransform.Microsoft.gradient(startColorstr="#EF745C", endColorstr="#34073D", GradientType=1)', // For IE 9 and earlier
            }}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '100px', marginRight: '10px', borderRadius: '20px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            style={{
                                marginRight: '20px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            style={{
                                marginRight: '20px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            Products
                        </NavLink>
                        <NavDropdown
                            title="Categories"
                            id="basic-nav-dropdown"
                            style={{ marginRight: '20px' }}
                        >
                            <NavDropdown.Item onClick={() => handleCategorySelect('traditional-saree')}>Traditional Sarees</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('lehenga')}>Festive lehenga</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('modern-saree')}>Modern Saree</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            style={{
                                marginRight: '20px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            style={{
                                marginRight: '20px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            Contact
                        </NavLink>
                    </Nav>

                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-3"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid white',
                                borderRadius: '5px',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                width: '70px',
                            }}
                            onClick={handleSearch}
                        >
                            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5rem', color: 'white' }} />
                        </div>
                    </Form>

                    {/* Cart Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                        onClick={handleCartClick}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.8rem', color: 'white' }} />
                    </div>

                    {/* Notification Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                        onClick={handleNotificationClick}
                    >
                        <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.8rem', color: 'white' }} />
                    </div>

                    {/* Profile Icon and Username Dropdown */}
                    <NavDropdown
                        title={<FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '1.8rem', color: 'white' }} />}
                        id="profile-nav-dropdown"
                        align="end"
                        style={{ marginLeft: '15px' }}  // Increased margin to move the profile icon to the right
                    >
                        {username ? (
                            <>
                                <NavDropdown.ItemText>{`Hello, ${username}`}</NavDropdown.ItemText>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </>
                        ) : (
                            <>
                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                            </>
                        )}
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

