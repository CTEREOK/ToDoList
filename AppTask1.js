import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Image,} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

export default function App() {
  const handleButtonPress = () => alert("Всплывающие окно");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start {"/n"} working on your app!</Text>
      <Text style={styles.text}>Create app!</Text>
      <Button
      onPress={handleButtonPress}
      title="Learn Mode"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      <Image style={styles.tinyLogo} source={require("./assets/icon.png")}/>
      <TouchableHighlight onPress={handleButtonPress}>
        <Image 
        source={{
          with: 200,
          height: 150,
          uri: "https://w.forfun.com/fetch/56/5656d35727009cabea6ce7997389702с.jpeg",
         }}/>
      </TouchableHighlight>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "green",
    fontSize: "30px",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
