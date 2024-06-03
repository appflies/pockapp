import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { images, icons } from "@/constants";

export default function SearchBar() {
    return (
        <View className="h-[130px] px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
          <View className="flex justify-center items-center mt-4">
            <Image source={images.line} />
          </View>

          <View className="flex-row justify-center items-center pt-4">
              <View className="flex-row items-center p-2 bg-[#FFFFFF] border border-inputborder rounded-[50px]">
                <View className="ml-2 mb-[1px]"><icons.magnify /></View>
                <TextInput
                  placeholder="Buscar nombre, teléfono o cupón"
                  placeholderTextColor="#686881"
                  className="border-none outline-none ml-2 mr-10"
                ></TextInput>
              </View>

              <TouchableOpacity>
                 <View className="ml-3">
                    <icons.filter width={30}/>
                 </View>
              </TouchableOpacity>
          </View>
        </View>
    );
}