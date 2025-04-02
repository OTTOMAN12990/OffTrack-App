import { View, Text, StyleSheet, Image, ImageBackground, Pressable, TextInput } from 'react-native';


export default function Register() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../../assets/images/vliegtuig.png')}
        >
            <View style={styles.container}>

                <Image style={styles.image} source={require('../../../assets/images/Logoexp.png')} />
                <View style={styles.buttonView}>
                <Text style={styles.title}></Text>

                <TextInput style={styles.textInput}>Email Adress</TextInput>
                <TextInput style={styles.textInput}>Password</TextInput>

                    <Pressable style={styles.buttonA} onPress={() => alert('This is a button!')}>
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
        backgroundColor: "black",
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
    }
    

})
