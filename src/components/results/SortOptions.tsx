import React, { FunctionComponent, SetStateAction } from 'react';
import { Text, Box, Stack } from '@chakra-ui/react';
import SortTag from './SortTag';
import PropTypes from 'prop-types';

const SortOptions: FunctionComponent<{
  products: Array<any>;
  setSort: SetStateAction<any>;
  props?: any;
}> = ({ setSort }, props) => {
  console.log(setSort);
  return (
    <Box display={{ base: 'none', md: 'block' }} {...props}>
      <Stack direction='row' h='60px' alignItems='center' p={4}>
        <Text color='gray.600'>Sort by:</Text>
        <Box as='button' onClick={() => setSort('default')}>
          <SortTag>Most Recent</SortTag>
        </Box>
        <Box as='button' onClick={() => setSort('lowest')}>
          <SortTag>Lowest Price</SortTag>
        </Box>
        <Box as='button' onClick={() => setSort('highest')}>
          <SortTag>Highest Price</SortTag>
        </Box>
      </Stack>
    </Box>
  );
};

SortOptions.propTypes = {
  setSort: PropTypes.func.isRequired,
};

export default SortOptions;
