import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";
import { useRouter } from "expo-router";

const SignIn = () => {
    const router = useRouter();

    return (
        <View style={styles.signIn}>
            <View style={[styles.usernameprompt, styles.inputField]}>
                <View style={styles.inputBackground} />
                <Text style={styles.inputText}>Username</Text>
            </View>
            <View style={[styles.passwordprompt, styles.inputField]}>
                <View style={styles.inputBackground} />
                <Text style={styles.inputText}>Password</Text>
            </View>
            
            <Pressable 
                style={styles.signInButton}
                onPress={() => {}}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>

            <Text style={styles.dontHaveAn}>Don't have an account?</Text>
            
            <Pressable 
                style={styles.signUpButton}
                onPress={() => router.push("/SignUp")}
            >
                <Text style={styles.signUpButtonText}>Sign up</Text>
            </Pressable>

            <Text style={styles.welcome}>Welcome!</Text>
            <Image 
                style={styles.logo} 
                resizeMode="cover" 
                source={require("./logo.png")} 
            />

            <View style={styles.socialIconsContainer}>
                <Image 
                    style={styles.socialIcon} 
                    resizeMode="cover" 
                    source={require("./google2.png")} 
                />
                <Image 
                    style={styles.socialIcon} 
                    resizeMode="cover" 
                    source={require("./facebook2.png")} 
                />
                <Image 
                    style={styles.socialIcon} 
                    resizeMode="cover" 
                    source={require("./apple2.png")} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signIn: {
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
        top: '50%',
        marginTop: -24,
    },
    passwordprompt: {
        top: '50%',
        marginTop: 27,
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
    signInButton: {
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
        marginTop: 102,
    },
    buttonText: {
        color: "#fff",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
    },
    dontHaveAn: {
        position: 'absolute',
        left: '50%',
        marginLeft: -77.5,
        top: '50%',
        marginTop: 238,
        width: 157,
        height: 20,
        color: Color.colorGray,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
    },
    signUpButton: {
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
        marginTop: 267,
    },
    signUpButtonText: {
        color: Color.colorGray,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
    },
    welcome: {
        position: 'absolute',
        left: '50%',
        marginLeft: -65.5,
        top: '50%',
        marginTop: -82,
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
        marginTop: 165,
    },
    socialIcon: {
        width: 48,
        height: 48,
    },
});

export default SignIn;
