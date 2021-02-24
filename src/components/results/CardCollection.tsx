import Card from '../card/Card';
import React, { useRef, FunctionComponent } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { userContext } from '../../contexts/User/UserContext';
import PropTypes from 'prop-types';
const CardCollection: FunctionComponent<{
  pt?: any;
  pb?: any;
  products: Array<any>;
  sort: string;
}> = props => {
  const canReedem = useRef(false);
  const coinsDifference = useRef(0);

  return (
    <SimpleGrid columns={[1, 2, 4]} justifyItems='center' spacing='25px' mx='25px' {...props}>
      {props.products &&
        props.products.map((singleProduct: any) => {
          return (
            <userContext.Consumer key={singleProduct._id}>
              {value => {
                if (value.user.points < singleProduct.cost) {
                  canReedem.current = false;
                  coinsDifference.current = singleProduct.cost - value.user.points;
                } else {
                  canReedem.current = true;
                }
                return (
                  <Card
                    key={singleProduct._id}
                    sort={props.sort}
                    canReedem={canReedem.current}
                    coinsDifference={coinsDifference.current}
                    product={singleProduct}
                    user={value.user}
                    coinFunction={value.coinFunction}
                  />
                );
              }}
            </userContext.Consumer>
          );
        })}
    </SimpleGrid>
  );
};

CardCollection.propTypes = {
  pt: PropTypes.any,
  pb: PropTypes.any,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort: PropTypes.string.isRequired,
};

export default CardCollection;
