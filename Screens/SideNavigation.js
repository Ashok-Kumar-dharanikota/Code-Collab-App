import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import DailyTaskScreen from "./DailyTaskScreen";
import CollaborationScreen from "./CollaborationScreen";
import HackathonsScreen from "./HackathonsScreen";
import CommunityScreen from "./CommunityScreen";


const Drawer = createDrawerNavigator();

export default function SideNavigation() {
  return (
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={require("../assets/profile.jpg")}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Isabella Joanna</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Product Manager</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        // screenOptions={{
        //   drawerStyle: {
        //     backgroundColor: "#fff",
        //     width: 250
        //   },
        //   headerStyle: {
        //     backgroundColor: "#f4511e",
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold"
        //   },
        //   drawerLabelStyle: {
        //     color: "#111"
        //   }
        // }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="DailyTask"
          options={{
            drawerLabel: "DailyTask",
            title: "Timer",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={DailyTaskScreen}
        />
        <Drawer.Screen
          name="Collab"
          options={{
            drawerLabel: "Collab",
            title: "Categories",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={CollaborationScreen}
        />
        <Drawer.Screen
          name="Hackathon"
          options={{
            drawerLabel: "Hackathon",
            title: "Customize",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={HackathonsScreen}
        />
        <Drawer.Screen
          name="Community"
          options={{
            drawerLabel: "Community",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={CommunityScreen}
        />

      </Drawer.Navigator>
  );
}