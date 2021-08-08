import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = React.useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* header */}

        <View style={styles.content}>
          {/* todo form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <Text>{item.text}</Text>}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});
