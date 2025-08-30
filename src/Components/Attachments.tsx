import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Icons } from "../Constants/Icons";

interface AttachmentProps {
  Icon: ReactNode;
  AttachmentName: String;
  fileSize: string;
}

const AttachmentComponent = ({
  Icon,
  AttachmentName,
  fileSize,
}: AttachmentProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "#ECECEC96",
        borderWidth: 1.46,
        alignItems: "center",
        borderRadius: 15,
        padding: 12,
        gap: 12,
      }}
    >
      {/* <Icons.AeIllustrator /> */}
      {Icon}
      <View style={{ gap: 2 }}>
        <Text
          style={{
            fontFamily: "PlusJakartaSans_500Medium",
            fontSize: 15,
            letterSpacing: 0.04,
            color: "#000000",
          }}
        >
          {AttachmentName}
        </Text>
        <Text
          style={{
            color: "#777777",
            fontFamily: "PlusJakartaSans_500Medium",
            fontSize: 10,
            letterSpacing: 0.04,
          }}
        >
          {fileSize}MB
        </Text>
      </View>
    </View>
  );
};

export default AttachmentComponent;

const styles = StyleSheet.create({});
