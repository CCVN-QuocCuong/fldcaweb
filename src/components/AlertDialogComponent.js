/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { Alert, AlertDialog, Button, Center, HStack, Text } from 'native-base'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { colorWhite } from '../theme/styles'
import { WARNING_NOTIFI } from '../config/constants'

AlertDialogComponent.propTypes = {
    title: PropTypes.string,
    msg: PropTypes.string,
    action: PropTypes.func,
    isShowDialog: PropTypes.bool,
    setIsShowDialog: PropTypes.func,
    cancel: PropTypes.bool,
}

export default function AlertDialogComponent({
    title, msg, action, isShowDialog, setIsShowDialog, cancel, actionCancel, textButtonOk, textButtonCancel, statusAlert = WARNING_NOTIFI
}) {

    const [isOpen, setIsOpen] = useState(isShowDialog)

    const onClose = () => {
        if(actionCancel) actionCancel()
        setIsOpen(false)
        setIsShowDialog(false)
    }
    const onClickOK = () => {
        if(action) action()
        setIsOpen(false)
        setIsShowDialog(false)
    }

    return (
        <Center>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialog.Content style={styles.content}>
                    <AlertDialog.CloseButton style={styles.closeStyle} />
                    <Alert status={statusAlert}>
                        <HStack space={2} style={styles.headerStyle}>
                            <Alert.Icon />
                            <Text color="coolGray.800">
                                {title}
                            </Text>
                        </HStack>
                    </Alert>
                    {msg && (<AlertDialog.Body style={styles.bodyStyle}>
                        <Text size={'sm'}>
                            {msg}
                        </Text>
                    </AlertDialog.Body>)}
                    <AlertDialog.Footer style={styles.footerStyle}>
                        <Button.Group space={2}>
                            {cancel ? (
                                <Button
                                    variant='solid'
                                    onPress={onClose}
                                >
                                    {textButtonCancel ? textButtonCancel : 'Cancel'}
                                </Button>
                            ) :  <Text />}
                            <Button
                                variant='confirm'
                                onPress={onClickOK}
                                _text={
                                    {color: colorWhite}
                                }
                            >
                                {textButtonOk ? textButtonOk : 'OK'}
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '80%',
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 10
    },
    closeStyle: {
        paddingVertical: 37,
        paddingRight: 40
    },
    bodyStyle: {
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: -20
    },
    headerStyle:{
        width: '80%',
        alignItems:'center'
    },
    footerStyle:{
        paddingRight: 0
    }
})