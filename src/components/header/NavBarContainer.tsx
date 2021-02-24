import React, { FunctionComponent } from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NavBarContainer: FunctionComponent = ({ ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p={5}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['black', 'black', 'primary.700', 'primary.700']}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

NavBarContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default NavBarContainer;
