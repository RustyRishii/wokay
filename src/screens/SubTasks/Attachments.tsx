import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AttachmentIcon from "../../../assets/icons/Attachment.svg";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { Icons } from "../../Constants/Icons";
import AttachmentComponent from "../../Components/Attachments";

const Attachments = () => {
  return (
    <View style={{ marginTop: 4, flex: 1 }}>
      <View
        style={{ backgroundColor: "white", paddingHorizontal: 16, flex: 1 }}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
          }}
        >
          <AttachmentIcon height={13} width={13} />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              alignItems: "center",
              fontSize: 14,
              color: "#838383",
            }}
          >
            Attachments
          </Text>
        </View>

        <View style={{ height: 15 }} />

        <View style={{ gap: 15 }}>
          <AttachmentComponent
            AttachmentName={"Illustrator"}
            fileSize={"11:35"}
            Icon={<Icons.AeIllustrator />}
          />

          <AttachmentComponent
            AttachmentName={"Figma"}
            fileSize={"11:35"}
            Icon={<Icons.Figma />}
          />

          <AttachmentComponent
            AttachmentName={"Illustrator"}
            fileSize={"11:35"}
            Icon={<Icons.AeIllustrator />}
          />

          <AttachmentComponent
            AttachmentName={"Figma"}
            fileSize={"11:35"}
            Icon={<Icons.Figma />}
          />
        </View>
      </View>
    </View>
  );
};

export default Attachments;

const styles = StyleSheet.create({});
