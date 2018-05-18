/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import SearchPage from './SearchPage';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        sytle={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
