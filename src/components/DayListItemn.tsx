import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type propTypes = {
    day?:string
}

const DayListItemn = ({day}:propTypes) => {
  return (
    <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </Pressable>
    </Link>
  )
}

export default DayListItemn

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#F9EDE3',
        flex:1,
        aspectRatio:1,
        borderRadius:30,
        borderWidth:StyleSheet.hairlineWidth,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#9b4521'
    },
    text:{
        color: '#9b4521',
        fontSize:50,
        fontFamily: 'Amatic',
    }
})