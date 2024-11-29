import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";

interface ColoredBoxProp {
  color: string;
  day: string;
  num: number;
}

const darkenColor = (color: string, amount: number = 0.2) => {
  let r,
    g,
    b,
    a = 1;
  const rgbaValues = color
    .match(/\d+(\.\d+)?/g) // Match numbers including decimals for alpha
    ?.map((value) => parseFloat(value)); // Convert to numbers (int or float)
  if (!rgbaValues || rgbaValues.length < 3) return color; // Invalid input, return original
  [r, g, b, a] = rgbaValues;

  // Adjust color values to darken
  r = Math.max(0, r - Math.round(255 * amount));
  g = Math.max(0, g - Math.round(255 * amount));
  b = Math.max(0, b - Math.round(255 * amount));

  // Return darkened color, preserving alpha if RGBA
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
};

function handleAdd(day: string) {
  router.push({
    pathname: "/addRecipe",
    params: { day: day },
  });
}
const Group23: React.FC<ColoredBoxProp> = ({ color, day, num }) => {
  const darkerColor = darkenColor(color);
  return (
    <View style={styles.root}>
      <Text style={styles.dayText}>
        {day}
        <Text style={styles.dayText}>{num}</Text>
      </Text>
      <View style={[styles.accentCorner, { backgroundColor: darkerColor }]} />
      <View style={[styles.biggerBox, { backgroundColor: color }]}>
        <TouchableOpacity onPress={() => handleAdd(day)}>
          <FontAwesomeIcon
            icon={faAdd}
            style={{ padding: 12, alignSelf: "flex-end", margin: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
  },
  biggerBox: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  accentCorner: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    backgroundColor: "rgba(145, 171, 118, 1)",
    width: "10%",
  },
  dayText: {
    fontFamily: "InterRegular",
    alignSelf: "center",
    color: "white",
    padding: 5,
  },
});

export default Group23;
