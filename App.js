import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './Weather';

const API_KEY = "5e4e625cc839f97686866a56b9861d4e";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error =>{
        this.setState({
          error: error
        });
      }
    );
  };

  _getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
      ) // 여기는 작은따옴표가 아니라 물결아이콘에 있는 그거!
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  };

  render(){
    const {isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather weatherName= {name} temp={Math.floor(temperature - 273.15)}/> : ( 
          <View style={styles.loading}> 
            <Text style={styles.loadingText}> Getting the weather</Text>
            {error ? <Text style={styles.erorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  erorText:{
    color: "red",
    backgroundColor:"transparent",
    marginBottom: 48
  },
  loading:{
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent:"flex-end",
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});
