import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    color: '#F2F0FF',
    fontWeight: '700',
    fontSize: 48,
    marginTop: '10%',
    textAlign: 'center',
  },
  backContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#221C3E',
    justifyContent: 'center',
  },
  cardContainer: {
    width: 280,
    height: 110,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    marginTop: 25,
    flexDirection: 'row',
  },
  descriptionContainer: {
    textAlign: 'center',
    width: 140,
    marginLeft: 23,
    fontWeight: '400',
    fontSize: 20,
    color: 'black',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonEdit: {
    width: 50,
    height: 110,
    backgroundColor: 'white',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
