import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { images, icons } from "@/constants";

export default function TitleBar({icon}) {
    return (
        <View className="h-[95px] w-full bg-black">
          <View className="flex-row pt-9 mr-5 justify-between items-center">
            <View className="ml-10">{icon}</View>
            <View className="flex-row items-center">
              <icons.dollar_circle width={23} />
              <Text className="color-white text-[16px] ml-2 font-mosemibold">
                Link de pago
              </Text>
            </View>
          </View>
        </View>
    );
}