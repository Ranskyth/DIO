import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

interface Props {
  label: string,
  onPress: (event: GestureResponderEvent) => void
}

export function Button({ onPress, label }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.textLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gray,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  textLabel: {
    color: colors.yellow,
    fontSize: 20,
  },
})