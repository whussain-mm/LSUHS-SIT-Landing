import React from 'react';
import { 
  DashboardIcon, 
  LogsIcon, 
  MediaIcon, 
  LibraryIcon, 
  GoalsIcon, 
  RecipesIcon, 
  AppUserIcon, 
  SurveysIcon, 
  CommunityIcon, 
  SettingsIcon,
  OrdersIcon,
  ResultsIcon,
  InventoryIcon,
  LocationIcon,
  EventsIcon
} from '../utils/icons';

// Function to create menu items with active state based on selectedKeys
const createMenuItems = (selectedKeys = []) => [
  { 
    key: 'dashboard', 
    icon: <DashboardIcon width={24} height={24} active={selectedKeys.includes('dashboard')} />, 
    label: 'Dashboard' 
  }
];

export default createMenuItems;
