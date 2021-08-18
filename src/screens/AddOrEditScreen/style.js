import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Constant';

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
  },
  viewContainer: {
    flexDirection: 'column',
    flex: 0,
    marginTop: 20,
  },
  confirmButton: {
    width: '85%',
    height: 45,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: COLORS.WHITE,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  textInput: {
    fontSize: 14,
    textAlignVertical: 'center',
    height: 50,
    width: '100%',
    color: COLORS.BLACK,
    borderRadius: 5,
    overflow: 'hidden',
    paddingStart: 15,
  },
  textFieldView: {
    marginTop: 15,
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
    backgroundColor: COLORS.RED,
  },
  errorTextFieldView: {
    marginTop: 15,
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    backgroundColor: COLORS.RED,
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: COLORS.RED,
  },
  errorMessage: {
    marginTop: 5,
    alignSelf: 'flex-start',
    fontWeight: '400',
    fontSize: 10,
    color: COLORS.RED,
  },
  headingTextView: {
    width: '95%',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 25,
    color: COLORS.WHITE,
    marginStart: 20,
    marginEnd: 20,
  },
  textLargeInput: {
    fontSize: 14,
    textAlignVertical: 'top',
    height: 100,
    width: '100%',
    color: COLORS.BLACK,
    borderRadius: 3,
    overflow: 'hidden',
    paddingStart: 15,
  },
  editTextView: {
    flex: 1,
    marginStart: 15,
    marginEnd: 15,
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0,
    backgroundColor: COLORS.WHITE,
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
  },
  bottomEndText: {
    textAlignVertical: 'center',
    color: COLORS.BLACK,
    fontSize: 16,
    marginStart: 20,
    marginEnd: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textInputStyles: {
    borderRadius: 5,
    minHeight: 50,
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    marginBottom: 5,
  },
  textInputContainerStyle: {flex: 1, paddingHorizontal: 20, marginBottom: 20},
  invalidTextStyle: {color: COLORS.RED, paddingLeft: 10},
});

export default styles;