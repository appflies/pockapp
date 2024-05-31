import { View, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, handlePress, containerStyles, textStyles, isLoading }) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-black rounded-[20px] min-h-[52px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <View>
                <Text className={`text-white font-poregular text-[16px] ${textStyles}`}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}