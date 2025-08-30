import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DraggerIcon from "../../assets/icons/dragger.svg";
import MedIcon from "../../assets/icons/priorityIcons/med.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the navigation type
type RootStackParamList = {
  Tasks: undefined;
  SubTask: undefined;
  Projects: undefined;
  SubProjects: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ListItem = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    try {
      navigation.navigate("SubTask");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{ backgroundColor: "transparent" }}
    >
      <View
        style={{
          paddingVertical: 16,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <DraggerIcon height={20} width={20} />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 50,
                    height: 17,
                    width: 17,
                    borderWidth: 1.2,
                    borderColor: "#BCBCBC",
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
                    Web screens for video
                  </Text>
                </View>
              </View>
              <View style={{ height: 8 }} />
              <View style={{ flexDirection: "row", marginLeft: 24 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: "#2956D32E",
                    paddingVertical: 5,
                    paddingHorizontal: 6,
                  }}
                >
                  <MedIcon height={12} width={12} />
                  <Text
                    style={{
                      color: "#0C7C00",
                    }}
                  >
                    Med
                  </Text>
                </View>
                <View style={{ width: 6 }} />
                {/* <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 100,
                    borderColor: "#2956D32E",
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                  }}
                >
                  <Text
                    style={{
                      color: "#4944E9",
                      paddingRight: 7,
                      fontSize: 16,
                    }}
                  >
                    •
                  </Text>
                  <Text
                    style={{
                      color: "#292929",
                      fontFamily: "PlusJakartaSans_600SemiBold",
                    }}
                  >
                    Launch
                  </Text>
                </View> */}
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
                      Launch
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ height: 7 }} />
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 8,
            borderRadius: 6,
            borderColor: "#0077F033",
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
            paddingHorizontal: 4,
          }}
        >
          <View
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
          />
          <Text style={{ color: "#0B4886" }}>Todo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
