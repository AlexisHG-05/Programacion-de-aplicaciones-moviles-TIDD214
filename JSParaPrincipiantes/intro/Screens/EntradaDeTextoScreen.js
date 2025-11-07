import { Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import React, {Component, useState} from 'react';

export default function EntradaDeTextoScreen(){
  const [nombre, setNombre] = useState('');

  const mostrarAlerta = () =>{
    if (nombre.trim() === ''){
        Alert.alert('Error','Por favor ingresa tu nombre.');
        alert('Error','Por favor ingresa tu nombre.');
    }else{
        Alert.alert(`Hola, ${nombre}!,Tu nombre ha sido registrado con éxito.`);
        alert(`Hola, ${nombre}!,Tu nombre ha sido registrado con éxito.`);

    setNombre('');
    }
    };
    
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Ingresa tu nombre: </Text>
        <TextInput 
        style={styles.input}
        placeholder="Alexis HG"
        value={nombre}
        onChangeText={setNombre}
        keyboardType="default" 
        autoCapitalize="words"
        />
        <TextInput 
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric" 
        secureTextEntry={true}
        />
        <TextInput 
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        />
        <Button
        title="saludar"
        color= "#4b40e9ff"
        onPress={mostrarAlerta}
        />
      </View>
    );

}

// 4. Estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});