import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

export default function Loader({ title }) {
  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
      lottieRef.current?.play();
    }, 100);
  }, []);
  return (
    <>
      <SafeAreaView style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView
          source={require("../../../assets/Loading.json")}
          autoPlay={true}
          loop
          style={styles.loader}
          ref={lottieRef}
        />
        <Text style={styles.title}>{title}...</Text>
      </SafeAreaView>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#1F1B24",
  },
  loader: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});
