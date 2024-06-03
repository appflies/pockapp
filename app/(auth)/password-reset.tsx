import {
  Text,
  View,
  Image,
  TextInput,
  TextInputProps,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import { Redirect, router} from "expo-router";
import CustomButton from "@/components/customButton";

export default function PasswordReset() {
    const [isEyeOff, setIsEyeOff] = useState(false);

    const handlePress = () => {
        setIsEyeOff(!isEyeOff);
    };
    return (
        <SafeAreaView className="h-full w-full bg-white">
            <View>
                <View className="flex-row pt-12 ml-5">
                  <TouchableOpacity
                    onPress={() => router.push('/sign-in')}
                  >
                      <Entypo name="chevron-left" size={30} color="black" />
                  </TouchableOpacity>
                  <Text className="color-black text-[20px] ml-2 font-posemibold">
                    Olvidaste la contraseña
                  </Text>
                </View>

                <Text className="ml-8 mt-6 text-secondary-500">Escriba correo de la cuenta</Text>

                <View className="flex-row p-2 bg-[#FFFFFF] border border-inputborder rounded-[50px] w-[90%] mt-4 mx-auto">
                    <TextInput
                      placeholder="************"
                      placeholderTextColor="#979797"
                      secureTextEntry={!isEyeOff}
                      className="border-none outline-none ml-4 mr-2 mt-1 font-pomedium w-[80%]"
                    ></TextInput>

                    <TouchableOpacity onPress={handlePress}>
                        <View className="mt-1">
                            <Entypo name={isEyeOff ? "eye" : "eye-with-line"} size={24} color="grey" />
                        </View>
                    </TouchableOpacity>
                </View>

                <CustomButton
                    title="Cambiar contraseña"
                    handlePress={() => router.push('/password-updated')}
                    containerStyles={"w-[90%] mt-7 mx-auto"}
                />
            </View>
        </SafeAreaView>
    );
}


