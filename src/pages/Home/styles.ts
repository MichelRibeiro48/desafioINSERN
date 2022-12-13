import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 21,
  },
  profileText: {
    color: 'white',
    marginRight: 8,
  },
  profileImage: {
    width: 64,
    height: 64,
  },
  SecurityContainer: {
    width: 336,
    height: 238,
    backgroundColor: '#04A16E',
    alignSelf: 'center',
    borderRadius: 16,
    padding: 8,
    marginTop: 28,
  },
  textSecurity: {
    color: '#F2F0FF',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 9,
  },
  buttonCodes: {
    width: 336,
    height: 116,
    borderRadius: 16,
    marginTop: 13,
    backgroundColor: '#0368FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textLorem: {
    color: '#CDCDCD',
    fontSize: 14,
    fontWeight: '400',
    top: -75,
    marginLeft: 10,
  },
  textDanger: {
    color: '#F2F0FF',
    fontWeight: '400',
    fontSize: 16,
    top: -80,
    marginLeft: 10,
  },
  textPercent: {
    color: '#F2F0FF',
    fontWeight: '400',
    fontSize: 96,
    top: -55,
  },
  textCodes: {
    color: 'white',
    fontWeight: '700',
    fontSize: 28,
  },
  dropDown: {
    borderWidth: 0,
    width: 100,
    alignSelf: 'flex-end',
    top: 9,
  },
  selectedDropDown: {
    width: 100,
    borderWidth: 0,
    alignSelf: 'flex-end',
    top: -40,
  },
  safetyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  microfoneCircle: {
    backgroundColor: '#423A64',
    borderRadius: 100,
    padding: 10,
    marginTop: 8,
    width: 71,
    height: 70,
    alignSelf: 'center',
  },
});
