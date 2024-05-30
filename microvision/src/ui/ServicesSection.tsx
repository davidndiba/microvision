// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   CodeOutlined,
//   CloudOutlined,
//   MobileOutlined,
//   SyncOutlined,
//   ToolOutlined,
//   BarChartOutlined,
// } from '@ant-design/icons';
// import './ServicesSection.css';

// const ServicesSection: React.FC = () => {
//   return (
//     <div className="services_section">
//       <div className="services_header">
//         <h1 className="heading">Software solutions that make your business</h1>
//         <h1 className="sub-heading">SIMPLE</h1>
//       </div>

//       <div className="all_services">
//         <div className="service">
//           <CodeOutlined style={{ fontSize: '24px' }} />
//           <h1>Web Applications</h1>
//           <p>
//             We offer best practices in web development to ensure reliable and successful deliverables. We pay maximum attention to solution architecture and code quality.
//           </p>
//           <Link to="/web_applications">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//         <div className="service">
//           <CloudOutlined style={{ fontSize: '24px' }} />
//           <h1>Enterprise Portals</h1>
//           <p>
//             We provide options to deploy solutions on shared and hosted models as a service leveraging Cloud Computing technology, enabling integration with mobile applications.
//           </p>
//           <Link to="/enterprise_portals">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//         <div className="service">
//           <MobileOutlined style={{ fontSize: '24px' }} />
//           <h1>Mobile Applications</h1>
//           <p>
//             Mobile services provided by Microvision Software Technologies are designed to bring the company’s mobile technology expertise to customers, including Java Android, Windows Mobile & Apache Cordova.
//           </p>
//           <Link to="/mobile_applications">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//         <div className="service">
//           <SyncOutlined style={{ fontSize: '24px' }} />
//           <h1>Migration/Integration</h1>
//           <p>
//             Count on our certified technicians to perform a wide range of services from software imaging and hardware configuration to complex builds of rack servers and networks.
//           </p>
//           <Link to="/migration_integration">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//         <div className="service">
//           <ToolOutlined style={{ fontSize: '24px' }} />
//           <h1>System Support</h1>
//           <p>
//             Outsourced IT staffing, whether you’re working on a special project and need some expertise or your company needs enterprise systems support, We are ready when you need us.
//           </p>
//           <Link to="/system_support">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//         <div className="service">
//           <BarChartOutlined style={{ fontSize: '24px' }} />
//           <h1>Business Intelligence</h1>
//           <p>
//             Convert raw data into meaningful, reliable, and consistent insight. We help our Customers stay on top of the information while implementing strategies or evaluating business performance.
//           </p>
//           <Link to="/business_intelligence">
//             <button className="service_btn">See All &rarr;</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CodeOutlined,
  CloudOutlined,
  MobileOutlined,
  SyncOutlined,
  ToolOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Card, Button, Typography } from 'antd';
import './ServicesSection.css';

const { Title, Paragraph } = Typography;

const services = [
  {
    icon: <CodeOutlined style={{ fontSize: '24px' }} />,
    title: 'Web Applications',
    description:
      'We offer best practices in web development to ensure reliable and successful deliverables. We pay maximum attention to solution architecture and code quality.',
    link: '/web_applications',
  },
  {
    icon: <CloudOutlined style={{ fontSize: '24px' }} />,
    title: 'Enterprise Portals',
    description:
      'We provide options to deploy solutions on shared and hosted models as a service leveraging Cloud Computing technology, enabling integration with mobile applications.',
    link: '/enterprise_portals',
  },
  {
    icon: <MobileOutlined style={{ fontSize: '24px' }} />,
    title: 'Mobile Applications',
    description:
      'Mobile services provided by Microvision Software Technologies are designed to bring the company’s mobile technology expertise to customers, including Java Android, Windows Mobile & Apache Cordova.',
    link: '/mobile_applications',
  },
  {
    icon: <SyncOutlined style={{ fontSize: '24px' }} />,
    title: 'Migration/Integration',
    description:
      'Count on our certified technicians to perform a wide range of services from software imaging and hardware configuration to complex builds of rack servers and networks.',
    link: '/migration_integration',
  },
  {
    icon: <ToolOutlined style={{ fontSize: '24px' }} />,
    title: 'System Support',
    description:
      'Outsourced IT staffing, whether you’re working on a special project and need some expertise or your company needs enterprise systems support, We are ready when you need us.',
    link: '/system_support',
  },
  {
    icon: <BarChartOutlined style={{ fontSize: '24px' }} />,
    title: 'Business Intelligence',
    description:
      'Convert raw data into meaningful, reliable, and consistent insight. We help our Customers stay on top of the information while implementing strategies or evaluating business performance.',
    link: '/business_intelligence',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="services_section">
      <div className="services_header">
        <Title level={1} className="heading">Software solutions that make your business</Title>
        <Title level={2} className="sub-heading">SIMPLE</Title>
        <Title level={2} className="sub-heading">We provide a complete suite of IT services in the business applications domain, specializing in multiple verticals including financial services, healthcare services, education and allied industries.</Title>
      </div>

      <div className="all_services">
        {services.map((service, index) => (
          <Card key={index} className="service_card" hoverable>
            {service.icon}
            <Title level={3}>{service.title}</Title>
            <Paragraph>{service.description}</Paragraph>
            <Link to={service.link}>
              <Button type="primary">See All &rarr;</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
