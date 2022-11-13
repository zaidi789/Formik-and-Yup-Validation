import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  upperCon: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  uppertext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow",
  },
  innerCon: {
    height: "85%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  innermaintext: {
    fontSize: 25,
    color: "black",
    marginTop: 30,
    marginLeft: 30,
    fontWeight: "bold",
  },
  regnowview: {
    flexDirection: "row",
  },
  regviewtext: {
    marginLeft: 30,
    fontWeight: "bold",
  },
  regbtnTxt: {
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  workView: {
    marginTop: 10,
    marginLeft: 30,
  },
  wrkViewTxt: {
    color: "silver",
    paddingTop: 20,
  },
  wrkViewTxtInput: {
    borderBottomWidth: 1,
    width: "90%",
    padding: 2,
  },
  bottomTXtView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    alignItems: "center",
  },
  btn: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnopacity: {
    backgroundColor: "blue",
    width: "50%",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  socialbtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
});
export { styles };
