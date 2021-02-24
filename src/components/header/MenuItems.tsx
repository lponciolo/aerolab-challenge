import React, { FunctionComponent } from 'react';
import { Stack, Box, Text, Tag, TagLabel } from '@chakra-ui/react';
import { userContext } from '../../contexts/User/UserContext';
import coinIcon from '../../assets/icons/coin.svg';
import IconComp from '../IconComp';
import PropTypes from 'prop-types';
const MenuItems: FunctionComponent<{ isOpen: any }> = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <userContext.Consumer>
          {value => (
            <>
              <Text fontSize='2xl' display='block'>
                {value.user && value.user.name}
              </Text>
              <Tag
                size='lg'
                borderRadius='full'
                variant='solid'
                color='grey.500'
                textColor='gray.700'
                fontSize='xl'
                marginInlineStart='2px'
              >
                <TagLabel>{value.user.points}</TagLabel>
                <IconComp src={coinIcon} />
              </Tag>
            </>
          )}
        </userContext.Consumer>
      </Stack>
    </Box>
  );
};

MenuItems.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuItems;
