import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native';
const BikeItem = ({ product }) => {
  console.log(product)
  const {
    id,
    name,
    price,
    originalPrice,
    discountPercent,
    description,
    image,
    isFavorite,
  } = product;
  const navigation = useNavigation();

  return (
    <TouchableOpacity  style={styles.card} onPress={()=>{navigation.navigate("BikeDetail",{product:product})}}>
      <View style={styles.image}>
        <Image style={{
          width: "60%",
          height: 150,
          margin: "auto",
          justifyContent: 'center',
          alignContent: 'center'
        }}  source={image} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.priceRow}>
          {discountPercent && originalPrice ? (
            <>
              <Text style={styles.discount}>{discountPercent} OFF ${price}</Text>
              <Text style={styles.originalPrice}>${originalPrice}</Text>
            </>
          ) : (
            <Text style={styles.price}>${price}</Text>
          )}
        </View>
    </View>
    </TouchableOpacity>
  );
};

export default BikeItem;


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#fdd',
    width: '45%',
    height: 300,
    cursor: "pointer"
  },
  image: {
    width: '100%',
    height: 220,
    objectFit: "cover",
    backgroundColor: '#fdd',
  },
  content: {
    padding: 16,
    alignItems: "center",
    textAlign: "center"
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  discount: {
    fontSize: 14,
    color: 'green',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 10,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  }
});
