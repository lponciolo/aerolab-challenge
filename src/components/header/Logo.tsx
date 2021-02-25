import React, { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import IconComp from '../ImageComp';
import LogoIcon from '../../assets/icons/aerolab-logo.svg';
import { Link } from 'react-router-dom';
const Logo: FunctionComponent<{ color: any; w: string }> = props => {
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold'>
        <Link to='/'>
          <IconComp src={LogoIcon} />
        </Link>
      </Text>
    </Box>
  );
};

export default Logo;
