import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: 30,
    borderRadius: 8,
    paddingHorizontal: '5%',
    width: '100%'
  },
  scrollView: {
    backgroundColor: 'transparent',
    paddingHorizontal: '5%',
    width: '100%',
    height: height
  },
  image: {
    width: '100%',
    height: height / 2,
  },
  productName: {
    color: colors.veryDarkGrey,
    marginTop: 5,
    fontSize: 24
  },
  productPrice: {
    color: colors.veryDarkGrey,
    marginTop: 5,
    fontSize: 40,
    fontWeight: '700'
  },
  productDescription: {
    color: colors.textGrey,
    marginTop: 5,
    fontSize: 14
  },
  backImage: {
    backgroundColor: colors.white,
    borderRadius: 6,
    width: 40,
    height: 40,
    zIndex: 50,
    position: 'absolute',
  },
  backButton: {
    width: 40,
    height: 40,
    zIndex: 50,
    position: 'absolute',
    left: 32,
    top: 53,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
  },
  favImage: {
    width: 20,
    height: 22,
  },
  favButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 60,
    marginBottom: 0,
    width: width/7,
    height: 60,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactButton: {
    width: width/1.4,
    height: 60,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginBottom: 0
  },
});
