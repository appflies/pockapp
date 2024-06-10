import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { icons, images } from "@/constants";
import SearchBar from "@/components/SearchBar";
import { router } from "expo-router";
import { setCoupon } from "@/states/feedbackSlice";
import { FeedbackType } from "@/@types/feedback";
import { PaginatedResponse } from "@/@types/pagination";
import { RootState } from "@/store";
import { getFeedback } from "@/api/feedback";
import { setFilters as setFeedbackFilter } from "@/states/feedbackSlice";
import { setFilter } from "@/states/filterSlice";

type FeedbackProps = {
  item: FeedbackType;
};

const Item = ({ item }: FeedbackProps) => (
  <>
    <View className="mt-4 px-4">
      <Text className="text-secondary-100 font-posemibold text-[17px]">
        {item.customer_name}
      </Text>

      <View className="flex-row justify-between">
        <View className="flex-row mt-[-1px]">
          <Text className="text-primary mr-1 font-posemibold text-[12px]">
            {item.ticketID}
          </Text>
          <Text className="text-primary mr-1 font-poregular text-[12px]">
            {item.date}
          </Text>
          <Text className="text-primary font-moregular text-[12px]">
            {item.time}
          </Text>
        </View>

        <TouchableOpacity onPress={() => router.push("screens/redeem")}>
          <Text className="text-black font-posemibold text-[17px] mt-[-10px]">REDIMIR</Text>
        </TouchableOpacity>
      </View>

      <Text className="mt-[-1px] text-primary font-mosemibold text-[12px] pb-4">
        ORDEN {item.order}
      </Text>
    </View>
    <View className="h-[1px] bg-secondary-600 w-[110%] ml-[-5%]"></View>
  </>
);

export default function Feedback() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(10);
  const filters = useSelector((state: RootState) => state.feedback.filters);
  const data = useSelector((state: RootState) => state.feedback.coupons);
  const total = useSelector((state: RootState) => state.feedback.total);

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
              dispatch(setFeedbackFilter(newFilters));

              const response = await getFeedback(filters, user);

              setItems(prevItems => [...prevItems, ...response.rows]);
              setLoading(false);
          }
      }
  }

  const onCalendarHandler = () => {
    dispatch(setFilter({ "screen": "feedback" }));
    console.log(filters);
    router.push('/screens/calendar');
  };

  const renderFeedback = ({ item }: { item: FeedbackType }) => {
      const customerName = item.customer_name;
      const maxNameLength = 15;
      const abbreviatedName = customerName.length > maxNameLength
        ? `${customerName.substring(0, maxNameLength)}..`
        : customerName;

      return (
        <Item
          item={{ ...item, customer_name: abbreviatedName }}
        />
      );
    };

  return (
    <SafeAreaView className="h-full flex-1">
      <View className="h-[95px] w-full bg-black">
        <View className="flex-row pt-9 mr-5 justify-between items-center">
          <View className="ml-10"><icons.logo width={38} height={38} /></View>
          <View className="flex-row items-center">
            <icons.feedback width={28} height={28} stroke="#ffffff" />
            <Text className="color-white text-[16px] ml-2 font-mosemibold">
              Feedback
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

      <View className="flex justify-center items-center mt-5">
        <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center">
          <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
        </View>
      </View>

        {items ?
        <FlatList
              data={items}
              onEndReached={() => load()}
              renderItem={renderFeedback}
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