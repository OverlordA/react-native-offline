import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {initApp} from './storage/reducers/iniActions';

const MainScreen = ({initStatus = 'tee', initApp}) => {
  useEffect(() => {
    initApp('Application initialize');
  }, [initApp]);

  return (
    <SafeAreaView>
      <View>
        <Text> Main screen </Text>
        <Text>{initStatus}</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {initStatus} = state.init;
  return {initStatus};
};
const mapDispatchToProps = {
  initApp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
