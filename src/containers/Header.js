import React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {globalColors} from '../styles/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image, View} from 'react-native';
import icons from '../assets/icons';

const Left = () => (
  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
    <Image
      source={icons.icon}
      style={{
        resizeMode: 'contain',
        height: 25,
        width: 30,
        marginRight: 10,
      }}
    />
    <Title style={{color: globalColors.Light}}>Google Classroom Clone</Title>
  </View>
);

const Header = ({navigateToProfile}) => {
  return (
    <Appbar.Header
      style={{backgroundColor: globalColors.Dark, marginHorizontal: -20}}>
      <Appbar.Content title={<Left />} />
      <Appbar.Action
        icon={() => (
          <MaterialIcons
            name="account-circle"
            size={26}
            color={globalColors.Info}
          />
        )}
        onPress={navigateToProfile}
      />
    </Appbar.Header>
  );
};

export default Header;
