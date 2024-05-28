import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight
} from "react-native";
import { PaymentIcon, ConfigIcon } from "../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemData = {
  id: number;
  name: string;
  amount: any;
  ticketID: any;
  date: any;
  time: any;
  table: any;
};

const DATA: ItemData[] = [
  {
    id: 1,
    name: "Carla Montoya",
    amount: "$56.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 2,
    name: "Misael Gutierrez",
    amount: "$12.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 3,
    name: "Mario Aguilar",
    amount: "$20.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 4,
    name: "Katia Herrera",
    amount: "$34.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 5,
    name: "Angel Paz",
    amount: "$89.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
  {
    id: 6,
    name: "Gabriel Perez",
    amount: "$15.00",
    ticketID: "2245",
    date: "05/12/2022",
    time: "1:58 PM",
    table: "T4",
  },
];

type ItemProps = {
  item: ItemData;
};

const renderItem = ({ item }: { item: ItemData }) => {
  return <Item item={item} />;
};

const Item = ({ item }: ItemProps) => (
  <View className="mt-4">
    <Text className="text-custom-bold" style={styles.poppinsSemiBold}>
      {item.name}
    </Text>
    <View className="flex-row justify-between">
      <View className="flex-row">
        <Text
          className="text-custom-text mr-1"
          style={styles.montserratSemiBold}
        >
          Ticket ID: {item.ticketID} /
        </Text>
        <Text
          className="text-custom-text mr-1"
          style={styles.montserratRegularCustom}
        >
          {item.date}
        </Text>
        <Text
          className="text-custom-text"
          style={styles.montserratRegularCustom}
        >
          {item.time}
        </Text>
      </View>

      <Text className="text-custom-bold" style={styles.poppinsSemiBold}>
        {item.amount}
      </Text>
    </View>

    <Text
      className="mt-[-10px] text-custom-text"
      style={styles.montserratSemiBold}
    >
      Mesa: {item.table}
    </Text>
  </View>
);

const Payment = () => {
    return (
        <SafeAreaView className="h-full flex-1">
            <View className="h-[132px] w-full bg-black">
              <View className="flex-row pt-10 mr-5 justify-between items-center">
                <Image
                  source={require("../../assets/images/logo.png")}
                  className="ml-10"
                />
                <View className="flex-row items-center">
                  <PaymentIcon stroke={"#999999"} />
                  <Text
                    className="color-white text-[23px] ml-2 text-[16px]"
                    style={styles.montserrat}
                  >
                    Link de pago
                  </Text>
                </View>
              </View>
            </View>

            {/* SearchBAR */}
            <View
              className="w-full h-[130px] px-4"
              style={{
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: -33
              }}
            >
              <View className="flex justify-center items-center mt-4">
                <Image source={require("../../assets/images/line.png")} />
              </View>

              <View className="flex-row justify-center items-center pt-4">
                  <View
                    className="flex-row items-center p-2 bg-[#FFFFFF]"
                    style={{
                      width: 286,
                      height: 50,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: "#CECECE",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/search.png")}
                      className="ml-2 w-5 h-5"
                    />
                    <TextInput
                      placeholder="Buscar nombre, teléfono o cupón"
                      placeholderTextColor="#686881"
                      className="border-none outline-none ml-2 mr-10"
                    ></TextInput>
                  </View>

                  <TouchableHighlight>
                     <View className="ml-3">
                        <ConfigIcon />
                     </View>
                  </TouchableHighlight>
              </View>
            </View>

            {/* PROCEDED ORDERS */}
            <View className="flex justify-center items-center mt-5">
                <View
                  className="border-custom-border mb-8 mt-[-33px] bg-[#F7F8FA] w-full text-center h-[54px] flex items-center justify-center"
                >
                  <Text style={styles.montserratBold} className="text-custom-bold">ORDENES PROCESADAS</Text>
                </View>
            </View>

            {/** FlatList */}
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
                style={{ flex: 1, backgroundColor: "white", marginTop: -33 }}
             />
        </SafeAreaView>
      );
}

export default Payment;

const styles = StyleSheet.create({
  montserratRegular: {
    fontFamily: "Montserrat-Regular",
  },
  montserratRegularCustom: {
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
  },
  montserrat: {
    fontFamily: "Montserrat-SemiBold",
  },
  montserratSemiBold: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 11,
  },
  montserratBold: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  poppinsSemiBold: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});