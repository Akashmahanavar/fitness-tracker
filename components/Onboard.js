import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, Alert, Text } from 'react-native';

const image = { uri: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' };

const Onboard = ({ navigation }) => (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Text style={styles.logo}>Fitness Tracker</Text>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => Alert.alert(' button pressed')}
                style={styles.button}
            >
                <Text style={{ color: '#fff' }}>Get started</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Aleready have an account?
                <Text style={styles.login} onPress={() => navigation.navigate("About")}
                > Log In</Text></Text>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10,
        bottom: 90,
        position: 'absolute',
        textAlign: 'center',
        width: 300,
    },
    text: {
        position: 'absolute',
        color: '#13162b',
        bottom: 70,
    },
    login: {
        color: '#0934b6'
    },
    logo: {
        color: '#5f46b3',
        fontFamily: 'Yatra-One',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20,
    }
});

export default Onboard;
