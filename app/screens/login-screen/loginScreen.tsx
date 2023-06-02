import React, {useEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, Image, TextInput, Alert, Dimensions} from 'react-native';
import {Button} from '@rneui/base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../utils/theme';
import {styles} from './styles';
import InputField from '../../components/InputField';
import { verticalScale } from '../../utils/scaling';
import { resetRoot } from '../../navigators/navigation-utilities';
import { BOTTOM_TABS } from '../../navigators/navigation-routes';
import { EmailPattern } from '../../utils/common';

const LoginScreen = () => {
  const [userEmail, setuserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loginPressed, setLoginPressed] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string>("");
  const userNameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const checkEmail = () => {
    if (!EmailPattern.test(userEmail)) {
        setEmailError('Please enter valid email. ex. abc@mail.com')
        return false
    }
    setEmailError("")
    return true
  }

  useEffect(() => {
    if (userEmail.length === 0) {
        setEmailError("")
    }
    if (userEmail && loginPressed) {
        checkEmail()
    }
  }, [userEmail])

  const onPressLogin = () => {
    removeFocus()
    setLoginPressed(true)
    const validEmail = checkEmail()
    if (validEmail) {
        if (userEmail === 'reactnative@jetdevs.com' && password === 'jetdevs@123') {
            resetRoot(BOTTOM_TABS)
        } else {
            Alert.alert("Email or password is wrong. Please try again!")
        }
    }
  };

  const removeFocus = () => {
    userNameRef.current?.blur()
    passwordRef.current?.blur()
  }

  return (
    <SafeAreaView style={styles.rootView}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.headerImage}
              source={require('../../assets/jetappiconbig.png')}
            />
          </View>
          <Text style={styles.title}>LOGIN</Text>

          <View style={styles.textFieldWrapper}>
            <InputField
              autoCapitalize='none'
              leftIcon={'email-outline'}
              leftIconType={'material-community'}
              label={userEmail ? '' : 'Email'}
              value={userEmail}
              forwardedRef={userNameRef}
              isFocused={focusedInput === 'email'}
              onFocus={() => {
                setFocusedInput('email')
              }}
              onBlur={() => {
                setFocusedInput('')
              }}
              onChangeText={(text) => setuserEmail(text)}
              returnKeyType="next"
              secureTextEntry={false}
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              error={emailError}
              tintColor={colors.primary}
            />

            <InputField
              autoCapitalize='none'
              leftIcon={'lock'}
              leftIconType={'octicon'}
              label={password ? '' : 'Password'}
              value={password}
              forwardedRef={passwordRef}
              onFocus={() => {
                setFocusedInput('password')
              }}
              onBlur={() => {
                setFocusedInput('')
              }}
              isFocused={focusedInput === 'password'}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="done"
              secureTextEntry={true}
              error={passwordError}
              tintColor={colors.primary}
            />
          </View>
          <Button
            title={'LOGIN'}
            onPress={() => {
              onPressLogin();
            }}
            disabled={!userEmail || !password}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;