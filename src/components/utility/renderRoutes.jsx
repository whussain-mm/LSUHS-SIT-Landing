import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const RenderRoutes = ({ routes }) => {
  // Recursively render routes
  const renderRoutesRecursively = (routesArray) => {
    return routesArray.map((route) => {
      // Handle redirect routes
      if (route.redirect) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Navigate to={route.redirect} replace />}
          />
        );
      }
      
      // Handle parent routes with children (like MainLayout)
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={route.element}>
            {renderRoutesRecursively(route.children)}
          </Route>
        );
      }
      
      // Handle regular routes
      return <Route key={route.path} path={route.path} element={route.element} />;
    });
  };
  
  return <Routes>{renderRoutesRecursively(routes)}</Routes>;
};

export default RenderRoutes;