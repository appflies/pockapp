import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { RedeemCoupon, getFeedback } from "@/api/feedback";
import { setCoupon as setFeedback } from "@/states/feedbackSlice";

export default function Redeem() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const cupon = useSelector((state: RootState) => state.feedback.cupon_no);
    const filters = useSelector((state: RootState) => state.feedback.filters);

    const onCouponHandler = async () => {
        const response = await RedeemCoupon(cupon, user);
        const feedbacks = await getFeedback(filters, user);
        dispatch(setFeedback(feedbacks.rows));
        router.push("/feedback");
    }

    return (
        <SafeAreaView>
            <View className="bg-white w-full h-full">
                <View className="h-[95px] w-full bg-white">
                  <View className="flex-row items-center justify-between pt-5 px-5">
                    <View className="ml-2 mt-[-4px]"><Entypo name="chevron-left" size={38} color="black" /></View>
                    <View className="flex-1 items-center mt-2">
                      <Text className="text-blues-300 text-[20px] font-semibold">
                        Oye Burrito
                      </Text>
                      <Text>Acompañado de salsa bbq, con cilantro...</Text>
                    </View>
                    <View className="w-8" />
                  </View>
                </View>

                <View className="pt-1">
                    <Image source={images.brand} className="w-full" />
                </View>

                <View className="mt-[40px] px-8">
                    <Text className="mb-[-30px] ml-4">Comentarios</Text>
                    <TextInput
                        placeholder=""
                        placeholderTextColor="transparent"
                        multiline={true}
                        numberOfLines={8}
                        style={{
                            borderWidth: 1,
                            borderColor: '#CCCCCC',
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 8,
                            paddingBottom: 8,
                            fontSize: 16,
                        }}
                    />
                </View>

                <TouchableOpacity className="bg-blues-100 rounded-[20px] min-h-[52px] justify-center items-center w-[80%] mx-auto mt-4"
                    onPress={() => onCouponHandler()}>
                    <View>
                        <Text className="text-white font-poregular text-[16px]">
                           REDIMIR AHORA
                        </Text>
                    </View>
                </TouchableOpacity>

                <View className="flex-row justify-between px-4 mt-5">
                    <View className="ml-14 flex-row">
                        <icons.user_square />
                        <View className="mt-[-5px] ml-4">
                            <Text className="text-blues-300 font-pobold text-[13px]">Wilson Melara</Text>
                            <Text className="text-blues-300 font-pomedium text-[13px] mt-[-2px]">7623-3212</Text>
                        </View>
                    </View>
                    <Text className="mr-10 text-blues-100 font-pomedium mt-[4px]">GOALSDAKJQ</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}