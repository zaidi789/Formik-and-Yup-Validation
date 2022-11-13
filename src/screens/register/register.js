import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { styles } from "./regstyles";
import { Checkbox } from "react-native-paper";
import * as React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
import Loader from "../../components/loader";

const RegisterValidationschema = yup.object().shape({
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

function Register({ navigation }) {
  const [visible, setvisible] = React.useState();
  const [showPassword, setshowPassword] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  onRegisterPressed = () => {
    if (email === "" || phone === "" || password === "") {
      alert("you cant leave any field empty");
    } else {
      attemptoRegisterNewUser(email, password, phone, navigation);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values) => console.log(values)}
      validationSchema={RegisterValidationschema}
    >
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <>
          <ScrollView
            style={{ backgroundColor: "blue", height: "100%", width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ height: Dimensions.get("screen").height }}>
              <View style={styles.upperCon}>
                <Ionicons name="book" size={70} color="yellow" />
                <Text style={styles.uppertext}>Let's Gets Started!</Text>
              </View>
              <View style={styles.innerCon}>
                <Text style={styles.innermaintext}>Create your Account</Text>
                <View style={styles.regnowview}>
                  <Text style={styles.regviewtext}>Already Have One?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.regbtnTxt}> Login Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.workView}>
                  <Text style={styles.wrkViewTxt}>Email</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <Ionicons name="mail" size={24} color="blue" />
                    <TextInput
                      style={styles.wrkViewTxtInput}
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
                        marginLeft: 28,
                      }}
                    >
                      {errors.email}
                    </Text>
                  )}
                  <Text style={styles.wrkViewTxt}>Phone</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <Entypo name="phone" size={24} color="blue" />
                    <TextInput
                      style={styles.wrkViewTxtInput}
                      placeholder="Enter Your Phone"
                      keyboardType="numeric"
                    />
                  </View>

                  <Text style={styles.wrkViewTxt}>Password</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <Ionicons name="md-lock-closed" size={24} color="blue" />
                    <TextInput
                      style={styles.wrkViewTxtInput}
                      placeholder="Enter Your Password"
                      secureTextEntry={visible}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                  </View>
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        fontSize: 14,
                        color: "red",
                        fontWeight: "bold",
                        marginTop: 5,
                        marginLeft: 28,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}

                  <Text style={styles.wrkViewTxt}>Confirm Password</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <Ionicons name="md-lock-closed" size={24} color="blue" />
                    <TextInput
                      style={styles.wrkViewTxtInput}
                      placeholder="Confirm Password "
                      secureTextEntry={visible}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <TouchableOpacity
                      style={{ position: "absolute", right: 12 }}
                      onPress={() => {
                        setvisible(!visible);
                        setshowPassword(!showPassword);
                      }}
                    >
                      <Ionicons
                        name={showPassword === false ? "eye" : "eye-off"}
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
                        marginLeft: 28,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}

                  <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnopacity}>
                      <Text style={styles.btntxt}>Register</Text>
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
                      <Entypo
                        name="twitter-with-circle"
                        size={35}
                        color="blue"
                      />
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
          {loading === true && <Loader />}
        </>
      )}
    </Formik>
  );
}
export { Register };
