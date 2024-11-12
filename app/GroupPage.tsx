/*import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import { useRouter } from "expo-router";

const GroupPage = () => {
  	
    const router = useRouter();

  	return (
    		<View style={styles.grouppage}>
      			<View style={[styles.rectangleParent, styles.groupChildPosition]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<Text style={[styles.joinGroup, styles.backTypo]}>Join Group</Text>
      			</View>

      			<View style={[styles.creategroupbutton, styles.groupChildPosition]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<Text style={[styles.joinGroup, styles.backTypo]}>Create Group</Text>
      			</View>

      			<Pressable 
                    style={[styles.backbutton, styles.backbuttonPosition]}
                    onPress={() => router.back()} // Or replace with your specific navigation function
                >
                    <View style={[styles.backbuttonChild, styles.backbuttonPosition]} />
                    <Text style={[styles.back, styles.backTypo]}>Back</Text>
                </Pressable>
                
      			<View style={styles.grouppageChild} />
      			<Image style={styles.grouppageItem} resizeMode="cover"/>
      			<Text style={[styles.joinAGroup, styles.groupTypo2]}>Join a Group!</Text>
      			<Text style={[styles.createAGroup, styles.groupPosition]}>Create a Group!</Text>
      			<View style={styles.entergroupcodePrompt}>
        				<View style={styles.entergroupcodePromptChild} />
        				<Text style={[styles.enterGroupCode, styles.groupTypo1]}>Enter Group Code</Text>
      			</View>
      			<View style={[styles.groupnameprompt, styles.groupcappromptPosition]}>
        				<View style={[styles.groupnamepromptChild, styles.childPosition]} />
        				<Text style={[styles.groupName, styles.groupTypo]}>{`Group Name: `}</Text>
      			</View>
      			<View style={[styles.groupcapprompt, styles.groupcappromptPosition]}>
        				<Image style={styles.childPosition} resizeMode="cover"  />
        				<Text style={[styles.groupCapacity25, styles.groupTypo]}>Group Capacity (2-5):</Text>
      			</View>
      			<View style={[styles.creategroupcodeprompt, styles.groupcappromptPosition]}>
        				<Image style={styles.childPosition} resizeMode="cover"/>
        				<Text style={[styles.groupCode, styles.groupTypo1]}>Group Code:</Text>
      			</View>
      			<Image style={styles.taskbarIcon} resizeMode="cover" source={require("./images/taskbar.png")} />
      			<Text style={[styles.yourGroup, styles.groupPosition]}>Your Group</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	groupChildPosition: {
    		height: 35,
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	backTypo: {
    		height: 25,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		fontSize: FontSize.size_lg,
    		textAlign: "center",
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	backbuttonPosition: {
    		width: 95,
    		height: 35,
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	groupTypo2: {
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		fontSize: FontSize.size_lg
  	},
  	groupPosition: {
    		left: 35,
    		textAlign: "center",
    		position: "absolute"
  	},
  	groupTypo1: {
    		fontFamily: FontFamily.interMedium,
    		fontWeight: "500",
    		fontSize: FontSize.size_sm,
    		textAlign: "center",
    		position: "absolute"
  	},
  	groupcappromptPosition: {
    		width: 273,
    		marginLeft: -146.5,
    		height: 30,
    		left: "50%",
    		position: "absolute"
  	},
  	childPosition: {
    		marginLeft: -136.5,
    		width: 273,
    		top: 0,
    		height: 30,
    		borderRadius: Border.br_3xs,
    		left: "50%",
    		position: "absolute"
  	},
  	groupTypo: {
    		left: 6,
    		fontFamily: FontFamily.interMedium,
    		fontWeight: "500",
    		fontSize: FontSize.size_sm,
    		top: 6,
    		textAlign: "center",
    		position: "absolute"
  	},
  	groupChild: {
    		marginTop: -17.25,
    		marginLeft: -72.65,
    		backgroundColor: Color.colorDarkslategray_100,
    		width: 140,
    		borderRadius: Border.br_base,
    		height: 35,
    		left: "50%",
    		top: "50%"
  	},
  	joinGroup: {
    		marginTop: -13.25,
    		marginLeft: -71.65,
    		width: 144
  	},
  	rectangleParent: {
    		marginTop: -199,
    		marginLeft: -70.5,
    		width: 145,
    		height: 35,
    		left: "50%",
    		top: "50%"
  	},
  	creategroupbutton: {
    		marginTop: 86,
    		marginLeft: -71.5,
    		width: 145,
    		height: 35,
    		left: "50%",
    		top: "50%"
  	},
  	backbuttonChild: {
    		marginTop: -17.5,
    		marginLeft: -47.5,
    		backgroundColor: "#853535",
    		borderRadius: Border.br_base
  	},
  	back: {
    		marginTop: -13.5,
    		marginLeft: -31.5,
    		width: 64
  	},
  	backbutton: {
    		marginTop: 278,
    		marginLeft: -180.5
  	},
  	grouppageChild: {
    		marginLeft: -160.5,
    		top: 342,
    		backgroundColor: "#b8c8a7",
    		height: 150,
    		width: 308,
    		borderRadius: Border.br_3xs,
    		left: "50%",
    		position: "absolute"
  	},
  	grouppageItem: {
    		top: 365,
    		left: 57,
    		width: 91,
    		height: 24,
    		position: "absolute"
  	},
  	joinAGroup: {
    		top: 141,
    		left: 33,
    		textAlign: "center",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	createAGroup: {
    		top: 305,
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		fontSize: FontSize.size_lg
  	},
  	entergroupcodePromptChild: {
    		marginLeft: -154,
    		backgroundColor: "#d9d9d9",
    		top: 0,
    		height: 30,
    		width: 308,
    		borderRadius: Border.br_3xs,
    		left: "50%",
    		position: "absolute"
  	},
  	enterGroupCode: {
    		left: 7,
    		color: "#555",
    		top: 6,
    		fontWeight: "500",
    		fontSize: FontSize.size_sm
  	},
  	entergroupcodePrompt: {
    		marginLeft: -161.5,
    		top: 176,
    		height: 30,
    		width: 308,
    		left: "50%",
    		position: "absolute"
  	},
  	groupnamepromptChild: {
    		backgroundColor: "#f5fdec"
  	},
  	groupName: {
    		color: "#202020"
  	},
  	groupnameprompt: {
    		top: 357
  	},
  	groupCapacity25: {
    		color: "#1b1b1b"
  	},
  	groupcapprompt: {
    		top: 400
  	},
  	groupCode: {
    		top: 5,
    		left: 8,
    		color: "#282828"
  	},
  	creategroupcodeprompt: {
    		top: 443
  	},
  	taskbarIcon: {
    		top: 798,
    		left: 0,
    		width: 393,
    		height: 54,
    		position: "absolute"
  	},
  	yourGroup: {
    		top: 57,
    		fontSize: 24,
    		fontWeight: "800",
    		fontFamily: FontFamily.interExtraBold,
    		color: "#222"
  	},
  	grouppage: {
    		backgroundColor: "#f3ede4",
    		borderStyle: "solid",
    		borderColor: Color.colorBlack,
    		borderWidth: 1,
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default GroupPage;*/

