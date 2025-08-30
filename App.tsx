import {
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts as useInter,
} from "@expo-google-fonts/inter";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts as usePJS,
} from "@expo-google-fonts/plus-jakarta-sans";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatIcon from "./assets/icons/Chat.svg";
import BoltIcon from "./assets/icons/bolt.svg";
import TasksIcon from "./assets/icons/tasks.svg";
import Projects from "./src/screens/Projects";
import SubProjects from "./src/screens/SubProjects";
import SubTask from "./src/screens/SubTask";
import Chat from "./src/screens/chat";
import New from "./src/screens/new";
import Tasks from "./src/screens/tasks";

const NativeTaskStack = createNativeStackNavigator();

function TaskStack() {
  return (
    <NativeTaskStack.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
      }}
    >
      <NativeTaskStack.Screen component={Tasks} name="Tasks" />
      <NativeTaskStack.Screen component={SubTask} name="SubTask" />
      <NativeTaskStack.Screen component={Projects} name="Projects" />
      <NativeTaskStack.Screen component={SubProjects} name="SubProjects" />
    </NativeTaskStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          // marginTop: 3,
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarActiveTintColor: "#0077F0",
        tabBarInactiveTintColor: "#616161",
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    top: -6,
                    height: 2,
                    width: 50,
                    borderRadius: 2,
                    backgroundColor: "#0077F0",
                    marginBottom: 4,
                  }}
                />
              )}
              <ChatIcon
                width={20}
                height={20}
                fill={focused ? "blue" : "black"}
              />
            </View>
          ),
          tabBarLabel: "Chat",
        }}
      />

      <Tab.Screen
        name="new"
        component={New}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <BoltIcon width={120} height={120} />,
        }}
      />

      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    top: -6,
                    height: 2,
                    width: 50,
                    borderRadius: 2,
                    backgroundColor: "#0077F0",
                    marginBottom: 4,
                  }}
                />
              )}
              <TasksIcon
                width={20}
                height={20}
                color={focused ? "blue" : "black"}
              />
            </View>
          ),
          tabBarLabel: "Tasks",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [interLoaded] = useInter({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  const [pjsLoaded] = usePJS({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_800ExtraBold,
  });

  if (!interLoaded || !pjsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
  },
  bodyText: {
    fontFamily: "Inter_400Regular",
  },
  pjsHeading: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 18,
  },
  pjsBody: {
    fontFamily: "PlusJakartaSans_400Regular",
  },
  labelFocusedContainer: {
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "Blue",
  },
  labelFocusedStyle: {
    textAlign: "center",
    marginVertical: 8,
    color: "blue",
    backgroundColor: "transparent",
    fontSize: 10,
  },
  labelContainer: {
    alignItems: "center",
    width: "100%",
  },
});
