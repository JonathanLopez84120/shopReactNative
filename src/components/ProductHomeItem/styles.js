import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: (width / 2) - 16,
    height: 200,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 8,
    paddingTop: 24
  },
  title: {
    paddingTop: 8,
    fontSize: 14,
    color: colors.textGrey
  },
  price: {
    color: colors.veryDarkGrey,
    paddingTop: 1,
    paddingBottom: 8,
    fontSize: 14,
    fontWeight: '700',
  }
});