import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import NFTcard from "../Components/NFTcard";
import HomeHeader from "../Components/HomeHeader";
import { FlashList } from "@shopify/flash-list";
const Home = (NFTdata) => {
  const [nftData, setdata] = useState(DATA);
  const searchHandler = (value) => {
    if (value) {
      const filterData = DATA.filter((nft) =>
        nft.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setdata(filterData);
    } else {
      setdata(DATA);
    }
  };
  const Notfondnft = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Ops...!</Text>
        <Text style={styles.notFoundText}>Not Found the NFT</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <HomeHeader searchHandler={searchHandler} />
        {!nftData.length ? (
          <Notfondnft />
        ) : (
          <FlashList
            data={nftData}
            renderItem={({ item }) => <NFTcard NFTdata={item} />}
            keyExtractor={(item) => item.id}
            estimatedItemSize={200}
            
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: SIZES.xLarge + 5,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
