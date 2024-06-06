import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { icons } from "@/constants";
import { router } from "expo-router";

export default function Ticket() {
    return (
        <SafeAreaView>
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row items-center justify-between pt-10 px-5">
                <TouchableOpacity onPress={() => router.push('/orders')}>
                    <View className="ml-2">
                        <Entypo name="chevron-left" size={30} color="white" />
                    </View>
                </TouchableOpacity>
                <View className="flex-1 items-center">
                  <Text className="text-white text-[20px] font-semibold">
                    Detalle de pago
                  </Text>
                </View>
                <View className="mr-[-20px]"><icons.logo width={38} height={38}/></View>
                <View className="w-8" />
              </View>
            </View>
        </SafeAreaView>
    );
}