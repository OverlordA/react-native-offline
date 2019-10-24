import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
    host: '192.168.1.14'
}) // controls connection & communication settings
    .useReactNative({})
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect(); // let's connect!

export default reactotron;
