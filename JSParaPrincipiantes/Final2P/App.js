import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Button, Alert, Platform, SafeAreaView, StatusBar, Image } from 'react-native';

export default function FINAL2P() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const menu = [
    { id: 1, nombre: "Tacos al Pastor", Descripcion : "Ricos tacos de pastor acompañados con salsa y limon", Preparacion : "30m",url: " https://https://blog.amigofoods.com/wp-content/uploads/2020/12/enchiladas-verdes.jpg.mm.bing.net/th/id/OIP.cwZRZJPM916Zy_YV_10QrgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3  " },
    { id: 2, nombre: "Enchiladas Verdes", Descripcion : "Deliciosas enchiladas bañadas en salsa verde y queso fresco", Preparacion : "25m",url: "  " },
    { id: 3, nombre: "Chiles Rellenos", Descripcion : "Chiles poblanos rellenos de queso y cubiertos con salsa roja", Preparacion : "40m",url: "  " },
    { id: 4, nombre: "Pozole Rojo", Descripcion : "Sopa tradicional de maíz con carne de cerdo y salsa roja", Preparacion : "1h",url: "  " },

  ];
  const Verreceta = (Verreceta) => {
    if (Platform.OS === 'web') {
      const confirmar = window.confirm(`¿Deseas ver recesa de ${Verreceta}?`);
      if (confirmar) alert("¡Ingredientes: Carene, Toritllas, Saborizantes artificiales!");
    } 
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Bienvenido a CocinApp</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000' }} 
        style={styles.fondo}
      >
        <ScrollView contentContainerStyle={styles.scrollContenido}>
          
          <View style={styles.header}>
            <Text style={styles.titulo}>Mis RECETAS</Text>
          </View>

          {menu.map((item) => (
            <View key={item.id} style={styles.tarjeta}>
              
              <Image source={{ uri: item.img }} style={styles.imagenPlatillo} />
              
              <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.Descripcion}>Descripcion: {item.Descripcion}</Text>
                <Text style={styles.Preparacion}> Tiempo de preparacion: {item.Preparacion}</Text>
                
                
                <View style={styles.botonContainer}>
                  <Button 
                    title="Ver receta" 
                    color="#d35400" 
                    onPress={() => Verreceta(item.nombre)} 
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

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#d35400', 
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '50%',
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
    width: '50%',
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
    borderRadius: 800, // Círculo
    marginRight: 5,
  },
  infoContainer: {
    flex: 500, // Para que ocupe el resto del espacio
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  Descripcion: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  Preparacion: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  botonContainer: {
    alignSelf: 'flex-start', // Para que el botón no se estire
  }
});