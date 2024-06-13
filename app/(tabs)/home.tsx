import React from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { icons } from "@/constants";
import { router } from "expo-router";

const Home = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.menuIcon}>
                            <icons.menu width={28} height={20} />
                        </View>
                        <View style={styles.headerTitle}>
                            <icons.home width={28} height={28} stroke="#ffffff" />
                            <Text style={styles.headerText}>Home</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.greeting}>
                        <Text style={styles.greetingText}>Pockapp 👋</Text>
                    </View>
                    <View style={styles.grid}>
                        <TouchableOpacity style={styles.tile1} onPress={() => router.push("/coupon")}>
                            <View style={styles.square}>
                                <icons.coupon width={58} height={58} stroke="#000000" />
                            </View>
                            <Text style={styles.tileText}>Cupón</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tile2} onPress={() => router.push("/orders")}>
                            <View style={styles.square}>
                                <icons.orders width={58} height={58} stroke="#000000" />
                            </View>
                            <Text style={styles.tileText}>Link de pago</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.tile3} onPress={() => router.push("/feedback")}>
                        <View style={styles.square}>
                            <icons.feedback width={58} height={58} stroke="#000000" />
                        </View>
                        <Text style={styles.tileText}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        height: 95,
        width: '100%',
        backgroundColor: 'black',
    },
    headerContent: {
        flexDirection: 'row',
        paddingTop: 35,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuIcon: {
        marginLeft: 10,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '600',
    },
    content: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    greeting: {
        marginLeft: 15,
        marginTop: 10,
    },
    greetingText: {
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'Poppins-Bold',
        color: '#2E3A59',
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    tile1: {
        alignItems: 'center',
        marginBottom: 20,
        top: 50,
        left: 20,
    },
    tile2: {
        alignItems: 'center',
        marginBottom: 20,
        top: 50,
        left: -20,
    },
    tile3: {
        alignItems: 'center',
        marginBottom: 20,
        top: 75,
        left: -85,
    },
    square: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tileText: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'Poppins-Medium',
    },
});

export default Home;
