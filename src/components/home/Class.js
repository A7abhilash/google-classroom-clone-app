import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {globalColors, globalStyles} from '../../styles/styles';

export default function Class({item}) {
  return (
    <View style={styles.container}>
      <Title style={styles.subjectName}>{item.subjectName}</Title>
      <Text style={styles.className}>{item.className}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.LightGray,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
  },
  subjectName: {
    color: globalColors.Light,
    ...globalStyles.title2,
  },
  className: {
    color: globalColors.Secondary,
    ...globalStyles.textSubTitle,
  },
});
