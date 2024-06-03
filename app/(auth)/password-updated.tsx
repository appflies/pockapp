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
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function PasswordUpdated() {
    return (
        <SafeAreaView className="h-full w-full bg-white">
            <View>
                <View className="flex-row pt-12 ml-5">
                  <TouchableOpacity
                    onPress={() => router.push('/sign-in')}
                  >
                      <Entypo name="chevron-left" size={30} color="black" />
                  </TouchableOpacity>
                </View>
            </View>

            <View className="flex items-center mt-12">
                <images.password_restored width={327} height={216} />
            </View>

            <View className="flex items-center mt-10">
                <Text className="font-pomedium text-[16px]">¡Te hemos enviado un correo!</Text>
                <Text className="text-center font-poregular text-[13px] text-secondary-200 mt-4">
                   Ingresa al link en el correo para poder
                </Text>
                <Text className="text-center font-poregular text-[13px] text-secondary-200">
                   restablecer tu contraseña
                </Text>
            </View>

            <CustomButton
                title="Continuar"
                handlePress={() => router.push('/orders')}
                containerStyles={"w-[90%] mt-9 mx-auto"}
            />
        </SafeAreaView>
    );
}