import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface SubTasksInterface {
  TaskTitle: String;
  PriorityIcon: ReactNode;
}

const SubTasks = ({ PriorityIcon, TaskTitle }: SubTasksInterface) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
          paddingVertical: 13,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#BCBCBC",
          }}
        />

        {PriorityIcon}
        <Text
          style={{
            fontFamily: "PlusJakartaSans_500Medium",
            fontSize: 13,
            letterSpacing: 0.04,
            lineHeight: 20,
            color: "#424242",
          }}
        >
          {TaskTitle}
        </Text>
      </View>
    </View>
  );
};

export default SubTasks;

const styles = StyleSheet.create({});
