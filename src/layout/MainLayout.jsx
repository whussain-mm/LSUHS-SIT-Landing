import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Layout } from 'antd';
import Footer from './Footer';

const MainLayout = () => {

  const { Content } = Layout;


  return (
    <Layout>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer/>
    </Layout>
  );
};

export default MainLayout;