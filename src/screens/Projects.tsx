import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import PinnedProjects from "../Components/PinnedProjects";
import ProjectsComponent from "../Components/ProjectsComponent";
import { useNavigation } from "@react-navigation/native";

const Projects = () => {
  const navigation = useNavigation();
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
      <Pressable onPress={() => navigation.navigate("SubProjects")}>
        <View style={{ padding: 18 }}>
          <Text
            style={{
              color: "#4D4D4D",
              fontFamily: "PlusJakartaSans_500Medium",
              fontSize: 14,
              lineHeight: 14,
            }}
          >
            Pinned ✨
          </Text>
          <View style={{ height: 14 }} />
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <PinnedProjects
                backgroundColor="#FFFDFD"
                ProjectTitle="FY24 Picker"
                Tasks={26}
              />
              <PinnedProjects
                backgroundColor="#F5FBFF"
                ProjectTitle="FY24 Picker"
                Tasks={26}
              />
            </View>
            <View style={{ flex: 1 }}>
              <PinnedProjects
                backgroundColor="#FCFFF5"
                ProjectTitle="FY24 Picker"
                Tasks={26}
              />
              <PinnedProjects
                backgroundColor="#FAF7FF"
                ProjectTitle="FY24 Picker"
                Tasks={26}
              />
            </View>
          </View>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ color: "#4D4D4D" }}>All Projects</Text>
            <View style={{ marginVertical: 8 }} />
            <View style={{ gap: 10 }}>
              <ProjectsComponent
                ProjectTitle={"Develop marketing strategy"}
                Members={4}
              />
              <ProjectsComponent
                ProjectTitle={"Develop marketing strategy"}
                Members={4}
              />
              <ProjectsComponent
                ProjectTitle={"Develop marketing strategy"}
                Members={4}
              />
              <ProjectsComponent
                ProjectTitle={"Develop marketing strategy"}
                Members={4}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
});
