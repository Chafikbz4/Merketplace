import { View, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import Button from "./Button";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";

const NFTimage = ({ image, imageStyles, Love, arrow, presHandler }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} />

      <View style={styles.buttonContainer}>
        {arrow && (
          <Button
            style={styles.button}
            Icon={<Feather name="arrow-left" size={20} color={COLORS.second} />}
            presHandler={presHandler && presHandler}
          />
        )}
        <View style={{ flex: 1 }} />
        {Love && (
          <Button
            style={styles.button}
            Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
          />
        )}
      </View>
    </View>
  );
};

export default NFTimage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
