import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import FitnessCards from '../components/FitnessCards'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ backgroundColor: '#cd8538', padding: 10, height: 200, width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>HOME WORKOUT</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>0</Text>
                        <Text style={{ color: '#d0d0d0', fontWeight: 'bold', fontSize: 17 }}>WORKOUTS</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>0</Text>
                        <Text style={{ color: '#d0d0d0', fontWeight: 'bold', fontSize: 17 }}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>0</Text>
                        <Text style={{ color: '#d0d0d0', fontWeight: 'bold', fontSize: 17 }}>MINS</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: '90%', height: 120, marginTop: 20, borderRadius: 7 }} source={{ uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png' }}></Image>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 45 }}>
                <FitnessCards />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
