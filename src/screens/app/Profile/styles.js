import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: '5%',
    width: '100%'
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  titlePage: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -40
  },
  image: {
    width: 20,
    height: 20,
    marginTop: 12,
    marginRight: 22,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  user: {
    fontWeight: 700,
    fontSize: 20,
    color: colors.veryDarkGrey,
  },
  email: {
    fontWeight: 400,
    fontSize: 14,
    color: colors.textLightGrey,
  },
});
