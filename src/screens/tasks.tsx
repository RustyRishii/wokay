import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Modal from "react-native-modal";
import { TextInput } from "react-native";
import {
  Image,
  StatusBar,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotesIcon from "../../assets/icons/notes.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ListItem from "../Components/listItem";
import { Icons } from "../Constants/Icons";
import Projects from "./Projects";

const iconSize = 13;

const Tasks = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [activeTab, setActiveTab] = useState("tasks");

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === "projects") {
      return <Projects />;
    }

    return (
      <>
        <View style={{ paddingHorizontal: 16 }}>
          <View
            style={{
              borderColor: "#FFFFFF40",
              // borderColor: "green",
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

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
            >
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
        </View>
      </>
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
                        marginRight: 60,
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
                        marginRight: 60,
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
                      3
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
                        marginRight: 60,
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
                      4
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
        <TouchableOpacity
          style={styles.fab}
          onPress={toggleModal} // 👈 open modal
        >
          <Icons.PlusIcon height={18} width={18} fill="white" stroke="white" />
        </TouchableOpacity>

        {/* Task Creation Modal */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          style={{ justifyContent: "flex-end", margin: 0 }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              padding: 16,
            }}
          >
            {/* Top Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#0077F0",
                  borderRadius: 16,
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                }}
              >
                <Text style={{ color: "#0077F0", fontWeight: "600" }}>
                  Personal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={{ color: "#888", fontWeight: "600" }}>Cancel</Text>
              </TouchableOpacity>
            </View>

            {/* Title Input */}
            <TextInput
              autoFocus={true}
              placeholder="Type here to add a task"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
              }}
            />
            <TextInput
              placeholder="Description ..."
              style={{
                fontSize: 14,
                color: "#666",
                marginBottom: 12,
              }}
            />

            {/* Options Row */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 12 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Icons.Calendar
                  width={14}
                  height={14}
                  style={{ marginRight: 6 }}
                />
                <Text>Today</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Icons.User width={14} height={14} style={{ marginRight: 6 }} />
                <Text>Assignee</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#4368F9",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text style={{ color: "white" }}>Todo</Text>
              </TouchableOpacity>
            </View>

            {/* Priority Row */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text>High</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text>Med</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: "#0077F0",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text style={{ color: "#0077F0" }}>Low</Text>
              </TouchableOpacity>
            </View>

            {/* Add Button */}
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#0077F0",
                borderRadius: 10,
                paddingHorizontal: 18,
                paddingVertical: 10,
              }}
              onPress={() => {
                console.log("Task added!");
                toggleModal();
              }}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>Add →</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  sheetContent: {
    flex: 1,
    padding: 20,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
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
  fab: {
    position: "absolute",
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#0077F0",
    borderRadius: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabIcon: {
    fontSize: 24,
    color: "white",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addBtn: {
    marginTop: 20,
    backgroundColor: "#0077F0",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});
