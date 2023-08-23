import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, Pressable, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from "../context";
import { Ionicons } from '@expo/vector-icons';


const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    const navigation = useNavigation();

    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        setWorkout,
        workout,
    } = useContext(FitnessItems);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Image resizeMode='stretch' style={{ width: '100%', height: '50%' }} source={{ uri: current.image }} />
            <Text style={styles.MetaData}>{current.name}</Text>
            <Text style={styles.MetaDataValue}>x{current.sets}</Text>
            <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                <Pressable
                    style={{
                        flexDirection: "row",
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 30,
                    }}
                >
                    <Pressable
                        disabled={index === 0}
                        onPress={() => { setIndex(index - 1); }}
                        style={styles.PreContainer}
                    >
                        <Text style={styles.Pre}>PREV</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => { index + 1 >= excersise.length ? navigation.navigate("Home") : setIndex(index + 1) }}
                        style={styles.SkipContainer}
                    >
                        <Text style={styles.Skip}
                        >
                            SKIP
                        </Text>
                    </Pressable>
                </Pressable>
                {index + 1 >= excersise.length ? (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Home");
                            setCompleted([...completed, current.name]);
                            setWorkout(workout + 1);
                            setMinutes(minutes + 2.5);
                            setCalories(calories + 10);
                        }}
                        style={styles.DoneContainer}
                    >
                        <Text
                            style={styles.Done}
                        >
                            DONE
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Rest");
                            setCompleted([...completed, current.name]);
                            setWorkout(workout + 1);
                            setMinutes(minutes + 2.5);
                            setCalories(calories + 10);
                            setTimeout(() => {
                                setIndex(index + 1);
                            }, 100);
                        }}
                        style={styles.DoneContainer}
                    >
                        <Text
                            style={styles.Done}
                        >
                            DONE
                        </Text>
                    </Pressable>
                )}

            </View>
            <Ionicons name="ios-arrow-back-sharp" size={28} style={styles.Icon} onPress={() => navigation.goBack()} />
        </SafeAreaView >
    )
}

export default FitScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    Icon: {
        position: 'absolute',
        left: 20,
        top: 15,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    },
    Skip: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    SkipContainer: {
        backgroundColor: "#93469f",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        width: 100,
    },
    Pre: {
        color: "#93469f",
        fontWeight: "bold",
        textAlign: "center",
    },
    PreContainer: {
        backgroundColor: "#e4cfe8",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        width: 100,
    },
    Done: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    DoneContainer: {
        backgroundColor: "#0ac166",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
        borderRadius: 28,
        padding: 10,
        width: 120,
    }
})
