import React from 'react';
import {Text} from 'react-native';
import HeaderContext from './HeaderContext';

const HeaderTitle = () => {
  return (
    <HeaderContext.Consumer>
      {title => <Text>{title}</Text>}
    </HeaderContext.Consumer>
  );
};

export default HeaderTitle;
