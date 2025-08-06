import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 50,
    alignItems: "center",
    gap: 15,
  },
  inputGroup: {
    width: "80%",
  },
  textLabel: {
    color: colors.yellow,
    fontSize: 20,
  },
  inputText: {
    borderWidth: 2,
    borderColor: colors.yellow,
    backgroundColor: "#FFF",
    borderRadius: 5,
    boxShadow: "2px 2px",
    shadowOpacity: 5,
  },
  inputFocused: {
    borderColor: "blue",
  },
  inputMultline: {
    minHeight: 100,
  },
});
