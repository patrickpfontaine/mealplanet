import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";
import { useRouter } from "expo-router";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";

const SignUp = () => {
    const router = useRouter();
    		
    		return (
      			<View style={styles.signUp}>
        				<View style={[styles.usernameprompt, styles.usernamepromptPosition]}>
          					<View style={[styles.usernamepromptChild, styles.usernamepromptChildPosition]} />
          					<Text style={[styles.username, styles.signTypo]}>Username</Text>
        				</View>
        				<View style={[styles.passwordprompt, styles.usernamepromptPosition]}>
          					<View style={[styles.usernamepromptChild, styles.usernamepromptChildPosition]} />
          					<Text style={[styles.username, styles.signTypo]}>Password</Text>
        				</View>
        				<View style={[styles.confirmpasswordprompt, styles.usernamepromptPosition]}>
          					<View style={styles.usernamepromptChildPosition}>
            						<View style={[styles.usernamepromptChild, styles.usernamepromptChildPosition]} />
          					</View>
          					<Text style={[styles.confirmPassword, styles.signTypo]}>Confirm Password</Text>
        				</View>
                        
        				<View style={[styles.signupbutton, styles.signupbuttonPosition]}>
          					<Pressable style={[styles.signupbuttonChild, styles.signupbuttonPosition]} onPress={()=>{}} />
          					<Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
        				</View>
        				<Text style={[styles.welcome, styles.signInPosition]}>Welcome!</Text>
        				<Image style={[styles.image1Icon, styles.signUp1Position]} resizeMode="cover" source={require("./logo.png")} />
        				<Text style={[styles.alreadyHaveAn, styles.signInPosition]}>{`Already have an account?
`}</Text>
            <View style={[styles.signinbutton, styles.signinbuttonPosition]}>
                <Pressable style={[styles.signinbuttonChild, styles.signinbuttonPosition]} onPress={()=>router.push('/SignIn')} />
                <Text style={[styles.signIn, styles.signInPosition]}>Sign In</Text>
            </View>
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
    usernamepromptChildPosition: {
        marginLeft: -125,
        marginTop: -20,
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
    signupbuttonPosition: {
        height: 39,
        width: 83,
        marginLeft: -41.5,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signInPosition: {
        color: Color.colorGray,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signUp1Position: {
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signinbuttonPosition: {
        height: 26,
        width: 88,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    usernamepromptChild: {
        backgroundColor: Color.colorLightsteelblue,
        borderRadius: Border.br_3xs
    },
    username: {
        marginLeft: -114,
        color: Color.colorGray,
        textAlign: "left",
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
        height: 40,
        width: 250
    },
    passwordprompt: {
        marginTop: 51,
        marginLeft: -125.5,
        height: 40,
        width: 250
    },
    confirmPassword: {
        marginLeft: -115,
        color: Color.colorGray,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        marginTop: -9,
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    confirmpasswordprompt: {
        marginTop: 101,
        marginLeft: -124.5
    },
    signupbuttonChild: {
        marginTop: -19.5,
        borderRadius: 100,
        backgroundColor: "#1a3b5d"
    },
    signUp1: {
        marginTop: -8.5,
        marginLeft: -25.5,
        color: "#fff",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        textAlign: "left",
        left: "50%",
        top: "50%",
        position: "absolute"
    },
    signupbutton: {
        marginTop: 170
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
    alreadyHaveAn: {
        marginTop: 249,
        marginLeft: -81.5,
        width: 173,
        height: 21,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm
    },
    signinbuttonChild: {
        marginTop: -13,
        marginLeft: -44,
        backgroundColor: "#90b766",
        borderRadius: Border.br_3xs
    },
    signIn: {
        marginLeft: -25,
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        marginTop: -9,
        color: Color.colorGray
    },
    signinbutton: {
        marginTop: 283,
        marginLeft: -44.5
    },
    signUp: {
        backgroundColor: "#f3ede4",
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden"
    }
});

export default SignUp;
