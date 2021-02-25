import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme';
import { Global } from '@emotion/react';
import fontFace from './assets/fonts/font-face';
import { cleanup } from '@testing-library/react';
import axiosAPI from './utils/api';
import { userContext } from './contexts/User/UserContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';

const App: React.FunctionComponent = () => {
  const [user, setUser] = useState({
    createDate: '',
    name: '',
    points: 0,
    id: '',
  });

  const setUserCoins = (value: number) => {
    setUser({ ...user, points: value });
  };

  useEffect(() => {
    const productRequest = async () => {
      try {
        const response = await axiosAPI.get('/user/me');
        setUser(response.data);
        console.log('👉 Returned data:', response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
    };
    productRequest();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <Router>
      <userContext.Provider value={{ user: user, coinFunction: setUserCoins }}>
        <ChakraProvider theme={theme}>
          <Global styles={fontFace} />
          <Switch>
            <Route path='/history'>
              <HistoryPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </ChakraProvider>
      </userContext.Provider>
    </Router>
  );
};

export { App };
