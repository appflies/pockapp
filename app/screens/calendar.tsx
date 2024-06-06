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
import DropDownPicker from 'react-native-dropdown-picker';

dayjs.locale('es');

export default function Calendar() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day'));
  const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Enero', value: 'enero'},
    {label: 'Febrero', value: 'febrero'},
    {label: 'Marzo', value: 'marzo'},
    {label: 'Abril', value: 'abril'},
    {label: 'Junio', value: 'junio'},
    {label: 'Julio', value: 'julio'},
    {label: 'Agosto', value: 'agosto'},
    {label: 'Setiembre', value: 'setiembre'},
    {label: 'Octubre', value: 'octubre'},
    {label: 'Noviembre', value: 'noviembre'},
    {label: 'Diciembre', value: 'diciembre'}
  ]);

  const formatDisplayDate = (date) => date ? date.format('DD MMMM') : '';
  const formatFunctionDate = (date) => date ? date.format('DD-MM-YYYY') : '';

  const onChangeDate = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setIsSelectingEndDate(!isSelectingEndDate);

    const displayStartDate = formatDisplayDate(startDate);
    const displayEndDate = formatDisplayDate(endDate);
    const functionStartDate = formatFunctionDate(startDate);
    const functionEndDate = formatFunctionDate(endDate);

    console.log(`Start Date: ${displayStartDate}, End Date: ${displayEndDate}`);
    console.log(`Desde: "${functionStartDate}", Hasta: "${functionEndDate}"`);
  };

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

      <View className="mt-4 h-full w-full bg-white pt-14 rounded-tl-[24px] rounded-tr-[24px]">
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
            headerButtonStyle={{ display: 'none' }}
            headerButtonColor="transparent"
          />
        </View>

        <View className="ml-14 mt-4 mb-4">
          <Text>
            Cancelar
          </Text>
        </View>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Mes"
          ContainerStyle={{
            border: "none"
          }}
        />
      </View>
    </SafeAreaView>
  );
}
