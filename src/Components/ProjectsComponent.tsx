import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Icons } from "../Constants/Icons";

interface Props {
  ProjectTitle: String;
  Members: number;
}

const ProjectsComponent = ({ ProjectTitle, Members }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 12,
        borderWidth: 1,
        borderColor: "#F3F3F3",
        backgroundColor: "#fff",
        borderRadius: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
        <Icons.Folder height={39} width={39} />
        <View style={{ gap: 2 }}>
          <Text
            style={{
              fontFamily: "PlusJakartaSans_700Bold",
              fontSize: 15,
              color: "#0E0E0E",
            }}
          >
            {/* Develop Marketing Strategy */}
            {ProjectTitle}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSans_400Regular",
              fontSize: 13,
              color: "#6A6A6A",
            }}
          >
            2 overdue Today
          </Text>
          <View style={{ height: 12 }} />

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                height: 18,
              }}
            >
              {[
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              ].map((imageUri, index) => (
                <Image
                  key={index}
                  style={{
                    borderRadius: 9,
                    height: 18,
                    width: 18,
                    position: "absolute",
                    left: index * 7,
                    zIndex: 3 - index,
                    borderWidth: 1,
                    borderColor: "#FFFFFF",
                  }}
                  source={{ uri: imageUri }}
                />
              ))}
            </View>
            <View style={{ width: 20 }} />
            <Text
              style={{
                color: "#6A6A6A",
                fontFamily: "PlusJakartaSans_400Regular",
                fontSize: 13,
              }}
            >
              {Members} Members
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 500,
          borderWidth: 3,
          borderColor: "#4368F9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: "blue",
            fontFamily: "Inter_600SemiBold",
          }}
        >
          <Text style={{ fontSize: 15, fontFamily: "Inter_600SemiBold" }}>
            9
          </Text>
          /12
        </Text>
      </View>
    </View>
  );
};

export default ProjectsComponent;

const styles = StyleSheet.create({});
