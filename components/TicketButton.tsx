import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function TicketButton({containerStyles, textStyles}) {
    return (
        <TouchableOpacity
            onPress={() => router.push('screens/ticket')}
            className={`bg-customblue rounded-[20px] h-[42px] w-[125px] justify-center items-center ${containerStyles}`}
        >
            <View>
                <Text className={`text-white font-poregular text-[16px] ${textStyles}`}>
                    Ver Ticket
                </Text>
            </View>
        </TouchableOpacity>
    );
}