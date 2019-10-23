import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {initApp} from './storage/reducers/iniActions';

const MainScreen = () => {
  useEffect(() => {
    dispatch(initApp("Initialized"));
  }, [dispatch]);

  const dispatch = useDispatch();
  const { initStatus } = useSelector(state => state.init);

  return (
    <SafeAreaView>
      <View>
        <Text> Main screen </Text>
          <Text>{initStatus}</Text>
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
