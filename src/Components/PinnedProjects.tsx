import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icons } from "../Constants/Icons";

interface ProjectsComponentProps {
  ProjectTitle: String;
  Tasks: number;
  backgroundColor: string;
}

const PinnedProjects = ({
  ProjectTitle,
  Tasks,
  backgroundColor,
}: ProjectsComponentProps) => {
  return (
    <View
      style={{
        borderRadius: 12,
        // flex: 1,
        flexDirection: "row",
        padding: 10,
        gap: 10,
        borderWidth: 1,
        borderColor: "#F3F3F3",
        backgroundColor: backgroundColor,
        marginBottom: 10,
        //  "#FFFDFD",
      }}
    >
      <Icons.Folder height={37} width={37} />

      <View>
        <Text
          style={{
            color: "#242424",
            fontFamily: "PlusJakartaSans_600SemiBold",
            fontSize: 14,
            lineHeight: 20,
          }}
        >
          {/* FY24 Picker */}
          {ProjectTitle}
        </Text>
        <Text
          style={{
            color: "#959595",
            fontFamily: "PlusJakartaSans_500Medium",
            fontSize: 12,
            lineHeight: 20,
          }}
        >
          {Tasks} Tasks
        </Text>
      </View>
    </View>
  );
};

export default PinnedProjects;

const styles = StyleSheet.create({});
