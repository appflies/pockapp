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
import { FeedbackDto, FeedbackData } from "../_actions/feedback/getFeedback";
import SearchBar from "@/components/SearchBar";
import { router } from "expo-router";

type FeedbackProps = {
  item: FeedbackDto;
};

const renderFeedback = ({ item }: { item: FeedbackDto }) => {
  return <Item item={item} />;
};

const Item = ({ item }: FeedbackProps) => (
    <>
      <View className="mt-4">

        <Text className="text-secondary-100 font-posemibold text-[17px]">
          {item.name}
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

        <Text
          className="mt-[-1px] text-primary font-mosemibold text-[12px] pb-4">
          ORDEN {item.order}
        </Text>
      </View>
        <View className="h-[1px] bg-secondary-600 w-[110%] ml-[-5%]"></View>
    </>
);

export default function Feedback() {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[95px] w-full bg-black">
                <View className="flex-row pt-9 mr-5 justify-between items-center">
                  <View className="ml-10"><icons.logo width={38} height={38}/></View>
                  <View className="flex-row items-center">
                    <icons.feedback width={28} height={28} stroke="#ffffff" />
                    <Text className="color-white text-[16px] ml-2 font-mosemibold">
                      Feedback
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
                data={FeedbackData}
                renderItem={renderFeedback}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
                className="flex-1 bg-white mt-[-33px]"
             />
        </SafeAreaView>
    )
}