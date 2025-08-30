import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Icons } from "../Constants/Icons";

interface SubTaskRow {
  title: String;
  status: ReactNode;
}

const SubTaskRow = ({ title, status }: SubTaskRow) => {
  return (
    <View
      style={{
        paddingHorizontal: 21,
        paddingVertical: 12,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 12,
            color: "#5E5E5E",
          }}
        >
          {title}
        </Text>
        {status}
        {/* <View
          style={{
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            borderWidth: 1,
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderColor: "#E6224536",
          }}
        >
          <Icons.HighPriority />
          <Text style={{ color: "#E62245" }}>High</Text>
        </View> */}
      </View>

      <View
        style={{ borderWidth: 0.3, borderColor: "#000000", marginTop: 8 }}
      />
    </View>
  );
};

export default SubTaskRow;

const styles = StyleSheet.create({});
