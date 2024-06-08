import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useDispatch } from "react-redux";
import { setUser } from "@/states/userSlice";
import { router } from "expo-router";
import { login } from "@/api/auth";

export default function SignIn() {
     const dispatch = useDispatch();

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");

     const handleUserChange = (e: string) => {
        setUsername(e);
        setError("");
     };

     const handlePasswordChange = (e: string) => {
        setPassword(e);
        setError("");
     };

     const handleSubmit = async () => {
        try {
            const user = await login({
                usuario: username,
                password: password
            });

            dispatch(setUser(user));
            setError("");
            router.push('/home');
        } catch (err) {
            setError(err.response.data.error || "Error al iniciar sesión");
        }
    };

    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row items-center justify-between pt-10 px-5">
                <View className="ml-2"><icons.logo width={38} height={38}/></View>
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
                          onChangeText={handleUserChange}
                          placeholder="Usuario"
                          placeholderTextColor="#686881"
                          className="border-none outline-none ml-2 mr-10 font-pomedium"
                        ></TextInput>
                    </View>

                    <View className="p-3 bg-[#FFFFFF] border border-inputborder rounded-[50px] mt-6">
                        <TextInput
                          onChangeText={handlePasswordChange}
                          placeholder="Contraseña"
                          placeholderTextColor="#686881"
                          secureTextEntry={true}
                          className="border-none outline-none ml-2 mr-10 font-pomedium"
                        ></TextInput>
                    </View>
                </View>

                {error ? (
                    <View className="mx-auto mt-2">
                    <Text className="text-secondary-700 text-[12px]">{error}</Text>
                    </View>
                ) : null}

                <View className="w-[94%]">
                    <TouchableOpacity
                        onPress={() => router.push('/password-reset')}
                        className="self-end mt-6">
                        <Text className="font-posemibold text-secondary-400 text-12">Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
              </View>

              <CustomButton
                  title="Iniciar Sesión"
                  handlePress={handleSubmit}
                  containerStyles={"w-[90%] mt-6 mx-auto"}
              />
            </View>
        </SafeAreaView>
    );
}
