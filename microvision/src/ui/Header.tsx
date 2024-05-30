// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { Link } from 'react-router-dom';

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header>
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//         <Menu.Item key="1">
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Link to="/about">About</Link>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Link to="/contact">Contact</Link>
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default AppHeader;
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import { HomeOutlined, AppstoreOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';

// const { Header } = Layout;

// const AppHeader: React.FC = () => {
//   return (
//     <Header style={{ display: 'flex', alignItems: 'center' }}>
//       <div style={{ marginRight: '20px', color: 'white', display: 'flex', alignItems: 'center' }}>
//         <img src="your-logo.png" alt="Logo" style={{ marginRight: '8px' }} />
//         <span style={{ fontSize: '20px' }}>Microvision Software Technologies</span>
//       </div>
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
//         <Menu.Item key="1" style={{ margin: '0 8px' }}>
//           <Link to="/"><HomeOutlined /> Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2" style={{ margin: '0 8px' }}>
//           <Link to="/about"><AppstoreOutlined /> About</Link>
//         </Menu.Item>
//         <Menu.Item key="3" style={{ margin: '0 8px' }}>
//           <Link to="/services"><SolutionOutlined /> Services</Link>
//         </Menu.Item>
//         <Menu.Item key="4" style={{ margin: '0 8px' }}>
//           <Link to="/portfolio"><AppstoreOutlined /> Portfolio</Link>
//         </Menu.Item>
//         <Menu.Item key="5" style={{ margin: '0 8px' }}>
//           <Link to="/contact"><ContactsOutlined /> Contact</Link>
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default AppHeader;
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import { HomeOutlined, AppstoreOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header style={{ background: 'whitesmoke', display: 'flex', alignItems: 'center' }}>
//       <div style={{ marginRight: '20px', color: 'white', display: 'flex', alignItems: 'center' }}>
//         <img src="your-logo.png" alt="Logo" style={{ marginRight: '8px' }} />
//         <span style={{ fontSize: '20px' }}>Microvision Software Technologies</span>
//       </div>
//       <Menu  mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
//         <Menu.Item key="1" style={{ margin: '0 8px' }}>
//           <Link to="/"><HomeOutlined /> Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2" style={{ margin: '0 8px' }}>
//           <Link to="/about"><AppstoreOutlined /> About</Link>
//         </Menu.Item>
//         <Menu.Item key="3" style={{ margin: '0 8px' }}>
//           <Link to="/services"><SolutionOutlined /> Services</Link>
//         </Menu.Item>
//         <Menu.Item key="4" style={{ margin: '0 8px' }}>
//           <Link to="/portfolio"><AppstoreOutlined /> Portfolio</Link>
//         </Menu.Item>
//         <Menu.Item key="5" style={{ margin: '0 8px' }}>
//           <Link to="/contact"><ContactsOutlined /> Contact</Link>
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default AppHeader;
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: 'whitesmoke', display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px', color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
        Microvision <span style={{ fontWeight: 'normal', fontSize: '16px' }}>Software Technologies</span>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
        <Menu.Item key="1" style={{ margin: '0 8px', color: 'black' }}>
          <Link to="/" style={{ color: 'black' }}><HomeOutlined /> Home</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ margin: '0 8px', color: 'black' }}>
          <Link to="/about" style={{ color: 'black' }}><AppstoreOutlined /> About</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ margin: '0 8px', color: 'black' }}>
          <Link to="/services" style={{ color: 'black' }}><SolutionOutlined /> Services</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{ margin: '0 8px', color: 'black' }}>
          <Link to="/portfolio" style={{ color: 'black' }}><AppstoreOutlined /> Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="5" style={{ margin: '0 8px', color: 'black' }}>
          <Link to="/contact" style={{ color: 'black' }}><ContactsOutlined /> Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
