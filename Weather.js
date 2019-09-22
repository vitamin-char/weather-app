import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

export default function Weather() {
    return(
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
         <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>35</Text>
         </View>
         <View style={styles.lower}>
            <Text style={styles.title}>Raining</Text>
            <Text style={styles.subtitle}>For more info look outside</Text>
         </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    upper:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    temp:{
        fontSize: 38,
        backgroundColor: "transparent",
        color:"white",
        marginTop: 10
    },
    lower:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        fontWeight: "300",
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 10
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 24
    }
})