import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'
import SearchSection from '../SearchSection'
import CardLayout from './CardLayout'
import HeroSection from '../HeroSection'

const HomeLayout = () => {
    return (
        <ScrollView>
            <View>
                <Header />
                <SearchSection />
                <HeroSection />
                <CardLayout />
            </View>
        </ScrollView>
    )
}

export default HomeLayout

const styles = StyleSheet.create({
    container: { flex: 1 }
})