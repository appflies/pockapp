import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { icons } from "@/constants";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 72,
                backgroundColor: "white",
                borderTopWidth: 0,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 20,
                zIndex: 10,
            },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <icons.home
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <icons.orders
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="feedback"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <icons.coupon
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="coupon"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <icons.feedback
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />

            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <icons.dashboard
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
        </Tabs>
    )
}