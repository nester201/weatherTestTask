import React from 'react';
import AppNavigator from './scr/navigators/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from './scr/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <PersistGate persistor={persistor}>
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ReduxProvider>
    </PersistGate>
  );
};

export default App;
