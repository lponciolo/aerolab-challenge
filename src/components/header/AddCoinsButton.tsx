import React, { FunctionComponent } from 'react';
import { Stack, Box, Text, Tag, TagLabel, Button } from '@chakra-ui/react';
import { userContext } from '../../contexts/User/UserContext';
import coinIcon from '../../assets/icons/coin.svg';
import IconComp from '../IconComp';
import PropTypes from 'prop-types';
import axiosAPI from '../../utils/api';

const handleAddCoins: any = async (CoinFunction: any) => {
  try {
    const payload = { amount: 1000 };
    const result = await axiosAPI.post('/user/points', payload);
    await CoinFunction(result.data['New Points']);
    return console.log(result.data['New Points']);
  } catch (e) {
    return console.log(e.message);
  }
};

const AddCoinsButton: FunctionComponent = props => {
  return (
    <userContext.Consumer>
      {value => (
        <Box {...props}>
          <Button
            color='grey.500'
            textColor='gray.700'
            onClick={() => {
              handleAddCoins(value.coinFunction);
            }}
          >
            Add 1000
            <IconComp src={coinIcon} mt={'4px'} />
          </Button>
        </Box>
      )}
    </userContext.Consumer>
  );
};

export default AddCoinsButton;
