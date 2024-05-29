// import React from 'react';
// import HeroSection from '../ui/HeroSection';

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSection />
//       <div className="container">
//         <h2>Home Page</h2>
//         <p>Welcome to the home page of our website.</p>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import HeroSection from '../ui/HeroSection';
import ServicesSection from '../ui/ServicesSection'
import AchievementsCarousel from '../ui/AchievementsCarousel';
import AboutMicrovision from '../ui/AboutMicrovision';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection   />
      <ServicesSection/>
      <AchievementsCarousel/>
      <AboutMicrovision/>
    </div>
  );
};

export default HomePage;
