import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import { Box, Stack, Text, Divider, Flex, Spacer } from '@chakra-ui/react';
import SortOptions from './SortOptions';
import SortOptionsMobile from './SortOptionsMobile';
import CardCollection from './CardCollection';
import { useLocation } from 'react-router';
import axiosAPI from '../../utils/api';
import { cleanup } from '@testing-library/react';
import Pagination from './Pagination';
import { lowestFirst, highestFirst, defaultSort } from '../../utils/sortUtils';
const ResultsLayout: FunctionComponent = props => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('default');
  const location = useLocation();
  const pageInURL = location.pathname.substring(1);
  const page = parseInt(pageInURL) || (1 as number);
  const firstProduct = (page - 1) * 16;
  const finalProduct = page * 16;
  const amountProducts = useRef(0);
  const productIndex = useRef(0);
  const allProducts = useRef(0);

  useEffect(() => {
    const productRequest = async () => {
      try {
        const response = await axiosAPI.get('/products');
        allProducts.current = response.data.length;
        let sortedProducts = response.data;
        if (sort === 'lowest') sortedProducts = lowestFirst(sortedProducts);
        if (sort === 'highest') sortedProducts = highestFirst(sortedProducts);
        if (sort === 'default') sortedProducts = defaultSort(sortedProducts);
        const newResponse = sortedProducts.slice(firstProduct, finalProduct);
        amountProducts.current = newResponse.length;
        productIndex.current = (page - 1) * 16 + amountProducts.current;
        setProducts(newResponse);

        console.log('👉 Returned data:', response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
    };
    productRequest();
    return () => {
      cleanup();
    };
  }, [finalProduct, firstProduct, page, sort]);

  const handleChange = (newValue: any) => {
    console.log(newValue);
    setSort(newValue);
  };

  return (
    <Box {...props} w='100%' maxW='6xl' pb={5}>
      <Stack direction='row' h='60px' alignItems='center' p={4}>
        <Text color='gray.700' fontWeight='semibold'>
          {productIndex.current} of {allProducts.current} Products
        </Text>
        <Divider orientation='vertical' color='black' colorScheme='gray' size='5px' variant='solid' />
        <SortOptions products={products} setSort={handleChange} />
        <SortOptionsMobile products={products} setSort={handleChange} />
      </Stack>
      <Divider orientation='horizontal' variant='solid' />
      <CardCollection sort={sort} products={products} pt={10} pb={7} />
      <Flex py='25px' direction='row' h='60px' alignItems='center' p={4} pb={5}>
        <Text color='gray.700' fontWeight='semibold'>
          {productIndex.current} of {allProducts.current} Products
        </Text>
        <Spacer />
        <Pagination allProducts={allProducts.current} page={page} amountProducts={amountProducts.current} />
      </Flex>
    </Box>
  );
};

export default ResultsLayout;
