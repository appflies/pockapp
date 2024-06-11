import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { Rating } from '@kolking/react-native-rating';
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { router } from "expo-router";
import { CouponType } from "@/@types/coupon";
import { setFilter } from "@/states/filterSlice";
import { getCoupons } from "@/api/coupons";
import React, { useState, useCallback, useEffect } from 'react';
import { setFilters as setCouponFilter, setTelephone, setDate, setName, setLink } from "@/states/couponSlice";

type CouponProps = {
  item: CouponType;
  onClickHandler: (telephone: string, date: string, link: string) => void;
};

const renderCoupons = ({ item, onClickHandler }: { item: CouponType, onClickHandler: (telephone: string, date: string, name: string, link: string) => void }) => {
  const customerName = item.customer_name;

  const maxNameLength = 15;
  const abbreviatedName = customerName.length > maxNameLength ? `${customerName.substring(0, maxNameLength)}..` : customerName;

  return <Item item={{ ...item, customer_name: abbreviatedName }} onClickHandler={onClickHandler} />;
};

const Item = React.memo(({ item, onClickHandler }: CouponProps) => (
  <>
    <View className="mt-4 w-full bg-white">
      <TouchableOpacity onPress={() => onClickHandler(item.telephone, item.date, item.customer_name, item.link)}>
        <View className="px-4">
          <Text className="text-secondary-100 font-posemibold text-[17px]">
            {item.customer_name}
          </Text>
          <View className="flex-row justify-between">
            <View className="flex-row">
              <Text className="text-primary mr-1 font-mosemibold text-[12px] mt-[-2px] mb-4">
                ${item.monto}
              </Text>
            </View>

            <View className="mt-[-18px]">
              <Rating size={20} rating={item.score} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    <View className="h-[1px] bg-secondary-600 w-full"></View>
  </>
));

export default function Coupons() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const filters = useSelector((state: RootState) => state.coupon.filters);
  const total = useSelector((state: RootState) => state.coupon.total);
  const data = useSelector((state: RootState) => state.coupon.coupons);
  const telephone = useSelector((state: RootState) => state.coupon.telephone);

  useEffect(() => {
    if (data) {
      setItems(data.slice(0, 10));
    }
  }, [data]);
  console.log(data)

  const load = async () => {
    if (data) {
      setLoading(true);
      if (data.length == total) {
        setLoading(false);
        return;
      }

      if (loading) {
        const newPage = filters.page + 1;
        const newFilters = { ...filters, page: newPage };
        dispatch(setCouponFilter(newFilters));

        const response = await getCoupons(filters, user);

        setItems(prevItems => [...prevItems, ...response.rows]);
        setLoading(false);
      }
    }
  }

  const onClickHandler = (phone: string, date: string, name: string, link: string) => {
    dispatch(setTelephone(phone));
    dispatch(setDate(date));
    dispatch(setName(name));
    dispatch(setLink(link));
    router.push("/screens/coupon-tabs");
  }

  const onCalendarHandler = () => {
    dispatch(setFilter({ "screen": "coupons" }));
    router.push('/screens/calendar');
  }

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
            />
          </View>

          <TouchableOpacity onPress={() => onCalendarHandler()}>
            <View className="ml-3">
              <icons.filter width={30} stroke={"#848484"} />
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
          renderItem={({ item }) => renderCoupons({ item, onClickHandler })}
          keyExtractor={(item, index) => `${item.telephone}_${index}`}
          contentContainerStyle={{ paddingBottom: 90, paddingHorizontal: 0 }}
          className="flex-1 bg-white mt-[-33px]"
          removeClippedSubViews={true}
          updateCellsBatchingPeriod={50}
          maxToRenderPerBatch={10}
          windowSize={2}
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
