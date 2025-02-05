import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntdIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
const arrow_down = <AntdIcon name='down' size={18} />
const location = <EntypoIcon name='location-pin' color={'#2958c3'} size={24} />
const bell = <EntypoIcon name='bell' color={'#000'} size={24} />
const SearchSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <View style={{flex : 1 ,flexDirection : 'row', justifyContent: 'space-between'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View> {location}</View>
            <Text style={{ fontWeight: '600', alignItems: 'center' }}>  North Karachi Sector 11-G <View>{arrow_down}</View> </Text>
          </View>
        <View>{bell}</View>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} style={styles.searchIcon}  />
          <TextInput 
          style={{width : '100%', borderRadius : 10}}
          placeholder='What atre you looking for'
          />
        </View>
      </View>
    </View>
  )
}

export default SearchSection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ccc',
    borderColor: 'black',
    borderWidth: 2,
    padding: 16
  },
  mainBox: {
    alignContent : 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 8,
    borderRadius : 8,
    gap : 10
  },
  searchContainer: {
    borderWidth : 1,
    borderColor : 'gray',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  searchIcon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#333'
  },
})