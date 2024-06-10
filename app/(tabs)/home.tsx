import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { icons, images } from "@/constants";

const Home = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <SafeAreaView className="h-full flex-1">
          <View className="h-[95px] w-full bg-black">
            <View className="flex-row pt-9 mr-5 justify-between items-center">
              <View className="ml-10"><icons.menu width={28} height={20} /></View>
              <View className="flex-row items-center">
                <icons.home width={28} height={28} stroke="#ffffff" />
                <Text className="color-white text-[16px] ml-2 font-mosemibold">
                  Home
                </Text>
              </View>
            </View>
          </View>

          <View className="h-[130px] px-4 h-full bg-white rounded-tl-[24px] rounded-tr-[24px]">
            <View className="ml-8 mt-10">
                <Text className="font-pobold text-2xl">Pockapp</Text>
            </View>
            <View className="flex-row justify-between">
                <View className="ml-8 mt-20">
                    <icons.coupon width={58} height={58} stroke="#000000" />
                    <Text className="text-2xl ml-[-20px] mt-9">Cupón</Text>
                </View>

                <View className="mr-8 mt-20">
                    <icons.orders width={58} height={58} stroke="#000000" />
                    <Text className="text-2xl ml-[-65px] mt-9">Link de pago</Text>
                </View>
            </View>
            <View className="ml-8 mt-[100px]">
                <icons.feedback width={58} height={58} stroke="#000000" />
                <Text className="text-2xl ml-[-20px] mt-9">Cupón</Text>
            </View>
          </View>
        </SafeAreaView>
    )
}

export default Home;
