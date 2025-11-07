import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function BotonInferiorScreen() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Bottom Sheet" color='#2558e4ff' onPress={() => setIsVisible(true)} />

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={styles.modal}
          backdropColor="black"
          backdropOpacity={0.5}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Botton Sheet </Text>
          <Text>Boton creado con Bottom Sheet </Text>
          <View style={{ marginTop: 50}}>
          <Button title="Cerrar" color='pink' onPress={() => setIsVisible(false)} />
        </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: 'Times New Roman',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#258580ee',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0.5
  },
  sheet: {
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    borderColor: '#dd2e8e34',
  },
  title: {
    fontSize: 50,
    fontWeight: 'Arial',
    color: 'black',
    marginBottom: 14,
    
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});