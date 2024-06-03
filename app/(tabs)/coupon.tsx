import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { CouponDto, CouponData } from "../_actions/coupons/getCoupons";
import  Rating from 'react-native-easy-rating';
import SearchBar from "@/components/searchBar";

type CouponProps = {
  item: CouponDto;
};

const renderCoupons = ({ item }: { item: CouponDto }) => {
  return <Item item={item} />;
};

const Item = ({ item }: CouponProps) => (
      <View className="mt-4">
      <TouchableOpacity>
        <Text className="text-secondary-100 font-posemibold text-[16px]">
          {item.name}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Text className="text-primary mr-1 font-mosemibold text-[11px] mt-[-4px]">
              {item.amount}
            </Text>
          </View>

          <View className="mt-[-20px]">
            <Rating
              rating={3}
              max={3}
              iconWidth={24}
              iconHeight={24}
              iconSelected={icons.star_filled}
             />
          </View>
        </View>
        </TouchableOpacity>
      </View>
);

export default function Coupon() {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
              <View className="flex-row pt-11 mr-5 justify-between items-center">
                <View className="ml-10"><icons.logo width={30} height={30}/></View>
                <View className="flex-row items-center">
                  <icons.coupon width={23} stroke="#ffffff"/>
                  <Text className="color-white text-[16px] ml-2 font-mosemibold">
                    Cupón
                  </Text>
                </View>
              </View>
            </View>

            <SearchBar />

            <View className="flex justify-center items-center mt-5">
                <View className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center" >
                  <Text className="text-secondary-100 font-mobold">ORDENES PROCESADAS</Text>
                </View>
            </View>

            <FlatList
                data={CouponData}
                renderItem={renderCoupons}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
                className="flex-1 bg-white mt-[-33px]"
             />
        </SafeAreaView>
    )
}