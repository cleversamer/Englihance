import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import WordDeleteAction from "../components/WordDeleteAction";

const CustomSwipeable = ({ children, onPress }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => <WordDeleteAction onPress={onPress} />}
      >
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomSwipeable;
