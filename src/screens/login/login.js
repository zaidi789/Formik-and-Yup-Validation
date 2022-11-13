import react, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./logstyles";
import { Checkbox } from "react-native-paper";
import * as React from "react";
import { Entypo } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import { Ionicons } from "@expo/vector-icons";

const loginValidationschema = yup.object().shape({
  email: yup
    .string()
    .email("Pease enter valid email")
    .required("Email address required"),
  password: yup
    .string()
    .min(8, ({ min }) => "Password must atleats 8 characters ")
    .required("Password required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

function Login({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setshowPassword] = React.useState();
  const [visible, setvisivle] = React.useState(true);
  const [email, setemail] = useState();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationschema}
    >
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <ScrollView
          style={{ backgroundColor: "blue", height: "100%", width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height: Dimensions.get("screen").height }}>
            <View style={styles.upperCon}>
              <Ionicons name="book" size={100} color="yellow" />
              <Text style={styles.uppertext}>Book Keeping</Text>
            </View>
            <View style={styles.innerCon}>
              <Text style={styles.innermaintext}>Welcome</Text>
              <View style={styles.regnowview}>
                <Text style={styles.regviewtext}>Don,t have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.regbtnTxt}> Register Now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.workView}>
                <Text style={styles.wrkViewTxt}>Email</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <MaterialIcons
                    name="email"
                    size={24}
                    color="blue"
                    style={{ alignSelf: "center" }}
                  />
                  <TextInput
                    style={styles.emailTxtInput}
                    placeholder="Enter Your Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text
                    style={{
                      fontSize: 14,
                      color: "red",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginLeft: 23,
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <Text style={styles.wrkViewTxt}>Password</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <MaterialIcons name="lock" size={24} color="blue" />
                  <TextInput
                    style={styles.passTxtInput}
                    placeholder="Enter Your Password"
                    secureTextEntry={visible}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <TouchableOpacity
                    style={{
                      alignSelf: "stretch",
                      position: "absolute",
                      right: 30,
                    }}
                    onPress={() => {
                      setvisivle(!visible);
                      setshowPassword(!showPassword);
                    }}
                  >
                    <Ionicons
                      name={showPassword === false ? "eye-off" : "eye"}
                      size={24}
                      color="blue"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text
                    style={{
                      fontSize: 14,
                      color: "red",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginLeft: 23,
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
                <View style={styles.bottomTXtView}>
                  <Checkbox
                    color="green"
                    uncheckedColor="red"
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  ></Checkbox>
                  <Text style={{ fontWeight: "bold" }}>Remember me</Text>
                  <View>
                    <TouchableOpacity>
                      <Text style={{ fontWeight: "bold" }}>
                        {"\t\t\t\t\t\t\t\t\t\t "}
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity
                    style={styles.btnopacity}
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Text style={styles.btntxt}>Login</Text>
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 15, fontWeight: "bold" }}>
                    or Login with
                  </Text>
                </View>
                <View style={styles.socialbtn}>
                  <TouchableOpacity>
                    <Entypo
                      name="facebook-with-circle"
                      size={35}
                      color="blue"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Entypo name="twitter-with-circle" size={35} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Entypo
                      name="google--with-circle"
                      size={40}
                      color="#db4a39"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
export { Login };
