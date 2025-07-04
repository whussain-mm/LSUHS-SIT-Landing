import React from 'react';
import { 
  Row, 
  Col, 
  Card, 
  Statistic, 
  Table, 
  Progress, 
  Typography, 
  Button,
  DatePicker
} from 'antd';
import { 
  ArrowUpOutlined, 
  ArrowDownOutlined, 
  ReloadOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './Dashboard.css';
import useDashboard from './useDashboard.hook';
import { useNavigate } from 'react-router-dom';
import StepsSection from '@/pages/Dashboard/components/StepsSection/StepsSection';
import HeroSection from '@/pages/Dashboard/components/HeroSection/HeroSection';
import GridSection from '@/pages/Dashboard/components/GridSection/GridSection';
import EventsSection from './components/EventsSection/Events.page';
import ActivateSection from './components/ActivateSection/Activate.page';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

function scrollToHowItWorks() {
  const section = document.getElementById("how-it-works-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const Dashboard = () => {
  // Use the custom hook
  const {
    loading,
    dateRange,
    dashboardData,
    lastRefresh,
    refreshData,
    handleDateRangeChange,
    weightChartOptions,
    cityChartOptions,
    tableColumns,
    derivedMetrics
  } = useDashboard();
  const navigate = useNavigate();
  
  return (
    <>
      <HeroSection/>
      <StepsSection />
      <GridSection/>
      <EventsSection/>
      <ActivateSection/>
    </>
  );
};

export default Dashboard;