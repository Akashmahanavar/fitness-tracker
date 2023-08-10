import React from 'react'
import { Pressable, Image, StyleSheet, Text, View } from 'react-native'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FitnessCards = () => {
    const fitnessData = fitness;
    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 20 }}>
            {
                fitnessData.map((item) =>
                    <Pressable
                        key={item.id}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() =>
                            navigation.navigate("Workout", {
                                image: item.image,
                                excersises: item.excersises,
                                id: item.id,
                            })}
                    >
                        <Image style={{ width: '90%', height: 140, marginTop: 20, borderRadius: 7 }} source={{ uri: item.image }}></Image>
                        <Text style={{ position: 'absolute', fontSize: 16, fontWeight: 'bold', color: 'white', left: 25, top: 25 }}>{item.name}</Text>
                        <MaterialCommunityIcons style={{ position: 'absolute', left: 25, bottom: 10 }} name="lightning-bolt" size={24} color="white" />
                    </Pressable>
                )
            }
        </View >
    )
}

export default FitnessCards

const styles = StyleSheet.create({})
