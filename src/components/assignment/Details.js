import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {Button, Caption, Headline, Paragraph} from 'react-native-paper';
import icons from '../../assets/icons';
import {globalColors} from '../../styles/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Details({content, type}) {
  const openLink = link => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: globalColors.Secondary,
          borderBottomWidth: 1,
          paddingBottom: 5,
        }}>
        <View style={styles.topView}>
          <Image
            source={type === 'assignment' ? icons.assignment : icons.material}
            style={{
              width: 26,
              height: 26,
              tintColor: globalColors.Light,
              marginRight: 10,
              marginBottom: 5,
            }}
          />
          <Headline style={styles.title}>{content.title}</Headline>
        </View>
        <Caption style={{color: globalColors.Secondary}}>{`${new Date(
          content?.createdAt.seconds * 1000,
        ).toDateString()} at ${new Date(
          content?.createdAt.seconds * 1000,
        ).toLocaleTimeString()}`}</Caption>
      </View>
      <View style={{marginTop: 10}}>
        <Paragraph style={styles.desc}>{content.description}</Paragraph>
        {content?.file.url && (
          <View style={styles.btnView}>
            <Button
              onPress={() => openLink(content.file.url)}
              mode="contained"
              color={globalColors.Danger}
              style={{alignItems: 'center', flexDirection: 'row'}}>
              <MaterialIcons
                name="insert-drive-file"
                size={20}
                color={globalColors.Dark}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: globalColors.Dark,
                }}>
                {content.file.name}
              </Text>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: globalColors.Light,
    fontSize: 32,
  },
  desc: {
    color: globalColors.Light,
    fontSize: 18,
  },
  btnView: {
    marginVertical: 20,
    flexWrap: 'wrap',
  },
});
