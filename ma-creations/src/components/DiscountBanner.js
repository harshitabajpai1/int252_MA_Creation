import React from 'react';
import { Container } from 'react-bootstrap';

const DiscountBanner = () => {
    return (
        <div style={styles.banner}>
            <Container>
                <p style={styles.marquee}>
                    <span>🔥 20% off on all Banarase Sarees! </span>
                    <span>🔥 Use code: MA_CREATION for additional 10% off on orders above ₹5000! </span>
                    
                </p>
            </Container>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: '#f5b7b1',
        color: '#333',
        fontSize: '18px',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    
    marquee: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'scroll 20s linear infinite',
    }
};

// Keyframes for scrolling animation
const keyframes = `
@keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
`;

// Inject keyframes into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default DiscountBanner;
