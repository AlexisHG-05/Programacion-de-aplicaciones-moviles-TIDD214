import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Button, Alert, Platform, SafeAreaView, StatusBar, Image } from 'react-native';

export default function ExamenFinal() {
  const [loading, setLoading] = useState(true);

  // 1. SPLASH SCREEN (3 Segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // DATOS (Array para generar las tarjetas automáticamente)
  const menu = [
    { id: 1, nombre: "Tacos al Pastor", precio: "$65.00", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400" },
    { id: 2, nombre: "Pozole Rojo", precio: "$95.00", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400" },
    { id: 3, nombre: "Enchiladas", precio: "$85.00", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
    { id: 4, nombre: "Guacamole", precio: "$50.00", img: "https://images.unsplash.com/photo-1597843786271-105124152c74?w=400" },
    { id: 5, nombre: "Churros", precio: "$40.00", img: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=400" },
  ];

  // 6. FUNCIÓN DE ORDENAR (Maneja Web y Celular)
  const ordenar = (platillo) => {
    if (Platform.OS === 'web') {
      const confirmar = window.confirm(`¿Deseas pedir ${platillo}?`);
      if (confirmar) alert("¡Orden confirmada!");
    } else {
      Alert.alert(
        "Confirmar Orden",
        `¿Deseas pedir ${platillo}?`,
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Confirmar", onPress: () => console.log("Ordenado") }
        ]
      );
    }
  };

  // VISTA DEL SPLASH
  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Bienvenido a Sabor Mexicano 🌮</Text>
      </View>
    );
  }

  // VISTA PRINCIPAL
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 2. FONDO PRINCIPAL */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000' }} 
        style={styles.fondo}
      >
        {/* 3. SCROLLVIEW (Importante: contentContainerStyle) */}
        <ScrollView contentContainerStyle={styles.scrollContenido}>
          
          {/* 4. TÍTULO */}
          <View style={styles.header}>
            <Text style={styles.titulo}>Menú del Día</Text>
          </View>

          {/* 5. TARJETAS (Mapeo) */}
          {menu.map((item) => (
            <View key={item.id} style={styles.tarjeta}>
              
              {/* Imagen del platillo */}
              <Image source={{ uri: item.img }} style={styles.imagenPlatillo} />
              
              {/* Info y Botón */}
              <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.precio}>{item.precio}</Text>
                
                <View style={styles.botonContainer}>
                  <Button 
                    title="Ordenar" 
                    color="#d35400" 
                    onPress={() => ordenar(item.nombre)} 
                  />
                </View>
              </View>

            </View>
          ))}

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// 7. ESTILOS
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#d35400', // Color naranja
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  fondo: {
    flex: 1,
    width: '100%',
  },
  scrollContenido: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.7)', // Fondo negro transparente
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tarjeta: {
    flexDirection: 'row', // Para poner imagen a la izquierda y texto a la derecha
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // 7. Blanco semitransparente
    width: '90%',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
    // Sombra simple
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  imagenPlatillo: {
    width: 80,
    height: 80,
    borderRadius: 40, // Círculo
    marginRight: 15,
  },
  infoContainer: {
    flex: 1, // Para que ocupe el resto del espacio
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  precio: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  botonContainer: {
    alignSelf: 'flex-start', // Para que el botón no se estire
  }
});