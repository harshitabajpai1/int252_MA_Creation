import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useCart } from './CartContext';

// Import your images
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

// Array of books
const sarees = [
    { 
        id: 1, 
        title: 'Saree that Speaks', 
        price: '₹7,000', 
        originalPrice: '₹10,000', 
        discount: 30, 
        rating: 4.2, 
        numRatings: 2150, 
        image: saree1, 
        category: 'traditional-saree', 
        description: 'A bold saree that captures the essence of tradition and style.', 
        story: 'This saree tells a story of elegance and culture, making it perfect for festive occasions.' 
    },
    { 
        id: 2, 
        title: 'Banarasi Beauty', 
        price: '₹11,000', 
        originalPrice: '₹14,000', 
        discount: 21, 
        rating: 4.9, 
        numRatings: 5200, 
        image: Banarasi, 
        category: 'traditional-saree', 
        description: 'A classic Banarasi saree with intricate handwoven designs.', 
        story: 'Experience the rich heritage of Banaras with this timeless beauty, ideal for weddings and celebrations.' 
    },
    { 
        id: 3, 
        title: 'Royal Silk Saree', 
        price: '₹9,800', 
        originalPrice: '₹12,000', 
        discount: 18, 
        rating: 4.7, 
        numRatings: 3500, 
        image: saree4, 
        category: 'traditional-saree', 
        description: 'An elegant silk saree designed for royalty.', 
        story: 'Drape yourself in luxury and timeless elegance with this regal masterpiece, crafted for special occasions.' 
    },
    { 
        id: 4, 
        title: 'Classic Cotton Saree', 
        price: '₹2,800', 
        originalPrice: '₹3,500', 
        discount: 20, 
        rating: 4.2, 
        numRatings: 1850, 
        image: saree5, 
        category: 'traditional-saree', 
        description: 'A lightweight cotton saree ideal for daily wear.', 
        story: 'Stay comfortable and stylish with this classic cotton saree, perfect for casual outings or workwear.' 
    },
    { 
        id: 5, 
        title: 'Graceful Georgette', 
        price: '₹6,000', 
        originalPrice: '₹8,000', 
        discount: 25, 
        rating: 4.4, 
        numRatings: 2900, 
        image: saree6, 
        category: 'traditional-saree', 
        description: 'A flowy georgette saree with a touch of elegance.', 
        story: 'This saree adds grace to your look, making it ideal for parties and celebrations.' 
    },
    { 
        id: 6, 
        title: 'Elegance Redefined', 
        price: '₹5,500', 
        originalPrice: '₹7,500', 
        discount: 27, 
        rating: 4.5, 
        numRatings: 1800, 
        image: MDsaree1, 
        category: 'modern-saree', 
        description: 'A modern saree that combines simplicity and sophistication.', 
        story: 'Elevate your everyday wardrobe with this versatile saree, perfect for office wear or casual outings.' 
    },
    { 
        id: 7, 
        title: 'Pastel Perfection', 
        price: '₹4,200', 
        originalPrice: '₹5,600', 
        discount: 25, 
        rating: 4.3, 
        numRatings: 1650, 
        image: MDsaree2, 
        category: 'modern-saree', 
        description: 'A pastel-toned saree with a minimalistic design.', 
        story: 'This saree is perfect for daytime events, exuding simplicity and charm.' 
    },
    { 
        id: 8, 
        title: 'Chic Chiffon', 
        price: '₹3,800', 
        originalPrice: '₹4,800', 
        discount: 21, 
        rating: 4.5, 
        numRatings: 2450, 
        image: MDsaree3, 
        category: 'modern-saree', 
        description: 'A lightweight chiffon saree with a chic appeal.', 
        story: 'Make a statement with this saree, designed for comfort and style during casual gatherings.' 
    },
    { 
        id: 9, 
        title: 'Modern Minimalist', 
        price: '₹4,800', 
        originalPrice: '₹6,000', 
        discount: 20, 
        rating: 4.3, 
        numRatings: 1950, 
        image: MDsaree4, 
        category: 'modern-saree', 
        description: 'A saree with a minimalistic and sleek design.', 
        story: 'Perfect for the modern woman, this saree exudes understated elegance.' 
    },
    { 
        id: 10, 
        title: 'Shimmering Shades', 
        price: '₹5,700', 
        originalPrice: '₹7,500', 
        discount: 24, 
        rating: 4.4, 
        numRatings: 2100, 
        image: MDsaree5, 
        category: 'modern-saree', 
        description: 'A stunning saree with shimmering tones for contemporary fashion.', 
        story: 'Step into the spotlight with this chic saree, ideal for evening events or festive gatherings.' 
    },
    { 
        id: 11, 
        title: 'Festive Delight', 
        price: '₹6,500', 
        originalPrice: '₹9,000', 
        discount: 28, 
        rating: 4.6, 
        numRatings: 3200, 
        image: lehenga1, 
        category: 'lehenga', 
        description: 'A vibrant lehenga perfect for festive occasions.', 
        story: 'Add a touch of glamour to your celebrations with this intricately designed lehenga.' 
    },
    { 
        id: 12, 
        title: 'Radiant Embroidery', 
        price: '₹8,000', 
        originalPrice: '₹10,000', 
        discount: 20, 
        rating: 4.5, 
        numRatings: 2600, 
        image: lehenga2, 
        category: 'lehenga', 
        description: 'A lehenga adorned with intricate embroidery patterns.', 
        story: 'This piece brings out the beauty of traditional craftsmanship, ideal for grand events.' 
    },
    { 
        id: 13, 
        title: 'Vibrant Velvet', 
        price: '₹10,500', 
        originalPrice: '₹13,000', 
        discount: 19, 
        rating: 4.7, 
        numRatings: 3800, 
        image: lehenga3, 
        category: 'lehenga', 
        description: 'A luxurious velvet lehenga for royal vibes.', 
        story: 'Step into the spotlight with this richly textured lehenga, perfect for weddings and receptions.' 
    },
    { 
        id: 14, 
        title: 'Regal Elegance', 
        price: '₹9,200', 
        originalPrice: '₹12,000', 
        discount: 23, 
        rating: 4.8, 
        numRatings: 4100, 
        image: lehenga4, 
        category: 'lehenga', 
        description: 'A regal lehenga with exquisite detailing.', 
        story: 'This lehenga embodies grace and sophistication, designed for the modern bride.' 
    },
    { 
        id: 15, 
        title: 'Floral Fantasy', 
        price: '₹7,500', 
        originalPrice: '₹10,000', 
        discount: 25, 
        rating: 4.4, 
        numRatings: 3300, 
        image: lehenga5, 
        category: 'lehenga', 
        description: 'A mesmerizing lehenga adorned with intricate floral patterns.', 
        story: 'Perfect for weddings or grand celebrations, this piece reflects the beauty of nature through its floral motifs.' 
    }
    
];

