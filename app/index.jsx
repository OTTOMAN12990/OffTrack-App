
import {View, Text, StyleSheet, Image, ImageBackground, ImageBackgroundBase} from 'react-native';

export default function App() {
    return(
        <ImageBackground
         style={styles.background} 
         source={require('../assets/images/ready.jpg')}
         >
        <View style={styles.container}>
            <Text style={styles.title}>Kiss Me Baby !!!</Text>
            <Image style={styles.image} source={require('../assets/images/sexy.jpeg')} />
        </View>
         </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "blue"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 150
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    }
})