import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView } from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import { useRouter } from "expo-router";

const GroupPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Your Group</Text>
        
        <Text style={styles.sectionTitle}>Join a Group!</Text>
        
        {/* Join Group Button */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground} />
          <Text style={styles.buttonText}>Join Group</Text>
        </View>

        {/* Group Code Input */}
        <View style={styles.inputWrapper}>
          <View style={[styles.inputBackground, { backgroundColor: "#d9d9d9" }]} />
          <Text style={styles.inputText}>Enter Group Code</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Create a Group!</Text>
        
        {/* Create Group Button */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground} />
          <Text style={styles.buttonText}>Create Group</Text>
        </View>
        
        {/* Group Info Section */}
        <View style={styles.groupInfoContainer}>
          <View style={styles.inputWrapper}>
            <View style={[styles.inputBackground, { backgroundColor: "#f5fdec" }]} />
            <Text style={styles.inputText}>Group Name: </Text>
          </View>
          
          <View style={styles.inputWrapper}>
            <View style={[styles.inputBackground, { backgroundColor: "#f5fdec" }]} />
            <Text style={styles.inputText}>Group Capacity (2-5):</Text>
          </View>
          
          <View style={styles.inputWrapper}>
            <View style={[styles.inputBackground, { backgroundColor: "#f5fdec" }]} />
            <Text style={styles.inputText}>Group Code:</Text>
          </View>
        </View>

        {/* Back Button */}
        <Pressable onPress={() => router.back()}>
          <View style={styles.backButton}>
            <View style={[styles.buttonBackground, { backgroundColor: "#853535" }]} />
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.taskbarContainer}>
        <Image 
          style={styles.taskbar} 
          resizeMode="cover" 
          source={require("./images/taskbarBox.png")} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3ede4",
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  content: {
    flex: 1,
    paddingBottom: 60, // Add padding to prevent content from being hidden behind taskbar
  },
  buttonContainer: {
    height: 35,
    width: 145,
    position: "relative",
    alignSelf: "center",
    marginVertical: 10,
  },
  backButton: {
    height: 35,
    width: 95,
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonBackground: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_100,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    width: "100%",
    height: 25,
    top: "50%",
    marginTop: -12.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  inputWrapper: {
    width: 273,
    height: 30,
    position: "relative",
    alignSelf: "center",
    marginVertical: 5,
  },
  inputBackground: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputText: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 8,
    top: 6,
    color: "#555",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: "#222",
    textAlign: "center",
    marginTop: 57,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "center",
    marginVertical: 15,
  },
  groupInfoContainer: {
    backgroundColor: "#b8c8a7",
    padding: 15,
    borderRadius: Border.br_3xs,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  taskbarContainer: {
	flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,  // Standard height for bottom navigation
  },
  taskbar: {
    width: '100%',
    height: '100%',
  },
});

export default GroupPage;


