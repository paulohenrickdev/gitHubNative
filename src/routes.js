import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

//CreateAppContainer é tipo o BrowserRouter
const Routes = createAppContainer(
  createStackNavigator(
    {
    Main,
    User
    },
    {
    headerTitle: false,
    headerLayoutPreset: 'center',
    headerBackTitle: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  })
);

export default Routes;
