import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

export default function Welcome() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (redirect) {
        return <Redirect href="/home" />;
    }

    return (
        <SafeAreaView className="bg-black h-full w-full">
        <View className="flex-1 items-center justify-center">
            <images.splash width={218} height={218} />
        </View>
        </SafeAreaView>
    );
}