import React from 'react'
import {
    Spinner,
    AlertDialog,
    Center,
    HStack,
    Heading
} from 'native-base'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'

function LoadingDialog() {
    return (
        <Center>
            <AlertDialog isOpen >
                <AlertDialog.Content style={styles.content}>
                    <HStack space={5} alignItems="center" style={styles.styleHStack}>
                        <Spinner color="indigo.500"  size="lg" accessibilityLabel="Loading posts" />
                        <Heading color="indigo.500" fontSize='lg'>
                            Please, wait...
                        </Heading>
                    </HStack>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    )
}
  
export default function LoadingDialogComponent() {
    const isLoading = useSelector(state => state.app.isProcessing)
    if (isLoading) return <LoadingDialog />
    return null
}

const styles = StyleSheet.create({
    content: { 
        width: 300 , 
        height: 100, 
        alignContent: 'center'
    },
    styleHStack: { 
        padding: 10
    }
})

