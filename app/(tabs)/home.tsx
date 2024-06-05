import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Home = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <SafeAreaView>
            <View>
                <Text className="text-white">Home</Text>
                {user ? (
                    <>
                        <Text className="text-white">ID: {user.usuario_id}</Text>
                        <Text className="text-white">Usuario: {user.sucursal}</Text>
                        <Text className="text-white">Email: {user.email}</Text>
                    </>
                ) : (
                    <Text className="text-white">No hay usuario logueado</Text>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home;
