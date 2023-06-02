import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { horizontalScale, scaledHeight, scaledWidth, verticalScale } from '../../utils/scaling';

export const styles = StyleSheet.create({
  rootView: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  mainView: {
    backgroundColor: colors.white,
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(70),
    height: scaledHeight(80),
    width: scaledWidth(90),
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    padding: horizontalScale(15),
    paddingBottom: verticalScale(35),
    borderRadius: 10
  },
  title: {
    color: colors.textBlack,
    fontSize: verticalScale(28),
    alignSelf: 'center',
    fontWeight: '600',
  },
  textFieldWrapper: {
    marginVertical: verticalScale(40),
  },
  logoWrapper: {
    position: 'absolute',
    top: -verticalScale(50),
    alignSelf:'center',
    padding: horizontalScale(20),
    backgroundColor: colors.white,
    borderRadius: 90
  },
  headerImage: {
    width: horizontalScale(25),
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: colors.white
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    height: verticalScale(50),
    marginTop: verticalScale(20)
  }
});