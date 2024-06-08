import React, { useSelector, useDispatch, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import { Rating } from '@kolking/react-native-rating';
import { getSurveys } from "@/api/survey";

const Reviews = () => {

  return (
    <View className="flex-1 bg-white h-full">
        <View className="px-4 pt-6 flex-row">
            <Image source={images.avatar} />

            <View className="mt-[8px] ml-6">
                <Text className="text-blues-200 font-pomedium text-[16.4px]">Carla Guzmán</Text>
                <Text className="text-blues-200 font-polight text-[14px] mt-[-3px]">Nuevo Cliente</Text>
            </View>
        </View>

        <View className="px-4 pt-8">
            <Rating size={16} rating={3}  />

            <View className="pt-8">
                <Text className="font-poregular text-[16px] text-black">Como estuvo el servicio en mesa</Text>
                <Text className="font-pomedium text-[18px] text-negro-100">Bueno</Text>
            </View>

            <View className="pt-8">
                <Text className="font-poregular text-[16px] text-black">Que tal tu comida</Text>
                <Text className="font-pomedium text-[18px] text-negro-100">Regular</Text>
            </View>

            <View className="pt-8">
                <Text className="font-poregular text-[16px] text-black">Como estuvo el servicio en mesa</Text>
                <Text className="font-pomedium text-[18px] text-negro-100">Bueno</Text>
            </View>

            <View className="pt-8">
                <Text className="font-poregular text-[16px] text-black">Que tal tu comida</Text>
                <Text className="font-pomedium text-[18px] text-negro-100">Regular</Text>
            </View>
        </View>
    </View>
  );
};

export default Reviews;
