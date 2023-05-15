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
    height: 60,
    borderRadius: 14,
    paddingRight: 20,
    color: color.black,
    fontSize: 16,
  },
  label: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: color.bluePurple,
  },
  containerTextInput: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 60,
    borderRadius: 14,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: color.bluePurple,
    borderWidth: 1,
  },
  containerCheckbox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  /* eyeIcon: {
    margin: 'auto'
  }, */
  checkbox: {
    backgroundColor: color.grey,
    width: 22,
    height: 22,
    borderRadius: 4,
  }
});