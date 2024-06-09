import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { icons } from "@/constants";
import { router } from "expo-router";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { RootState } from "@/states/store";
import { useDispatch, useSelector } from 'react-redux';
import {
    setOrders,
    setTotal as setOrderTotal,
    setFilters as orderFilter
} from "@/states/orderSlice";
import { setCoupon, setFilters as couponFilter } from "@/states/couponSlice";
import { getOrders } from "@/api/orders";
import { getCoupons } from "@/api/coupons";

dayjs.locale('es');

export default function Calendar() {
  const filter = useSelector((state: RootState) => state.filter);
  const user = useSelector((state: RootState) => state.user);

  const screen = filter.screen;

  const coupon = useSelector((state: RootState) => state.coupon);
  const order = useSelector((state: RootState) => state.order);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

  const dispatch = useDispatch();

  const [dateLabel, setDateLabel] = useState("desde - hasta");
  const [error, setError] = useState("");

  const formatDisplayDate = (date) => date ? date.format('DD MMMM') : '';
  const formatFunctionDate = (date) => date ? date.format('DD-MM-YYYY') : '';
  const dateconverter = (date) => {
    if (date) {
      return dayjs(date).format('YYYY-MM-DD');
    } else {
      return '';
    }
  };

  useEffect(() => {
    if (screen == "orders" && order.filters.desde && order.filters.hasta) {
        const { desde: orderDesde, hasta: orderHasta } = order.filters;
        const parsedDesde = orderDesde.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1");
        const parsedHasta = orderHasta.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1");
        setStartDate(dayjs(parsedDesde));
        setEndDate(dayjs(parsedHasta));

        const displayStartDate = formatDisplayDate(dayjs(parsedDesde));
        const displayEndDate = formatDisplayDate(dayjs(parsedHasta));

        if (displayStartDate && displayEndDate) {
            setDateLabel(`${displayStartDate} - ${displayEndDate}`);
        } else if (displayStartDate) {
            setDateLabel(`${displayStartDate} - `)
        }
    }

    if (screen == "coupons" && coupon.filters.desde && coupon.filters.hasta) {
        const { desde: couponDesde, hasta: couponHasta } = coupon.filters;
        const parsedDesde = couponDesde.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1");
        const parsedHasta = couponHasta.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1");
        setStartDate(dayjs(parsedDesde));
        setEndDate(dayjs(parsedHasta));

        const displayStartDate = formatDisplayDate(dayjs(parsedDesde));
        const displayEndDate = formatDisplayDate(dayjs(parsedHasta));

        if (displayStartDate && displayEndDate) {
            setDateLabel(`${displayStartDate} - ${displayEndDate}`);
        } else if (displayStartDate) {
            setDateLabel(`${displayStartDate} - `)
        }
    }
  }, []);

  const onChangeDate = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setIsSelectingEndDate(!isSelectingEndDate);

    const displayStartDate = formatDisplayDate(startDate);
    const displayEndDate = formatDisplayDate(endDate);

    if (displayStartDate && displayEndDate) {
        setDateLabel(`${displayStartDate} - ${displayEndDate}`);
    } else if (displayStartDate) {
        setDateLabel(`${displayStartDate} - `)
    }
  };

  const onGoBackHandler = () => {
    if (screen === "orders") {
        router.push("/orders");
    } else if (screen === "coupons") {
        router.push("/coupon");
    }
  };

  const onSubmitHandler = async () => {
    if (!startDate || !endDate) {
      return;
    }

    const functionStartDate = formatFunctionDate(startDate);
    const functionEndDate = formatFunctionDate(endDate);

    const filters = {
      desde: functionStartDate,
      hasta: functionEndDate,
      per_page: 10,
      page: 1
    };

    if (screen === "orders") {
      try {
        const orders = await getOrders(filters, user);
        dispatch(setOrders(orders.rows));
        dispatch(orderFilter(filters));
        dispatch(setOrderTotal(orders.total));
        router.push('/orders');
      } catch (error) {
        console.log(error);
      }
    }

    if (screen === "coupons") {
        try {
            const coupons = await getCoupons(filters, user);
            dispatch(setCoupon(coupons.rows));
            dispatch(couponFilter(filters));
            router.push('/coupon');
        } catch(error) {
            console.log(error);
        }
    }
  };

  const onCancelHandler = () => {
    setStartDate(null);
    setEndDate(null);
    setIsSelectingEndDate(false);
  };

  return (
    <SafeAreaView>
      <View className="w-full bg-black">
        <View className="flex-row pt-9 mr-5 justify-between items-center">
          <TouchableOpacity onPress={() => onGoBackHandler()}>
            <View className="ml-2">
              <Entypo name="chevron-left" size={30} color="white" />
            </View>
          </TouchableOpacity>
          <View className="flex-row items-center">
            <View className="ml-10">
              <icons.filter width={30} height={30} stroke={"#FFFFFF"} />
            </View>
            <Text className="color-white text-[16px] ml-2 font-mosemibold">
              Calendario
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-4 w-full h-full bg-white pt-14 rounded-tl-[24px] rounded-tr-[24px]">
        <View className="bg-white ml-4 mr-4">
          <DateTimePicker
            locale="es"
            mode="range"
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeDate}
            selectedItemColor={isSelectingEndDate ? "#2196F3" : "#26A69A"}
            selectedTextStyle={{ color: isSelectingEndDate ? "#fff" : "#fff" }}
            weekDaysTextStyle={{ color: 'transparent' }}
            weekDaysContainerStyle={{ borderBottomWidth: 0 }}
            headerTextContainerStyle={{ justifyContent: 'center' }}
            headerTextStyle={{ fontSize: 20 }}
          />
        </View>

        <View className="ml-14 mt-7 mb-4">
          <TouchableOpacity onPress={onCancelHandler}>
              <Text className="font-moregular text-[16px]">
                Cancelar
              </Text>
          </TouchableOpacity>
        </View>

        <View className="ml-4 mt-4 mb-4">
            <Text className="text-secondary-900 font-posemibold">Indicar fechas entrada y salida</Text>
            <Text className="font-pomedium text-[14px] ml-2 mt-1">{dateLabel}</Text>
        </View>

        <View className="flex items-center mt-5">
            <TouchableOpacity onPress={onSubmitHandler}>
                <View className="bg-blues rounded-[20px] min-w-[80%] flex items-center justify-center">
                    <Text className="text-white p-3">FINALIZAR</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
