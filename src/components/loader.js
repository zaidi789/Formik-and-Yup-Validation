import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const Loader = ({ visible = false }) => {
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={"blue"} />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    )
  );
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  loader: {
    height: 70,
    backgroundColor: "white",
    marginHorizontal: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginRight: 20,
    fontSize: 16,
  },
});
