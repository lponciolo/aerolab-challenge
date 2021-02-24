import React, { useEffect, useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import NavBar from './components/header/NavBar';
import theme from './assets/theme';
import { Global } from '@emotion/react';
import Banner from './components/banner/Banner';
import ResultsLayout from './components/results/ResultsLayout';
import fontFace from './assets/fonts/font-face';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import axiosAPI from './utils/api';
import { userContext } from './contexts/User/UserContext';

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
          <Container maxW='7xl' centerContent>
            <NavBar />
            <Banner pb={8} />
            <ResultsLayout />
          </Container>
        </ChakraProvider>
      </userContext.Provider>
    </Router>
  );
};

export { App };
