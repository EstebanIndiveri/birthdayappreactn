import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Birthday(props) {
    const{item}=props;
    return (
        <View>
            <Text>{item.name} {item.lastname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
