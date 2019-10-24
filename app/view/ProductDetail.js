import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetail = ({navigation}) => {
  const [dealId, setDealId] = useState();
  useEffect(() => {
    setDealId(navigation.getParam('productId'));
  }, [navigation]);
  const {shopifyProducts} = useSelector(state => state.init);

  return (
    <View>
      <Text>Product detail </Text>
      {shopifyProducts && shopifyProducts.length ? (
        shopifyProducts.map(product => {
          if (product.node.id === dealId) {
            return (
              <View>
                <Text>Id: {product.node.id}</Text>
                <Text>Id: {product.node.title}</Text>
                <Text>Id: {product.node.description}</Text>
              </View>
            );
          }
        })
      ) : (
        <Text />
      )}
    </View>
  );
};

export default ProductDetail;
