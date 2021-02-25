import React, { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import IconComp from '../ImageComp';
import LogoIcon from '../../assets/icons/aerolab-logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Logo: FunctionComponent<{ color: any; w: string }> = props => {
  const history = useHistory();
  let BackButton = undefined;
  if (history.action === 'POP') BackButton = true;
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold'>
        {BackButton ? (
          <Link to='/'>
            <IconComp src={LogoIcon} />
          </Link>
        ) : (
          <ArrowBackIcon w={8} h={8} onClick={() => history.goBack()} />
        )}
      </Text>
    </Box>
  );
};

export default Logo;
