import React, { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import IconComp from '../ImageComp';
import LogoIcon from '../../assets/icons/aerolab-logo.svg';
const Logo: FunctionComponent<{ color: any; w: string }> = props => {
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold'>
        <IconComp src={LogoIcon} />
      </Text>
    </Box>
  );
};

export default Logo;
