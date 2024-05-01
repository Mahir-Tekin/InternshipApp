import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const SignUpScreen = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        const newUser = { username, email, password };
        setUsers([...users, newUser]);
        Alert.alert("Success", "You have been registered.");
        setUsername('');
        setEmail('');
        setPassword('');
        console.log(users);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                placeholderTextColor="#1C1678"
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                placeholderTextColor="#1C1678"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
                placeholderTextColor="#1C1678"
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1C1678',
        textAlign: 'center',
    }
});

export default SignUpScreen;
