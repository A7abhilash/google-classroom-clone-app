import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Divider, Subheading} from 'react-native-paper';
import Header from '../containers/Header';
import {globalColors, globalStyles} from '../styles/styles';
import {useClassroom} from '../contexts/ClassroomContext';
import Loading from '../containers/Loading';
import Class from '../components/home/Class';

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

      {classesAsTeacher?.length && (
        <View style={styles.view}>
          <Subheading style={styles.subtitle}>Teacher</Subheading>
          {classesAsTeacher.map(item => (
            <Class item={item} key={item.id} />
          ))}
        </View>
      )}

      {classesAsTeacher?.length && classesAsStudent?.length && (
        <Divider style={styles.divider} />
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
