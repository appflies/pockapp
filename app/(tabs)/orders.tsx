import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from 'react';
import { icons } from "@/constants";
import { OrderType } from "@/@types/order";
import { PaginatedResponse } from "@/@types/pagination";
import SearchBar from "@/components/SearchBar";
import TitleBar from "@/components/TitleBar";
import Collapsible from 'react-native-collapsible';
import { useGetOrdersQuery } from "@/services/order.service";
import TicketButton from "@/components/TicketButton";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type OrderProps = {
  item: OrderType;
  isCollapsed: boolean;
  onToggleCollapse: (id: number) => void;
};

const Item = React.memo(({ item, isCollapsed, onToggleCollapse }: OrderProps) => (
    <>
  <View className="mt-4 w-full bg-white">
    <TouchableOpacity onPress={() => onToggleCollapse(item.compra_id)}>
      <View className="pl-4 pr-4">
        <Text className="text-secondary-100 font-posemibold text-[17px]">
            {item.customer_name}
          </Text>
          <View className="flex-row justify-between">
            <View className="flex-row">
              <Text className="text-primary mr-1 font-mosemibold text-[12px] mt-[-2px]">
                Ticket ID: {item.ticket} /
              </Text>
              <Text className="text-primary mr-1 font-moregular text-[12px] mt-[-2px]">
                {item.date}
              </Text>
              <Text className="text-primary font-moregular text-[12px] mt-[-2px]">
                {item.time}
              </Text>
            </View>

            <Text className="text-secondary-100 font-posemibold text-[17px] mt-[-7px]">
              ${item.monto}
            </Text>
          </View>

          <Text className="mt-[-7px] text-primary font-mosemibold text-[12px] mb-4">
            Mesa: {item.mesa}
          </Text>
      </View>
    </TouchableOpacity>

    <Collapsible collapsed={isCollapsed}>
      <View className="h-[6px] bg-secondary-600 w-full "></View>

      <View className="flex-row justify-between mt-2 pl-4 pr-2">
          <Text className="font-pomedium text-secondary-800 mt-[1px]">
            ORDER ID: {item.order_id}
          </Text>

          <View className="mt-[1.4px] bg-green-100 rounded-[18px] w-[98px] flex items-center justify-center h-[22px]">
              <Text className="text-green mt-[0px] font-poregular">Finalizado</Text>
          </View>
      </View>

      <View className="h-[6px] bg-secondary-600 w-full mt-2"></View>

        <View className="flex-row justify-between ml-4 mr-4">
            <View className="flex-row mt-[9px]">
                <Text className="text-secondary-800 font-pomedium">
                    Telefono:
                </Text>

                <Text className="font-posemibold font-bold text-violet ml-2 text-[16px] mt-[-1.5px]">
                    {item.telephone}
                </Text>
            </View>

            <View className="justify-end mt-[-6.5px]">
                <View className="flex-row">
                    <icons.call width={52} height={52}  />
                    <icons.whatsapp width={52} height={52}  />
                </View>
            </View>
        </View>
        <View className="bg-secondary-600 w-full mt-[-6px] pb-[15px] pt-[17.5px]">
            <TicketButton containerStyles={"mx-auto"} />
        </View>
    </Collapsible>
  </View>
  <View className="h-[1px] bg-secondary-600 w-full"></View>
  </>
));

export default function Orders() {
  const filter = useSelector((state: RootState) => state.filter);

  const { data, error, isLoading } = useGetOrdersQuery(
    {
        desde: filter.desde,
        hasta: filter.hasta,
        per_page: 50,
        page: 1
    });
  const [collapsedItemId, setCollapsedItemId] = useState<number | null>(null);

  const handleToggleCollapse = useCallback((id: number) => {
    setCollapsedItemId((prevId) => (prevId === id ? null : id));
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="h-full flex-1">
        <View className="h-[95px] w-full bg-black">
          <View className="flex-row pt-9 mr-5 justify-between items-center">
            <View className="ml-10"><icons.logo width={38} height={38}/></View>
            <View className="flex-row items-center">
              <icons.dollar_circle width={28} height={28} />
              <Text className="color-white text-[16px] ml-2 font-mosemibold">
                Link de pago
              </Text>
            </View>
          </View>
        </View>
        <SearchBar />
        <View className="flex justify-center items-center mt-1">
          <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center">
            <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
          </View>
        </View>
        <View className="bg-white h-full mt-[-33px]">
            <View className="flex items-center justify-center">
                <Text className="font-mosemibold text-[20px]">Cargando..</Text>
            </View>
        </View>
    </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="h-full flex-1">
          <View className="h-[95px] w-full bg-black">
            <View className="flex-row pt-9 mr-5 justify-between items-center">
              <View className="ml-10"><icons.logo width={38} height={38}/></View>
              <View className="flex-row items-center">
                <icons.dollar_circle width={28} height={28} />
                <Text className="color-white text-[16px] ml-2 font-mosemibold">
                  Link de pago
                </Text>
              </View>
            </View>
          </View>
          <SearchBar />
          <View className="flex justify-center items-center mt-1">
            <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center">
              <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
            </View>
          </View>
          <View className="bg-white h-full mt-[-33px]">
          </View>
      </SafeAreaView>
    );
  }

  const renderOrders = ({ item }: { item: OrderType }) => (
    <Item
      item={item}
      isCollapsed={collapsedItemId !== item.compra_id}
      onToggleCollapse={handleToggleCollapse}
    />
  );

  return (
    <SafeAreaView className="h-full flex-1">
      <View className="h-[95px] w-full bg-black">
          <View className="flex-row pt-9 mr-5 justify-between items-center">
            <View className="ml-10"><icons.logo width={38} height={38}/></View>
            <View className="flex-row items-center">
              <icons.dollar_circle width={28} height={28} stroke="#ffffff" />
              <Text className="color-white text-[16px] ml-2 font-mosemibold">
                Link de Pago
              </Text>
            </View>
          </View>
      </View>
      <SearchBar />

      <View className="flex justify-center items-center mt-1">
        <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center">
          <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
        </View>
      </View>

      <FlatList
        data={data?.rows}
        renderItem={renderOrders}
        keyExtractor={item => item.compra_id.toString()}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 0 }}
        className="flex-1 bg-white mt-[-33px]"
      />
    </SafeAreaView>
  );
}
