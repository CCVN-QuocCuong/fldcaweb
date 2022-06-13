import {StyleSheet, Dimensions, Platform} from 'react-native'

export const windowWidth = Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height
export const colorActive = '#343473'
export const colorDarkGray = '#595959'
export const colorWhite = '#fff'
export const colorUnderlay = '#DDDDDD'

const ICON_SIZE_FOOTER = 33
const ICON_SIZE_LOCATION = 40
const ICON_SIZE_HEADER = 20
const ICON_SIZE_FOOTER_SM = 35
const ICON_SIZE_FOOTER_MD = 30
const FONT_SIZE_IOS = 14
const FONT_SIZE_MD = 48
const FONT_SIZE_ICON_ITEM_IOS = 22
const FONT_SIZE_ICON_ITEM_ANDROID = 20
const FONT_SIZE_ICON_ITEM_PANE_IOS = 28
const FONT_SIZE_ICON_ITEM_PANE_ANDROID = 26
const FONT_SIZE_ICON_BUTTON_IOS = 50
const FONT_SIZE_ICON_BUTTON_ANDROID = 48
const FONT_SIZE_ICON_VALID_FEATURE_ANDROID = 33
const MIN_HEIGHT_BREAD_CRUM = 17
const BG_HEADER = '#151147'
const FONT_SIZE_LEFT_PANEL_ANDROID = 48
const FONT_SIZE_LEFT_PANEL_IOS = 48

const styles = StyleSheet.create({
  hStackHeaderStyle: {
    backgroundColor: BG_HEADER,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconSizeHeader: {
    fontSize: windowWidth / ICON_SIZE_HEADER,
  },
  iconFooterStyleSM: {
    fontSize: windowWidth / ICON_SIZE_FOOTER_SM,
  },
  iconFooterStyleMD: {
    fontSize: windowWidth / ICON_SIZE_FOOTER_MD,
  },
  iconFooterStyle: {
    fontSize: windowWidth / ICON_SIZE_FOOTER,
  },
  iconLocationStyle: {
    fontSize: windowWidth / ICON_SIZE_LOCATION,
  },
  textHeaderStyle: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'lato-semibold' : 'Lato_semibold',
    fontSize: Platform.OS === 'ios' ? windowWidth / 40 : windowWidth / 40,
    height: Platform.OS === 'ios' ? windowWidth / 30 : windowWidth / 28,
  },
  boxQickPickStyle: {
    fontSize:
      Platform.OS === 'ios' ? FONT_SIZE_IOS : windowWidth / FONT_SIZE_MD,
    fontWeight: '400',
  },
  iconAddItemStyle: {
    fontSize: windowWidth / FONT_SIZE_ICON_ITEM_ANDROID,
  },
  iconMenuItemStyle: {
    fontSize:
      Platform.OS === 'ios'
        ? windowWidth / FONT_SIZE_ICON_ITEM_IOS
        : windowWidth / FONT_SIZE_ICON_ITEM_ANDROID,
  },
  hintStyle: {
    paddingLeft: 15,
    color: 'gray',
    paddingTop: 5,
    fontStyle: 'italic',
  },
  messageStyle: {
    paddingLeft: 15,
    color: '#d60000',
    fontStyle: 'italic',
    paddingRight: 20,
    paddingBottom: 5,
  },
  iconButton: {
    fontSize:
      Platform.OS === 'ios'
        ? windowWidth / FONT_SIZE_ICON_BUTTON_IOS
        : windowWidth / FONT_SIZE_ICON_BUTTON_ANDROID,
  },
  iconItemPane: {
    fontSize:
      Platform.OS === 'ios'
        ? windowWidth / FONT_SIZE_ICON_ITEM_PANE_IOS
        : windowWidth / FONT_SIZE_ICON_ITEM_PANE_ANDROID,
  },
  breadcrumbStyle:{
    minHeight: windowWidth / MIN_HEIGHT_BREAD_CRUM,
    paddingVertical: Platform.OS === 'ios' ? windowWidth / 70 : windowWidth / 80 ,
    maxHeight: '30%',
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical:3
  },
  selectOptionStyle:{
    minHeight: windowWidth / MIN_HEIGHT_BREAD_CRUM,
    paddingVertical: Platform.OS === 'ios' ? windowWidth / 70 : windowWidth / 80 ,
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical:3,
    alignItems:'center',
    justifyContent:'space-between'
  },
  textBreadcrumb: {
    alignSelf: 'center',
  },
  widthGridTime: {
    width: '10%',
  },
  widthGrid: {
    flex: 1,
  },
  validFeature: {
    fontSize: windowWidth / FONT_SIZE_ICON_VALID_FEATURE_ANDROID,
    color: '#7ECE19',
  },
  inValidFeature: {
    fontSize: windowWidth / FONT_SIZE_ICON_VALID_FEATURE_ANDROID,
    color: '#F10203',
  },
  iconShort: {
    fontSize: windowWidth / 50,
  },
  textInputStyle:{
    paddingVertical: 5,
    fontSize:
    Platform.OS === 'ios'
      ? windowWidth / FONT_SIZE_LEFT_PANEL_IOS
      : windowWidth / FONT_SIZE_LEFT_PANEL_ANDROID,

  },
  rightPaneChildMultipick: {
    minHeight: windowWidth / 29,
    maxHeight: '20%',
    borderWidth: 0.5,
    borderColor: '#d4d4d4',
    paddingLeft: 10,
    justifyContent: 'center'
  },
  leftPaneChildMultipick: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#d4d4d4',
    marginTop: 7
  },
  hintMultipickStyle:{
    maxHeight: (windowWidth / 37) * 3
  }
})

export default styles