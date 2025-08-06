import { View } from "react-native";
import { styles } from "./styles";

export default function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  );
}
