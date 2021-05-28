import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';
import {globalColors} from '../../styles/styles';

export default function PostToClass({openModal, setOpenModal}) {
  const closeModal = () => setOpenModal(false);
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.component}>
        <View style={styles.topView}>
          <Title style={{color: globalColors.Light}}>Post To Class</Title>
          <Button
            onPress={closeModal}
            mode="contained"
            color={globalColors.Secondary}>
            Close
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: globalColors.Dark,
    flex: 1,
  },
  topView: {
    padding: 10,
    backgroundColor: globalColors.Gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
