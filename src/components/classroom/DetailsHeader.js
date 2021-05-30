import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {globalColors, globalStyles} from '../../styles/styles';
import PostToClass from './PostToClass';

export default function DetailsHeader({currentClass, isTeacher}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{...globalStyles.textTitle, flexWrap: 'wrap'}}>
          {currentClass.subjectName}
        </Text>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Gray}}>
          {currentClass.className} - {currentClass.subjectCode}
        </Text>
      </View>
      {isTeacher && (
        <View>
          <Button
            mode="contained"
            color={globalColors.Info}
            // post-add
            onPress={() => setOpenModal(true)}>
            Post
          </Button>
        </View>
      )}
      <PostToClass openModal={openModal} setOpenModal={setOpenModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: globalColors.Primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
