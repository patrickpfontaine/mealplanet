import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { useRouter } from "expo-router";

const CalendarPage = () => {
    const router = useRouter();
  	
  	return (
    		<View style={styles.calendarPage}>
      			<View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        				<View style={[styles.groupChild, styles.groupChildPosition4]} />
        				<View style={[styles.groupItem, styles.groupPosition1]} />
        				<View style={[styles.groupInner, styles.groupPosition]} />
        				<View style={[styles.rectangleView, styles.groupChildPosition3]} />
        				<View style={[styles.groupChild1, styles.groupChildLayout]} />
        				<View style={[styles.groupChild2, styles.groupChildPosition3]} />
        				<View style={[styles.groupChild3, styles.groupChildPosition2]} />
        				<View style={[styles.groupChild4, styles.groupChildPosition1]} />
        				<View style={styles.sunParent}>
          					<Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
          					<Text style={[styles.text, styles.textFlexBox]}>27</Text>
          					<Text style={[styles.text1, styles.textFlexBox]}>28</Text>
          					<Text style={[styles.text2, styles.textFlexBox]}>29</Text>
          					<Text style={styles.text3}>30</Text>
          					<Text style={[styles.text4, styles.textPosition]}>31</Text>
          					<Text style={[styles.text5, styles.textPosition]}>1</Text>
          					<Text style={[styles.text6, styles.textPosition]}>26</Text>
          					<Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
          					<Text style={[styles.tue, styles.textPosition]}>Tue</Text>
          					<Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
          					<Text style={[styles.wed, styles.textPosition1]}>Wed</Text>
          					<Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
          					<Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
        				</View>
        				<View style={[styles.groupChild5, styles.groupChildLayout]} />
        				<View style={[styles.groupChild6, styles.groupChildPosition1]} />
        				<View style={[styles.groupChild7, styles.groupChildPosition2]} />
        				<View style={[styles.groupChild8, styles.groupChildLayout]} />
        				<View style={[styles.groupChild9, styles.groupChildLayout]} />
        				<View style={[styles.groupChild10, styles.groupChildPosition]} />
        				<View style={[styles.groupChild11, styles.groupChildPosition]} />
        				<Text style={[styles.creamyPestoChickenContainer, styles.creamyContainerLayout]}>
          					<Text style={styles.creamyPestoChickenContainer1}>
            						<Text style={[styles.creamyPestoChicken, styles.recipeTypo1]}>{`Creamy Pesto Chicken Pasta
`}</Text>
                        <Text style={styles.cookTime25}>Cook time: 25 min</Text>
                    </Text>
                </Text>
                <Pressable style={styles.delete} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/delete.png")}  />
                </Pressable>
                <Pressable style={[styles.add, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")}  />
                </Pressable>
                <Pressable style={[styles.add1, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")} />
                </Pressable>
                <Pressable style={[styles.add2, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")} />
                </Pressable>
                <Pressable style={[styles.add3, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")} />
                </Pressable>
                <Pressable style={[styles.add4, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")} />
                </Pressable>
                <Pressable style={[styles.add5, styles.addLayout]} onPress={()=>{}}>
                    <Image style={styles.icon} resizeMode="cover" source={require("./images/add.png")} />
                </Pressable>
            </View>
            <Image style={styles.taskbarIcon} resizeMode="cover" source={require("./images/taskbar.png")} />
            <View style={[styles.recipeButtonWrapper, styles.recipeLayout]}>
                <View style={[styles.recipeButton, styles.recipeLayout]}>
                    <Image style={[styles.recipeButtonChild, styles.groupChildPosition4]} resizeMode="cover" source={require("./images/google2.png")} />
                    <Text style={[styles.recipe, styles.recipeTypo]}>Recipe</Text>
                </View>
            </View>
            <Text style={[styles.calendar, styles.calendarTypo]}>Calendar</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupChild12, styles.groupLayout]} />
                <Text style={[styles.tonightsDinner, styles.calendarTypo]}>Tonight’s Dinner!</Text>
                <Image style={styles.imageIcon} resizeMode="cover" source={require("./images/pastapic.png")} />
                <View style={[styles.groupChild13, styles.childLayout]} />
                <Text style={[styles.recipe1, styles.recipeTypo]}>Recipe</Text>
                <Text style={[styles.creamyPestoChickenContainer2, styles.creamyContainerLayout]}>
                    <Text style={styles.creamyPestoChickenContainer1}>
            						<Text style={styles.creamyPestoChicken1}>{`Creamy Pesto Chicken Pasta
            						`}</Text>
                        <Text style={styles.cookTime25}>Cook time: 25 min</Text>
                    </Text>
                </Text>
            </View>
            <View style={[styles.calendarPageChild, styles.childLayout]} />

            <View style={styles.container}>

            <Pressable 
                style={styles.buttonStyle}
                onPress={() => router.push("/SignIn")}  // Change the destination path as needed
            >
                 <Text style={styles.buttonText}>Group</Text>
            </Pressable>

    </View>
        </View>);
};

const styles = StyleSheet.create({
    groupChildLayout2: {
        height: 559,
        width: 342,
        position: "absolute"
    },
    groupChildPosition4: {
        borderRadius: Border.br_base,
        left: 0,
        top: 0
    },
    groupPosition1: {
        height: 66,
        left: 50,
        top: 246,
        position: "absolute"
    },
    groupPosition: {
        left: 48,
        top: 402,
        height: 66,
        position: "absolute"
    },
    groupChildPosition3: {
        left: 49,
        height: 66,
        position: "absolute"
    },
    groupChildLayout: {
        width: 16,
        borderBottomLeftRadius: Border.br_3xs,
        borderTopLeftRadius: Border.br_3xs
    },
    groupChildPosition2: {
        top: 168,
        left: 49,
        height: 66,
        position: "absolute"
    },
    groupChildPosition1: {
        top: 480,
        left: 49,
        height: 66,
        position: "absolute"
    },
    sunTypo: {
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute"
    },
    textFlexBox: {
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: FontSize.size_xl,
        textAlign: "center"
    },
    textPosition: {
        left: 3,
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute"
    },
    textPosition1: {
        left: 1,
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute"
    },
    groupChildPosition: {
        top: 12,
        left: 48,
        height: 66,
        position: "absolute"
    },
    creamyContainerLayout: {
        height: 33,
        width: 196,
        color: Color.colorGray,
        textAlign: "left",
        alignItems: "center",
        display: "flex",
        position: "absolute"
    },
    recipeTypo1: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500"
    },
    addLayout: {
        height: 20,
        width: 20,
        left: 305,
        position: "absolute"
    },
    recipeLayout: {
        height: 0,
        width: 0,
        position: "absolute"
    },
    recipeTypo: {
        color: Color.colorWhite,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        position: "absolute"
    },
    calendarTypo: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        color: Color.colorGray,
        position: "absolute"
    },
    groupLayout: {
        height: 126,
        width: 342,
        position: "absolute"
    },
    childLayout: {
        height: 30,
        width: 78,
        backgroundColor: Color.colorDarkslategray_100,
        borderRadius: Border.br_81xl,
        position: "absolute"
    },
    groupChild: {
        backgroundColor: "#3b4937",
        height: 559,
        width: 342,
        position: "absolute"
    },
    groupItem: {
        backgroundColor: "#baddd6",
        width: 280,
        borderRadius: Border.br_3xs
    },
    groupInner: {
        backgroundColor: "#cbc9d6",
        width: 280,
        borderRadius: Border.br_3xs
    },
    rectangleView: {
        backgroundColor: "#b8c8a7",
        top: 324,
        left: 49,
        width: 280,
        borderRadius: Border.br_3xs
    },
    groupChild1: {
        backgroundColor: "#769156",
        left: 49,
        height: 66,
        position: "absolute",
        top: 324
    },
    groupChild2: {
        backgroundColor: "#c3d4b1",
        top: 90,
        width: 280,
        borderRadius: Border.br_3xs
    },
    groupChild3: {
        backgroundColor: "#98b3cb",
        width: 280,
        borderRadius: Border.br_3xs
    },
    groupChild4: {
        backgroundColor: "#b5dce7",
        width: 279,
        borderRadius: Border.br_3xs
    },
    sun: {
        left: 2,
        textAlign: "center",
        fontSize: FontSize.size_xs,
        top: 0
    },
    text: {
        top: 15,
        height: 18,
        left: 1,
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute"
    },
    text1: {
        height: 18,
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute",
        top: 90,
        left: 0
    },
    text2: {
        top: 170,
        height: 18,
        left: 1,
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        position: "absolute"
    },
    text3: {
        top: 247,
        height: 18,
        justifyContent: "center",
        fontSize: FontSize.size_xl,
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: Color.colorGainsboro,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        width: 28,
        left: 0,
        position: "absolute"
    },
    text4: {
        top: 328,
        height: 18,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: FontSize.size_xl,
        textAlign: "center"
    },
    text5: {
        top: 405,
        height: 18,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: FontSize.size_xl,
        textAlign: "center"
    },
    text6: {
        height: 19,
        top: 482,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: FontSize.size_xl,
        textAlign: "center"
    },
    mon: {
        top: 75,
        textAlign: "left",
        fontSize: FontSize.size_xs,
        left: 0
    },
    tue: {
        top: 153,
        textAlign: "left",
        fontSize: FontSize.size_xs
    },
    thu: {
        top: 311,
        left: 4,
        textAlign: "left",
        fontSize: FontSize.size_xs
    },
    wed: {
        top: 232,
        textAlign: "left",
        fontSize: FontSize.size_xs
    },
    fri: {
        top: 388,
        left: 8,
        textAlign: "left",
        fontSize: FontSize.size_xs
    },
    sat: {
        top: 465,
        left: 6,
        textAlign: "left",
        fontSize: FontSize.size_xs
    },
    sunParent: {
        top: 30,
        left: 14,
        height: 501,
        width: 28,
        position: "absolute"
    },
    groupChild5: {
        backgroundColor: "#8c86a4",
        left: 48,
        top: 402,
        height: 66,
        position: "absolute"
    },
    groupChild6: {
        backgroundColor: "#5d9daf",
        width: 16,
        borderBottomLeftRadius: Border.br_3xs,
        borderTopLeftRadius: Border.br_3xs
    },
    groupChild7: {
        backgroundColor: "#497297",
        width: 16,
        borderBottomLeftRadius: Border.br_3xs,
        borderTopLeftRadius: Border.br_3xs
    },
    groupChild8: {
        backgroundColor: "#91ab76",
        top: 90,
        left: 49,
        height: 66,
        position: "absolute"
    },
    groupChild9: {
        backgroundColor: "#55ad9b",
        height: 66,
        left: 50,
        top: 246,
        position: "absolute"
    },
    groupChild10: {
        backgroundColor: "#dcd4ef",
        width: 280,
        borderRadius: Border.br_3xs
    },
    groupChild11: {
        backgroundColor: "#8270a8",
        width: 16,
        borderBottomLeftRadius: Border.br_3xs,
        borderTopLeftRadius: Border.br_3xs
    },
    creamyPestoChicken: {
        fontSize: FontSize.size_base
    },
    cookTime25: {
        fontStyle: "italic",
        fontWeight: "300",
        fontFamily: FontFamily.interLight,
        fontSize: FontSize.size_xs
    },
    creamyPestoChickenContainer1: {
        width: "100%"
    },
    creamyPestoChickenContainer: {
        top: 29,
        left: 77
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    delete: {
        left: 301,
        top: 17,
        width: 18,
        height: 18,
        position: "absolute"
    },
    add: {
        top: 92
    },
    add1: {
        top: 169
    },
    add2: {
        top: 258
    },
    add3: {
        top: 329
    },
    add4: {
        top: 402,
        height: 20,
        width: 20,
        left: 305
    },
    add5: {
        top: 482
    },
    rectangleParent: {
        top: 237,
        left: 27
    },
    taskbarIcon: {
        top: 798,
        width: 393,
        height: 54,
        left: 0,
        position: "absolute"
    },
    recipeButtonChild: {
        width: 83,
        height: 24,
        display: "none",
        position: "absolute"
    },
    recipe: {
        top: 3,
        left: 19,
        display: "none",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500"
    },
    recipeButton: {
        left: 0,
        top: 0
    },
    recipeButtonWrapper: {
        top: 751,
        left: 158
    },
    calendar: {
        left: 42,
        fontSize: 24,
        top: 57,
        textAlign: "center"
    },
    groupChild12: {
        backgroundColor: "#e2dacc",
        borderRadius: Border.br_base,
        left: 0,
        top: 0
    },
    tonightsDinner: {
        top: 8,
        left: 12,
        fontSize: FontSize.size_base,
        textAlign: "left"
    },
    imageIcon: {
        top: 31,
        left: 17,
        width: 115,
        height: 85,
        borderRadius: Border.br_3xs,
        position: "absolute"
    },
    groupChild13: {
        top: 79,
        left: 143
    },
    recipe1: {
        top: 86,
        left: 159,
        width: 46,
        height: 16,
        alignItems: "center",
        display: "flex",
        color: Color.colorWhite,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500"
    },
    creamyPestoChicken1: {
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_sm
    },
    creamyPestoChickenContainer2: {
        top: 37,
        left: 143
    },
    rectangleGroup: {
        top: 100,
        left: 26
    },
    calendarPageChild: {
        left: 277,
        top: 57
    },
    group: {
        top: 63,
        left: 295,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold
    },
    calendarPage: {
        backgroundColor: "#f3ede4",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        flex: 1,
        height: 852,
        overflow: "hidden",
        width: "100%"
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',  // Align to the top-right
        marginTop: 20,  // Add top margin if needed
        marginRight: 20,  // Add right margin if needed
      },
      buttonStyle: {
        backgroundColor: '#4CAF50',  // Green background for button
        paddingVertical: 10,  // Vertical padding to make the button taller
        paddingHorizontal: 20,  // Horizontal padding for width
        borderRadius: 5,  // Rounded corners
        justifyContent: 'center',  // Vertically center the text
        alignItems: 'center',  // Horizontally center the text
      },
      buttonText: {
        color: 'white',  // White text color
        fontSize: 16,  // Text size
        fontWeight: 'bold',  // Bold text
      }
});

export default CalendarPage;