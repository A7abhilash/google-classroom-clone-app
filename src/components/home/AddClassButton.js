import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {globalColors} from '../../styles/styles';

const AddClassButton = ({navigateToScreen}) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open: val}) => setState({open: val});

  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={() => (
            <MaterialIcons
              name="add"
              size={25}
              color={globalColors.Dark}
              style={{marginRight: 5}}
            />
          )}
          actions={[
            {
              icon: () => (
                <MaterialIcons
                  name="class"
                  size={20}
                  color={globalColors.Dark}
                />
              ),
              label: 'Create Class',
              onPress: () => navigateToScreen('Create Class'),
            },
            {
              icon: () => (
                <MaterialIcons
                  name="subdirectory-arrow-right"
                  size={20}
                  color={globalColors.Dark}
                />
              ),
              label: 'Join Class',
              onPress: () => navigateToScreen('Join Class'),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </Provider>
  );
};

export default AddClassButton;
