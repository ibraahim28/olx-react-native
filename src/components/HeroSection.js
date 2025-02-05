import { StyleSheet, Image, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../config/data';
const HeroSection = () => {
  const [allcategories, setAllcategories] = useState([categories])

  const RenderCatagory = ({ item }) => {
    return (
      <View>
        <View>
          <Image source={item.image} alt={item.title} />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/hero-banner.jpg')} />
      </View>
      <View>
        <FlatList
          data={allcategories}
          renderItem={RenderCatagory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  }
})