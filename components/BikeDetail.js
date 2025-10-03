import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import bike from '../database/bike'


const BikeDetail = ({ route }) => {
  const {
    name,
    price,
    originalPrice,
    discountPercent,
    description,
    image,
    isFavorite
  } = route?.params?.product;





  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
       
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountText}>
            {discountPercent} OFF {price}$
          </Text>
          <Text style={styles.originalPrice}>{originalPrice}$</Text>
        </View>

        <Text style={styles.descriptionLabel}>Description</Text>

        <Text style={styles.description}>{description}</Text>

        {/* Action buttons */}
        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={styles.heart}>{isFavorite ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BikeDetail;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 320,
    alignSelf: 'center',
    marginVertical: 20
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#ffe5e5'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  avatarContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  avatarTextContainer: {
    backgroundColor: '#ff69b4',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  content: {
    padding: 16
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  discountText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#000',
    fontWeight: '600'
  },
  descriptionLabel: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f3e5f5',
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#9c27b0'
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#555'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignItems: 'center'
  },
  heart: {
    fontSize: 24
  },
  button: {
    backgroundColor: '#f55',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }
});
