// ¡IMPORTANTE! Esta importación DEBE ser la primera línea de tu app.
import 'react-native-gesture-handler';

// a. Importamos las librerías instaladas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// b. Importamos los Screens creados
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

// c. Creamos un Objeto Stack
const Stack = createNativeStackNavigator();

// d. Creamos el contenedor de navegación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
