import React, { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import HeaderImage from '../../assets/images/header-x1.png';
import ImageComp from '../ImageComp';

const Banner: FunctionComponent<{ pb?: number }> = props => {
  return (
    <Box position='relative' zIndex={1} mb={'50px'} {...props}>
      <ImageComp position='relative' zIndex={2} src={HeaderImage} />
      <Text
        position='absolute'
        zIndex={3}
        bottom={'2vw'}
        left={'3vw'}
        bgGradient='linear(to right, #fcf9f6, #ffffff)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Electronics
      </Text>
    </Box>
  );
};

export default Banner;
