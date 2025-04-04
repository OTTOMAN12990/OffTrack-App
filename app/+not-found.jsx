import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NotFoundScreen() {
const router = useRouter();
return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Text style={{ fontSize: 24 }}>🚫 Pagina niet gevonden</Text>
<Button title="Terug naar Home" onPress={() => router.replace("/")} />
</View>
);
}