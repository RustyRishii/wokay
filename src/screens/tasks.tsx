import { LinearGradient } from "expo-linear-gradient";

import React, { useState } from "react";
import {
  Image,
  StatusBar,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotesIcon from "../../assets/icons/notes.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ListItem from "../Components/listItem";
import { Icons } from "../Constants/Icons";
import Projects from "./Projects";

const iconSize = 13;

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === "projects") {
      return <Projects />;
    }

    return (
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            borderColor: "#FFFFFF40",
            borderWidth: 1,
            paddingVertical: 12,
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "#042071",
                fontFamily: "PlusJakartaSans_700Bold",
                fontSize: 16,
              }}
            >
              Tasks
            </Text>
            <View
              style={{
                paddingHorizontal: 4,
                paddingVertical: 1.5,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: "#0077F024",
              }}
            >
              <Text style={{ fontFamily: "Inter_500Medium", fontSize: 10 }}>
                5
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <Icons.UpDown height={34} width={34} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                borderWidth: 1,
                backgroundColor: "#FCFCFC",
                borderColor: "#E2E2E24D",
                borderRadius: 34,
                paddingVertical: 9,
                paddingHorizontal: 12,
              }}
            >
              <Icons.Filter width={12} height={8} />
              <Text
                style={{
                  color: "#555555",
                  fontFamily: "Inter_500Medium",
                  fontSize: 11,
                }}
              >
                Filters
              </Text>
            </View>
          </View>
        </View>

        {/* <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}> */}
        <View
          style={{
            backgroundColor: "#8DC6FF0F",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingVertical: 7,
          }}
        >
          <Icons.Calendar />
          <Text
            style={{
              fontFamily: "PlusJakartaSans_600SemiBold",
              fontSize: 12,
              color: "#0077F0",
            }}
          >
            Today
          </Text>
        </View>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        {/* </ScrollView> */}
      </View>
    );
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={"#0077F0"} />
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={["#66B2FF", "#0077F0"]}
            start={{ x: 0, y: 0.7 }}
            end={{ x: 0, y: 0.3 }}
            style={styles.linearGradient}
          >
            {/* <LinearGradient
            colors={["#4A9EFF", "#D4EBFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.linearGradient}
          > */}
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSans_700Bold",
                      letterSpacing: -0.02,
                      color: "#FFFFFF",
                      fontSize: 22,
                    }}
                  >
                    {activeTab === "tasks" ? "Tasks" : "Projects"}
                  </Text>
                  <View style={{ paddingHorizontal: 3 }} />
                  <Text style={{ color: "white" }}> ° </Text>
                  <View style={{ paddingHorizontal: 1 }} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "PlusJakartaSans_700Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    12th Jan
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 11 }}>
                  <SearchIcon height={34} width={34} />
                  <NotesIcon height={34} width={34} />
                  <Image
                    style={{ borderRadius: 100, height: 34, width: 34 }}
                    source={{
                      uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ height: 6 }} />

            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#32323229",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 100,
                borderWidth: 1.07,
                borderColor: "#00000005",
              }}
            >
              <Pressable
                style={{ borderRadius: 100 }}
                hitSlop={10}
                onPress={() => handleTabPress("tasks")}
              >
                <View
                  style={{
                    backgroundColor:
                      activeTab === "tasks" ? "white" : "transparent",
                    borderRadius: 100,
                    paddingVertical: 8,
                    paddingHorizontal: 18,
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSans_700Bold",
                      fontSize: 13,
                      color: activeTab === "tasks" ? "#00144B" : "#FFFFFF",
                    }}
                  >
                    My Tasks
                  </Text>
                </View>
              </Pressable>

              {/* <View style={{ paddingRight: 13 }} /> */}

              {/* Projects Tab */}
              <Pressable
                style={{ borderRadius: 100 }}
                hitSlop={10}
                onPress={() => handleTabPress("projects")}
              >
                <View
                  style={{
                    backgroundColor:
                      activeTab === "projects" ? "white" : "transparent",
                    borderRadius: 100,
                    paddingVertical: 8, // 👈 always same as "My Tasks"
                    paddingHorizontal: 18, // 👈 always same as "My Tasks"
                    // marginRight: 18,
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      color: activeTab === "projects" ? "#00144B" : "#FFFFFF",
                      fontFamily: "PlusJakartaSans_700Bold",
                      fontSize: 13,
                    }}
                  >
                    Projects
                  </Text>
                </View>
              </Pressable>
            </View>

            <View style={{ height: 16 }} />

            {activeTab === "tasks" && (
              <View
                style={{
                  flexDirection: "row",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 15,
                    paddingVertical: 9,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginBottom: 6,
                    }}
                  >
                    <View
                      style={{
                        padding: 8,
                        justifyContent: "center",
                        backgroundColor: "#F25353",
                        borderRadius: 10,
                        marginRight: 65,
                      }}
                    >
                      <Icons.Overdue height={iconSize} width={iconSize} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Inter_400Regular",
                        color: "#AC0846",
                        fontSize: 21,
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSans_600SemiBold",
                      fontSize: 13,
                      color: "#444444",
                    }}
                  >
                    Overdue
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 15,
                    paddingVertical: 9,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <View
                      style={{
                        padding: 8,
                        justifyContent: "center",
                        backgroundColor: "#FFB53D",
                        borderRadius: 10,
                        marginRight: 65,
                      }}
                    >
                      <Icons.Todo height={iconSize} width={iconSize} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Inter_400Regular",
                        color: "#AC0846",
                        fontSize: 21,
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSans_600SemiBold",
                      fontSize: 13,
                      color: "#444444",
                    }}
                  >
                    Todo
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 15,
                    paddingVertical: 9,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <View
                      style={{
                        padding: 8,
                        justifyContent: "center",
                        backgroundColor: "#24AA51",
                        borderRadius: 10,
                        marginRight: 65,
                      }}
                    >
                      <Icons.Completed height={iconSize} width={iconSize} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Inter_400Regular",
                        color: "#AC0846",
                        fontSize: 21,
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSans_600SemiBold",
                      fontSize: 13,
                      color: "#444444",
                    }}
                  >
                    Completed
                  </Text>
                </View>
              </View>
            )}
          </LinearGradient>

          {renderContent()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 23,
    position: "relative",
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  container: {
    flex: 1,
    zIndex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  titleText: {
    fontFamily: "PlusJakartaSans_700Bold",
    letterSpacing: -0.02,
    color: "#FFFFFF",
    fontSize: 22,
  },
  dotSeparator: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 4,
  },
  dateText: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#FFFFFF",
    opacity: 0.9,
  },
  iconSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  iconPlaceholder: {
    height: 34,
    width: 34,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 17,
  },
  profileImage: {
    borderRadius: 17,
    height: 34,
    width: 34,
  },
  tabContainer: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(50, 50, 50, 0.16)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.02)",
    paddingRight: 18,
    marginBottom: 20,
  },
  activeTab: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 13,
  },
  activeTabText: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 13,
    color: "#00144B",
  },
  inactiveTabText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "PlusJakartaSans_600SemiBold",
  },
  cardsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  iconContainer: {
    padding: 7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  overdueIcon: {
    backgroundColor: "#F25353",
  },
  todoIcon: {
    backgroundColor: "#FFB53D",
  },
  completedIcon: {
    backgroundColor: "#24AA51",
  },
  iconPlaceholderSmall: {
    height: 18,
    width: 18,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 9,
  },
  cardNumber: {
    fontFamily: "Inter_400Regular",
    color: "#AC0846",
    fontSize: 24,
    fontWeight: "600",
  },
  cardLabel: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 13,
    color: "#444444",
  },
});
