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
import { images } from "@/constants";
import CustomButton from "@/components/customButton";
import { Redirect, router} from "expo-router";

export default function SignIn() {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
                <View className="flex-row pt-12 ml-5">
                  <TouchableOpacity>
                      <Entypo name="chevron-left" size={30} color="white" />
                  </TouchableOpacity>
                  <Text className="color-white text-[20px] ml-2 font-posemibold">
                    Iniciar sesión
                  </Text>
                </View>
            </View>

            <View className="h-full px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
                <View className="mt-5 ml-2">
                    <Text className="font-posemibold text-[24px]">Bienvenido</Text>
                    <Text className="font-pomedium text-[12px] mt-[-5px]">Hola, inicia sesión para continuar</Text>
                </View>

                <View className="flex items-center mt-10">
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
                          className="border-none outline-none ml-2 mr-10 font-pomedium"
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity className="flex items-center mt-6">
                    <Text className="font-poregular">Olvidaste la contraseña?</Text>
                </TouchableOpacity>

                <CustomButton
                    title="Iniciar Sesión"
                    handlePress={() => router.push('/orders')}
                    containerStyles={"w-[90%] mt-6 mx-auto"}
                />
            </View>
        </SafeAreaView>
    );
}