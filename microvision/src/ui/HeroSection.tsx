// import React from 'react';
// import { Container } from 'react-bootstrap';

// const HeroSection = () => {
//   return (
//     <div className="p-5 mb-4 bg-light rounded-3">
//       <Container fluid className="py-5">
//         <h1 className="display-5 fw-bold">Welcome to Our Website</h1>
//         <p className="fs-4">
//           This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
//         </p>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;
// import React from 'react';
// import { Container } from 'react-bootstrap';

// interface HeroSectionProps {
//   title: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
//   return (
//     <div className="jumbotron">
//       <Container>
//         <h1>{title}</h1>
//         <p>This is a simple hero unit, a simple jumbotron-style component.</p>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src="..." className="d-block w-100" alt="First slide" />
//           <div className="carousel-caption d-none d-md-block">
//             <h5>First slide label</h5>
//             <p>Some representative placeholder content for the first slide.</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="..." className="d-block w-100" alt="Second slide" />
//           <div className="carousel-caption d-none d-md-block">
//             <h5>Second slide label</h5>
//             <p>Some representative placeholder content for the second slide.</p>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src="..." className="d-block w-100" alt="Third slide" />
//           <div className="carousel-caption d-none d-md-block">
//             <h5>Third slide label</h5>
//             <p>Some representative placeholder content for the third slide.</p>
//           </div>
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default HeroSection;
// import React from 'react';
// import image from '../assets/Banner.jpeg'
// import './Banner.css'; 

// const Banner: React.FC = () => {
//   return (
//     <div className="banner_container">
//       <div className="site_tagline">
//         <h1 className="tagline">
//           We <span className="tag">design and develop experiences</span> that make people's lives <span className="tag">SIMPLE</span>.
//         </h1>
//       </div>
//       <img src={image} alt="Banner" className="banner" />
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import image from '../assets/Banner.jpeg'; 
import './Banner.css'; 

const Banner: React.FC = () => {
  return (
    <div className="banner_container">
      <div className="site_tagline">
        <h1 className="tagline">
          We <span className="tag">design and develop experiences</span> that make people's lives <span className="tag">SIMPLE</span>.
        </h1>
      </div>
      <img src={image} alt="Banner" className="banner" />
    </div>
  );
};

export default Banner;
