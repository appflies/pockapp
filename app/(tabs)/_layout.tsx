import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import {
HomeIcon,
PaymentIcon,
CouponIcon,
FeedbackIcon,
DashboardIcon
} from "../../assets/images";

export default function Layout() {
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
                elevation: 0,
                backgroundColor: "white",
                borderRadius: 0,
                alignItems: "center",
                justifyContent: "center"
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <HomeIcon
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="payment"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingtop: 10
                        }}>
                            <PaymentIcon
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
                            <CouponIcon
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
                            <FeedbackIcon
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
                            <DashboardIcon
                                stroke={focused ? "#000000" : "#999999"}
                            />
                        </View>
                    )
                }}
            />
        </Tabs>
    )
}