import React from 'react'
import { Button } from 'native-base'

export default function ButtonComponent({ buttonName, buttonHandle, style, disable }) {
  return (
    <Button
    disabled={disable}
      style={style}
      onPress={buttonHandle}
      marginBottom="10px"
    >
      {buttonName}
    </Button>
  )
}
