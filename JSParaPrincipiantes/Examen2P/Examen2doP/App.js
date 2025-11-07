import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, ImageBackground, Button,  } from 'react-native';
// splashcreen, iMAGEBACKGROUND,

export default function Examen2P (){
  const [showSplash, setShowplash] = useState (true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowplash(false);
    }, 4000);

  

}, []);
 if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido</Text>
      </View>
    );
  }
   return (
    <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});