import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{ fontSize: 24}}> Inloggen</Text>
      
                          <Pressable style={styles.buttonA} onPress={() => router.push("/screens/auth/register")}>
                              <Text style={styles.Text}>NOg geen account? Regist</Text>
                          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})