const ProductDetails = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const [saree] = useState(sarees.find(b => b.id === parseInt(id)));
    const [userReview, setUserReview] = useState('');
    const [reviews, setReviews] = useState(saree ? [] : []); // Initialize empty reviews array

    if (!saree) return <p>Not found!</p>;

    const handleAddToCart = () => {
        addToCart(saree);
        alert('Added to cart!');
    };

    const handleReviewChange = (event) => {
        setUserReview(event.target.value);
    };

    const submitReview = () => {
        if (userReview.trim() !== '') {
            const newReviews = [...reviews, userReview];
            setReviews(newReviews);
            setUserReview(''); // Clear the input after submission
            alert('Review submitted!');
        } else {
            alert('Please write a review before submitting.');
        }
    };

    return (
        <Container>
            <Row className="my-4">
                <Col md={6}>
                    <Card.Img variant="top" src={saree.image} alt={saree.title} style={{ height: '100%', width: '60%', maxWidth: '100%', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                <Card className="h-100" style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                        <Card.Title><h2>{saree.title}</h2></Card.Title>
                        <Card.Text style={{ fontSize: '1.2em' }}>
                            {/* <strong>Author:</strong> {book.author} <br /> */}
                            <strong>Rating:</strong> {saree.rating} ⭐ <br />
                            <strong>Price:</strong> <big><span style={{ color: 'green' }}>{saree.price}</span></big>
                            <small style={{ textDecoration: 'line-through', color: 'gray' }}>{saree.originalPrice}</small> <br />
                            <strong>Discount:</strong> {saree.discount} off <br />
                            <strong>Description:</strong> {saree.description} <br />
                            <strong>Essence:</strong> {saree.story} <br />
                        </Card.Text>
                        <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button> &nbsp; &nbsp;
                        <Button variant="primary" onClick={() => alert('Feature coming soon!')} className="ml-2">Buy Now</Button>
                        <div className="mt-3">
                            {/* <Button as={Link} to="/books" variant="secondary">Back</Button> */}
                        </div>
                    </Card.Body>
                </Card>

                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Reviews:</h3>
                    {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map((review, index) => <p key={index}>{review}</p>)}
                    <Form>
                        <Form.Group controlId="formUserReview">
                            <Form.Label>Your Review:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={userReview} onChange={handleReviewChange} />
                        </Form.Group>
                        <br />
                        <Button variant="success" onClick={submitReview}>Submit Review</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;



