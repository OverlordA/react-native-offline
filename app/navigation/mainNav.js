import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../MainScreen';
import ProductDetailScroll from '../view/ProductDetailScroll';

const RootStack = createStackNavigator({
  productsList: {
    screen: MainScreen,
  },
  productDetail: {
    screen: ProductDetailScroll,
  },
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
