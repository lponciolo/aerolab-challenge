import React, { FunctionComponent } from 'react';
import { IconButton, Box, Link } from '@chakra-ui/react';
import IconComp from '../IconComp';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import PropTypes from 'prop-types';

const Pagination: FunctionComponent<{ allProducts: any; page: any; amountProducts: any }> = props => {
  let leftIsVisible = false;
  let rightIsVisible = false;
  const toLeft = `/${props.page - 1}`;
  const toRight = `/${props.page + 1}`;
  console.log(props.allProducts);
  console.log();
  if (props.amountProducts > 15 && props.allProducts > props.page * 16) {
    rightIsVisible = true;
  }
  if (props.page > 1) {
    leftIsVisible = true;
  }

  return (
    <Box>
      {leftIsVisible && (
        <Link href={toLeft}>
          <IconButton variant='link' isRound aria-label='Call Sage' fontSize='20px' icon={<IconComp src={ArrowLeftIcon} />} />
        </Link>
      )}
      {rightIsVisible && (
        <Link href={toRight}>
          <IconButton variant='link' isRound aria-label='Call Sage' fontSize='20px' icon={<IconComp src={ArrowRightIcon} />} />
        </Link>
      )}
    </Box>
  );
};

Pagination.propTypes = {
  allProducts: PropTypes.number.isRequired,
  page: PropTypes.number,
  amountProducts: PropTypes.number.isRequired,
};
export default Pagination;
