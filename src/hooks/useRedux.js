import { useSelector, useDispatch } from 'react-redux';

// Custom hook for Redux usage
export const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  return {
    dispatch,
    state,
    app: state.app,
  };
};

// Specific selectors for better performance
export const useApp = () => useSelector((state) => state.app);


// App specific selectors  
export const useTheme = () => useSelector((state) => state.app.theme);
export const useSidebar = () => useSelector((state) => state.app.sidebarOpen);
export const useGlobalLoading = () => useSelector((state) => state.app.loading.global);
export const usePageLoading = () => useSelector((state) => state.app.loading.page);
export const useNotifications = () => useSelector((state) => state.app.notifications);
export const useSettings = () => useSelector((state) => state.app.settings);
