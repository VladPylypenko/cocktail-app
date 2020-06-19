import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginTop: 30,
  },
  applyBtn: {
    position: 'absolute',
    bottom: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 27,
    backgroundColor: '#000',
    height: 53,
    width: WIDTH - 54,
  },
  listItem: {
    color: '#7E7E7E',
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 16,
  },
  grayFont: {
    color: '#7E7E7E',
    fontSize: 16,
  },
});

export default styles;
