import { StyleSheet, Text, View, Button, FlatList, Touchable } from 'react-native';
import bike from "../database/bike"
import BikeItem from "./BikeItem"

export default function BikeList() {
  return (
    <View>

    <View>
      <Text style={styles.title}> The World's Best Bike </Text>

      <View style={styles.buttonList}>
        <Button title="All" color="red">
        </Button>
        <Button title="RoadBike" color="red">
        </Button>
        <Button title="Mountain" color="red">
        </Button>
      </View> 
    </View>

  <View>
    <FlatList
      data={bike}
      renderItem={({item}) => <BikeItem product={item} />}
      numColumns={2}
     />

  </View>

    </View>
  )

}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    textAlign: "left",
    color: "red"
  },

  buttonList: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 35
  },
})