import React, {useState, useEffect}  from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';
// splashcreen, iMAGEBACKGROUND,

export default function Examen2P (){
  const [showSplash, setShowplash] = useState (true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowplash(false);
    }, 4000);
    return () => clearTimeout(timer);
}, []);
 if (showSplash) {
   return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a mi perfil</Text>
      </View>
    );
  }
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {}
      <ImageBackground
        source={{
          uri: 'https://tse3.mm.bing.net/th/id/OIP.UM9VCCoPqFyf6mrKp2-RfQHaHa?rs=1&pid=ImgDetMain&o=7&rm=300',
        }} 
        style={styles.background} 
      >
        {}
        <View style={styles.overlay}>
          {}
          <Text style={styles.title}>Alexis Hernandez Gutierrez</Text>
          <Text style={styles.title}>Ingeniero en Tecnologias de la informacion e innovacion digital</Text>
          <Text style={styles.title}>Me gusta demasiado escuchar musica en todo momento, cuando programo o investigo nuevos temas relacionados a mi carrera.</Text>
          <Text style={styles.title}>Correo:Ah9267992@gmail.com.</Text>
          <Text style={styles.title}>Numero:7122754948</Text>
          
          <Button title="Contacto" onPress={() => {}} />

        </View>
      </ImageBackground>
    </SafeAreaView>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
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