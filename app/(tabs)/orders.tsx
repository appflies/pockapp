import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from 'react';
import { icons } from "@/constants";
import { OrderType, PaginatedOrdersResponse } from "@/types/order";
import SearchBar from "@/components/SearchBar";
import TitleBar from "@/components/TitleBar";
import Collapsible from 'react-native-collapsible';
import { useGetOrdersQuery } from "@/services/order.service";
import TicketButton from "@/components/TicketButton";

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

          <Text className="mt-[-7px] text-primary font-mosemibold text-[12px]">
            Mesa: {item.mesa}
          </Text>
      </View>
    </TouchableOpacity>

    <Collapsible collapsed={isCollapsed}>
      <View className="h-[6px] bg-secondary-600 w-full mt-4"></View>

      <View className="flex-row justify-between mt-2 pl-4 pr-2">
          <Text className="text-pomedium text-secondary-800 mt-1">
            ORDER ID: {item.order_id}
          </Text>

          <View className="bg-green-100  rounded-[18px] w-[98px] flex items-center justify-center h-[26px]">
              <Text className="text-green">Finalizado</Text>
          </View>
      </View>

      <View className="h-[6px] bg-secondary-600 w-full mt-2"></View>

        <View className="flex-row justify-between ml-4 mr-4">
            <View className="flex-row mt-[8px]">
                <Text className="text-secondary-800 text-pomedium">
                    Telefono:
                </Text>

                <Text className="text-posemibold font-bold text-violet ml-2 text-[16px] mt-[-1.5px]">
                    {item.telephone}
                </Text>
            </View>

            <View className="justify-end mt-[-6px]">
                <View className="flex-row">
                    <icons.call width={50} height={50}  />
                    <icons.whatsapp width={50} height={50}  />
                </View>
            </View>
        </View>

        <View className="min-h-[6px] bg-secondary-600 w-full mt-[-6px] pb-[25px] pt-2">
            <TicketButton containerStyles={"mt-5 mx-auto"} />
        </View>

    </Collapsible>
  </View>
  </>
));

export default function Orders() {
  const { data, error, isLoading } = useGetOrdersQuery({ desde: "25-02-2024", hasta: "13-05-2024", per_page: 50, page: 1 });
  const [collapsedItemId, setCollapsedItemId] = useState<number | null>(null);

  const handleToggleCollapse = useCallback((id: number) => {
    setCollapsedItemId((prevId) => (prevId === id ? null : id));
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="h-full flex-1">
        <Text className="text-center mt-10">Cargando...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="h-full flex-1">
        <Text className="text-center mt-10">Error al cargar datos</Text>
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
      <TitleBar icon={<icons.logo width={38} height={38} />} />
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
