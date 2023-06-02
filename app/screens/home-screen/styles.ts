import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import { verticalScale } from '../../utils/scaling';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.background,
    flex: 1,
    paddingBottom: 0,
    paddingTop: verticalScale(20)
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  listView: {
    marginTop: verticalScale(0),
    flex: 1
  }
});