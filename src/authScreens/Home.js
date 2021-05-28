import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';
import {Divider, Subheading} from 'react-native-paper';
import Header from '../containers/Header';
import {globalColors, globalStyles} from '../styles/styles';
import {useClassroom} from '../contexts/ClassroomContext';
import Loading from '../containers/Loading';
import Class from '../components/home/Class';
import icons from '../assets/icons';

export default function Home({navigation}) {
  const [classesAsTeacher, setClassesAsTeacher] = useState(null);
  const [classesAsStudent, setClassesAsStudent] = useState(null);
  const {loading, getClassesAsTeacher, getClassesAsStudent} = useClassroom();

  useEffect(() => {
    getClassesAsTeacher().then(docs => setClassesAsTeacher(docs));
  }, []);

  useEffect(() => {
    getClassesAsStudent().then(docs => setClassesAsStudent(docs));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={globalStyles.component}>
      <Header navigateToProfile={() => navigation.navigate('Profile')} />

      {classesAsTeacher?.length > 0 && (
        <View style={styles.view}>
          <FlatList
            data={classesAsTeacher}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Class
                item={item}
                key={item.id}
                navigateToClassroom={navigation.navigate}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              classesAsTeacher.length > 0 && (
                <Subheading style={styles.subtitle}>Teacher</Subheading>
              )
            }
          />
        </View>
      )}

      {classesAsTeacher?.length > 0 && classesAsStudent?.length > 0 && (
        <Divider style={styles.divider} />
      )}

      {classesAsStudent?.length > 0 && (
        <View style={styles.view}>
          <FlatList
            data={classesAsStudent}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Class
                item={item}
                key={item.id}
                navigateToClassroom={navigation.navigate}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              classesAsStudent?.length > 0 && (
                <Subheading style={styles.subtitle}>Student</Subheading>
              )
            }
          />
        </View>
      )}

      {classesAsTeacher?.length === 0 && classesAsStudent?.length === 0 && (
        <View style={styles.emptyView}>
          <Image
            source={icons.empty}
            style={{
              width: 200,
              height: 200,
              opacity: 0.6,
            }}
          />
          <Subheading style={{color: globalColors.Danger}}>
            No classes joined or created by you...
          </Subheading>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: globalColors.Warning,
  },
  view: {
    margin: 10,
  },
  emptyView: {
    ...globalStyles.container,
  },
  midView: {
    marginTop: 5,
    flex: 1,
    backgroundColor: globalColors.Light,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 2,
  },
  divider: {
    marginVertical: 5,
    backgroundColor: globalColors.Secondary,
  },
});
