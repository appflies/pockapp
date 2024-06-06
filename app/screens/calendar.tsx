import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { icons } from "@/constants";
import { router } from "expo-router";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { setFilter } from '@/states/filterSlice';
import { useDispatch } from 'react-redux';

dayjs.locale('es');

export default function Calendar() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day'));
  const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

  const dispatch = useDispatch();

  const [dateLabel, setDateLabel] = useState("desde - hasta");
  const [error, setError] = useState("");

  const formatDisplayDate = (date) => date ? date.format('DD MMMM') : '';
  const formatFunctionDate = (date) => date ? date.format('DD-MM-YYYY') : '';

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

  const onSubmitHandler = () => {
      if (!startDate || !endDate) {
        return
      }

      const functionStartDate = formatFunctionDate(startDate);
      const functionEndDate = formatFunctionDate(endDate);

      const customFilter = {
        desde: functionStartDate,
        hasta: functionEndDate,
        per_page: 50,
        page: 1
      }

      dispatch(setFilter(customFilter));
      router.push('/orders');
  }

  const onCancelHandler = () => {
    setStartDate(null);
    setEndDate(null);
    setIsSelectingEndDate(false);
  }

  return (
    <SafeAreaView>
      <View className="w-full bg-black">
        <View className="flex-row pt-9 mr-5 justify-between items-center">
          <TouchableOpacity onPress={() => router.push('/orders')}>
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