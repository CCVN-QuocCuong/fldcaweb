import React from 'react'
import {View, Text} from 'native-base'
import strings from '../config/strings'
import { StyleSheet } from 'react-native'

export default function ToastDialogComponent() {
  return (
    <View>
        <Text size='sm' style={styles.toast}>{strings.warningLimitCharacters}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    toast:{
      position:'absolute',
      bottom:0,
      zIndex:10,
      backgroundColor: '#f0f0f0',
      color:'red',
      alignSelf:'center',
      borderRadius:5,
      paddingHorizontal:15,
    }
  })
  