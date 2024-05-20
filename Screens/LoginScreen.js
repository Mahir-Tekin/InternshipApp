import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import usersData from '../data/users.json';  // import user data from the correct path

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = usersData.users.find(u => u.email === email && u.password === password);

        if (user) {
            Alert.alert('Başarılı', 'Başarıyla giriş yapıldı!');
            if (user.role === 'company') {
                navigation.replace('CTab');
            } else if (user.role === 'student') {
                navigation.replace('Tab');
            }
        } else {
            Alert.alert('Başarısız', 'E-posta veya şifre hatalı!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="E-posta"
                style={styles.input}
                placeholderTextColor="#1C1678"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Şifre"
                style={styles.input}
                placeholderTextColor="#1C1678"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F5F2',
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 2,
        borderColor: '#1C1678',
        marginBottom: 20,
        borderRadius: 5,
        color: '#1C1678',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#1C1678',
        width: 300,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
