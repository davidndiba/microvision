import React from 'react';
import { Typography, Divider, Row, Col, Space } from 'antd';
import './AboutMicrovision.css';
// import {ProCard } from "antd"

const { Title, Paragraph } = Typography;

const AboutMicrovision: React.FC = () => {
  return (
    <div className="about-microvision">
        {/* <ProCard> */}
      <Title level={2}>About Microvision</Title>
      <Paragraph>
        Microvision Software Technologies is a global software services company focusing on Software Development and Products.
      </Paragraph>
      <Paragraph>
        We provide a complete suite of IT services in the business applications domain.
      </Paragraph>
      {/* </ProCard> */}
      <Divider />
      <Title level={3}>Solutions</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Space direction="vertical">
            <Paragraph>Corporate and Small business software solutions</Paragraph>
            <Paragraph>Cloud Computing and Mobile applications</Paragraph>
            <Paragraph>System Support and Maintenance</Paragraph>
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical">
            <Paragraph>Website Design and development</Paragraph>
            <Paragraph>Point of Sale & Payroll systems</Paragraph>
            <Paragraph>CCTV camera sales and installation</Paragraph>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Title level={3}>Contact Info</Title>
      <Paragraph>Hill Gate Arcade, 1st Floor, Limuru</Paragraph>
      <Paragraph>(254) 724 858 611 / 738 055 312</Paragraph>
      <Paragraph>info@microvision.co.ke</Paragraph>
      <Paragraph>Microvision Software Technologies</Paragraph>
    </div>
  );
};

export default AboutMicrovision;
