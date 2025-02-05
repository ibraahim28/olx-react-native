import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = ({data}) => {
  return (
    <View>
        <View>
          <Image source={data.image} alt={data.name} />
        </View>
        <View>
          <View>
            <Text>{data.title}</Text>
          </View>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})