import { View, Text, StyleSheet, Image, ImageBackground, Pressable, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import {useState} from 'react'

export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Fout", "Alle velden zijn verplicht.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Fout", "Wachtwoorden komen niet overeen.");
            return;
        }
        Alert.alert("Succes", "Account succesvol aangemaakt!");
        router.replace("/screens/auth/login");
    };
    return (
        
        <ImageBackground
            style={styles.background}
            source={require('../../../assets/images/vliegtuig.png')}
        >
            <View style={styles.container}>
            <TextInput
                        style={styles.textInput}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                <Image style={styles.image} source={require('../../../assets/images/Logoexp.png')} />
                <View style={styles.buttonView}>
                <Text style={styles.title}></Text>

                <TextInput style={styles.textInput}>Email Adress</TextInput>
                <TextInput style={styles.textInput}>Password</TextInput>

                    <Pressable style={styles.buttonA} onPress={() => router.push("/screens/auth/login")}>
                        <Text style={styles.Text}>Already have an accoun? Sign in</Text>
                    </Pressable>

                    <Pressable style={styles.buttonB} onPress={() => alert('This is a button!')}>
                        <Text style={styles.Text}>CREATE ACCOUNT</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: "white"
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 40

    },
    image: {
        height: 50,
        width: 150

    },
    background: {
        flex: 1,
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },
    Text: {
        fontSize: 25,
        color: "white",

    }
    ,
    button: {
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "",

    }
    , 
    buttonView: {
        gap: 10
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "",
    },
    buttonA: {
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "",
    },
    buttonB: {
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "",
    },

        background: { 
            flex: 1, 
            justifyContent: "center", 
            alignItems: "center" 
        },

        container: { 
            alignItems: "center", 
            width: "100%", 
            padding: 20 
        },

        image: { 
            width: 150, 
            height: 150, 
            marginBottom: 20 
        },

        form: { 
            width: "100%", 
            maxWidth: 350, 
            padding: 20, 
            backgroundColor: "rgba(255,255,255,0.9)", 
            borderRadius: 10 
        },

        title: { 
            fontSize: 24, 
            fontWeight: "bold", 
            textAlign: "center", 
            marginBottom: 20 
        },

        textInput: { 
            width: "100%", 
            padding: 12, 
            borderWidth: 1, 
            borderColor: "#ccc", 
            borderRadius: 8, 
            marginBottom: 10, 
            backgroundColor: "white" 
        },

        button: { 
            backgroundColor: "#007BFF", 
            padding: 12, 
            borderRadius: 8, 
            width: "100%", 
            alignItems: "center", 
            marginTop: 10 
        },

        buttonText: { 
            color: "white", 
            fontSize: 16 
        },

        linkText: { 
            color: "#007BFF", 
            extAlign: "center", 
            marginTop: 10 
        },
        

    

})
