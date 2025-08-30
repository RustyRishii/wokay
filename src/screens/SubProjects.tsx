import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectTasks from "../Components/ProjectTasks";
import { Icons } from "../Constants/Icons";
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SubProjects = () => {
  const navigation = useNavigation();
  const imageUris = [
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  const tasks = [
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
    { status: "Pending", project: "Launch", title: "Web screens for video" },
  ];

  const imageSize = 27;
  const overlap = 16;
  const totalWidth = imageSize + (imageUris.length - 1) * overlap;

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={"#66B2FF"} />
        <LinearGradient
          colors={["#52A3FF", "#1A7FFF", "#0066D9"]}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0, y: 1 }}
          style={styles.linearGradient}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
              <Icons.Back stroke={"white"} />
            </Pressable>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Icons.Arrows />
              <Icons.FilterWhite />
            </View>
          </View>

          <View style={{ height: 13 }} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1, // Add flex to prevent overflow
              }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#00000024",
                  borderRadius: 12,
                }}
              >
                <Icons.FolderWhite height={16} width={16} />
              </View>
              <View style={{ width: 12 }} />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 21,
                    lineHeight: 23,
                    letterSpacing: -0.27,
                    fontFamily: "PlusJakartaSans_800ExtraBold",
                  }}
                  numberOfLines={1}
                >
                  FY24 Picker
                </Text>
                <Text
                  style={{
                    fontFamily: "PlusJakartaSans_400Regular",
                    color: "#EEEEEE",
                  }}
                  numberOfLines={1}
                >
                  13 tasks opened
                </Text>
              </View>
            </View>

            <View
              style={{
                marginLeft: 16,
                padding: 3,
                borderRadius: 38,
                borderWidth: 1,
                borderColor: "#FFFFFF29",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  position: "relative",
                  height: imageSize,
                  width: totalWidth,
                }}
              >
                {imageUris.map((imageUri, index) => (
                  <Image
                    key={index}
                    style={{
                      borderRadius: 100,
                      height: imageSize,
                      width: imageSize,
                      position: "absolute",
                      left: index * overlap,
                      zIndex: 10 - index,
                      borderWidth: 1,
                      borderColor: "#FFFFFF",
                    }}
                    source={{ uri: imageUri }}
                  />
                ))}
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              backgroundColor: "#F9F9F98F",
              padding: 16,
              borderTopRightRadius: 22,
              borderTopLeftRadius: 22,
              rowGap: 6,
              gap: 6,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Icons.calendarGrey />
            <Text
              style={{
                color: "#535353",
                fontFamily: "PlusJakartaSans_500Medium",
                fontSize: 12,
              }}
            >
              Today
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white" }}>
          {/* <View style={{ marginHorizontal: 12, gap: 10 }}>
          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />

          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />

          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />
          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />
          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />
          <ProjectTasks
            status={"Pending"}
            project={"Launch"}
            title={"Web screens for video"}
          />
        </View> */}

          <View style={{ marginHorizontal: 12 }}>
            {tasks.map((task, index) => (
              <React.Fragment key={index}>
                <ProjectTasks
                  status={task.status}
                  project={task.project}
                  title={task.title}
                />
                {index < tasks.length - 1 && (
                  <View
                    style={{
                      height: 1,
                      opacity: 0.3,
                      backgroundColor: "#E5E5E5",
                      marginVertical: 10,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubProjects;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 23,
    position: "relative",
  },
});
