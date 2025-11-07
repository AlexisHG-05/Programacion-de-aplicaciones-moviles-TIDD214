import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import EntradaDeTextoScreen from './EntradaDeTextoScreen'
import BotonInferiorScreen from './BotonInferiorScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import Repaso1Screen from './Repaso1Screen' 
import ScrollViewScreen from './ScrollViewScreen'
import ActivarIndicadorScreen from './ActivarIndicadorScreen'
import LoginScreen from './LoginScreen'
import RegistroScreen from './RegistroScreen'

export default function MenuScreen () {

    const[screen,setScreen]= useState('menu');

    switch(screen){
        case 'Repaso1' :
            return <Repaso1Screen />;
        case 'Registro' :
            return <RegistroScreen />;
        case 'Login' :
            return <LoginScreen />;
        case 'BotonInferior' :
            return <BotonInferiorScreen/>;
        case 'ActivarIndicador' :
            return <ActivarIndicadorScreen/>; 
        case 'ScrollView ' :
            return <ScrollViewScreen/>;
        case 'ImageBackground' :
            return <ImageBackgroundScreen/>;
        case 'EntradaDeTexto' :
            return <EntradaDeTextoScreen/>;
        case 'botones':
        return <BotonesScreen/>;
        case 'contador' :
            return <ContadorScreen/>;
        case 'menu':
        default:
            return (
                <View style={styles.container}> 
                       <Text style={styles.titulo}>Menu de practicas</Text>
                    
                         
         <View style={styles.contenedorBotones}>
       
    <Button onPress={()=>setScreen('contador')} title='Pract:Contador' />
        <Button onPress={()=>setScreen('botones')} title='Pract:Buttons & switch' />
         <Button onPress={()=>setScreen('EntradaDeTexto')} title='Pract:Text Input & Alert' />
            <Button onPress={()=>setScreen('ImageBackground')} title='Pract: ImageBackground & SlapshScreen ' />
                <Button onPress={()=>setScreen('ScrollView ')} title='Pract:ScrollView' />
                    <Button onPress={()=>setScreen('ActivarIndicador')} title='Pract:ActivityIndicator' />
                         <Button onPress={()=>setScreen('Flatlist')} title='Pract:FlatList y Section List' />
                             <Button onPress={()=>setScreen('Modal')} title='Pract:Modal' />
                                 <Button onPress={()=>setScreen('BotonInferior')} title='Pract:Bottom Sheet' />
                                     <Button onPress={()=>setScreen('Repaso1')} title='Pract:Repaso1' />
                                        <Button onPress={()=>setScreen('Login')} title='Login' />
                                             <Button onPress={()=>setScreen('Registro')} title='Registro' />
        </View>
        </View>

    )

    }
    
  }
const styles = StyleSheet.create({
container: {
    flex: 1, //Asignar espacio disponible en la vista 
    backgroundColor: '#746e6eff', //Color de fondo
    alignItems: 'center', //Centrado
    justifyContent: 'center', //Justificacion del texto 
    },
titulo:{
color:'#fafafaff',
fontSize:50,
fontFamily: 'white',
fontWeight: 'bold',
fontStyle: 'italic',
textDecorationLine: '',
marginBottom:20,
},
texto2:{
color:'#d1c5c5ff',
fontSize:79,
fontFamily: 'Arial',
fontWeight: '900',
textDecorationLine: 'underline',
},
contenedorBotones:{
marginTop:30,
flexDirection: 'center',
gap: 15,
}
 }
);

