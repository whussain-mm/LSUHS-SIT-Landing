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
    <div className="dashboard-container">
      {/* Header with date picker */}
      <div className="dashboard-header">
        <HeroSection/>
        <div id="how-it-works-section">
          <StepsSection />
        </div>
        <div id='testing-location-section'>
        <GridSection/>
        </div>
      </div>
     
      {/* Stats cards */}
      <Row gutter={[16, 16]} className="stats-row">
        <Col xs={24} sm={8}>
          <Card loading={loading}>
            <Statistic
              title="Total Users"
              value={dashboardData.totalUsers}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={dashboardData.totalUsersChange > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix={
                <Text type={dashboardData.totalUsersChange > 0 ? "success" : "danger"}>
                  {`${Math.abs(dashboardData.totalUsersChange)}% (${42} users)`}
                </Text>
              }
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={8}>
          <Card loading={loading}>
            <Statistic
              title="Goals Completion Rate"
              value={dashboardData.goalsCompletionRate}
              precision={0}
              valueStyle={{ 
                color: dashboardData.goalsCompletionChange > 0 ? '#3f8600' : '#cf1322' 
              }}
              prefix={
                dashboardData.goalsCompletionChange > 0 ? 
                <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
              suffix={
                <Text type={dashboardData.goalsCompletionChange > 0 ? "success" : "danger"}>
                  {`${Math.abs(dashboardData.goalsCompletionChange)}% (${12} lessons)`}
                </Text>
              }
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={8}>
          <Card loading={loading}>
            <Statistic
              title="Total Lessons View"
              value={dashboardData.totalLessonsView}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={
                dashboardData.totalLessonsViewChange > 0 ? 
                <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
              suffix={
                <Text type={dashboardData.totalLessonsViewChange > 0 ? "success" : "danger"}>
                  {`${Math.abs(dashboardData.totalLessonsViewChange)}% (${24} responses)`}
                </Text>
              }
            />
          </Card>
        </Col>
      </Row>
      
      {/* Charts row */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title="Users Logging Weight" 
            
            loading={loading}
            extra={<Button icon={<ReloadOutlined />} onClick={refreshData} type="text" />}
          >
            <HighchartsReact 
              highcharts={Highcharts} 
              options={weightChartOptions} 
            />
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card 
            title="Top Goals Completed" 
            
            loading={loading}
            extra={<Button icon={<ReloadOutlined />} onClick={refreshData} type="text" />}
          >
            {dashboardData.topGoalsCompleted.map((goal, index) => (
              <div key={index} className="goal-progress-item">
                <div className="goal-info">
                  <Text>{goal.name}</Text>
                  <Text strong>{`${goal.percentage}%`}</Text>
                </div>
                <Progress 
                  percent={goal.percentage} 
                  showInfo={false} 
                  strokeColor="#8676FF" 
                  trailColor="#F0F0F0"
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      
      {/* Bottom row */}
      <Row gutter={[16, 16]} className="bottom-row">
        <Col xs={24} lg={12}>
          <Card 
            title="Users by City" 
            
            loading={loading}
            extra={<Button icon={<ReloadOutlined />} onClick={refreshData} type="text" />}
          >
            <HighchartsReact 
              highcharts={Highcharts} 
              options={cityChartOptions} 
            />
            <div className="chart-legend">
              {dashboardData.usersByCity.map((city, index) => (
                <div key={index} className="legend-item">
                  <span className={`legend-color color-${index}`}></span>
                  <Text>{city.name}</Text>
                  <Text strong>{`${city.percentage}%`}</Text>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card 
            title="Top Lessons Viewed" 
            
            loading={loading}
            extra={
              <Button type="link" size="small">
                View all
              </Button>
            }
          >
            <Table 
              dataSource={dashboardData.topLessonsViewed} 
              columns={tableColumns} 
              pagination={false} 
              rowKey="name"
              loading={loading}
              size="middle"
            />
          </Card>
        </Col>
      </Row>

      {/* Footer with last refresh info */}
      <div className="dashboard-footer">
        <Text type="secondary">
          Last updated: {lastRefresh.toLocaleTimeString()} | 
          Average Goal Completion: {derivedMetrics.avgGoalCompletion}% | 
          Total Lesson Users: {derivedMetrics.totalLessonUsers.toLocaleString()}
        </Text>
      </div>
    </div>
  );
};

export default Dashboard;