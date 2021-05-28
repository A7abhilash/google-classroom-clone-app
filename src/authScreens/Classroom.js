import React from 'react';
import {View, Text} from 'react-native';

export default function Classroom({route}) {
  const {params} = route;
  return (
    <View>
      <Text>{params.classId}</Text>
    </View>
  );
}
