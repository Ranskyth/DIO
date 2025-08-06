import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    gap: 100,
  },
  hidden: {
    display: "none",
  },
  imageContainer: {
    flexDirection: "column",
    borderColor: "#FFF",
    width: 300,
    height: 200,
    borderRadius: "50%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f9999",
  },
  image: {
    height: 125,
    resizeMode: "contain",
  },
  button: {
    fontSize: 25,
    backgroundColor: colors.gray,
    color: colors.yellow,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: colors.yellow,
    borderWidth: 1,
  },
  text: {
    color: colors.yellow,
    fontSize: 20,
  },
  textContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.yellow,
    padding: 25,
  },
});
