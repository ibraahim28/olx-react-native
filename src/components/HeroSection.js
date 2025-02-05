import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View>
     <Image source={require('../assets/images/hero-banner.jpg')}  />
     </View>
     
    </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : 'white',
        marginTop : 10,
        marginBottom : 10,
    }
})