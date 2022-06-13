import { extendTheme } from 'native-base'
import { Platform, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height
const FONT_SIZE_LEFT_PANEL_ANDROID = 48
const FONT_SIZE_LEFT_PANEL_IOS = 44
const FONT_SIZE_XL = 30
const FONT_SIZE_SM = 61
const FONT_SIZE_MD = 50
const FONT_SIZE_LG = 38
const FONT_SIZE_TEXT_BUTTON = 60
const PX_BUTTON_ANDROID = 23
const PY_BUTTON = 26
const PX_BUTTON_IOS = 8
const COLOR_TEXT_BUTTON = '#fff'
const COLOR_TEXT_BUTTON_SHEET = 'darkBlue.900'
const BG_BUTTON = 'muted.500'
const PRESSED_BUTTON = 'muted.600'
const TEXT_COLOR_DEFAULT = '#1f1f1f'
const COLOR_WHITE = '#fff'
const FONT_SIZE_INPUT_ANDROID = 55
const CHECK_BOX_SIZE = 60
const FONT_SIZE_HEADER = 29
const BG_COMFIRM = '#343473'
const PRESSED_COMFIRM ='#0b0b59'
const BUTTON_WIDTH = 8
const FONT_SIZE_LOGIN_BUTTON = 65

const themes = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '3px',
        height: windowWidth / PY_BUTTON + 'px',
      },
      sizes: {
        md: {
          px:
            Platform.OS === 'ios'
              ? PX_BUTTON_IOS
              : windowWidth / PX_BUTTON_ANDROID + 'px',
          py: 0,
          _text: {
            color: COLOR_TEXT_BUTTON,
            fontSize: windowWidth / FONT_SIZE_TEXT_BUTTON,
          },
        },
        darkMd: {
          _text: {
            color: COLOR_TEXT_BUTTON_SHEET,
            fontSize: windowWidth / FONT_SIZE_TEXT_BUTTON,
          },
        },
        login:{
          _text: {
            fontSize: windowWidth / FONT_SIZE_LOGIN_BUTTON,
            fontWeight:400
          },
        },
        save:{
          _text: {
            fontSize: windowWidth / FONT_SIZE_TEXT_BUTTON,
            color: COLOR_WHITE,
          },
        }
      },
      defaultProps: {
        colorScheme: 'muted',
        variant: 'solid',
      },
      variants: {
        solid: {
          bg: BG_BUTTON,
          _pressed: {
            bg: PRESSED_BUTTON,
          },
          padding: 0,
          width: windowWidth / BUTTON_WIDTH,
        },
        confirm: {
          bg: BG_COMFIRM,
          _pressed: {
            bg: PRESSED_COMFIRM,
          },
          padding: 0,
          width: windowWidth / BUTTON_WIDTH,
        },
        login: {
          bg: PRESSED_COMFIRM,
          _pressed: {
            bg: BG_COMFIRM,
          },
          padding: 0,
          borderRadius: 5,
          width: windowWidth / BUTTON_WIDTH,
        },
      },
    },
    Text: {
      baseStyle: {
        color: TEXT_COLOR_DEFAULT,
        fontFamily: 'Inter-Regular',
      },
      defaultProps: {size: 'md'},
      sizes: {
        xl: {
          fontSize: windowWidth / FONT_SIZE_XL,
        },
        lg: {
          fontSize: windowWidth / FONT_SIZE_LG,
        },
        md: {
          fontSize: windowWidth / FONT_SIZE_MD,
        },
        sm: {
          fontSize: windowWidth / FONT_SIZE_SM,
        },
      },
    },
    Input: {
      variants: {
        outline: {
          paddingTop: Platform.OS === 'ios' ? 2 : 1.5,
          paddingBottom: Platform.OS === 'ios' ? 2 : 1.5,
          paddingLeft: 2.5,
          borderRadius: 0,
          backgroundColor: '#ffff',
          marginTop: 1,
          borderWidth: 3,
        },
        login: {
          paddingTop: Platform.OS === 'ios' ? 4 : 4,
          paddingBottom: Platform.OS === 'ios' ? 4 : 4,
          paddingLeft: 2.5,
          borderRadius: 4,
          borderWidth: 1.4,
          borderColor: BG_BUTTON,
          backgroundColor: '#ffff',
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
      },
      sizes: {
        md: {
          fontSize: windowWidth / FONT_SIZE_INPUT_ANDROID + 'px',
        },
        login: {
          fontSize: 22,
        },
      },
    },
    Select: {
      baseStyle: {
        borderRadius: 0,
        fontWeight: '500',
      },
      variants: {
        freeStyle: {
          fontSize: windowWidth / FONT_SIZE_MD,
          borderWidth: 2,
          marginLeft: '4px',
          marginRight: '4px',
          backgroundColor: '#ffff',
          paddingBottom: Platform.OS === 'ios' ? 4 : 3,
          paddingTop: Platform.OS === 'ios' ? 4 : 3,
        },
      },
      defaultProps: {
        variant: 'freeStyle',
      },
    },
    Checkbox: {
      sizes: {
        md: {
          _icon: {
            size: windowWidth / CHECK_BOX_SIZE + 'px',
          },
          _text: {
            fontSize: windowWidth / FONT_SIZE_MD,
          },
        },
      },
      defaultProps: {
        size: 'md',
        colorScheme: 'gray',
      },
    },
    Box: {
      baseStyle: {
        _text: {
          fontSize: {
            sm:
              Platform.OS === 'ios'
                ? windowWidth / FONT_SIZE_LEFT_PANEL_IOS
                : windowWidth / FONT_SIZE_LEFT_PANEL_ANDROID,
          },
        },
      },
    },
    Icon: {
      sizes: {
        sm: windowWidth / FONT_SIZE_HEADER,
        md: windowWidth / 29,
      },
    },
    TextArea: {
      baseStyle: {
        fontSize:
          Platform.OS === 'ios'
            ? windowWidth / FONT_SIZE_LEFT_PANEL_IOS
            : windowWidth / FONT_SIZE_LEFT_PANEL_ANDROID,
        fontWeight: '400',
        borderWidth: 0,
        height: '100%',
      },
    },
  },
})

export default themes