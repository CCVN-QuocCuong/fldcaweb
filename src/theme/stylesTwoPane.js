import { Dimensions, StyleSheet } from 'react-native'
const windowWidth = Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height

const stylesTwoPane = StyleSheet.create({
  rightPane: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
    flex: 1,
  },
  titleStyle: {
    paddingTop: 10,
    paddingLeft: 15,
    fontWeight: '500',
    color: 'gray',
  },
  descriptionStyle: {
    paddingLeft: 15,
    color: 'gray',
    paddingTop: 5,
    fontStyle: 'italic',
    fontSize: windowWidth / 55,
  },
  inputStyle: {
    paddingLeft: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  inputDate: {
    marginTop: 4,
    paddingVertical: 1,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderColor: '#e3e3e3',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDate: {
    fontSize: windowWidth / 48,
  },
})

export default stylesTwoPane