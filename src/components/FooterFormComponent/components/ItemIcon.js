/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { ConstFooter, ConstScreenName } from '../../../config'
import styles from '../../../theme/styles'

ItemIcon.propTypes = {
  iconName: PropTypes.string
}

export default function ItemIcon({
  iconName,
  isShow,
  typeScreen,
  currentIndex,
  maxFeatureLength,
  checkCondition,
  setCheckCondition,
  isRequiredAdd
}) {
  const isDisabled = 'rgba(0,0,0,0.3)'

  /**
   *  Render icon for List icon
   */
  const RenderIcon = () => {
    let editIconStatus = isShow && ConstScreenName.GridForm === typeScreen ? null : isDisabled
    let addIconStatus = ConstScreenName.AddForm === typeScreen ? null : isDisabled

    useEffect(() => {
      setCheckCondition(editIconStatus === null || addIconStatus === null)
    }, [editIconStatus, addIconStatus])

    switch (iconName) {
      case ConstFooter.LIST_ICON.ARROW_LEFT:
        checkCondition = (currentIndex > 0 && ConstScreenName.AddForm === typeScreen) || (ConstScreenName.GridForm === typeScreen)
        addIconStatus = (currentIndex > 0 && ConstScreenName.AddForm === typeScreen) || (ConstScreenName.GridForm === typeScreen) ? null : isDisabled
        useEffect(() => {
          setCheckCondition(checkCondition)
        }, [checkCondition])
      
        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="arrow-left-bold" style={[styles.iconFooterStyleMD, { color: addIconStatus }]} />

      case ConstFooter.LIST_ICON.ADD:
        useEffect(() => {
          setCheckCondition(true)
        }, [])
        return <AntDesign type="AntDesign" name="addfile" style={[styles.iconFooterStyleSM]} />

      case ConstFooter.LIST_ICON.EDIT:
        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="square-edit-outline" style={[styles.iconFooterStyleSM, { color: editIconStatus }]} />


      case ConstFooter.LIST_ICON.DELETE:
        return <AntDesign type="AntDesign" name="delete" style={[styles.iconFooterStyleSM, { color: ConstScreenName.AddForm === typeScreen ? addIconStatus : editIconStatus }]} />
      
      case ConstFooter.LIST_ICON.COPY:
        return <AntDesign type="AntDesign" name="copy1" style={[styles.iconFooterStyleSM, { color: editIconStatus }]} />

      case ConstFooter.LIST_ICON.UPLOAD:
        return <Ionicons type="Ionicons" name="cloud-upload-outline" style={[styles.iconFooterStyleMD, { color: editIconStatus }]} />

      case ConstFooter.LIST_ICON.ARROW_RIGHT:
        addIconStatus = (currentIndex !== (maxFeatureLength - 1)) && ConstScreenName.AddForm === typeScreen ? null : isDisabled
        useEffect(() => {
          setCheckCondition(editIconStatus === null || ((currentIndex !== (maxFeatureLength - 1)) && ConstScreenName.AddForm === typeScreen))
        }, [editIconStatus])

        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="arrow-right-bold" style={[styles.iconFooterStyleMD,
        { color: ConstScreenName.AddForm === typeScreen ? addIconStatus : editIconStatus }]} />

      case ConstFooter.LIST_ICON.CHECK:
        addIconStatus = isRequiredAdd ? null : isDisabled
        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="check-circle" style={[styles.iconFooterStyleSM,
          { color: ConstScreenName.AddForm === typeScreen ? addIconStatus : editIconStatus }]} />

      case ConstFooter.LIST_ICON.KEYBOARD:
        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="keyboard-outline" style={[styles.iconFooterStyleMD]} />

      case ConstFooter.LIST_ICON.PEN_LOCK:
        return <MaterialCommunityIcons type="MaterialCommunityIcons" name="pen-lock" style={[styles.iconFooterStyleSM]} />

      case ConstFooter.LIST_ICON.LOCATION:
        return <Entypo type="Entypo" name="location" style={[styles.iconLocationStyle]} />
        
      case ConstFooter.LIST_ICON.CREATE_CHILD:
        return <Ionicons type="Ionicons" name="people" style={[styles.iconFooterStyleMD, { color: editIconStatus }]} />

      case ConstFooter.LIST_ICON.SAVE_LOCAL:
        return <Ionicons type="Ionicons" name="cloud-upload-outline" style={[styles.iconFooterStyleSM, { color: editIconStatus }]} />

      default:
        return true
    }
  }

  return <RenderIcon />
}