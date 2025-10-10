//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


//2.Main: Zona de componentes 
export default function ContadorScreen() {
  const[contador, setContador]=useState(0);

  return (
    <View style={styles.container}> 
      <Text style={styles.texto}>Contador: </Text> 
      <Text style={styles.texto2}>{contador}</Text> 


      <View style={styles.contenedorBotones}>
      <Button color="blue"title="Agregar" onPress={() => setContador(contador + 1)}/>

      <Button color="red" title="Quitar" onPress={() => setContador(contador - 1)}/>

      <Button color="green" title="Reiniciar" onPress={() => setContador(contador - contador)}/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, //Asignar espacio disponible en la vista 
    backgroundColor: '#331296ff', //Color de fondo
    alignItems: 'center', //Centrado
    justifyContent: 'center', //Justificacion del texto 
  },
texto:{
color:'#fafafaff',
fontSize:30,
fontFamily: 'Time New Roman',
fontWeight: 'bold',
fontStyle: 'italic',
textDecorationLine: 'line-through',
},
texto2:{
color:'#ffffffff',
fontSize:40,
fontFamily: 'Arial',
fontWeight: '900',
textDecorationLine: 'underline',
},
contenedorBotones:{
marginTop:15,
flexDirection: 'row',
gap: 10,
},

});