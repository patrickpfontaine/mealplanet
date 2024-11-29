import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Group23 from "./CalDayComp";
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const COLORS = [
  "rgba(220, 212, 239, 1)",
  "rgba(195, 212, 177, 1)",
  "rgba(152, 179, 203, 1)",
  "rgba(186, 221, 214, 1)",
  "rgba(184, 200, 167, 1)",
  "rgba(203, 201, 214, 1)",
  "rgba(181, 220, 231, 1)",
] as const;

const daysWithColors = DAYS_OF_WEEK.map((day, index) => ({
  day,
  color: COLORS[index],
}));

const Calendar = () => {
  return (
    <View style={styles.calendarContainer}>
      <FlatList
        data={daysWithColors}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <Group23 day={item.day} color={item.color} num={2} />
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3b4937",
    borderRadius: 20,
    marginTop: 20,
    // width: "90%",
    alignSelf: "center",
  },
  flatListContainer: {
    flexGrow: 1,
    padding: 2,
  },
});

export default Calendar;
