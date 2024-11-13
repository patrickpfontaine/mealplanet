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
    position: "relative",
    alignSelf: "center",
    width: 342,
    padding: 15 ,
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


