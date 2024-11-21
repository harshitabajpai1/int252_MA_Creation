// import React from 'react';
// import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa';

// import saree1 from '../assets/saree1.jpg';
// import Banarasi from '../assets/banarasi_saree.jpg';
// import saree6 from '../assets/saree6.jpg';
// import saree5 from '../assets/saree5.jpg';
// import saree4 from '../assets/saree4.jpg';
// import lehenga1 from '../assets/lehenga1.jpg';
// import lehenga2 from '../assets/lehenga2.jpg';
// import lehenga3 from '../assets/lehenga3.jpg';
// import lehenga4 from '../assets/lehenga4.jpg';
// import lehenga5 from '../assets/lehenga5.jpg';
// import MDsaree1 from '../assets/mordernsaree.jpg';
// import MDsaree2 from '../assets/mordernsaree5.jpg';
// import MDsaree3 from '../assets/mordernsaree2.jpg';
// import MDsaree4 from '../assets/mordernsaree3.jpg';
// import MDsaree5 from '../assets/mordernsaree4.jpg';

// const books = [
//     { id: 1, title: 'Saree that Speaks', price: '₹7,000', originalPrice: '₹10,000', discount: 30, rating: 4.2, numRatings: 2150, image: saree1, category: 'traditional-saree' },
//     { id: 2, title: 'Banarasi Beauty', price: '₹11,000', originalPrice: '₹14,000', discount: 21, rating: 4.9, numRatings: 5200, image: Banarasi, category: 'traditional-saree' },
//     { id: 3, title: 'Royal Silk Saree', price: '₹9,800', originalPrice: '₹12,000', discount: 18, rating: 4.7, numRatings: 3500, image: saree4, category: 'traditional-saree' },
//     { id: 4, title: 'Classic Cotton Saree', price: '₹2,800', originalPrice: '₹3,500', discount: 20, rating: 4.2, numRatings: 1850, image: saree5, category: 'traditional-saree' },
//     { id: 5, title: 'Graceful Georgette', price: '₹6,000', originalPrice: '₹8,000', discount: 25, rating: 4.4, numRatings: 2900, image: saree6, category: 'traditional-saree' },
//     { id: 6, title: 'Elegance Redefined', price: '₹5,500', originalPrice: '₹7,500', discount: 27, rating: 4.5, numRatings: 1800, image: MDsaree1, category: 'modern-saree' },
//     { id: 7, title: 'Pastel Perfection', price: '₹4,200', originalPrice: '₹5,600', discount: 25, rating: 4.3, numRatings: 1650, image: MDsaree2, category: 'modern-saree' },
//     { id: 8, title: 'Chic Chiffon', price: '₹3,800', originalPrice: '₹4,800', discount: 21, rating: 4.5, numRatings: 2450, image: MDsaree3, category: 'modern-saree' },
//     { id: 9, title: 'Modern Minimalist', price: '₹4,800', originalPrice: '₹6,000', discount: 20, rating: 4.3, numRatings: 1950, image: MDsaree4, category: 'modern-saree' },
//     { id: 10, title: 'Shimmering Shades', price: '₹5,700', originalPrice: '₹7,500', discount: 24, rating: 4.4, numRatings: 2100, image: MDsaree5, category: 'modern-saree' },
//     { id: 11, title: 'Festive Delight', price: '₹6,500', originalPrice: '₹9,000', discount: 28, rating: 4.6, numRatings: 3200, image: lehenga1, category: 'lehenga' },
//     { id: 12, title: 'Radiant Embroidery', price: '₹8,000', originalPrice: '₹10,000', discount: 20, rating: 4.5, numRatings: 2600, image: lehenga2, category: 'lehenga' },
//     { id: 13, title: 'Vibrant Velvet', price: '₹10,500', originalPrice: '₹13,000', discount: 19, rating: 4.7, numRatings: 3800, image: lehenga3, category: 'lehenga' },
//     { id: 14, title: 'Regal Elegance', price: '₹9,200', originalPrice: '₹12,000', discount: 23, rating: 4.8, numRatings: 4100, image: lehenga4, category: 'lehenga' },
//     { id: 15, title: 'Floral Fantasy', price: '₹7,500', originalPrice: '₹10,000', discount: 25, rating: 4.4, numRatings: 3300, image: lehenga5, category: 'lehenga' }

// ];


// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// };

// const BookList = () => {
//     const query = useQuery();
//     const search = query.get('search') ? query.get('search').trim().toLowerCase() : '';
//     const category = query.get('category') ? query.get('category').toLowerCase() : '';

