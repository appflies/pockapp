import {
  Text,
  TextInput,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  Linking
} from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback, useEffect } from 'react';
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
    const filter = useSelector((state: RootState) => state.filter);
    const order = useSelector((state: RootState) => state.order.link);

    const url = `https://01.gruposansir.com/${order}`;

    return (
        <SafeAreaView>
             <View className="w-full h-full">
                <WebView source={{ uri: `${url}` }} />
             </View>
        </SafeAreaView>
    );
}