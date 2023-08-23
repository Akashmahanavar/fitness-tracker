import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
    const [emailId, setEmailId] = useState("");
    const [Password, setPassword] = useState("");
    const navigation = useNavigation();

    const authenticateUser = () => {
        if (emailId === 'akash@gmail.com') {
            if (Password === 'admin') {
                navigation.navigate('Home')
                AsyncStorage.setItem('emailId', 'akash@gmail.com');
            }
            else
                Alert.alert('Password Incorrect');
        }
        else
            Alert.alert('Invalid Username')
    }
    return (
        <View style={{ alignItems: 'center', flex: 1, gap: 20, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontSize: 40, width: '85%', textAlign: 'center', fontWeight: 'bold', marginBottom: 50 }}>Log in to your Account</Text>
            <View style={styles.Container}>
                <MaterialIcons name="email" size={24} color="#93469f" style={{ marginHorizontal: 5 }} />
                <TextInput
                    placeholder="Email Id"
                    onChangeText={(d) => setEmailId(d)}
                />
            </View>
            <View style={styles.Container}>
                <MaterialIcons name="lock" size={24} color="#93469f" style={{ marginHorizontal: 5 }} />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(d) => setPassword(d)}
                />
            </View>
            <Pressable
                onPress={() => authenticateUser()}
                style={{
                    backgroundColor: '#93469f',
                    paddingHorizontal: 100,
                    paddingVertical: 10,
                    borderRadius: 20,
                    marginTop: 30
                }}
            >
                <Text style={{ color: '#fff' }}>Log In</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, width: '90%', }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#DCDCDC' }} />
                <View>
                    <Text style={{ textAlign: 'center' }}>or continue with</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#DCDCDC' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <FontAwesome5 name="facebook" size={24} color="#1877f2" />
                <AntDesign name="google" color='red' size={24} />
                <AntDesign name="apple1" size={24} color="black" />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ececec',
        borderRadius: 10,
        width: 250
    }
})
