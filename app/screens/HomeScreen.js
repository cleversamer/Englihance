import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import Screen from "../components/Screen";
import Word from "../components/Word";
import useAuth from "../auth/useAuth";

const data = [
  {
    id: 1,
    checked: false,
    translation: "أطيب التهاني",
    word: "Congratulations",
  },
  { id: 2, word: "Hello", translation: "مرحباً", checked: false },
];

const HomeScreen = (props) => {
  const { logout } = useAuth();
  const [words, setWords] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const onWordPress = (word) => {
    setWords(
      words.map((item) =>
        item.id === word.id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const onWordDelete = (word) => {
    setWords(words.filter((item) => item.id !== word.id));
  };

  const onRefresh = () => setWords(data);

  return (
    <Screen style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        data={words}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <Word
            pair={item}
            onPress={() => onWordPress(item)}
            onDelete={() => onWordDelete(item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withStatusBarPadding(HomeScreen);
