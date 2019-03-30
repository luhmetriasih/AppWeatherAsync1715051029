import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, ActivityIndicator} from 'react-native';
  
export default class Cuaca2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        city: '',
        forecast: {
            main: '',
            description: '',
            temp: 0,
            sunrise: 0,
            sunset: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0,
            speed: 0,
            loading: false,
        }
    };
}
async getWeather() {

    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=6e0aad2f88d67706d384acff392481d6&units=metric'
        );

        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level,
                speed: responseJson.wind.speed
            }
        });
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }
}

  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={{ padding: 30, fontSize: 28, color: 'black', textAlign: 'center'}} >Perkiraan Cuaca</Text>
          </View>
          <View style={styles.box2}>
              <Text style={{color: 'black', fontSize: 20}}>Masukkan Nama Kota</Text>
              <View style={styles.textInput}>
              <TextInput style={{textAlign: 'center'}} placeholder=" Masukan Nama kota " onChangeText={(city) => this.setState({ city })}/></View>
              <TouchableHighlight onPress={() => this.getWeather()}>
              {
                this.state.loading ? <ActivityIndicator color="#81C784" size="small" animating />
                : <Text style={styles.text1}>Lihat</Text>
              }
              </TouchableHighlight>      
          </View>

          <View style={styles.box3}>
            <View style={styles.box4}>
                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./temp.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Temp : { this.state.forecast.temp}</Text>
                   </View>  

                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./main.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Main : { this.state.forecast.main}</Text>
                   </View> 

                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./sunrise.png")} style={styles.image} />  
                   </View>
                <Text style={{fontSize: 12,color: 'black',}}>Sunrise : { this.state.forecast.sunrise}</Text>
                   </View>

                 <View style={styles.textInput}>
                  <View>
                       <Image source={require("./presure.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Presure : { this.state.forecast.pressure}</Text>
                   </View>  

                <View style={styles.textInput}>
                  <View>
                      <Image source={require("./sealevel.png")} style={styles.image} />
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Sea Level : { this.state.forecast.sea_level}</Text> 
                   </View>
                
              </View>

              <View style={styles.box5}>
                 <View style={styles.textInput}>
                  <View>
                      <Image source={require("./wind.png")} style={styles.image} />
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Wind Speed : { this.state.forecast.speed}</Text> 
                   </View>
                
                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./maindesc.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Main Desc : { this.state.forecast.description}</Text>
                   </View>     

                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./sunset.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Sunset : { this.state.forecast.sunset}</Text>
                   </View> 

                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./humandity.png")} style={styles.image} />  
                   </View>
                <Text style={{fontSize: 12,color: 'black',}}>Humadity : { this.state.forecast.humidity}</Text>
                   </View>

                <View style={styles.textInput}>
                  <View>
                       <Image source={require("./ground.png")} style={styles.image} />  
                  </View>
                <Text style={{fontSize: 12,color: 'black',}}>Ground Level : { this.state.forecast.grnd_level}</Text>
                   </View>
              </View>
              </View>





          <View style={styles.box6}>
              <Text style={{ padding: 15, fontSize: 15, color: 'black'}} >copyright @Metri</Text>
          </View>
 
      </View>
       );
      }
  }
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CCFFFF',
    },
    box1: {
        flex: 0.3,
        backgroundColor: '#0066CC',
        marginTop : 20,
        marginBottom : 20,
    },
    box2: {
        flex: 0.5,
        backgroundColor: '#FF6699',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
    }, 
    box3:{
      flex: 1,
      backgroundColor: '#FF6699',
      flexDirection: 'row',
      marginTop: 25,
      marginLeft: 8,
      marginRight: 8,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box4: {
      flex: 1,
      backgroundColor: '#FF6699',
      flexDirection: 'column',
      marginLeft: 8,
      marginRight: 8,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 20,

  },
    box5: {
      flex: 1,
      backgroundColor: '#FF6699',
      flexDirection: 'column',
      marginLeft: 8,
      marginRight: 8,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 20,
  },
  box6: {
    flex: 0.2,
    backgroundColor: '#0066CC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
},
    textInput: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        height: 45,
        width: 160,
        marginTop: 18,
    },
    text: {
      color: 'white',
      fontSize: 20,
      marginLeft: 20,
      marginTop: 10,
    },
    text1: {
      color: 'black',
      fontSize: 20,
      marginTop: 15,
    }, 
    image: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 25,
      width: 25,
    },
    });