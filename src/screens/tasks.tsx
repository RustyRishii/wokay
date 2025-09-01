import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Modal from "react-native-modal";
import { TextInput } from "react-native";
import {
  Image,
  FlatList,
  StatusBar,
  Pressable,
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
import { PriorityLevel } from "../Constants/types";

const iconSize = 13;

const Tasks = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("tasks");

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(PriorityLevel.Low);
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      Priority: PriorityLevel.High,
      Project: "Launch",
      Status: "Pending",
      title: "Web screens for marketing",
    },
  ]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);

    if (isModalVisible) {
      resetForm();
    }
  };

  const resetForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setSelectedPriority(PriorityLevel.Low);
    setSelectedStatus("Pending");
  };

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const addTask = () => {
    if (taskTitle.trim()) {
      const newTask = {
        id: Date.now(),
        Priority: selectedPriority,
        Project: "Personal",
        Status: selectedStatus,
        title: taskTitle.trim(),
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      toggleModal();
    }
  };

  const renderContent = () => {
    if (activeTab === "projects") {
      return <Projects />;
    }

    const ListHeader = () => (
      <View>
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
                {tasks.length}
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
      </View>
    );

    return (
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              Priority={item.Priority as PriorityLevel}
              Project={item.Project}
              Status={item.Status}
              title={item.title}
            />
          )}
          ListHeaderComponent={ListHeader} // Render the header content here
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={"#0077F0"} />

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
                  paddingVertical: 8,
                  paddingHorizontal: 18,
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

        <TouchableOpacity style={styles.fab} onPress={toggleModal}>
          <Icons.PlusIcon height={18} width={18} fill="white" stroke="white" />
        </TouchableOpacity>

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

            <TextInput
              autoFocus={true}
              placeholder="Type here to add a task"
              value={taskTitle}
              onChangeText={setTaskTitle}
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
              }}
            />
            <TextInput
              placeholder="Description ..."
              value={taskDescription}
              onChangeText={setTaskDescription}
              style={{
                fontSize: 14,
                color: "#666",
                marginBottom: 12,
              }}
            />

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

            <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedPriority === PriorityLevel.High
                      ? "#0077F0"
                      : "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
                onPress={() => setSelectedPriority(PriorityLevel.High)}
              >
                <Text
                  style={{
                    color:
                      selectedPriority === PriorityLevel.High
                        ? "white"
                        : "#000",
                  }}
                >
                  High
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedPriority === PriorityLevel.Medium
                      ? "#0077F0"
                      : "#F3F3F3",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
                onPress={() => setSelectedPriority(PriorityLevel.Medium)}
              >
                <Text
                  style={{
                    color:
                      selectedPriority === PriorityLevel.Medium
                        ? "white"
                        : "#000",
                  }}
                >
                  Med
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedPriority === PriorityLevel.Low
                      ? "#0077F0"
                      : "#F3F3F3",
                  borderColor:
                    selectedPriority === PriorityLevel.Low
                      ? "#0077F0"
                      : "transparent",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
                onPress={() => setSelectedPriority(PriorityLevel.Low)}
              >
                <Text
                  style={{
                    color:
                      selectedPriority === PriorityLevel.Low ? "white" : "#000",
                  }}
                >
                  Low
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#0077F0",
                borderRadius: 10,
                paddingHorizontal: 18,
                paddingVertical: 10,
              }}
              onPress={addTask}
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
});
