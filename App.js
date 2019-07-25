import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const restaurants = [
  "Olive Garden",
  "Chik-Fil-A",
  "Texas Roadhouse",
  "Outback Steakhouse",
  "Chili's",
  "Five Guys",
  "Just Starve"
];
const activities = [
  "Bowling",
  "Swimming",
  "Movie",
  "Mini Golf",
  "Vandalism",
  "Code"
];

export default function App() {
  const [restaurant, setRestaurant] = React.useState("Randomize Your Love");
  const [activity, setActivity] = React.useState("Click it...I dare you");

  const handleRandom = () => {
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
    setActivity(activities[Math.floor(Math.random() * activities.length)]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.text}>{restaurant}</Text>
        <Text style={styles.text}>{activity}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRandom}>
        <Text style={styles.text}>Random Date</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#454545",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  output: {
    height: 125,
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    alignItems: "center",
    padding: 15,
    width: 275,
    backgroundColor: "#00cb78",
    borderRadius: 3
  },
  text: {
    fontSize: 40
  }
});
