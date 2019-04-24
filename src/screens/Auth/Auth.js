import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/ui/DefaultInput/DefaultInput';
import HeadingText from '../../components/ui/HeadingText/HeadingText';
import MainText from '../../components/ui/MainText/MainText';
import backgroundImage from '../../assets/background.jpeg';
import ButtonWithBackground from '../../components/ui/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
            <MainText>
              <HeadingText>Please Login</HeadingText>
            </MainText>
            <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>Switch to Login</ButtonWithBackground>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
              <DefaultInput placeholder="Password" style={styles.input} />
              <DefaultInput placeholder="Confirm Password" style={styles.input} />
            </View>
            <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb",
  }
});
export default AuthScreen;