// import React, { useState, useEffect } from 'react';
// import { Carousel, Typography, Statistic, Row, Col } from 'antd';
// import './AchievementsCarousel.css';

// const { Title, Paragraph } = Typography;

// const AchievementsCarousel: React.FC = () => {
//   const [clientsCount, setClientsCount] = useState(0);
//   const [projectsCount, setProjectsCount] = useState(0);
//   const [hoursCount, setHoursCount] = useState(0);
//   const [workersCount, setWorkersCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setClientsCount((prevCount) => prevCount + 1);
//       setProjectsCount((prevCount) => prevCount + 1);
//       setHoursCount((prevCount) => prevCount + 1);
//       setWorkersCount((prevCount) => prevCount + 1);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="achievements-carousel">
//       <Carousel autoplay>
//         <div className="carousel-item">
//           <div className="carousel-content">
//             <Title level={2}>Microvision Software Technologies is a software services company focusing on Software Development and Products</Title>
//             <Paragraph>
//             We provide a complete suite of IT services in the business applications domain, specializing in multiple verticals including financial services, healthcare services, education and allied industries.
//             </Paragraph>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <div className="carousel-content">
//             <Title level={2}>What we have achieved so far</Title>
//             <Paragraph>
//               Iusto et labore modi qui sapiente expedita tempora et aut non ipsum consequatur illo.
//             </Paragraph>
//           </div>
//         </div>
//         {/* Add more carousel items as needed */}
//       </Carousel>
//       <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
//         <Col span={6}>
//           <Statistic title="Clients" value={clientsCount} />
//         </Col>
//         <Col span={6}>
//           <Statistic title="Projects" value={projectsCount} />
//         </Col>
//         <Col span={6}>
//           <Statistic title="Hours Of Support" value={hoursCount} />
//         </Col>
//         <Col span={6}>
//           <Statistic title="Hard Workers" value={workersCount} />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default AchievementsCarousel;

import React, { useState, useEffect } from 'react';
import { Carousel, Typography, Statistic, Row, Col } from 'antd';
import './AchievementsCarousel.css';

const { Title, Paragraph } = Typography;

const AchievementsCarousel: React.FC = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [workersCount, setWorkersCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientsCount((prevCount) => prevCount + 1);
      setProjectsCount((prevCount) => prevCount + 1);
      setHoursCount((prevCount) => prevCount + 1);
      setWorkersCount((prevCount) => prevCount + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="achievements-carousel" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg')` }}>
      <Carousel autoplay>
        <div className="carousel-item">
          <div className="carousel-content">
            <Title level={2}>Microvision Software Technologies is a software services company focusing on Software Development and Products</Title>
            <Paragraph>
              We provide a complete suite of IT services in the business applications domain, specializing in multiple verticals including financial services, healthcare services, education and allied industries.
            </Paragraph>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <Title level={2}>What we have achieved so far</Title>
            <Paragraph>
              Iusto et labore modi qui sapiente expedita tempora et aut non ipsum consequatur illo.
            </Paragraph>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
        <Col span={6}>
          <Statistic title="Clients" value={clientsCount} />
        </Col>
        <Col span={6}>
          <Statistic title="Projects" value={projectsCount} />
        </Col>
        <Col span={6}>
          <Statistic title="Hours Of Support" value={hoursCount} />
        </Col>
        <Col span={6}>
          <Statistic title="Hard Workers" value={workersCount} />
        </Col>
      </Row>
    </div>
  );
};

export default AchievementsCarousel;
