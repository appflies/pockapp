import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import react from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import { images, icons } from "@/constants";
import CustomButton from "@/components/customButton";
import { Redirect, router} from "expo-router";

export default function SignIn() {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row items-center justify-between pt-11 px-5">
                <View className="ml-2"><icons.logo width={30} height={30}/></View>
                <View className="flex-1 items-center">
                  <Text className="text-white text-[20px] font-semibold">
                    Iniciar sesión
                  </Text>
                </View>
                <View className="w-8" />
              </View>
            </View>

            <View className="h-full px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
                <View className="flex items-center mt-14">
                    <images.signin width={213} height={165}/>
                </View>

                <View className="mt-10 w-[90%] mx-auto">
                    <View className="p-3 bg-[#FFFFFF] border border-inputborder rounded-[50px]">
                        <TextInput
                          placeholder="Usuario"
                          placeholderTextColor="#686881"
                          className="border-none outline-none ml-2 mr-10 font-pomedium"
                        ></TextInput>
                    </View>

                    <View className="p-3 bg-[#FFFFFF] border border-inputborder rounded-[50px] mt-6">
                        <TextInput
                          placeholder="Contraseña"
                          placeholderTextColor="#686881"
                          secureTextEntry={true}
                          className="border-none outline-none ml-2 mr-10 font-pomedium"
                        ></TextInput>
                    </View>
                </View>

                <View className="w-[94%]">
                    <TouchableOpacity
                        onPress={() => router.push('/password-reset')}
                        className="self-end mt-6">
                        <Text className="font-posemibold text-secondary-400 text-12">Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
              </View>

                <CustomButton
                    title="Iniciar Sesión"
                    handlePress={() => router.push('/orders')}
                    containerStyles={"w-[90%] mt-6 mx-auto"}
                />
            </View>
        </SafeAreaView>
    );
}