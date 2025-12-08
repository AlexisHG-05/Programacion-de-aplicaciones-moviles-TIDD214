import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert, Platform, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

  // --- DATOS: Aquí definimos las 3 Secciones con 2 Artículos cada una (Req 2 y 3) ---
  const portalData = [
    {
      categoria: " Deportes",
      articulos: [
        {
          id: 1,
          titulo: "México gana la Copa Oro",
          fecha: "08 Dic 2025",
          resumen: "En un partido cardíaco que se definió en penales, la selección nacional logró levantar el trofeo ante un estadio lleno.",
          imagen: "https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?w=500"
        },
        {
          id: 2,
          titulo: "Récord en Maratón",
          fecha: "07 Dic 2025",
          resumen: "El corredor keniano rompió su propia marca mundial por 30 segundos en el maratón de Berlín este fin de semana.",
          imagen: "https://images.unsplash.com/photo-1552674605-5d226f5abdff?w=500"
        }
      ]
    },
    {
      categoria: " Tecnología",
      articulos: [
        {
          id: 3,
          titulo: "Nuevo Chip cuántico",
          fecha: "06 Dic 2025",
          resumen: "Científicos revelan un procesador capaz de realizar cálculos complejos en milisegundos, revolucionando la IA.",
          imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500"
        },
        {
          id: 4,
          titulo: "Gafas de VR ligeras",
          fecha: "05 Dic 2025",
          resumen: "Lanzan al mercado las nuevas gafas de realidad virtual que pesan lo mismo que unos lentes de sol normales.",
          imagen: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=500"
        }
      ]
    },
    {
      categoria: " Entretenimiento",
      articulos: [
        {
          id: 5,
          titulo: "Estreno de Blockbuster",
          fecha: "04 Dic 2025",
          resumen: "La película más esperada del año rompe récords de taquilla en su primer fin de semana de estreno mundial.",
          imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
        },
        {
          id: 6,
          titulo: "Concierto Masivo",
          fecha: "03 Dic 2025",
          resumen: "Más de 100,000 personas se reunieron en el zócalo para disfrutar del concierto gratuito de la banda del momento.",
          imagen: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?w=500"
        }
      ]
    }
  ];

  // --- FUNCIÓN DE ALERTA (Req 4 y 5) ---
  const handleLeerMas = (articulo) => {
    // Verificación para Web
    if (Platform.OS === 'web') {
      alert(`📰 ${articulo.titulo}\n\n(En celular verías botones: Compartir, Guardar, Cerrar)`);
    } else {
      // Alerta Nativa con 3 Opciones
      Alert.alert(
        articulo.titulo, // Título del artículo
        "Selecciona una acción", // Mensaje
        [
          { text: "Compartir", onPress: () => console.log("Compartido") },
          { text: "Guardar", onPress: () => console.log("Guardado") },
          { text: "Cerrar", style: "cancel" } // Botón de cierre
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1a237e" />
      
      {/* 1. ENCABEZADO FIJO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Noticias UPQ 🌎</Text>
      </View>

      {/* 2. SCROLLVIEW PRINCIPAL */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Mapeamos las Secciones */}
        {portalData.map((seccion, index) => (
          <View key={index} style={styles.seccionContainer}>
            
            {/* Título de la Sección (Deportes, Tec, etc.) */}
            <View style={styles.seccionHeader}>
              <Text style={styles.seccionTitle}>{seccion.categoria}</Text>
            </View>

            {/* Mapeamos los 2 Artículos de cada sección */}
            {seccion.articulos.map((articulo) => (
              <View key={articulo.id} style={styles.card}>
                
                {/* 3. IMAGEN RELACIONADA */}
                <Image source={{ uri: articulo.imagen }} style={styles.cardImage} />
                
                <View style={styles.cardContent}>
                  {/* 3. DATOS DEL ARTÍCULO */}
                  <Text style={styles.cardTitle}>{articulo.titulo}</Text>
                  <Text style={styles.cardDate}>{articulo.fecha}</Text>
                  <Text style={styles.cardSummary} numberOfLines={3}>
                    {articulo.resumen}
                  </Text>

                  {/* 3 y 4. BOTÓN "LEER MÁS" */}
                  <View style={styles.buttonContainer}>
                    <Button 
                      title="Leer más" 
                      color="#3949ab" 
                      onPress={() => handleLeerMas(articulo)} 
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={{height: 30}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  // Estilos del Encabezado (Req 1)
  header: {
    backgroundColor: '#1a237e', // Azul oscuro institucional
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  scrollContent: {
    padding: 15,
  },
  // Estilos de Sección
  seccionContainer: {
    marginBottom: 25,
  },
  seccionHeader: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a237e',
    marginBottom: 10,
    paddingBottom: 5,
  },
  seccionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  // Estilos de Tarjeta (Req 3 y 6)
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15, // Espaciado adecuado (Req 7)
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  cardSummary: {
    fontSize: 14,
    color: '#424242',
    marginBottom: 15,
    lineHeight: 20,
  },
  buttonContainer: {
    alignSelf: 'flex-start', // El botón no se estira
  }
});