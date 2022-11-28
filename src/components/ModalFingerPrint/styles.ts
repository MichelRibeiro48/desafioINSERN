import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '90%',
    height: 232,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderRadius: 32,
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingVertical: 20,
  },
  containerModalOpen: {
    flex: 1,
    backgroundColor: '#000000bf',
  },
  loginText: {
    color: 'black',
    fontSize: 48,
    fontWeight: '700',
  },
  fingerPrintContainer: {
    flexDirection: 'row',
    marginTop: 36,
  },
  fingerPrintDescription: {
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
  },
  passwordText: {
    marginTop: 40,
    color: '#0368FF',
    fontWeight: '600',
    fontSize: 18,
  },
});
