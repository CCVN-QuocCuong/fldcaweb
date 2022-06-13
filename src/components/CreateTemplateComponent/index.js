import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DraxProvider, DraxView } from 'react-native-drax';
import 'react-native-gesture-handler'


export default function create() {
  return (
    <View style={styles.flex}>
      <DraxProvider>
        <View style={styles.container}>
            <DraxView
                style={styles.draggable}
                onDragStart={() => {
                    console.log('start drag');
                }}
                payload="world"
            />
            <DraxView
                style={styles.receiver}
                onReceiveDragEnter={({ dragged: { payload } }) => {
                    console.log(`hello ${payload}`);
                }}
                onReceiveDragExit={({ dragged: { payload } }) => {
                    console.log(`goodbye ${payload}`);
                }}
                onReceiveDragDrop={({ dragged: { payload } }) => {
                    console.log(`received ${payload}`);
                }}
            />
        </View>
    </DraxProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor:'#fff'
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  draggable: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
  },
  receiver: {
      width: 100,
      height: 100,
      backgroundColor: 'green',
  },
});