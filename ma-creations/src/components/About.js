// src/components/About.js
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h2 className="my-4 text-center">About MA Creations</h2>
            <p>
                Welcome to <strong>MA Creations</strong>, where tradition meets elegance. We specialize in offering a stunning range of sarees and lehengas, designed to make every occasion unforgettable. From bridal wear to festive celebrations, we bring you the finest craftsmanship and luxurious fabrics to ensure that you feel confident and beautiful in every piece.
            </p>
            <p>
                At <strong>MA Creations</strong>, we believe that a saree is more than just attire—it's a statement of grace, beauty, and culture. Our curated collection combines timeless traditional styles with modern flair, perfect for every woman who wants to embrace her roots with a touch of contemporary elegance.
            </p>
            <blockquote className="font-italic text-center mt-4">
                <b>"Drape yourself in elegance, embrace your heritage with MA Creations."</b>
            </blockquote>
        </Container>
    );
};

export default About;
