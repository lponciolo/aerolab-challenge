import React, { FunctionComponent, SetStateAction } from 'react';
import { Text, Box, Stack, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const SortOptionsMobile: FunctionComponent<{ products: Array<any>; setSort: SetStateAction<any> }> = ({ products, setSort }) => {
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setSort(event.target.value);
  };

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Stack direction='row' h='60px' alignItems='center' p={4}>
        <Text color='gray.600'>Sort by:</Text>
        <Select
          onChange={e => {
            handleChange(e);
          }}
          placeholder='Select'
        >
          <option value='default'>Most Recent</option>
          <option value='lowest'>Lowest Price</option>
          <option value='highest'>Highest Price</option>
        </Select>
      </Stack>
    </Box>
  );
};

SortOptionsMobile.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortOptionsMobile;
