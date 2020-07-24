import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

const themeConfig = {
  light: {

    fontColor: 'black',
    bodybg: 'white',
  },
  dark: {

    fontColor: 'white',
    bodybg: 'black',
  },
};

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  themeToggle = () => {
    this.setState(prevState => {
      if (prevState.theme === 'light') {
        return { theme: 'dark', themeConfig: themeConfig.dark };
      } else {
        return { theme: 'light', themeConfig: themeConfig.light };
      }
    });
  };

  state = {
    theme: 'light',
    themeConfig: themeConfig.light,
    themeToggle: this.themeToggle,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
