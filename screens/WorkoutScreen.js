import { Image, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { FitnessItems } from "../context";
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {
        completed,
        setCompleted,
    } = useContext(FitnessItems);
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Image style={{ width: '100%', height: 200 }} source={{ uri: route.params.image }} />
            <Ionicons name="ios-arrow-back-sharp" size={28} color="white" style={styles.Icon} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    route.params.excersises.map((item) =>
                        <Pressable key={item.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 90, height: 92, margin: 10 }} source={{ uri: item.image }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ marginTop: 4, fontSize: 16, color: 'grey', }}>x{item.sets}</Text>
                            </View>
                            {completed.includes(item.name) ? (
                                <AntDesign style={{ marginLeft: 40 }} name="checkcircle" size={24} color="green" />
                            ) : (
                                null
                            )}
                        </Pressable>
                    )
                }
            </ScrollView>
            <Pressable
                onPress={() => {
                    navigation.navigate('Fit', {
                        excersises: route.params.excersises
                    })
                    setCompleted([]);
                }}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginVertical: 20,
                    width: 120,
                    borderRadius: 6,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 15,
                        fontWeight: "600",
                    }}
                >
                    START
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default WorkoutScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    Icon: {
        left: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: 'absolute',
        top: 15,
    }
})
