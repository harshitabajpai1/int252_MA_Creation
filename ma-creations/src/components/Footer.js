// src/components/Footer.js
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2C3E50', color: '#F5F5DC' }} className="bg-dark text-white text-center py-3">
            <Container>
                <p>&copy; 2024 MA CREATIONS. All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
