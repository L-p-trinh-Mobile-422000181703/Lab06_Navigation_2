import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetExample from './components/AssetExample';
import BikeList from './components/BikeList'
import BikeDetail from './components/BikeDetail'
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A preminum online store for sportter and their stylish store
      </Text>
      <Card style={styles.card}>
        <AssetExample />
      </Card>
       <Text style={styles.title}>
        POWERBIKE SHOP
      </Text>

      <Button title="Get Started" color="red" onPress={() => {
        navigation.navigate("BikeList")
      }}> 
      </Button>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BikeList" component={BikeList} />
      <Stack.Screen name="BikeDetail" component={BikeDetail} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
     <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    width: 150,
    margin: "auto",
    marginTop: 26,
    marginBottom: 26,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    width: 320,
    height: 300,
    borderRadius: 100,
  }
});
