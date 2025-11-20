import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de usuario</Text>

      
      <Pressable
        style={styles.button}
        // Al presionar, navegamos a la ruta 'Detalle'
        // (Esta ruta se definirá en el Stack Navigator en el Paso 3)
        onPress={() => navigation.navigate('Detalle')} 
      >
        <Text style={styles.buttonText}>Detalles de Usuario</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green', // Color verde como en tu imagen de referencia
  },
  button: {
    backgroundColor: '#007BFF', // Azul estándar
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});