import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView, Alert, Platform, ScrollView } from 'react-native';

export default function Examen2P() {
  const [showSplash, setShowplash] = useState(true);

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
      <ImageBackground
        source={{
          uri: 'https://tse3.mm.bing.net/th/id/OIP.UM9VCCoPqFyf6mrKp2-RfQHaHa?rs=1&pid=ImgDetMain&o=7&rm=300',
        }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Este View es el cuadro semitransparente (Punto 3) */}
          <View style={styles.container}>
            
            <Text style={styles.name}>Alexis Hernandez Gutierrez</Text>
            <Text style={styles.profession}>Ingeniero en Tecnologías de la Información</Text>
            
            {/* Texto limpio sin etiquetas basura intermedias */}
            <Text style={styles.bio}>
              Soy un estudiante apasionado por la tecnología y el desarrollo de software,

                         <Text style={styles.name}></Text>
 
              actualmente formándome en Tecnologías de la Información e Innovación Digital. 
                          <Text style={styles.name}></Text>

              A lo largo de mi carrera, he desarrollado una sólida base en lógica de programación, 
                          //n<Text style={styles.name}></Text>

              algoritmos y creación de aplicaciones móviles. Me considero una persona autodidacta y curiosa; 
                          <Text style={styles.name}></Text>

              siempre estoy investigando sobre las últimas tendencias tecnológicas.
            </Text>
            
            <Text style={styles.contact}> Correo:Ah9267992@gmail.com</Text>
            
            <Text style={styles.contact}> Numero:7122754948</Text>

            <View style={styles.buttonContainer}>
              <Button
                title="Editar perfil"
                color="#007AFF" 
                onPress={() => {
                  if (Platform.OS === 'web') {
                    const confirmacion = window.confirm("¿Deseas guardar los cambios?");
                    confirmacion ? alert("¡Guardado!") : alert("Cancelado");
                  } else {
                    Alert.alert(
                      "Editar Perfil",
                      "¿Deseas guardar los cambios?",
                      [
                        { text: "Cancelar", style: "cancel", onPress: () => console.log("Cancelado") },
                        { text: "Guardar", onPress: () => console.log("Guardado") }
                      ]
                    );
                  }
                }}
              />
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#253964ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centra verticalmente si sobra espacio
    alignItems: 'center',     // Centra horizontalmente el contenedor
    paddingVertical: 40,      // Un poco de aire arriba y abajo
  },
  container: {
    // AQUI ESTA LA MAGIA DEL 3/4 (75%)
    width: '75%', 
    backgroundColor: 'rgba(82, 74, 74, 0.85)', // Un poco más sólido para que "se note bien"
    borderRadius: 20,         // Bordes redondeados para estética
    padding: 20,              // Relleno interno equilibrado
    alignItems: 'center',
    
    // Sombras para que resalte del fondo
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, 
  },
  profession: {
    fontSize: 45,
    color: '#add8e6', 
    textAlign: 'center',
    marginBottom: 20, 
  },
  bio: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'justify', // Justificado se ve más ordenado en bloque
    marginBottom: 90, 
    lineHeight: 24,
  },
  contact: {
    fontSize: 50,
    color: '#FFD700', // Un color dorado para que resalte el contacto
    marginBottom: 95,
  },
  buttonContainer: {
    marginTop: 250, // Reducido de 400 a 30, suficiente para separar
    width: '100%',
    marginBottom: 40,
  },
});