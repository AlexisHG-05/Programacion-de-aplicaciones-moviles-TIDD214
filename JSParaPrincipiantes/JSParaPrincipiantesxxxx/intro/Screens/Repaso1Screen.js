import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TextInput, 
    Switch, 
    Pressable, 
    Alert, 
    SafeAreaView,
    KeyboardAvoidingView,
    Platform 
} from 'react-native';

export default function Repaso1Screen() {

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000); 
        
        return () => clearTimeout(timer);
    }, []);

    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleRegistro = () => {
        if (nombreCompleto.trim() === '' || email.trim() === '') {
            Alert.alert('Error', 'Por favor completa todos los campos.');
            return;
        }

        if (!aceptaTerminos) {
            Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
            return;
        }

        Alert.alert(
            'Registro exitoso', 
            `Nombre: ${nombreCompleto}\nEmail: ${email}`
        );
        
        setNombreCompleto('');
        setEmail('');
        setAceptaTerminos(false);
    };

    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashText}>Cargando Repaso...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={{ uri: 'https://wallpapercave.com/wp/wp3850825.jpg' }}
                style={styles.background}
                resizeMode="cover" 
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <View style={styles.overlay}>
                        
                        <Text style={styles.title}>Registro de Usuario</Text>
                        
                        <Text style={styles.label}>Nombre Completo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Escribe tu nombre completo"
                            placeholderTextColor="#999"
                            value={nombreCompleto}
                            onChangeText={setNombreCompleto}
                            autoCapitalize="words"
                        />

                        <Text style={styles.label}>Correo Electrónico:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="tu.correo@ejemplo.com"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <View style={styles.switchContainer}>
                            <Text style={styles.switchLabel}>Acepto los Términos y Condiciones</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={aceptaTerminos ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={() => setAceptaTerminos(previousState => !previousState)}
                                value={aceptaTerminos}
                            />
                        </View>

                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                { opacity: pressed ? 0.6 : 1.0 }, 
                            ]}
                            onPress={handleRegistro}
                        >
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </Pressable>

                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1, 
        backgroundColor: '#000000ff',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    splashText: {
        fontSize: 24, 
        color: '#fff',
        fontWeight: 'bold',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        padding: 25,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#fff',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
    },
    switchLabel: {
        color: '#fff',
        fontSize: 15,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#4b40e9ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
