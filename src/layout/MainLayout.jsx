import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Layout } from 'antd';

const MainLayout = () => {

  const { Content } = Layout;


  return (
    <Layout>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;