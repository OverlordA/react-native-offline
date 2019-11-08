import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
    Animated
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {initApp, saveProducts} from './storage/reducers/iniActions';
import {getProducts} from './services/shopify';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {initStatus, shopifyProducts} = useSelector(state => state.init);

  useEffect(() => {
    dispatch(initApp('Application initialized'));
    getProducts().then(products => {
      dispatch(saveProducts(products));
    });
  }, [dispatch]);
  const scrollRef = useRef();

  return (
    <SafeAreaView>
      <View>
        <Text> Main screen </Text>
        <Text>{initStatus}</Text>
      </View>
      <View>
        {shopifyProducts && shopifyProducts.length ? (
          shopifyProducts.map(product => {
            return (
              <TouchableOpacity
                style={{borderWidth: 1, borderColor: 'red'}}
                onPress={() => {
                  navigation.navigate({
                    routeName: 'productDetail',
                    params: {
                      productId: product.node.id,
                    },
                  });
                }}>
                <Text> ID: {product.node.id}</Text>
                <Text> Title: {product.node.title}</Text>
                <Text> Description: {product.node.description}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text />
        )}
      </View>
      <View>
      <View style={styles.container}>
          <ScrollView style={styles.scrollView} ref={scrollRef}>
              <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
              </Text>
          </ScrollView>
      </View>
          <TouchableOpacity onPress={()=> console.log('perss ', scrollRef.current.scrollTo({x:0, y:0, animated: true}))}><Text>scroll top</Text></TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    marginTop: 10,
      width: 400,
      height: 400,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
      width: 300,
      height: 200,
  },
  text: {
    fontSize: 42,

  },
});

export default MainScreen;
