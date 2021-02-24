import { Box, Divider } from '@chakra-ui/react';
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Tag, TagLabel } from '@chakra-ui/react';
import buyIconBlue from '../../assets/icons/buy-blue.svg';
import coinIcon from '../../assets/icons/coin.svg';
import { motion, AnimatePresence } from 'framer-motion';
import ReedemLayer from './ReedemLayer';
import ImageComp from '../ImageComp';
import IconComp from '../IconComp';
import axiosAPI from '../../utils/api';
import PropTypes from 'prop-types';

const Card: FunctionComponent<{
  coinFunction: any;
  user: any;
  canReedem: boolean;
  product: any;
  coinsDifference: number;
  sort: any;
  key: string;
}> = ({ coinFunction, user, canReedem, product, coinsDifference, sort, key }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('reedem text');
  const [buttonDisable, setButtonDisable] = useState(false);
  const [animationOpen, setAnimationOpen] = useState(false);
  const buyHandler = async () => {
    setButtonMessage('spinner');
    setButtonDisable(true);
    try {
      const payload = { productId: product._id };
      await axiosAPI.post('/redeem', payload);
      setButtonMessage('success');
      const newUserCoins = user.points - product.cost;
      coinFunction(newUserCoins);
    } catch (e) {
      setButtonMessage('failure');
      console.log(e);
    }
  };

  useEffect(() => {
    setAnimationOpen(false);
    setTimeout(() => {
      setAnimationOpen(true);
    }, 500);
  }, [sort]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-10%' },
  };

  return (
    <AnimatePresence>
      <motion.div animate={animationOpen ? 'open' : 'closed'} variants={variants} exit={{ opacity: 0 }} key={key}>
        <>
          <Box
            onMouseEnter={() => {
              setMouseOver(true);
            }}
            onMouseLeave={() => {
              setMouseOver(false);
            }}
            maxW='16rem'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            height='18rem'
            boxShadow='2px 2px 4px 0 rgba(0,0,0,0.10);'
          >
            <Box p={3} float='right'>
              {canReedem ? (
                <IconComp src={buyIconBlue} />
              ) : (
                <Tag
                  size='lg'
                  borderRadius='full'
                  variant='solid'
                  color='grey.500'
                  textColor='gray.700'
                  fontSize='xl'
                  marginInlineStart='2px'
                >
                  <TagLabel>you need {coinsDifference}</TagLabel>
                  <IconComp src={coinIcon} />
                </Tag>
              )}
            </Box>
            <Box position='relative' top='-10' zIndex='-3'>
              <ImageComp src={product.img.url} />
              <Box px={3} pb={3}>
                <Divider />
              </Box>
              <Box p='2'>
                <Box>
                  <Box color='gray.600' fontWeight='semibold' letterSpacing='wide' fontSize='sm' ml='2'>
                    {product.category}
                  </Box>
                  <Box fontWeight='semibold' ml='2' color='gray.700' as='h4' isTruncated>
                    {product.name}
                  </Box>
                </Box>
              </Box>
            </Box>
            {canReedem && mouseOver && (
              <ReedemLayer
                buttonDisable={buttonDisable}
                buyHandler={buyHandler}
                buttonMessage={buttonMessage}
                cost={product.cost}
                isVisible={mouseOver}
              />
            )}
          </Box>
        </>
      </motion.div>
    </AnimatePresence>
  );
};

Card.propTypes = {
  key: PropTypes.string.isRequired,
  canReedem: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  coinsDifference: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  coinFunction: PropTypes.func,
  sort: PropTypes.string,
};

export default Card;
