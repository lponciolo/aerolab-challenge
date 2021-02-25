import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import NavBar from '../components/header/NavBar';
import Banner from '../components/banner/Banner';
import ResultsLayout from '../components/results/ResultsLayout';
import { cleanup } from '@testing-library/react';
import axiosAPI from '../utils/api';

const HomePage: React.FunctionComponent = () => {
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
    <Container maxW='7xl' centerContent>
      <NavBar />
      <Banner />
      <ResultsLayout />
    </Container>
  );
};

export default HomePage;
