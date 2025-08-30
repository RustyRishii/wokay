import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SubTaskRow from "../../Components/SubTaskRow";
import SubTasks from "../../Components/SubTasks";
import { Icons } from "../../Constants/Icons";

const OverView = () => {
  return (
    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={{}}>
        <View
          style={{
            paddingHorizontal: 21,
            paddingVertical: 14,
            backgroundColor: "white",
          }}
        >
          <View style={{ gap: 8 }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                letterSpacing: 0.04,
                fontSize: 18,
                lineHeight: 18 * 1.23,
              }}
            >
              Create a shell for screens whose major element is a list to
              contain the
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_300Light",
                color: "#323232",
                lineHeight: 13 * 1.6,
              }}
            >
              This will give a major UX boost to all the list screens as this
              will help to control the visibility of non-list essential items
              and provide extra estate to list in case the user is only
            </Text>
          </View>

          <View style={{ height: 15 }} />

          <View
            style={{
              borderRadius: 16,
              borderWidth: 1.34,
              borderColor: "#F2F2F2",
              borderBlockColor: "green",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 12,
              gap: 8,
              alignSelf: "flex-start",
            }}
          >
            <Icons.ReactionEmoji height={20} width={20} />
            <View
              style={{
                height: 16,
                width: 0.5,
                borderColor: "#F2F2F2",
                borderWidth: 1,
              }}
            />

            <Icons.Attachments height={16} width={16} />
          </View>
        </View>

        <View style={{ height: 4 }} />

        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 21,
          }}
        >
          <View style={styles.subTaskHeader}>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Icons.SubTask />
              <Text
                style={{ fontFamily: "Inter_600SemiBold", letterSpacing: 0.04 }}
              >
                Sub-tasks
              </Text>
            </View>

            <View style={styles.AddButton}>
              <Icons.PlusIcon />
              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  color: "#007AFF",
                  fontSize: 12,
                  letterSpacing: 0.04,
                }}
              >
                Add
              </Text>
            </View>
          </View>

          <SubTasks
            PriorityIcon={<Icons.HighPriority width={10} height={10} />}
            TaskTitle={"Web screens for video"}
          />
          <View
            style={{
              width: "100%",
              borderColor: "#B2B2B2",
              borderWidth: 0.2,
            }}
          />
          <SubTasks
            PriorityIcon={<Icons.LowPriority width={10} height={10} />}
            TaskTitle={"Typography Finalising"}
          />
          <View
            style={{
              width: "100%",
              borderColor: "#B2B2B2",
              borderWidth: 0.2,
            }}
          />
          <SubTasks
            PriorityIcon={<Icons.MediumPriority width={10} height={10} />}
            TaskTitle={"Web screens for video"}
          />
        </View>

        <View style={{ height: 6 }} />

        <SubTaskRow
          status={
            <View
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
            </View>
          }
          title={"Priority"}
        />

        <SubTaskRow
          status={
            <View
              style={{
                // borderRadius: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                // borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 6,
                // borderColor: "#E6224536",
              }}
            >
              <Icons.Calendar />
              {/* <Icons.HighPriority /> */}
              <Text style={{ color: "#7B7B7B" }}>Tomorrow</Text>
            </View>
          }
          title={"Dude Date"}
        />
        <SubTaskRow
          status={
            <View
              style={{
                gap: 3,

                paddingVertical: 4,
                paddingHorizontal: 6,
              }}
            >
              <Text style={{ color: "#565656" }}>✨ Brainstorming ideas</Text>
            </View>
          }
          title={"Project"}
        />

        <SubTaskRow
          status={
            <View
              style={{
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                borderWidth: 0.9,
                paddingVertical: 4,
                paddingHorizontal: 6,
                borderColor: "#C5C16D4D",
              }}
            >
              <View
                style={{
                  paddingLeft: 5,
                  paddingRight: 3,
                  paddingBottom: 5,
                  paddingTop: 3,
                  borderColor: "#696500",
                  borderWidth: 0.8,
                  borderRadius: 100,
                }}
              >
                <Icons.Clock />
              </View>
              <Text style={{ color: "#696500" }}>Pending</Text>
            </View>
          }
          title={"Status"}
        />

        <SubTaskRow
          status={
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                paddingHorizontal: 6,
              }}
            >
              <Icons.Pfp />
              <Text
                style={{ color: "#565656", fontFamily: "Inter_400Regular" }}
              >
                Kuldeep
              </Text>
            </View>
          }
          title={"Assignee's"}
        />

        <SubTaskRow
          status={
            <View
              style={{
                borderRadius: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                paddingVertical: 4,
                paddingHorizontal: 6,
                borderColor: "#E6224536",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                    flexDirection: "row",
                    paddingVertical: 6,
                    paddingHorizontal: 10,
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
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                    flexDirection: "row",
                    // padding: 6,
                    paddingVertical: 6,
                    paddingHorizontal: 10,
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
                      color: "#565656",
                      fontSize: 12,
                      fontFamily: "PlusJakartaSans_600SemiBold",
                    }}
                  >
                    Promo Video
                  </Text>
                </View>
              </View>
              {/* <Text style={{ color: "#E62245" }}>Assignee's</Text> */}
            </View>
          }
          title={"Tags"}
        />
      </View>
    </ScrollView>
  );
};

export default OverView;

const styles = StyleSheet.create({
  subTaskHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  AddButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: "#F8FBFF",
    borderColor: "#007AFF17",
    borderWidth: 1.34,
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
