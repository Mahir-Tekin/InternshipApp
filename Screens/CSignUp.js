import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CSignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState('');
  const [location, setLocation] = useState('');

  const handleSignUp = () => {
    // Şimdilik sadece bir taslak olarak işlevsiz bırakılmıştır.
    console.log({
      email,
      password,
      username,
      role: 'company',
      phone,
      resume,
      education: '', // Kurumsal hesap için boş bırakılıyor
      location,
    });
    // Gelecekteki yönlendirme işlemleri için kullanılabilir.
    // navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Kurumsal Hesap Oluştur</Text>
        
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Firma Adı"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefon Numarası"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Firma Açıklaması"
          value={resume}
          onChangeText={setResume}
          multiline
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Konum"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Hesap Oluştur</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F5F2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1678',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#1C1678',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CSignUp;
