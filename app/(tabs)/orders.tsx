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

type OrderProps = {
  item: OrderDto;
};

const renderOrders = ({ item }: { item: OrderDto }) => {
  return <Item item={item} />;
};

const Item = ({ item }: OrderProps) => (
      <View className="mt-4">
      <TouchableOpacity>
        <Text className="text-secondary-100 font-posemibold text-[16px]">
          {item.name}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Text className="text-primary mr-1 font-mosemibold text-[11px]">
              Ticket ID: {item.ticketID} /
            </Text>
            <Text className="text-primary mr-1 font-moregular text-[11px]">
              {item.date}
            </Text>
            <Text className="text-primary font-moregular text-[11px]">
              {item.time}
            </Text>
          </View>

          <Text className="text-secondary-100 font-posemibold text-[16px]">
            {item.amount}
          </Text>
        </View>

        <Text
          className="mt-[-10px] text-primary font-mosemibold text-[11px]">
          Mesa: {item.table}
        </Text>
        </TouchableOpacity>
      </View>
);

export default function Orders() {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row pt-11 mr-5 justify-between items-center">
                <View className="ml-10"><icons.logo width={30} height={30}/></View>
                <View className="flex-row items-center">
                  <icons.dollar_circle width={23} />
                  <Text className="color-white text-[16px] ml-2 font-mosemibold">
                    Link de pago
                  </Text>
                </View>
              </View>
            </View>

            {/* SearchBARContainer */}
            <View className="h-[130px] px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
              {/* SearchBAR */}
              <View className="flex justify-center items-center mt-4">
                <Image source={images.line} />
              </View>

              <View className="flex-row justify-center items-center pt-4">
                  <View className="flex-row items-center p-2 bg-[#FFFFFF] border border-inputborder rounded-[50px]">
                    <View className="ml-2"><icons.magnify /></View>
                    <TextInput
                      placeholder="Buscar nombre, teléfono o cupón"
                      placeholderTextColor="#686881"
                      className="border-none outline-none ml-2 mr-10"
                    ></TextInput>
                  </View>

                  <TouchableOpacity>
                     <View className="ml-3">
                        <icons.filter width={30}/>
                     </View>
                  </TouchableOpacity>
              </View>
            </View>

            {/* PROCESSED ORDERS */}
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
