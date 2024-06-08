import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import { Rating } from '@kolking/react-native-rating';

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
        </View>
    </View>
  );
};

export default Reviews;
