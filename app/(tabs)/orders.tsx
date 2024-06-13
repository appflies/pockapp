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
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback, useEffect } from 'react';
import { setOrders } from "@/states/orderSlice";
import { images, icons } from "@/constants";
import { OrderType } from "@/@types/order";
import { PaginatedResponse } from "@/@types/pagination";
import Collapsible from 'react-native-collapsible';
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { setFilters as setOrderFilter, setTelephone, setLink } from "@/states/orderSlice";
import { RootState } from "@/store";
import { getOrders } from "@/api/orders";
import { setFilter } from "@/states/filterSlice";

type OrderProps = {
  item: OrderType;
  isCollapsed: boolean;
  onToggleCollapse: (id: number) => void;
  onTicketHandler: (link: string) => void;
};

const Item = React.memo(({ item, isCollapsed, onToggleCollapse, onTicketHandler }: OrderProps) => (
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
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.telephone}`)}>
                        <icons.call width={52} height={52}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${item.telephone}`)}>
                        <icons.whatsapp width={52} height={52}  />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View className="bg-secondary-600 w-full mt-[-6px] pb-[15px] pt-[17.5px]">
            <TouchableOpacity
                onPress={() => onTicketHandler(item.link)}
                className={`bg-customblue rounded-[20px] h-[42px] w-[125px] justify-center items-center mx-auto`}
            >
                <View className="mx-auto">
                    <Text className={`text-white font-poregular text-[16px] mx-auto`}>
                        Ver Ticket
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </Collapsible>
  </View>
  <View className="h-[1px] bg-secondary-600 w-full"></View>
  </>
));

export default function Orders() {
  const user = useSelector((state: RootState) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(10);
  const filters = useSelector((state: RootState) => state.order.filters);
  const data = useSelector((state: RootState) => state.order.orders);
  const total = useSelector((state: RootState) => state.order.total);
  const dispatch = useDispatch();

  const onTicketHandler = (link: string) => {
      dispatch(setLink(link));
      dispatch(setFilter({"screen": "orders"}));
      router.push('screens/checkout');
  };

  useEffect(() => {
    if (data) {
        setItems(data.slice(0, 10));
    }
  }, [data]);

  const load = async () => {
    if (data) {
        setLoading(true);
        if (data.length == total) {
            setLoading(false);
            return
        }

        if (loading) {
            const newPage = filters.page + 1;
            const newFilters = { ...filters, page: newPage };
            dispatch(setOrderFilter(newFilters));

            const response = await getOrders(filters, user);

            setItems(prevItems => [...prevItems, ...response.rows]);
            setLoading(false);
        }
    }
  }

  const onCalendarHandler = () => {
    dispatch(setFilter({"screen": "orders"}));
    router.push('/screens/calendar')
  }

  const [collapsedItemId, setCollapsedItemId] = useState<number | null>(null);

  const handleToggleCollapse = useCallback((id: number) => {
    setCollapsedItemId((prevId) => (prevId === id ? null : id));
  }, []);

  const renderOrders = ({ item }: { item: OrderType }) => {
    const customerName = item.customer_name;
    const maxNameLength = 15;
    const abbreviatedName = customerName.length > maxNameLength
      ? `${customerName.substring(0, maxNameLength)}..`
      : customerName;

    return (
      <Item
        item={{ ...item, customer_name: abbreviatedName }}
        isCollapsed={collapsedItemId !== item.compra_id}
        onToggleCollapse={handleToggleCollapse}
        onTicketHandler={onTicketHandler}
      />
    );
  };

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

      <View className="h-[130px] px-4 bg-white rounded-tl-[24px] rounded-tr-[24px]">
        <View className="flex-row justify-center items-center pt-5">
            <View className="flex-row items-center p-2 pt-3 pb-3 bg-[#FFFFFF] border border-inputborder rounded-[50px]">
              <View className="ml-2 mb-[1px]"><icons.magnify /></View>
              <TextInput
                placeholder="Buscar nombre, teléfono o cupón"
                placeholderTextColor="#686881"
                className="border-none outline-none ml-2 mr-10 text-mosemibold"
              ></TextInput>
            </View>

            <TouchableOpacity onPress={() => onCalendarHandler()}>
               <View className="ml-3">
                  <icons.filter width={30} stroke={"#848484"}/>
               </View>
            </TouchableOpacity>
        </View>
      </View>

      <View className="flex justify-center items-center mt-1">
        <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center">
          <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
        </View>
      </View>

      {items ?
        <FlatList
              data={items}
              onEndReached={() => load()}
              renderItem={renderOrders}
              keyExtractor={(item, index) => `${item.telephone}_${index}`}
              contentContainerStyle={{ paddingBottom: 90, paddingHorizontal: 0 }}
              className="flex-1 bg-white mt-[-33px]"
              removeClippedSubViews={true}
              updateCellsBatchingPeriod={50}
              maxToRenderPerBatch={10}
              windowSize={2}
              viewabilityConfig={waitForInteraction = true}
              ListFooterComponent={() => (
              <View>
                  {loading &&
                  <View className="pt-4">
                    <ActivityIndicator />
                  </View>}
              </View>)}
            />
        : null
      }
    </SafeAreaView>
  );
}
