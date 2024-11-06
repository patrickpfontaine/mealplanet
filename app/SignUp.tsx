import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useRouter } from 'expo-router';
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";

const SignUp = () => {
  const router = useRouter(); // Hook from Expo Router for navigation

  return (
    <View style={styles.signUp}>
      <View style={[styles.usernameprompt, styles.inputField]}>
        <View style={styles.inputBackground} />
        <Text style={styles.inputText}>Username</Text>
      </View>
      <View style={[styles.passwordprompt, styles.inputField]}>
        <View style={styles.inputBackground} />
        <Text style={styles.inputText}>Password</Text>
      </View>
      <View style={[styles.confirmpasswordprompt, styles.inputField]}>
        <View style={styles.inputBackground} />
        <Text style={styles.inputText}>Confirm Password</Text>
      </View>

      <Pressable 
        style={styles.signUpButton}
        onPress={() => router.push("/CalendarPage")}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
      
      <Pressable 
        style={styles.signInButton}
        onPress={() => router.push("/SignIn")} // Using expo-router's push method for navigation
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>

      <Text style={styles.welcome}>Create an account!</Text>
      <Image 
        style={styles.logo} 
        resizeMode="cover" 
        source={require("./images/logo.png")} 
      />

      <View style={styles.socialIconsContainer}>
        <Image 
          style={styles.socialIcon} 
          resizeMode="cover" 
          source={require("./images/google2.png")} 
        />
        <Image 
          style={styles.socialIcon} 
          resizeMode="cover" 
          source={require("./images/facebook2.png")} 
        />
        <Image 
          style={styles.socialIcon} 
          resizeMode="cover" 
          source={require("./images/apple2.png")} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: "#f3ede4",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  inputField: {
    height: 40,
    width: 250,
    position: 'absolute',
    left: '50%',
    marginLeft: -125,
  },
  usernameprompt: {
    top: '40%',
    marginTop: 65,
  },
  passwordprompt: {
    top: '40%',
    marginTop: 115,
  },
  confirmpasswordprompt: {
    top: '40%',
    marginTop: 165,
  },
  inputBackground: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_3xs,
    height: '100%',
    width: '100%',
  },
  inputText: {
    position: 'absolute',
    left: 11,
    top: '50%',
    transform: [{translateY: -9}],
    color: "rgba(79, 86, 93, 0.8)",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signUpButton: {
    position: 'absolute',
    backgroundColor: "#1a3b5d",
    borderRadius: 100,
    height: 39,
    width: 83,
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    marginLeft: -41.5,
    top: '50%',
    marginTop: 140,
  },
  buttonText: {
    color: "#fff",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  alreadyHaveAn: {
    position: 'absolute',
    left: '50%',
    marginLeft: -77.5,
    top: '50%',
    marginTop: 270,
    width: 157,
    height: 20,
    color: Color.colorGray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  signInButton: {
    position: 'absolute',
    backgroundColor: "#90b766",
    borderRadius: Border.br_3xs,
    height: 34,
    width: 88,
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    marginLeft: -43.5,
    top: '50%',
    marginTop: 300,
  },
  signInButtonText: {
    color: Color.colorGray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  welcome: {
    position: 'absolute', // You still need this for absolute positioning
    top: '50%',           // Centers the text vertically relative to the parent container
    left: '50%',          // Centers horizontally
    transform: [{ translateX: -100 }], // Adjusts the text to be perfectly centered horizontally
    marginTop: -82,       // Fine-tune this for vertical centering if needed
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray,
    textAlign: 'center',
  },
  logo: {
    position: 'absolute',
    left: '50%',
    marginLeft: -160.5,
    top: '50%',
    marginTop: -358,
    width: 309,
    height: 244,
  },
  socialIconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
    left: '50%',
    marginLeft: -103,
    top: '50%',
    marginTop: 200,
  },
  socialIcon: {
    width: 48,
    height: 48,
  },
});

export default SignUp;
