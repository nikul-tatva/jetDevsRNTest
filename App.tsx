import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { AppNavigator } from './app/navigators/app-navigator';
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore} from 'redux';

import favoriteReducer from './app/redux-store/manage-favorites/root-reducer';

export const store = createStore(favoriteReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
