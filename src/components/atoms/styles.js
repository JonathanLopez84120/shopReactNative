import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.bluePurple,
    borderRadius: 8,
    height: 60
  },
  title: {
    fontSize: 24,
    textAlign: 'center',

    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '123.7%',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    color: color.white,

    fontFamily: 'DM Sans',
    fontStyle: 'normal',
  },
  buttonLinkText: {
    fontSize: 24,
    textAlign: 'center',

    color: color.bluePurple,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
  },
  link: {
    marginTop: 30,
    color: color.bluePurple,
    fontWeight: 'bold',
  },
  input: {
    margin: 20,
    height: 60,
    borderRadius: 14,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: color.white,
    color: color.black,
    fontSize: 16,
  },
  label: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    color: color.bluePurple,
  }
});