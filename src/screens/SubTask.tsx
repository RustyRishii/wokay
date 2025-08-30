import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "../Constants/Icons";
import Attachments from "./SubTasks/Attachments";
import Comments from "./SubTasks/comments";
import OverView from "./SubTasks/overview";

const TopTabBar = createMaterialTopTabNavigator();

function SubTaskTabs() {
  return (
    <TopTabBar.Navigator
      screenOptions={({ route }) => ({
        tabBarGap: 30,
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              fontSize: 14,
              fontFamily: focused ? "Inter_600SemiBold" : "Inter_400Regular",
              color,
              alignSelf: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarInactiveTintColor: "#818181",
        tabBarActiveTintColor: "#0077F0",
        tabBarIndicatorStyle: {
          backgroundColor: "#0077F0",
        },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarContentContainerStyle: {
          paddingLeft: 16,
        },
        tabBarItemStyle: {
          width: "auto",
          paddingHorizontal: 0,
        },
      })}
    >
      <TopTabBar.Screen name="Overview" component={OverView} />
      <TopTabBar.Screen name="Comments" component={Comments} />
      <TopTabBar.Screen name="Attachments" component={Attachments} />
    </TopTabBar.Navigator>
  );
}

const SubTask = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#fff", height: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{ padding: 8 }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Icons.Back />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          <Icons.Link />
          <Icons.SearchSubTask />
          <Icons.Star />
          <Icons.Notification />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <SubTaskTabs />
      </View>
    </SafeAreaView>
  );
};

export default SubTask;

const styles = StyleSheet.create({});
