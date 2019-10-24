import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {initApp, saveProducts} from './storage/reducers/iniActions';
import {getProducts} from './services/shopify';

const MainScreen = ({}) => {
  const dispatch = useDispatch();
  const {initStatus, shopifyProducts} = useSelector(state => state.init);

  useEffect(() => {
    dispatch(initApp('Application initialized'));
    getProducts().then(products => {
      dispatch(saveProducts(products));
    });
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <Text> Main screen </Text>
        <Text>{initStatus}</Text>
      </View>
      <View>
        {shopifyProducts && shopifyProducts.length ? (shopifyProducts.map(product => {
            return (
              <View style={{ borderWidth: 1, borderColor: 'red' }}>
                <Text> ID: {product.node.id}</Text>
                <Text> Title: {product.node.title}</Text>
                <Text> Description: {product.node.description}</Text>
              </View>
            );
          })
        ) : (
          <Text />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
