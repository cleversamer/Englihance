import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import routes from "./routes";

const globalScreenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigation;
