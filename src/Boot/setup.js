import * as Expo from "expo";
import React, { Component } from "react";

import Intro from '../CRMAppIntro';
export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('./../../assets/fonts/Roboto-Light.ttf'),
      Arial: require("./../../assets/fonts/Arial.ttf"),
      MaterialIcons: require("./../../assets/fonts/MaterialIcons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
        <Intro />
    );
  }
}
