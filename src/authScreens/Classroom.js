import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import DisplayClassPeople from '../components/classroom/DisplayClassPeople';
import SelectOptions from '../components/classroom/SelectOptions';
import Loading from '../containers/Loading';
import {useAuth} from '../contexts/AuthContext';
import useClass from '../hooks/useClass';
import {globalColors, globalStyles} from '../styles/styles';

export default function Classroom({route, navigation}) {
  const {params} = route;
  const {currentUser} = useAuth();
  const {error, currentClass, materials, assignments, isTeacher} = useClass(
    params.classId,
  );
  const [selectedOption, setSelectedOption] = useState('Materials');

  const switchContent = () => {
    switch (selectedOption) {
      case 'Assignments':
        return (
          <></>
          //   <DisplayClassPosts
          // 	items={assignments}
          // 	type="assignment"
          // 	classLink={`/classroom/${classId}`}
          // 	isTeacher={isTeacher}
          //   />
        );
      case 'People':
        return (
          <DisplayClassPeople
            people={currentClass?.students}
            teacher={currentClass?.teacher}
          />
        );
      default:
        return (
          <></>
          //   <DisplayClassPosts
          // 	items={materials}
          // 	type="material"
          // 	classLink={`/classroom/${classId}`}
          //   />
        );
    }
  };

  //   const getPendingWork = () => {
  // 	if (assignments) {
  // 	  let list = [];
  // 	  assignments.forEach((assignment) => {
  // 		let flag = 1;
  // 		for (const submission of assignment.submissions) {
  // 		  if (submission.email === currentUser.email) {
  // 			flag = 0;
  // 			break;
  // 		  }
  // 		}
  // 		flag && list.push(assignment);
  // 	  });
  // 	  return list;
  // 	}
  //   };
  useEffect(() => {
    if (error) {
      navigation.goBack();
    }
  }, [error, navigation]);

  return currentClass != null ? (
    <View style={globalStyles.component}>
      <Text style={{color: globalColors.Light}}>{currentClass.className}</Text>
      <SelectOptions
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {switchContent()}
    </View>
  ) : (
    <Loading />
  );
}

// const styles = StyleSheet.create({
//   style,
// });
