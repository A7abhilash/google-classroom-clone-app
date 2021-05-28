import React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {globalColors} from '../styles/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import icons from '../assets/icons';

const Left = () => (
  <>
    <Image
      source={icons.icon}
      style={{
        resizeMode: 'cover',
        height: 30,
        width: 30,
        marginRight: 5,
      }}
    />
    <Title style={{color: globalColors.Light}}>Google Classroom Clone</Title>
  </>
);

const Header = ({navigateToProfile}) => {
  return (
    <Appbar.Header style={{backgroundColor: globalColors.Dark}}>
      {/* <Appbar.Content title="Google Classroom Clone" /> */}
      <Appbar.Content title={<Left />} />
      <Appbar.Action
        icon={() => (
          <MaterialIcons
            name="account-circle"
            size={26}
            color={globalColors.Light}
          />
        )}
        onPress={navigateToProfile}
      />
    </Appbar.Header>
  );
};

export default Header;
