import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const TestApiConnection: React.FC = () => {
  const testApi = async () => {
    try {
      const response = await fetch('http://45.236.131.189/users', {
        method: 'POST', // Cambiado a POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Frank',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Conexión exitosa:', data);
        Alert.alert('Éxito', `Conexión exitosa a la API\nID: ${data.id}`);
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
      <Text style={styles.title}>Prueba de conexión a la API (POST)</Text>
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
