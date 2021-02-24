import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import HeaderImage from '../../assets/images/header-x1.png';
import ImageComp from '../ImageComp';

const Banner: FunctionComponent<{ pb: number }> = props => {
  return (
    <Box {...props}>
      <ImageComp src={HeaderImage} />
    </Box>
  );
};

export default Banner;
