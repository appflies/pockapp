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
                    Olvidaste tu contraseña?
                  </Text>
                </View>

                <View className="flex-row p-3 bg-[#FFFFFF] border border-inputborder rounded-[50px] w-[90%] mt-6 mx-auto">
                    <View className="ml-2">
                        <Entypo name="mail" size={30} color="black" />
                    </View>

                    <TextInput
                      placeholder="Introduzca su correo electrónico"
                      placeholderTextColor="#979797"
                      className="border-none outline-none ml-2 mr-2 font-pomedium w-[100%]"
                    ></TextInput>
                </View>

                <View className="mt-6 w-[80%] mx-auto">
                    <View>
                        <Text className="text-secondary-300 font-moregular text-[12px]">
                            * Le enviaremos un mensaje para que
                        </Text>
                        <Text className="text-secondary-300 font-moregular text-[12px]">
                            establezca o restablezca su nueva contraseña
                        </Text>
                    </View>
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


