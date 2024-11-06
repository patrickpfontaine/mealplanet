import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";
//import logo from "./logo";


const SignIn = () => {
  	
  	return (
    		<View style={styles.signIn}>
      			<View style={[styles.usernameprompt, styles.usernamepromptPosition]}>
        				<View style={[styles.usernamepromptChild, styles.usernamepromptPosition]} />
        				<Text style={[styles.username, styles.signTypo]}>Username</Text>
      			</View>
      			<View style={[styles.passwordprompt, styles.usernamepromptPosition]}>
        				<View style={[styles.usernamepromptChild, styles.usernamepromptPosition]} />
        				<Text style={[styles.password, styles.signTypo]}>Password</Text>
      			</View>
      			<View style={[styles.signinbutton, styles.signinbuttonPosition]}>
        				<Pressable style={[styles.signinbuttonChild, styles.signinbuttonPosition]} onPress={()=>{}} />
        				<Text style={[styles.signIn1, styles.signTypo]}>Sign in</Text>
      			</View>
      			<Text style={[styles.dontHaveAn, styles.signUpPosition]}>{`Don’t have an account?
`}</Text>
            <View style={[styles.signupbutton, styles.signupbuttonPosition]}>
                <Pressable style={[styles.signupbuttonChild, styles.signupbuttonPosition]} onPress={()=>{}} />
                <Text style={[styles.signUp, styles.signUpPosition]}>Sign up</Text>
            </View>
            <Text style={[styles.welcome, styles.signUpPosition]}>Welcome!</Text>
            <Image style={[styles.image1Icon, styles.signIn1Position]} resizeMode="cover" source={require("./logo.png")} />
        </View>);
};

const styles = StyleSheet.create({
    usernamepromptPosition: {
        height: 40,
        width: 250,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signTypo: {
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm
    },
    signinbuttonPosition: {
        height: 39,
        width: 83,
        marginLeft: -41.5,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signUpPosition: {
        color: Color.colorGray,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signupbuttonPosition: {
        height: 26,
        width: 88,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signIn1Position: {
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    usernamepromptChild: {
        marginTop: -20,
        marginLeft: -125,
        backgroundColor: Color.colorLightsteelblue,
        borderRadius: Border.br_3xs
    },
    username: {
        color: "rgba(79, 86, 93, 0.8)",
        marginLeft: -114,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        marginTop: -9,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    usernameprompt: {
        marginTop: 0,
        marginLeft: -125.5,
        width: 250
    },
    password: {
        color: "#606a73",
        marginLeft: -114,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        marginTop: -9,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    passwordprompt: {
        marginTop: 51,
        marginLeft: -125.5,
        width: 250
    },
    signinbuttonChild: {
        marginTop: -19.5,
        borderRadius: 100,
        backgroundColor: "#1a3b5d"
    },
    signIn1: {
        marginTop: -8.5,
        marginLeft: -22.5,
        color: "#fff",
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signinbutton: {
        marginTop: 120
    },
    dontHaveAn: {
        marginTop: 218,
        marginLeft: -77.5,
        width: 157,
        height: 20,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm
    },
    signupbuttonChild: {
        marginTop: -13,
        marginLeft: -44,
        backgroundColor: "#90b766",
        borderRadius: Border.br_3xs
    },
    signUp: {
        marginLeft: -25,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        marginTop: -9,
        color: Color.colorGray
    },
    signupbutton: {
        marginTop: 250,
        marginLeft: -43.5
    },
    welcome: {
        marginTop: -58,
        marginLeft: -58.5,
        fontSize: 24,
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
        textAlign: "center"
    },
    image1Icon: {
        marginTop: -358,
        marginLeft: -160.5,
        width: 309,
        height: 244
    },
    signIn: {
        backgroundColor: "#f3ede4",
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden"
    }
});

export default SignIn;
