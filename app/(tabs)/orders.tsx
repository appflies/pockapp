import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import { icons, images } from "@/constants";
import { OrderDto, OrderData } from "../_actions/orders/getOrders";
import SearchBar from "@/components/SearchBar";
import TitleBar from "@/components/TitleBar";

type OrderProps = {
  item: OrderDto;
};

const renderOrders = ({ item }: { item: OrderDto }) => {
  return <Item item={item} />;
};

const Item = ({ item }: OrderProps) => (
      <View className="mt-4">
      <TouchableOpacity>
        <Text className="text-secondary-100 font-posemibold text-[17px]">
          {item.name}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Text className="text-primary mr-1 font-mosemibold text-[12px] mt-[-2px]">
              Ticket ID: {item.ticketID} /
            </Text>
            <Text className="text-primary mr-1 font-moregular text-[12px] mt-[-2px]">
              {item.date}
            </Text>
            <Text className="text-primary font-moregular text-[12px] mt-[-2px]">
              {item.time}
            </Text>
          </View>

          <Text className="text-secondary-100 font-posemibold text-[17px] mt-[-7px]">
            {item.amount}
          </Text>
        </View>

        <Text
          className="mt-[-2px] text-primary font-mosemibold text-[12px]">
          Mesa: {item.table}
        </Text>
        </TouchableOpacity>
        <View className="h-[1px] bg-secondary-600 mt-4"></View>
      </View>
);

export default function Orders() {
    return (
        <SafeAreaView className="h-full flex-1">
            <TitleBar icon={<icons.logo width={30} height={30}/>} />
            <SearchBar />

            <View className="flex justify-center items-center mt-5">
                <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center" >
                  <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
                </View>
            </View>

            <FlatList
                data={OrderData}
                renderItem={renderOrders}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
                className="flex-1 bg-white mt-[-33px]"
             />
        </SafeAreaView>
      );
}
