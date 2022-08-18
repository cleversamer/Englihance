import { StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const LoginScreen = (props) => {
  const { login } = useAuth();

  return (
    <Screen style={styles.container}>
      <StatusBar style="dark" />

      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withStatusBarPadding(LoginScreen);
