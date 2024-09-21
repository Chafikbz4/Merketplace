import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ presHandler, Icon, stylesText, title, stylesButton }) => {
  const RanderIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return Icon;
    }
  };

  return (
    <TouchableOpacity style={stylesButton} onPress={presHandler}>
      <RanderIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
