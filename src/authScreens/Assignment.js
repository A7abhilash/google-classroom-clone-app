import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Submissions from '../components/assignment/Submissions';
import Details from '../components/material/Details';
import Loading from '../containers/Loading';
import {useMsg} from '../contexts/MsgContext';
import useClass from '../hooks/useClass';
import {globalStyles} from '../styles/styles';

export default function Assignment({route, navigation}) {
  const {setToast: setMsg} = useMsg();
  const {classId, assignmentId} = route.params;
  const {assignments, isTeacher, error} = useClass(classId);
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    if (assignments) {
      const data = assignments?.find(item => item.id === assignmentId);
      if (data) {
        // console.log(data);
        setAssignment(data);
      } else {
        setMsg('No assignment found...');
        navigation.goBack();
      }
    }
  }, [assignments, assignmentId, classId, setMsg, navigation]);

  useEffect(() => {
    if (error) {
      navigation.goBack();
    }
  }, [error, navigation]);

  return assignment !== null ? (
    <View style={globalStyles.component}>
      <Details content={assignment} type="assignment" />
      {isTeacher && <Submissions submissions={assignment?.submissions} />}
    </View>
  ) : (
    <Loading />
  );
}
