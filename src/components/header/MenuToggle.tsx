import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const MenuToggle: FunctionComponent<{ toggle: any; isOpen: boolean }> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <RiCloseFill /> : <RiMenuFill />}
    </Box>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuToggle;
