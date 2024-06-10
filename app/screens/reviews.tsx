import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from 'react-redux';
import { images } from "@/constants";
import { Rating } from '@kolking/react-native-rating';
import { RootState } from "@/states/store";
import { getSurveys } from "@/api/survey";
import { SurveyType } from "@/@types/surveys";

export default function Reviews() {
  const telephone = useSelector((state: RootState) => state.coupon.telephone);
  const user = useSelector((state: RootState) => state.user);
  const name = useSelector((state: RootState) => state.coupon.name);
  const fecha = useSelector((state: RootState) => state.coupon.date);

  const [surveys, setSurveys] = useState<SurveyType[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(surveys);

  const fetchSurvey = async () => {
    try {
      const data = await getSurveys(fecha, telephone, user);
      if (data && data.rows.length > 0) {
        setSurveys(data.rows);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurvey();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="px-4 pt-6 flex-row">
        <Image source={images.avatar} />

        <View className="mt-[8px] ml-6">
          {surveys.length > 0 && (
            <>
              <Text className="text-blues-200 font-pomedium text-[16.4px]">{name}</Text>
              <Text className="text-blues-200 font-polight text-[14px] mt-[-3px]">Nuevo Cliente</Text>
            </>
          )}
        </View>
      </View>

      <ScrollView className="px-4">
        {loading ? (
          <View className="pt-8">
            <Text className="font-poregular text-[16px] text-black">Cargando encuesta...</Text>
          </View>
        ) : surveys.length === 0 ? (
          <View className="pt-8 flex items-center justify-center">
            <Text className="font-poregular text-[16px] text-black">No hay datos para mostrar</Text>
          </View>
        ) : (
          surveys.slice(0, 3).map((survey, index) => ( // Mostrar solo las primeras 3 encuestas
            <View key={index} className="pt-8">
              <Rating size={16} rating={3} />
              <Text className="font-poregular text-[16px] text-black">{survey.pregunta}</Text>
              <Text className="font-pomedium text-[18px] text-negro-100">{survey.respuesta}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
