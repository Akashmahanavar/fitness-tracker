import {
    StyleSheet,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OnBoardScreen = () => {
    const navigation = useNavigation();
    const alt =
        "https://e0.pxfuel.com/wallpapers/266/440/desktop-wallpaper-gym-therapy-thoughts-iron-pickshitup-alone-train-fitness-graphy-gym-graphy-gym-fitness-iphone-dark-gym-thumbnail.jpg";
    const image = { uri: alt };

    useEffect(() => {
        AsyncStorage.getItem('emailId').then(value => {
            if (value === 'akash@gmail.com')
                navigation.navigate('Home');
        })
    }, []);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text
                    style={{
                        position: "absolute",
                        bottom: 240,
                        left: 20,
                        fontSize: 28,
                        color: "#fff",
                        fontWeight: "900",
                    }}
                >
                    Welcome to
                </Text>
                <Text
                    style={{
                        position: "absolute",
                        bottom: 200,
                        left: 20,
                        fontSize: 38,
                        color: "#93469f",
                        fontWeight: "900",
                    }}
                >
                    Fitness Tracker
                </Text>
                <Text
                    style={{
                        position: "absolute",
                        bottom: 10,
                        alignSelf: "center",
                        fontSize: 16,
                        color: "#fff",
                        fontWeight: "900",
                    }}
                >
                    The best fitness app for everyone
                </Text>
                <Pressable
                    onPress={() => navigation.navigate('Ad')}
                    style={{
                        position: "absolute",
                        bottom: 100,
                        paddingVertical: 12,
                        borderRadius: 22,
                        paddingHorizontal: 70,
                        alignSelf: "center",
                        backgroundColor: "#93469f",
                    }}
                >
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "900" }}>
                        Get Started!
                    </Text>
                </Pressable>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});
