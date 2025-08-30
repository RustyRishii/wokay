import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Icons } from "../Constants/Icons";
import { Inter_400Regular } from "@expo-google-fonts/inter";

interface Props {
  title: String;
  project: String;
  status: String;
}

const ProjectTasks = ({ title, project, status }: Props) => {
  const imageUris = [
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  const imageSize = 27;
  const overlap = 16;
  const totalWidth = imageSize + (imageUris.length - 1) * overlap;

  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Icons.Dragger height={20} width={20} />

        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View
                style={{
                  borderRadius: 50,
                  height: 17,
                  width: 17,
                  borderWidth: 1.2,
                  borderColor: "#BCBCBC",
                  alignItems: "center",
                  marginRight: 8,
                }}
              />

              <View>
                <Text
                  style={{
                    fontFamily: "PlusJakartaSans_600SemiBold",
                    fontSize: 14,
                    color: "#0E0E0E",
                    letterSpacing: 0.02,
                  }}
                >
                  {/* Web screens for video */}
                  {title}
                </Text>
              </View>
            </View>
            <View style={{ height: 8 }} />
            <View style={{ flexDirection: "row", marginLeft: 24 }}>
              <View style={{ width: 6 }} />

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                    flexDirection: "row",
                    padding: 6,
                    borderRadius: 100,
                    alignItems: "center",
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#4944E9",
                      fontSize: 16,
                      marginRight: 6,
                      // lineHeight: 20,
                    }}
                  >
                    ●
                  </Text>
                  <Text
                    style={{
                      color: "#4944E9",
                      fontSize: 12,
                      fontFamily: "PlusJakartaSans_600SemiBold",
                    }}
                  >
                    {project}
                  </Text>
                </View>
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

            <View style={{ height: 7 }} />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 100,
          borderColor: "#E6E6E685",
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* <View
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            height: 15,
            width: 15,
            borderRadius: 10,
            marginRight: 5,
            alignItems: "center",
            borderColor: "#0B4886",
          }}
        /> */}
        <Icons.PendingIcon height={16.47} width={16.47} />
        <Text style={{ color: "#262626", fontFamily: "Inter_400Regular" }}>
          {status}
        </Text>
      </View>
    </View>
  );
};

export default ProjectTasks;

const styles = StyleSheet.create({});