//     const filteredBooks = books.filter((book) => {
//         const matchesSearch =
//             book.title.toLowerCase().includes(search.toLowerCase()); 
//             // book.author.toLowerCase().includes(search.toLowerCase());
//         const matchesCategory = category ? book.category === category : true;
//         return matchesSearch && matchesCategory;
//     });

//     return (
//         <Container>
//             <h2 className="my-4 text-main">Our Collection</h2>

//             {(search || category) && (
//                 <p className="text-main">
//                     {search && `Showing results for "${search}"`}
//                     {search && category && ' in '}
//                     {category && `category "${category}"`}
//                 </p>
//             )}

//             <Row>
//                 {filteredBooks.length > 0 ? (
//                     filteredBooks.map((book) => (
//                         <Col key={book.id} sm={6} md={4} lg={3} className="mb-4">
//                             <Card className="shadow-sm h-100" style={{ transition: 'transform 0.3s ease' }}>
//                                 <Card.Img
//                                     variant="top"
//                                     src={book.image || 'https://via.placeholder.com/150'}
//                                     alt={book.title}
//                                     style={{ height: '250px', objectFit: 'cover' }}
//                                 />
//                                 <Card.Body className="d-flex flex-column">
//                                     <Card.Title>{book.title}</Card.Title>
//                                     {/* <Card.Text>Author: {book.author}</Card.Text> */}

//                                     {/* Discount and Original Price */}
//                                     <Card.Text>
//                                         <b><big><span className="ms-2 text-danger">{book.price}</span></big></b> &nbsp; &nbsp;
//                                         <span style={{ textDecoration: 'line-through', color: 'gray' }}>{book.originalPrice}</span>
//                                     </Card.Text>

//                                     {/* Discount Percentage */}
//                                     {book.discount && (
//                                         <span className="badge bg-success rounded-circle" style={{ position: 'absolute', top: '10px', right: '10px' }}>
//                                             {book.discount}% OFF
//                                         </span>
//                                     )}

//                                     {/* Star Rating and Number of Ratings */}
//                                     <div className="d-flex align-items-center mb-2">
//                                         <span className="me-2" style={{ color: '#FFD700' }}>
//                                             {Array.from({ length: 5 }, (_, index) => (
//                                                 <FaStar key={index} style={{ color: index < Math.round(book.rating) ? '#FFD700' : '#E4E5E9' }} />
//                                             ))}
//                                         </span>
//                                         <span>({book.numRatings})</span>
//                                     </div>

//                                     <Button as={Link} to={`/book/${book.id}`} className="btn-custom mt-auto mb-2">More Details</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))
//                 ) : (
//                     <p className="text-main">No Match Found</p>
//                 )}
//             </Row>
//         </Container>
//     );
// };

// export default BookList;


import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import saree1 from '../assets/saree1.jpg';
import Banarasi from '../assets/banarasi_saree.jpg';
import saree6 from '../assets/saree6.jpg';
import saree5 from '../assets/saree5.jpg';
import saree4 from '../assets/saree4.jpg';
import lehenga1 from '../assets/lehenga1.jpg';
import lehenga2 from '../assets/lehenga2.jpg';
import lehenga3 from '../assets/lehenga3.jpg';
import lehenga4 from '../assets/lehenga4.jpg';
import lehenga5 from '../assets/lehenga5.jpg';
import MDsaree1 from '../assets/mordernsaree.jpg';
import MDsaree2 from '../assets/mordernsaree5.jpg';
import MDsaree3 from '../assets/mordernsaree2.jpg';
import MDsaree4 from '../assets/mordernsaree3.jpg';
import MDsaree5 from '../assets/mordernsaree4.jpg';

