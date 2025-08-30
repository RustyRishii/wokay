import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { Icons } from "../../Constants/Icons";

const Comments = () => {
  const [message, setMessage] = useState("");

  const MessageBubble = ({
    isOwn,
    name,
    message,
    time,
    avatar,
    reactions = [],
  }: {
    isOwn: boolean;
    name: string;
    message: string;
    time?: string;
    avatar: ReactNode;
    reactions?: Array<{ emoji: string; count: number }>;
  }) => (
    <View
      style={[styles.messageContainer, isOwn && styles.ownMessageContainer]}
    >
      {!isOwn && (
        <View style={styles.avatarContainer}>
          {typeof avatar === "string" ? (
            <Text style={styles.avatarText}>{avatar}</Text>
          ) : (
            avatar
          )}
        </View>
      )}
      <View style={styles.messageContent}>
        {!isOwn && <Text style={styles.userName}>{name}</Text>}
        <View style={[styles.messageBubble, isOwn && styles.ownMessageBubble]}>
          <Text style={[styles.messageText, isOwn && styles.ownMessageText]}>
            {message}
          </Text>
        </View>
        {time && <Text style={styles.messageTime}>{time}</Text>}

        {reactions.length > 0 && (
          <View style={styles.reactionsContainer}>
            {reactions.map((reaction, index) => (
              <View key={index} style={styles.reactionItem}>
                <Text style={styles.reactionEmoji}>{reaction.emoji}</Text>
                <Text style={styles.reactionCount}>{reaction.count}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );

  const SystemNotification = ({
    icon,
    text,
  }: {
    icon: ReactNode;
    text: string;
  }) => (
    <View style={styles.systemNotification}>
      <View style={styles.systemIconContainer}>
        <Text style={styles.systemIcon}>{icon}</Text>
      </View>
      <Text style={styles.systemText}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        <MessageBubble
          isOwn={false}
          name="Maya Khan"
          message="It's going great, will be updating you the updated design by EOD"
          avatar={
            <Image
              source={{
                uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              style={styles.avatarImage}
            />
          }
          reactions={[
            { emoji: "👍", count: 2 },
            { emoji: "💯", count: 2 },
            { emoji: "💪", count: 2 },
          ]}
        />

        <MessageBubble
          isOwn={false}
          name="Oliver Santos"
          message="Yes be ready we are coming with something exciting"
          avatar={
            <Image
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              style={styles.avatarImage}
            />
          }
        />

        <SystemNotification
          icon={<Icons.HighPriority />}
          text="David set priority to High"
        />

        <MessageBubble
          isOwn={true}
          name=""
          message="Hey guys, how's the work going?"
          time="6:21 PM"
          avatar=""
        />

        <MessageBubble
          isOwn={false}
          name="Oliver Santos"
          message="and also @jenny can you create a new task for los icon update and assign aaron"
          avatar={
            <Image
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              style={styles.avatarImage}
            />
          }
        />

        <SystemNotification
          icon={<Icons.Description height={13} width={13} />}
          text="Ariana changed the description"
        />

        <SystemNotification
          icon={<Icons.Pfp />}
          text="David assigned task to Kuldeep"
        />

        <SystemNotification icon="🔵" text="Kuldeep added a label - App" />
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.emojiButton}>
          <Text>😊</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type Message"
          placeholderTextColor="#282828"
          value={message}
          onChangeText={setMessage}
          multiline
        />
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-start",
  },
  ownMessageContainer: {
    justifyContent: "flex-end",
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#0077F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  avatarText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageBubble: {
    backgroundColor: "#FBFBFB",
    borderColor: "#EDEDEDDB",
    borderWidth: 0.85,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: "80%",
  },
  ownMessageBubble: {
    padding: 16,
    backgroundColor: "#007DFC",
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  userName: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    fontWeight: "600",
    color: "#1634A9",
    marginBottom: 4,
    marginLeft: 4,
  },
  messageText: {
    fontSize: 14,
    color: "#030303",
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
  ownMessageText: {
    color: "white",
  },
  reactionsContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 4,
    gap: 4,
  },
  reactionItem: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#f0f0f0",
    backgroundColor: "#FFFFFF",
    borderColor: "#F3F3F3",
    borderWidth: 1.05,
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  reactionEmoji: {
    fontSize: 12,
    marginRight: 2,
  },
  reactionCount: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#757575",
    fontWeight: "500",
  },
  messageTime: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
    alignSelf: "flex-end",
  },
  systemNotification: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#FBFBFB",
    width: "100%",
    justifyContent: "center",
    // borderRadius: 12,
    alignSelf: "center",
  },
  systemIconContainer: {
    width: 20,
    height: 20,
    // borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  systemIcon: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },
  systemText: {
    fontSize: 12,
    paddingVertical: 8,
    color: "##3C3C3C",
    fontFamily: "Inter_400Regular",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    // borderTopWidth: 1,
    // borderTopColor: "#e0e0e0",
  },
  emojiButton: {
    padding: 8,
    marginRight: 8,
  },
  // emojiIcon: {
  //   fontSize: 20,
  // },
  textInput: {
    fontFamily: "Inter_400Regular",
    flex: 1,
    borderWidth: 1,
    borderColor: "#B5B5B52B",
    backgroundColor: "#F7F7F78F",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    maxHeight: 100,
    minHeight: 40,
  },
});
