import { Animated, Image, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

import { styles } from "../../styles/HomeStyle";
import { Call } from "../../models/call";
import batsinal from "../../../assets/batsignal.png";
import { Button } from "../../components/Button";

export default function Home() {
  const [imageHidden, setImageHidden] = useState(true);
  const [textHidden, setTextHidden] = useState(true);

  const router = useRouter();
  const { algoMais, porQue, quem } = useLocalSearchParams<Call>();

  useEffect(() => {
    if (quem) {
      showMessage()
      showImage()
    }
  }, []);

  const fadeTextAnim = useRef(new Animated.Value(0)).current
  const fadeImageAnim = useRef(new Animated.Value(0)).current

  const fadeIn = (value: Animated.Value) => {
    Animated.timing(value, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = (value: Animated.Value) => {
    Animated.timing(value, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const sleep = (ms: number) => {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve()
      }, ms);
    })
  }

  const showMessage = async () => {
    setTextHidden(false)
    fadeIn(fadeTextAnim)
    await sleep(3000)
    fadeOut(fadeTextAnim)
    await sleep(2000)
    setTextHidden(true)
  }

  const showImage = async () => {
    await sleep(5000)
    setImageHidden(false)
    fadeIn(fadeImageAnim)
  }

  const askForHelp = () => {
    router.navigate("/Help");
  };

  return (
    <View style={styles.container}>
      {
        quem && !imageHidden && (
          <Animated.View style={{ opacity: fadeImageAnim }}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={batsinal} />
            </View>
          </Animated.View>

        )
      }
      {quem && !textHidden && (
        <Animated.View style={{ opacity: fadeTextAnim }}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Batman 🦇, {quem} está pedindo ajuda</Text>
            <Text style={styles.text}>{porQue}</Text>
            <Text style={styles.text}>{algoMais}</Text>
          </View>
        </Animated.View>
      )}
      {textHidden && (
        <Button label="Batmaaan, Heeelp" onPress={askForHelp} />
      )}
    </View>
  );
}
