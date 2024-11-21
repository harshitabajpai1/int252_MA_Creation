// import React from 'react';
// import Slider from 'react-slick';
// import Image1 from '../assets/slider1.jpg';
// import Image2 from '../assets/slider2.webp';
// import Image3 from '../assets/slider3.webp';
// import Image4 from '../assets/slider4.webp';
// import Image5 from '../assets/slider5.webp';
// import Image6 from '../assets/slider6.jpg';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const BookSlider = () => {
//     const sliderStyles = {
//         bookSlider: {
//             width: '100%',
//             margin: '20px auto',
//             textAlign: 'center',
//             position: 'relative',
//         },
//         sliderItem: {
//             position: 'relative',
//             textAlign: 'center',
//         },
//         sliderImage: {
//             maxWidth: '70%',
//             margin: '0 auto',
//             height: '400px',
//             objectFit: 'cover',
//             borderRadius: '10px',
//             position: 'relative',
//         },
//         sliderOffer: {
//             position: 'relative',
//             bottom: '20px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             color: 'white',
//             padding: '5px 10px',
//             fontSize: '1.2rem',
//             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//             borderRadius: '5px',
//             zIndex: 1,
//             width: 'fit-content',
//         },
//     };

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: true,
//     };

//     const books = [
//         // { image: Image1, offer: '30% OFF on Bestsellers!' },
//         // { image: Image2, offer: 'Buy 2 Get 1 Free!' },
//         // { image: Image3, offer: '25% OFF on New Arrivals!' },
//         // { image: Image4, offer: 'Flash Sale: 50% OFF!' },
//         // { image: Image5, offer: 'Free Shipping on Orders Over $50!' },
//         // { image: Image6, offer: 'Exclusive: Pre-order Your Favorites!' },
//         { image: Image1, offer: '30% OFF on Bestselling Sarees!' },
//   { image: Image2, offer: '25% OFF on New Arrivals in Lehengas!' },
//   { image: Image3, offer: 'Drape Yourself in Beauty' },
//   { image: Image4, offer: 'Flash Sale: 50% OFF on Selected Sarees!' },
//   { image: Image5, offer: 'Free Shipping on Orders Over ₹1000!' },
//   { image: Image6, offer: 'Exclusive: Pre-order Your Favorite Sarees!' },
//     ];

//     return (
//         <div style={sliderStyles.bookSlider}>
//             <Slider {...settings}>
//                 {books.map((book, index) => (
//                     <div key={index} style={sliderStyles.sliderItem}>
//                         <img src={book.image} alt={`Book ${index + 1}`} style={sliderStyles.sliderImage} />
//                         <div style={sliderStyles.sliderOffer}>{book.offer}</div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default BookSlider;



import React from 'react';
import Slider from 'react-slick';
import Image1 from '../assets/slider1.jpg';
import Image2 from '../assets/slider2.webp';
import Image3 from '../assets/slider3.webp';
import Image4 from '../assets/slider4.webp';
import Image5 from '../assets/slider5.webp';
import Image6 from '../assets/slider6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SareeSlider = () => {
    const sliderStyles = {
        sareeSlider: {
            width: '100%',
            margin: '20px auto',
            textAlign: 'center',
            position: 'relative',
        },
        sliderItem: {
            position: 'relative',
            textAlign: 'center',
        },
        sliderImage: {
            maxWidth: '70%',
            margin: '0 auto',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            position: 'relative',
        },
        sliderOffer: {
            position: 'relative',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            padding: '5px 10px',
            fontSize: '1.2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '5px',
            zIndex: 1,
            width: 'fit-content',
        },
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const sarees = [
        { image: Image1, offer: '30% OFF on Bestselling Sarees!' },
        { image: Image2, offer: '25% OFF on New Arrivals in Lehengas!' },
        { image: Image3, offer: 'Drape Yourself in Beauty' },
        { image: Image4, offer: 'Flash Sale: 50% OFF on Selected Sarees!' },
        { image: Image5, offer: 'Free Shipping on Orders Over ₹1000!' },
        { image: Image6, offer: 'Exclusive: Pre-order Your Favorite Sarees!' },
    ];

    return (
        <div style={sliderStyles.sareeSlider}>
            <Slider {...settings}>
                {sarees.map((saree, index) => (
                    <div key={index} style={sliderStyles.sliderItem}>
                        <img src={saree.image} alt={`Saree ${index + 1}`} style={sliderStyles.sliderImage} />
                        <div style={sliderStyles.sliderOffer}>{saree.offer}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SareeSlider;
