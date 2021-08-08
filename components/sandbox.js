import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 100,
    backgroundColor: "#333",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});
