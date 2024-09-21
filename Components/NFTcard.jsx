import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import NFTimage from "./NFTimage";
import NFTAvatars from "./NFTavatars";
import NFTTitle from "./NFTtitle";
import NFTInfo from "./NFTinfo";
import { useNavigation } from "@react-navigation/native";

const NFTCard = ({ NFTdata }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("NFTDetails", { NFTdata });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={pressHandler}>
        <NFTimage image={NFTdata.image} imageStyles={styles.imageStyles} />
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <NFTAvatars avatars={NFTdata.avatars} />
      </View>
      <View style={styles.cardBottom}>
        <NFTTitle
          _name={NFTdata.name}
          creator={NFTdata.creator}
          date={NFTdata.date}
        />
        <View style={{ marginTop: SIZES.small + 5 }}>
          <NFTInfo
            comments={NFTdata.comments}
            views={NFTdata.views}
            price={NFTdata.price}
            love
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: { width: "100%", padding: SIZES.medium },
  imageStyles: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
});
