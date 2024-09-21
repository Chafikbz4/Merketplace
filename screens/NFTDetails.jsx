import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SIZES, COLORS, FONTS } from "../constants";
import NFTimage from "../Components/NFTimage";
import NFTavatars from "../Components/NFTavatars";
import NFTtitle from "../Components/NFTtitle";
import NFTinfo from "../Components/NFTinfo";
import { FontAwesome } from "@expo/vector-icons";
import NFTmoreinfo from "../Components/NFTmoreinfo";
import Button from "../Components/Button";

const NFTDetails = ({ route, navigation }) => {
  const { NFTdata } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150, // Add enough padding to ensure content is visible above the button
        }}
      >
        <View style={{ flex: 1 }}>
          <NFTimage
            image={NFTdata.image}
            imageStyles={styles.imageStyles}
            Love
            arrow
            presHandler={pressHandler}
          />
          <View
            style={{
              paddingHorizontal: SIZES.xLarge,
              marginVertical: SIZES.medium,
            }}
          >
            <View style={{ marginTop: -SIZES.xLarge }}>
              <NFTavatars avatars={NFTdata.avatars} />
            </View>
            <View style={{ marginVertical: 15 }}>
              <NFTtitle
                _name={NFTdata.name}
                creator={NFTdata.creator}
                date={NFTdata.date}
              />
            </View>
            <View style={{ marginVertical: 15 }}>
              <NFTinfo
                price={NFTdata.price}
                views={NFTdata.views}
                comments={NFTdata.comments}
              />
            </View>
            <View>
              <NFTmoreinfo
                addrese={NFTdata.address}
                tokenId={NFTdata.tokenId}
                tokenSt={NFTdata.tokenSt}
                blockchain={NFTdata.blockchain}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.text}>Top bid</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                padding: SIZES.small - 4,
              }}
            >
              <FontAwesome name="dollar" size={15} color={COLORS.white} />
              <Text style={styles.text}>{NFTdata.topBid}</Text>
            </View>
          </View>
          <Button
            title="Place a bid"
            stylesButton={styles.button}
            stylesText={styles.textButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
