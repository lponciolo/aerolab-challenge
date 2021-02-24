import React, { FunctionComponent } from 'react';
import { Button, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SortTags: FunctionComponent = props => {
  return (
    <Button borderRadius='full' textColor='gray.600' bgColor='gray.400' _hover={{ bg: 'skyblue.700', textColor: 'white' }}>
      <Text>{props.children}</Text>
    </Button>
  );
};

SortTags.propTypes = {
  children: PropTypes.element,
};

export default SortTags;
