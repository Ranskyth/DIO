import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "../../styles/HelpStyle";
import { useRouter } from "expo-router";
import { Call } from "../../models/call";
import { Button } from "../../components/Button";

export default function Help() {
  const [call, setCall] = useState<Call>({
    quem: "",
    porQue: "",
    algoMais: "",
  });

  const router = useRouter();

  const callBatSignal = () => {
    router.push({ pathname: "/Home", params: call });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.textLabel}>Quem pede?</Text>
        <TextInput
          style={styles.inputText}
          value={call.quem}
          onChangeText={(e) => setCall({ ...call, quem: e })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textLabel}>Por que?</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={100}
          style={[styles.inputText, styles.inputMultline]}
          value={call.porQue}
          onChangeText={(e) => setCall({ ...call, porQue: e })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textLabel}>Algo mais?</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={100}
          style={[styles.inputText, styles.inputMultline]}
          value={call.algoMais}
          onChangeText={(e) => setCall({ ...call, algoMais: e })}
        />
      </View>
      <Button label="Chamar o Batman" onPress={callBatSignal} />
    </View>
  );
}
