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
import { Redirect, router} from "expo-router";
import CustomButton from "@/components/customButton";

export default function PasswordReset() {
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

                <View className="p-3 bg-[#FFFFFF] border border-inputborder rounded-[50px] w-[90%] mt-6 mx-auto">
                    <TextInput
                      placeholder="Ingresa tu correo"
                      placeholderTextColor="#979797"
                      className="border-none outline-none ml-2 mr-10 font-pomedium"
                    ></TextInput>
                </View>

                <CustomButton
                    title="Cambiar contraseña"
                    handlePress={() => router.push('/password-updated')}
                    containerStyles={"w-[90%] mt-6 mx-auto"}
                />
            </View>
        </SafeAreaView>
    );
}


