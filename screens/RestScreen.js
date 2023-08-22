import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";


const RestScreen = () => {
    const navigation = useNavigation();

    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(10);

    const startTime = () => {
        if (timeLeft <= 0) {
            navigation.goBack();
            clearTimeout(timer);
        }
        setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
    };
    useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
    });
    return (

        <SafeAreaView style={styles.AndroidSafeArea}>
            <Image
                source={{
                    uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
                }}
                style={{ width: "100%", height: 420 }}
            />

            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "900",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                TAKE A BREAK!
            </Text>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "800",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                {timeLeft}
            </Text>
            <Pressable style={{ position: 'absolute', bottom: 30, padding: 10, backgroundColor: '#e8312f', width: 150, borderRadius: 20, alignSelf: 'center' }} onPress={() => setTimeLeft(0)}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Skip</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default RestScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})
