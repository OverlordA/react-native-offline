import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../MainScreen';
import ProductDetail from '../view/ProductDetail';

const RootStack = createStackNavigator({
  productsList: {
    screen: MainScreen,
  },
  productDetail: {
    screen: ProductDetail,
  },
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
