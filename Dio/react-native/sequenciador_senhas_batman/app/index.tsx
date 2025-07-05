
import { useEffect, useRef, useState } from "react";
import { Button, Text, View, Image, Modal, Alert, Clipboard, StyleSheet } from "react-native";

export default function Index() {
  const [randon, setRandom] = useState<string>("");
  function HandleRandom() {
    setRandom((prev) => (prev = Math.random().toString(20).slice(2)));
  }

  useEffect(() => {
    HandleRandom();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        gap: 22,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{backgroundColor:"#707070", width:"100%", padding:25}}>
        <Image
          style={style.imagebatman}
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png",
          }}
        />
      </View>
      <Text style={style.textGenerat}>{randon}</Text>
      <Button onPress={() => HandleRandom()} title="GENERATE" />
      <Button
        onPress={() => {
          Clipboard.setString("oiii")
          Alert.alert("Copiado.");
        }}
        title="COPY"
      />
    </View>
  );
}

const style = StyleSheet.create({
  textGenerat:{
    backgroundColor:"#796464",
    width:"100%",
    padding:12,
    textAlign:"center",
  },
  imagebatman:{
    width:200,
    margin:"auto",
    height:100,
  },

})
