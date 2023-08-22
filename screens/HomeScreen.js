import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../context'

const HomeScreen = () => {
    const {
        minutes,
        calories,
        workout,
    } = useContext(FitnessItems);
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ backgroundColor: '#93469F', padding: 10, height: 200, width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>HOME WORKOUT</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <View>
                        <Text style={styles.MetaDataValue}>{calories}</Text>
                        <Text style={styles.MetaData}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={styles.MetaDataValue}>{workout}</Text>
                        <Text style={styles.MetaData}>WORKOUTS</Text>
                    </View>
                    <View>
                        <Text style={styles.MetaDataValue}>{minutes}</Text>
                        <Text style={styles.MetaData}>MINS</Text>
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
    },
    MetaData: {
        color: '#d0d0d0',
        fontSize: 17,
        fontWeight: 'bold',
    },
    MetaDataValue: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
