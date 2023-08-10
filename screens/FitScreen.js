import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excersises = route.params.excersises;
    const current = excersises[index];
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Image style={{ width: '100%', height: '50%' }} source={{ uri: current.image }} />
            <Text style={styles.MetaData}>{current.name}</Text>
            <Text style={styles.MetaDataValue}>x{current.sets}</Text>
            <Pressable style={{ backgroundColor: 'blue', width: 180, alignSelf: 'center', bottom: 50, position: 'absolute', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 10 }}>Done</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    MetaData: {
        color: '#d0d0d0',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    MetaDataValue: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
