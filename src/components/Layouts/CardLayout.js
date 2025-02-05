import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { items } from '../../config/data';
import Card from '../Card';

const CardLayout = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([])
  useEffect(() => {
    setData(items)
    const uniqueCategories = [...new Set(items.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <View key={category} style={styles.section}>
          <Text style={styles.heading}>{category}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {data
              .filter((item) => item.category === category)
              .map((item) => (
                <Card item={item} key={item.id} />
              ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

export default CardLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  horizontalScroll: {
    paddingLeft: 5,
  },
});
