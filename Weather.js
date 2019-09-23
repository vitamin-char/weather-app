import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        icon: 'ios-rainy',
        title: 'Rain',
        subtitle: '오늘은 비가 내려요. 우산을 꼭 챙기세요!'
    },
    Clear: {
        colors: ['#ffffff', '#6de1ff'],
        icon: 'ios-sunny',
        title: 'Clear',
        subtitle: '오늘은 맑아요'
    },
    Thunderstorm: {
        colors: ['#415b72', '#004787'],
        icon: 'ios-thunderstrom',
        title: 'Thunderstorm',
        subtitle: '오늘은 천둥 번개가 쳐요'    
    },
    Clouds: {
        colors: ['#d7dde5', '#646970'],
        icon: 'ios-cloudy',
        title: 'Clouds',
        subtitle: '오늘은 흐려요'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        icon: 'ios-snow',
        title: 'Snow',
        subtitle: 'Do you wanna build a snowman?'
    },  
    Drizzle: {
        colors: ['#d7dde5', '#c9d2d8', '#5db7fc'],
        icon: 'ios-rainy-outline',
        title: 'Drizzle',
        subtitle: '오늘은 이슬비가 내려요'
    },
    Haze: {
        colors: ['#d7dde5', '#646970'],
        icon: 'ios-cloudy',
        title: 'Haze',
        subtitle: '오늘은 흐려요'
    }
}

export default function Weather({temp, weatherName}) {
    console.log(weatherName);
    return(
        <LinearGradient
          colors={weatherCases[weatherName].colors} style={styles.container}>
         <View style={styles.upper}>
            <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
            <Text style={styles.temp}>{temp}°</Text>
         </View>
         <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
         </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

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