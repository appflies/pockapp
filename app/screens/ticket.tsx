import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { icons } from "@/constants";
import { router } from "expo-router";
import Collapsible from 'react-native-collapsible';

export default function Ticket() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseToggleHandler = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <SafeAreaView className="flex-1">
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row items-center justify-between pt-10 px-5">
                <TouchableOpacity onPress={() => router.push('/orders')}>
                    <View className="ml-2">
                        <Entypo name="chevron-left" size={38} color="white" />
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

            <View className="flex-1 bg-white rounded-tl-[24px] rounded-tr-[24px]">
                <View className="mt-6">
                    <View className="flex-row justify-between ml-4 mr-4">
                        <View className="flex-row">
                            <icons.location />
                            <Text className="ml-2 font-pomedium text-16">Oye Chico Escalón</Text>
                        </View>

                        <Text className="font-posemibold text-secondary-900 text-[12px] mt-[2px]">50 m</Text>
                    </View>
                </View>

                <View className="flex-row justify-between px-4 mt-7">
                    <View>
                        <Text className="text-secondary-100 font-posemibold text-[16px]">Orden N.1114</Text>
                        <Text className="text-secondary-800 text-[13px] mt-[-1px]">Fecha: 2023-05-19 / 13:49:32</Text>
                    </View>

                    <Text className="text-blues-100 text-posemibold text-[14px] mt-[8px]">MESA J11</Text>
                </View>
                <View className="h-[1px] bg-secondary-600 w-full mt-4"></View>

                <View className="flex-row justify-between mt-4 px-4">
                    <Text>MESA J24 - ANA</Text>

                    <TouchableOpacity onPress={collapseToggleHandler}>
                        <View className="flex-row">
                            <Text>$24.50</Text>
                            {isCollapsed ?
                                <Entypo name="chevron-up" size={19} color="#5459EA" />
                            :   <Entypo name="chevron-down" size={19} color="#5459EA" />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="h-[1px] bg-secondary-600 w-full mt-4"></View>

                <Collapsible collapsed={isCollapsed}>
                   <View className="mt-4 px-5">
                        <View className="flex-row justify-between">
                            <View>
                                <Text className="text-secondary-100 font-posemibold text-[14px]">Oye burrito! / Normal</Text>
                                <Text className="text-secondary-800 font-mosemibold text-[12px] mt-[-1px]">$8.99 x 2</Text>
                                <Text className="text-secondary-800 font-moregular text-[12px] max-w-[250px] mt-[3px]">Chipotle, Cilantro, papas fritas, con cebolla curtida</Text>
                            </View>

                            <Text className="font-posemibold text-[16px] mt-3 text-secondary-100">$12.00</Text>
                        </View>

                        <View className="flex-row justify-between mt-6">
                            <View>
                                <Text className="text-secondary-100 font-posemibold text-[14px]">Oye burrito! / Normal</Text>
                                <Text className="text-secondary-800 font-mosemibold text-[12px] mt-[-1px]">$8.99 x 2</Text>
                                <Text className="text-secondary-800 font-moregular text-[12px] max-w-[250px] mt-[3px]">Chipotle, Cilantro, papas fritas, con cebolla curtida</Text>
                            </View>

                            <Text className="font-posemibold text-[16px] mt-3 text-secondary-100">$12.00</Text>
                        </View>

                        <View className="flex-row justify-between mt-6">
                            <View>
                                <Text className="text-secondary-100 font-posemibold text-[14px]">Oye burrito! / Normal</Text>
                                <Text className="text-secondary-800 font-mosemibold text-[12px] mt-[-1px]">$8.99 x 2</Text>
                                <Text className="text-secondary-800 font-moregular text-[12px] max-w-[250px] mt-[3px]">Chipotle, Cilantro, papas fritas, con cebolla curtida</Text>
                            </View>

                            <Text className="font-posemibold text-[16px] mt-3 text-secondary-100">$12.00</Text>
                        </View>
                   </View>
                </Collapsible>
                <View className="flex-1 justify-end pb-10">
                   <View className="px-10">
                        <View className="flex-row justify-between">
                            <Text className="font-pomedium text-secondary-500 text-[16px]">SUBTOTAL</Text>
                            <Text className="font-posemibold text-blues">$59.93</Text>
                        </View>

                        <View className="flex-row justify-between">
                            <Text className="font-pomedium text-secondary-500 text-[16px]">PROPINA</Text>
                            <Text className="font-posemibold text-blues">$5.99</Text>
                        </View>

                        <View className="flex-row justify-between">
                            <Text className="font-pomedium text-secondary-500 text-[16px]">DESCUENTO</Text>
                            <Text className="font-posemibold text-blues">$0.00</Text>
                        </View>

                        <View className="flex-row justify-between mt-3">
                            <Text className="font-posemibold text-negro mt-[4px]">TOTAL</Text>
                            <Text className="font-pobold text-rojo text-[24px]">$65.92</Text>
                        </View>
                   </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
