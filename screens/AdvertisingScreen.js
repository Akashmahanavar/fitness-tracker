import { Image, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import advertise from '../data/advertise';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AdvertisingScreen = () => {
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Image
                source={{
                    uri: advertise[index].image,
                }}
                style={{ width: "100%", height: 420 }}
            />
            <Text style={{ fontSize: 24, width: 200, alignSelf: 'center', textAlign: 'center', marginTop: 20, fontFamily: 'Times New Roman' }}>{advertise[index].text}</Text>
            <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center', bottom: 150, position: 'absolute' }}>
                {
                    advertise.map((item, i) =>
                        <FontAwesome key={item.id} name="circle" size={15} color={index === i ? "#93469f" : '#f0f0f0'} />
                    )}
            </View>
            <Pressable style={{
                backgroundColor: '#93469f', position: "absolute",
                bottom: 70,
                paddingVertical: 12,
                borderRadius: 22,
                paddingHorizontal: 100,
                alignSelf: "center",
            }}
                onPress={() => {
                    if (index + 1 >= 3)
                        navigation.navigate('Login')
                    else
                        setIndex(index + 1);
                }
                }>
                <Text style={{ color: '#fff' }}>
                    Next
                </Text>
            </Pressable>
        </SafeAreaView >
    )
}

export default AdvertisingScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})
