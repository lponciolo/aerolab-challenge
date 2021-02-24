import { Box, Button, Flex } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Image, Text, Spinner } from '@chakra-ui/react';
import buyIconWhite from '../../assets/icons/buy-white.svg';
import coinIcon from '../../assets/icons/coin.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
const ReedemLayer: FunctionComponent<{
  buttonDisable: boolean;
  buyHandler: any;
  buttonMessage: string;
  cost: number;
  isVisible: boolean;
}> = ({ buttonDisable, buyHandler, buttonMessage, cost, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Box
            boxShadow='4px 4px 4px 5px rgba(0,0,0,0.5);'
            cursor='default'
            maxW='17rem'
            position='relative'
            top='-20.2rem'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            height='18rem'
          >
            <Box p={0} position='relative' w='100%' h='100%' opacity={0.8} bg='linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);'></Box>
            <Box p={0} position='relative' top='-100%' mt='10.5px' mr='5px' float='right' opacity={1}>
              <Image ml='2' src={buyIconWhite} alignContent='right' alt='' />
            </Box>
            {cost && (
              <Box p={0} position='relative' top='-100%' opacity={1} ml='40px' mr='24px' mt='100px'>
                <Flex direction='row' marginLeft='inherit'>
                  <Text textAlign='center' fontSize='36px' textColor='white' alignSelf='center'>
                    {cost}
                  </Text>{' '}
                  <Image mt={2} ml={2} src={coinIcon} alt='' />
                </Flex>
              </Box>
            )}
            <Box p={0} position='relative' top='-100%' opacity={1} ml='24px' mr='24px' mt='12px'>
              <Button
                disabled={buttonDisable}
                borderRadius='full'
                textColor='gray.700'
                bgColor='gray.400'
                w='100%'
                alignSelf='center'
                onClick={buyHandler}
              >
                {buttonMessage === 'reedem text' && 'Reedem Now'}
                {buttonMessage === 'spinner' && <Spinner />}
                {buttonMessage === 'failure' && <CloseIcon />}
                {buttonMessage === 'success' && <CheckIcon />}
              </Button>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ReedemLayer.propTypes = {
  buttonDisable: PropTypes.bool.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  buyHandler: PropTypes.func.isRequired,
  cost: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ReedemLayer;
