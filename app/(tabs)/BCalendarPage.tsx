import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useRecipeContext } from "../config/RecipeContext";
import { ThemedButton } from "@/components/Button";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const DATES = ["27", "28", "29", "30", "31", "1", "26"] as const;

type DayOfWeek = (typeof DAYS_OF_WEEK)[number];
type Date = (typeof DATES)[number];

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
}

interface DayRecipe {
  day: string;
  recipe: Recipe;
}

interface CalendarDayProps {
  day: DayOfWeek;
  date: Date;
  top: number;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, date, top }) => (
  <View style={[styles.dayContainer, { top }]}>
    <Text style={styles.dayText}>{day}</Text>
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

interface EventCardProps {
  day: DayOfWeek;
  top: number;
  title?: string;
  time?: string;
  onAdd?: () => void;
  onDelete?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  day,
  top,
  title,
  time,
  onAdd,
  onDelete,
}) => {
  const dayBackgrounds = {
    Sun: require("../images/SunColorBox.png"),
    Mon: require("../images/MonColorBox.png"),
    Tue: require("../images/TueColorBox.png"),
    Wed: require("../images/WedColorBox.png"),
    Thu: require("../images/ThuColorBox.png"),
    Fri: require("../images/FriColorBox.png"),
    Sat: require("../images/SatColorBox.png"),
  };

  return (
    <View style={[styles.eventContainer, { top }]}>
      <Image
        style={styles.eventBackground}
        resizeMode="cover"
        source={dayBackgrounds[day]}
      />
      {title && time ? (
        <>
          <Text style={styles.eventText}>
            <Text style={styles.eventTitle}>
              {title}
              {"\n"}
            </Text>
            <Text style={styles.eventTime}>{time}</Text>
          </Text>
          <Pressable style={styles.actionButton} onPress={onDelete}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../images/delete.png")}
            />
          </Pressable>
        </>
      ) : (
        <Pressable style={styles.actionButton} onPress={onAdd}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../images/add.png")}
          />
        </Pressable>
      )}
    </View>
  );
};

const DinnerCard: React.FC = () => (
  <View style={styles.dinnerCard}>
    <Text style={styles.tonightsDinner}>Tonight's Dinner!</Text>
    <Image
      style={styles.dinnerImage}
      resizeMode="cover"
      source={require("../images/pastapic.png")}
    />
    <View style={styles.recipeButton}>
      <ThemedButton title="Recipe"></ThemedButton>
    </View>
    <Text style={styles.dinnerDescription}>
      <Text style={styles.dinnerTitle}>Creamy Pesto Chicken Pasta{"\n"}</Text>
      <Text style={styles.cookTime}>Cook time: 25 min</Text>
    </Text>
  </View>
);

const DeleteRecipe: React.FC<{
  onClose: () => void;
  onConfirm: () => void;
}> = ({ onClose, onConfirm }) => {
  return (
    <View style={styles.deleteRecipe2}>
      <Text style={styles.areYouSure}>
        Are you sure you want to delete this recipe?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.noButton]} onPress={onClose}>
          <Text style={[styles.buttonText, styles.noButtonText]}>No</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.yesButton]}
          onPress={onConfirm}
        >
          <Text style={[styles.buttonText, styles.yesButtonText]}>Yes</Text>
        </Pressable>
      </View>
    </View>
  );
};

const CalendarPage: React.FC = () => {
  const router = useRouter();
  const { dayRecipes, removeRecipeFromDay } = useRecipeContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | null>(null);

  const handleAdd = (day: DayOfWeek) => {
    router.push({
      pathname: "/addRecipe",
      params: { day: day },
    });
  };

  const handleDelete = (day: DayOfWeek) => {
    setSelectedDay(day);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedDay) {
      removeRecipeFromDay(selectedDay);
    }
    setShowDeleteModal(false);
    setSelectedDay(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.pageTitle}>Calendar</Text>
            <ThemedButton
              title="Group"
              onPress={() => router.push("/GroupPage")}
            ></ThemedButton>
          </View>
          <DinnerCard />

          <View style={styles.calendarContainer}>
            <View style={styles.daysContainer}>
              {DAYS_OF_WEEK.map((day, index) => (
                <CalendarDay
                  key={day}
                  day={day}
                  date={DATES[index]}
                  top={index * 75 + 30}
                />
              ))}
            </View>
            {DAYS_OF_WEEK.map((day, index) => {
              const dayRecipe = dayRecipes.find((dr: DayRecipe) => dr.day === day);
              return (
                <EventCard
                  key={day}
                  day={day}
                  top={index * 75 + 12}
                  title={dayRecipe?.recipe.title}
                  time={dayRecipe?.recipe.readyInMinutes ? `Cook time: ${dayRecipe.recipe.readyInMinutes} min` : undefined}
                  onAdd={() => handleAdd(day)}
                  onDelete={() => handleDelete(day)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>

      <Modal visible={showDeleteModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <DeleteRecipe
            onClose={() => setShowDeleteModal(false)}
            onConfirm={confirmDelete}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3ede4",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  contentContainer: {
    width: 342,
    alignItems: "center",
  },
  pageTitle: {
    fontFamily: "InterBold",
    fontSize: 24,
    color: "#222222",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  groupButtonText: {
    color: Color.colorWhite,
  },
  dinnerCard: {
    width: 342,
    height: 126,
    backgroundColor: "#e2dacc",
    borderRadius: Border.br_base,
    padding: 12,
    marginTop: 20,
  },
  tonightsDinner: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorGray,
  },
  dinnerImage: {
    width: 115,
    height: 85,
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: 17,
    top: 31,
  },
  recipeButton: {
    position: "absolute",
    left: 143,
    top: 79,
    width: 83,
    height: 30,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslategray_100,
    justifyContent: "center",
    alignItems: "center",
  },
  dinnerDescription: {
    position: "absolute",
    left: 143,
    top: 37,
    width: 196,
  },
  dinnerTitle: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
  cookTime: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_xs,
    color: Color.colorGray,
  },
  calendarContainer: {
    width: 342,
    height: 559,
    backgroundColor: "#3b4937",
    borderRadius: Border.br_base,
    marginTop: 20,
  },
  daysContainer: {
    position: "absolute",
    top: 0,
    left: 14,
    height: 501,
    width: 28,
  },
  dayContainer: {
    position: "absolute",
    left: 0,
    width: 28,
    alignItems: "center",
  },
  dayText: {
    color: Color.colorGainsboro,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  dateText: {
    color: Color.colorGainsboro,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  eventContainer: {
    position: "absolute",
    left: 48,
    width: 280,
    height: 66,
    overflow: "hidden",
  },
  eventBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: Border.br_3xs,
  },
  eventText: {
    position: "absolute",
    left: 25,
    top: 10,
    width: 196,
    color: Color.colorGray,
  },
  eventTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  eventTime: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_xs,
  },
  actionButton: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 18,
    height: 18,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteRecipe2: {
    borderRadius: 24,
    backgroundColor: "#e2dacc",
    width: 300,
    height: 169,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  areYouSure: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  noButton: {
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
  },
  yesButton: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  noButtonText: {
    color: Color.colorDarkslategray_100,
  },
  yesButtonText: {
    color: Color.colorWhite,
  },
});

export default CalendarPage;

