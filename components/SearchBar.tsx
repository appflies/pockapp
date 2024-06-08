import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { images, icons } from "@/constants";
import { router } from "expo-router";

export default function SearchBar() {
    return (
        <View className="h-[130px] px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
          <View className="flex-row justify-center items-center pt-5">
              <View className="flex-row items-center p-2 pt-3 pb-3 bg-[#FFFFFF] border border-inputborder rounded-[50px]">
                <View className="ml-2 mb-[1px]"><icons.magnify /></View>
                <TextInput
                  placeholder="Buscar nombre, teléfono o cupón"
                  placeholderTextColor="#686881"
                  className="border-none outline-none ml-2 mr-10 text-mosemibold"
                ></TextInput>
              </View>

              <TouchableOpacity onPress={() => router.push("/screens/calendar")}>
                 <View className="ml-3">
                    <icons.filter width={30} stroke={"#848484"}/>
                 </View>
              </TouchableOpacity>
          </View>
        </View>
    );
}