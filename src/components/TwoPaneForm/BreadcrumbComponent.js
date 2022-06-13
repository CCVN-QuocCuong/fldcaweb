import React, { useState } from 'react'
import { ScrollView, Text } from 'native-base'
import styles, { windowWidth } from '../../theme/styles'
import { TouchableWithoutFeedback } from 'react-native'
import Animated from 'react-native-reanimated'

const BreadcrumbComponent = ({
    arrayValues,
    stringConcatenation,
    featureConcat,
  }) => {
    const [isToggleBreadcrumb, setIsToggleBreadcrumb] = useState(false)

    // Get concat string when edit
    const getConcatenation = () => {
        let concatenation = ''
        if (featureConcat) {
            const valueItemConcat = arrayValues.find(p => p.key === featureConcat.name)
            if (valueItemConcat) {
                concatenation = valueItemConcat.value ? valueItemConcat.value.label : ''
            }
        }
        return concatenation
    }

    const heightBreadcrumb = isToggleBreadcrumb ? (windowWidth / 17) : null

    return (
        <Animated.View style={[styles.breadcrumbStyle, {height: heightBreadcrumb}]}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => setIsToggleBreadcrumb(!isToggleBreadcrumb)}>
                    <Text size={'md'}>{!featureConcat.hide ? (stringConcatenation ? stringConcatenation : getConcatenation()) : ''}</Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        </Animated.View>
    )
}

export default React.memo(BreadcrumbComponent)