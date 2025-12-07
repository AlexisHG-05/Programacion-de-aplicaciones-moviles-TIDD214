import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, Button, Alert, Platform, SafeAreaView, StatusBar } from 'react-native';

export default function GaleriaApp() {
  const [showSplash, setShowSplash] = useState(true);

  // REQUERIMIENTO 1: SplashScreen de 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Datos de las 6 fotos (Requerimiento 3 y 4)
  const imagenes = [
    {
      id: 1,
      titulo: "Montañas Nevadas",
      descripcion: "Vista de los alpes.",
      detalle: "Una impresionante vista panorámica de las montañas nevadas durante el invierno, ideal para el esquí y el alpinismo.",
      url: "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      titulo: "Playa Tropical",
      descripcion: "Atardecer en el mar.",
      detalle: "Disfruta de la tranquilidad de las olas golpeando suavemente la arena blanca mientras el sol se pone en el horizonte.",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      titulo: "Bosque Místico",
      descripcion: "Naturaleza verde.",
      detalle: "Un denso bosque lleno de árboles antiguos y neblina matutina, hogar de diversa flora y fauna silvestre.",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      titulo: "Ciudad Nocturna",
      descripcion: "Luces de neón.",
      detalle: "La vida nocturna en la gran ciudad, iluminada por rascacielos y luces de neón que nunca duermen.",
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      titulo: "Desierto Dorado",
      descripcion: "Dunas de arena.",
      detalle: "El inmenso desierto con sus dunas doradas bajo el sol abrasador, un paisaje minimalista y poderoso.",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      titulo: "Espacio Exterior",
      descripcion: "Estrellas y galaxias.",
      detalle: "Una mirada a lo desconocido, nebulosas y estrellas lejanas que nos recuerdan lo vasto que es el universo.",
      url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // REQUERIMIENTO 5: Función para mostrar el Alert con detalles
  const verDetalles = (item) => {
    if (Platform.OS === 'web') {
      alert(`Título: ${item.titulo}\n\nDetalles: ${item.detalle}`);
    } else {
      Alert.alert(
        item.titulo,       // Título del Alert (Nombre de la foto)
        item.detalle,      // Mensaje (Descripción extendida)
        [{ text: "Cerrar", style: "cancel" }] // Botón Cerrar
      );
    }
  };

  // Renderizado del Splash
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a mi Galería</Text>
        <Text style={{color:'#ccc'}}>Cargando fotos...</Text>
      </View>
    );
  }

  // Renderizado Principal
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      
      {/* REQUERIMIENTO 2: Título en pantalla principal */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi Galería</Text>
      </View>

      {/* REQUERIMIENTO 3: ScrollView Vertical */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Mapeo de las 6 tarjetas */}
        {imagenes.map((item) => (
          <View key={item.id} style={styles.card}>
            
            {/* REQUERIMIENTO 4: ImageBackground */}
            <ImageBackground 
              source={{ uri: item.url }} 
              style={styles.cardImage}
              imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
            >
            </ImageBackground>

            <View style={styles.cardContent}>
              {/* REQUERIMIENTO 4: Título y Descripción breve */}
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardDesc}>{item.descripcion}</Text>
              
              {/* REQUERIMIENTO 4: Botón "Ver detalles" */}
              <View style={styles.buttonContainer}>
                <Button 
                  title="Ver detalles" 
                  color="#2196F3"
                  onPress={() => verDetalles(item)} 
                />
              </View>
            </View>
          </View>
        ))}

        {/* Espacio final para asegurar scroll */}
        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
}

// REQUERIMIENTOS 6 y 7: Estilos consistentes y espaciado
const styles = StyleSheet.create({
  // Splash Styles
  splashContainer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Main Container
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Fondo gris claro para contraste
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  // Estilos de la Tarjeta (Consistentes)
  card: {
    width: '90%', // Ocupa el 90% del ancho
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20, // Espaciado entre tarjetas (Req 7)
    
    // Sombra para dar efecto de tarjeta
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150, // Altura fija para consistencia
    justifyContent: 'flex-end',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden', // Para que el botón respete el borde redondeado en Android
  }
});