const sarees = [
    { id: 1, title: 'Saree that Speaks', price: '₹7,000', originalPrice: '₹10,000', discount: 30, rating: 4.2, numRatings: 2150, image: saree1, category: 'traditional-saree' },
    { id: 2, title: 'Banarasi Beauty', price: '₹11,000', originalPrice: '₹14,000', discount: 21, rating: 4.9, numRatings: 5200, image: Banarasi, category: 'traditional-saree' },
    { id: 3, title: 'Royal Silk Saree', price: '₹9,800', originalPrice: '₹12,000', discount: 18, rating: 4.7, numRatings: 3500, image: saree4, category: 'traditional-saree' },
    { id: 4, title: 'Classic Cotton Saree', price: '₹2,800', originalPrice: '₹3,500', discount: 20, rating: 4.2, numRatings: 1850, image: saree5, category: 'traditional-saree' },
    { id: 5, title: 'Graceful Georgette', price: '₹6,000', originalPrice: '₹8,000', discount: 25, rating: 4.4, numRatings: 2900, image: saree6, category: 'traditional-saree' },
    { id: 6, title: 'Elegance Redefined', price: '₹5,500', originalPrice: '₹7,500', discount: 27, rating: 4.5, numRatings: 1800, image: MDsaree1, category: 'modern-saree' },
    { id: 7, title: 'Pastel Perfection', price: '₹4,200', originalPrice: '₹5,600', discount: 25, rating: 4.3, numRatings: 1650, image: MDsaree2, category: 'modern-saree' },
    { id: 8, title: 'Chic Chiffon', price: '₹3,800', originalPrice: '₹4,800', discount: 21, rating: 4.5, numRatings: 2450, image: MDsaree3, category: 'modern-saree' },
    { id: 9, title: 'Modern Minimalist', price: '₹4,800', originalPrice: '₹6,000', discount: 20, rating: 4.3, numRatings: 1950, image: MDsaree4, category: 'modern-saree' },
    { id: 10, title: 'Shimmering Shades', price: '₹5,700', originalPrice: '₹7,500', discount: 24, rating: 4.4, numRatings: 2100, image: MDsaree5, category: 'modern-saree' },
    { id: 11, title: 'Festive Delight', price: '₹6,500', originalPrice: '₹9,000', discount: 28, rating: 4.6, numRatings: 3200, image: lehenga1, category: 'lehenga' },
    { id: 12, title: 'Radiant Embroidery', price: '₹8,000', originalPrice: '₹10,000', discount: 20, rating: 4.5, numRatings: 2600, image: lehenga2, category: 'lehenga' },
    { id: 13, title: 'Vibrant Velvet', price: '₹10,500', originalPrice: '₹13,000', discount: 19, rating: 4.7, numRatings: 3800, image: lehenga3, category: 'lehenga' },
    { id: 14, title: 'Regal Elegance', price: '₹9,200', originalPrice: '₹12,000', discount: 23, rating: 4.8, numRatings: 4100, image: lehenga4, category: 'lehenga' },
    { id: 15, title: 'Floral Fantasy', price: '₹7,500', originalPrice: '₹10,000', discount: 25, rating: 4.4, numRatings: 3300, image: lehenga5, category: 'lehenga' }
];

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const ProductList = () => {
    const query = useQuery();
    const search = query.get('search') ? query.get('search').trim().toLowerCase() : '';
    const category = query.get('category') ? query.get('category').toLowerCase() : '';

    const filteredSarees = sarees.filter((saree) => {
        const matchesSearch = saree.title.toLowerCase().includes(search);
        const matchesCategory = category ? saree.category.toLowerCase() === category : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container>
            <h2 className="my-4 text-main">Our Collection</h2>
            {(search || category) && (
                <p className="text-main">
                    {search && `Showing results for "${search}"`}
                    {search && category && ' in '}
                    {category && `category "${category}"`}
                </p>
            )}

            <Row>
                {filteredSarees.length > 0 ? (
                    filteredSarees.map((saree) => (
                        <Col key={saree.id} sm={6} md={4} lg={3} className="mb-4">
                            <Card className="shadow-sm h-100" style={{ transition: 'transform 0.3s ease' }}>
                                <Card.Img
                                    variant="top"
                                    src={saree.image || 'https://via.placeholder.com/150'}
                                    alt={saree.title}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{saree.title}</Card.Title>

                                    {/* Discount and Original Price */}
                                    <Card.Text>
                                        <b><big><span className="ms-2 text-danger">{saree.price}</span></big></b> &nbsp; &nbsp;
                                        <span style={{ textDecoration: 'line-through', color: 'gray' }}>{saree.originalPrice}</span>
                                    </Card.Text>

                                    {/* Discount Percentage */}
                                    {saree.discount && (
                                        <span className="badge bg-success rounded-circle" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                            {saree.discount}% OFF
                                        </span>
                                    )}

                                    {/* Star Rating and Number of Ratings */}
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2" style={{ color: '#FFD700' }}>
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <FaStar key={index} style={{ color: index < Math.round(saree.rating) ? '#FFD700' : '#E4E5E9' }} />
                                            ))}
                                        </span>
                                        <span>({saree.numRatings})</span>
                                    </div>

                                    <Button as={Link} to={`/saree/${saree.id}`} className="btn-custom mt-auto mb-2">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-main">No Match Found</p>
                )}
            </Row>
        </Container>
    );
};

export default ProductList;
