//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.Main: Zona de componentes 
export default function App() {
  const[contador, setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto}>{contador}</Text>

      <Button title="Agregar" onPress={() => setContador(contador + 1)}/>

      <Button title="Quitar" onPress={() => setContador(contador - 1)}/>

      <Button title="Reiniciar" onPress={() => setContador(contador - contador)}/>



      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b92b77a9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto : {
    color: '#1a188dff',
    fontSize: 30,
  },

});