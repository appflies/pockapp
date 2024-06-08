import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";

export default function Redeemed() {
    return (
            <SafeAreaView className="bg-black h-full w-full">
                <View className="flex-1 items-center justify-center">
                    <icons.logo width={88} height={98}/>
                    <Text className="text-white mt-8 font-posemibold text-[24px]">Haz logrado</Text>
                    <Text className="text-white font-posemibold text-[24px] mt-[-5px]">cambiar tu cupón</Text>
                </View>
            </SafeAreaView>
        );
}