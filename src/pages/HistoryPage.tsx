import React, { useEffect, useState } from 'react';
import { Container, Text, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Flex, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/header/NavBar';
import { cleanup } from '@testing-library/react';
import axiosAPI from '../utils/api';
import ImageComp from '../components/ImageComp';

const HistoryPage: React.FunctionComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productRequest = async () => {
      try {
        const response = await axiosAPI.get('/user/history');
        setProducts(response.data);
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
      <Box w='100%' h='200px' bgGradient='linear(-180deg, #0ad4fa 0%, #25bbf1 100%)'>
        <Text
          height={'100%'}
          ml={4}
          mt={4}
          mb={'50px'}
          bgGradient='linear(to right, #fcf9f6, #ffffff)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          Purchase History
        </Text>
        <Grid templateColumns='repeat(5, 1fr)' spacing='40px' gap={6}>
          {products
            .slice(0)
            .reverse()
            .map((singleProduct: any) => {
              const date = new Date(singleProduct.createDate);
              return (
                <>
                  <GridItem justifySelf='center' colSpan={[5, 2, 1]} pb={5} mb={5} key={singleProduct._id}>
                    <ImageComp src={singleProduct.img.url} />
                  </GridItem>
                  <GridItem pb={5} mb={5} colSpan={[5, 3, 4]}>
                    <Table size='sm'>
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Cost</Th>
                          <Th>Prchase Date</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td width='200px'>{singleProduct.name}</Td>
                          <Td width='200px'>{singleProduct.cost}</Td>
                          <Td width='200px'>{date.toLocaleDateString('es-AR')}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </GridItem>
                </>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default HistoryPage;
