import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { Switch, TouchableWithoutFeedback } from 'react-native-web';

export default function App() {

  const [accion, setAccion] = useState('nada');
  const [isDisabled, setIsDisabled] = useState(false);
  
  return (
    <View style={styles.container}>
      <Text>
        Activado:
      </Text>

      <Switch
        onValueChange={(valor) => setIsDisabled(!isDisabled)}
        value={isDisabled}
      />


      <Text>
        {accion}
      </Text>
      <Pressable
        onPressIn={() => setAccion('Pressable In')}

        onPressOut={() => setAccion('Pressable Out')}

        onPressLong={() => setAccion('Pressable Long')}
        disable={isDisabled}
      >

        {({ pressed }) => (



          <View style={[styles.card, !pressed && styles.shadow]}>
            <View style={[styles.mockImage]} />
            <Text>
              {pressed ? 'Tarjeta presionada' : 'Tarjeta no precionada'}
            </Text>

          </View>

        )}
      </Pressable>

      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => setAccion('Pressable Long')}
        disable={isDisabled}
      >
        <View style={[styles.card, styles.shadow]}>
          <View style={styles.mockImage} />
          <Text>
            Esta es una tarjeta
          </Text>

        </View> 
      </TouchableOpacity>


      <TouchableWithoutFeedback
        onPress={() => setAccion('Without Fedback')}
        disable={isDisabled}
      >
        <View style={[styles.card, styles.shadow]}>
          <View style={styles.mockImage} />
          <Text>
            Esta es una tarjeta
          </Text>
        </View>
      </TouchableWithoutFeedback>
    
    </View>

  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 250,
    padding: 20,
    display: "flex",
    flexDirection: 'column',
    borderRadius: 8,
    margin: 15
  },
  mockImage: {
    flex: 1,
    backgroundColor: 'gray',
    marginBottom: 8,
    borderRadius: 8
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: 
    { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
});