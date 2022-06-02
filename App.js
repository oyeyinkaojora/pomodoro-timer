// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Focus from "./src/features/Focus";
import { colors } from "./src/utils/colors";
import Timer from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const [history, setHistory] = useState([
    "Take a nap",
    "Take Readinds for your project",
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addsubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(currentSubject) => {
            setHistory([...history, currentSubject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
