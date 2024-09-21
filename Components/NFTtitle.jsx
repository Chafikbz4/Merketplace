import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import NFTdate from "./NFTdate";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const NFTtitle = ({ _name, creator, date }) => {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{_name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SIZES.small,
          }}
        >
          <Text style={styles.textCreator}>{creator}</Text>
          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color="white"
          />
        </View>
        <NFTdate date={date} />
      </View>
    </View>
  );
};

export default NFTtitle;

const styles = StyleSheet.create({
  textName: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
});
