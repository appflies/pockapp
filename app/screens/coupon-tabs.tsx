import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "./details";
import Reviews from "./reviews";

const MemoizedDetails = React.memo(Details);
const MemoizedReviews = React.memo(Reviews);

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Tab1':
        return <MemoizedReviews />;
      case 'Tab2':
        return <MemoizedDetails />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 pt-6">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#000000', height: 50 }}>
          <TouchableOpacity
            onPress={() => handleTabPress('Tab1')}
            style={{
              paddingVertical: 16,
              paddingHorizontal: 20,
              borderBottomWidth: selectedTab === 'Tab1' ? 2 : 0,
              borderBottomColor: selectedTab === 'Tab1' ? '#5459EA' : 'transparent'
            }}
          >
            <Text className={`text-white ${selectedTab === 'Tab1' ? 'font-bold' : ''}`}>Reseñas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('Tab2')}
            style={{
              paddingVertical: 16,
              paddingHorizontal: 20,
              borderBottomWidth: selectedTab === 'Tab2' ? 2 : 0,
              borderBottomColor: selectedTab === 'Tab2' ? '#5459EA' : 'transparent'
            }}
          >
            <Text className={`text-white ${selectedTab === 'Tab2' ? 'font-bold' : ''}`}>Detalles</Text>
          </TouchableOpacity>
        </View>
        {renderTabContent()}
      </View>
    </SafeAreaView>
  );
};

export default Tabs;
