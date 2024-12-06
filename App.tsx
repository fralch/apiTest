import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const TestApiConnection: React.FC = () => {
  const testApi = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      name: 'Frank',
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch('http://45.236.131.189/users', requestOptions);

      if (response.ok) {
        const result = await response.text();
        console.log('Respuesta de la API:', result);
        Alert.alert('Éxito', `Respuesta de la API:\n${result}`);
      } else {
        console.error('Error en la respuesta:', response.status);
        Alert.alert('Error', `Error en la API: ${response.status}`);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
      Alert.alert('Error', 'No se pudo conectar a la API');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prueba de conexión a la API</Text>
      <Button title="Probar conexión" onPress={testApi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TestApiConnection;
