
import { View, Text, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Pressable } from 'react-native';
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter()
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/images/projectpic.png')}
        >
            <View style={styles.container}>

                <Image style={styles.image} source={require('../assets/images/Logoexp.png')} />
                <View style={styles.buttonView}>
                <Text style={styles.title}>Explore a new world with us</Text>

                    <Pressable style={styles.button} onPress={() => router.push("/screens/auth/register")}>
                        <Text style={styles.Text}>Register</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => router.push("/screens/auth/login")}>
                        <Text style={styles.Text}>Login</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => alert('This is a button!')}>
                        <Text style={styles.Text}>Verder naar de app</Text>
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
    }

})



