/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CollapsibleView from "react-native-collapsible-view";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 20 }}>
          <CollapsibleView
            title="Collapsible View 1"
            collapsed={true}
            headerStyle={styles.headerStyle}
            headerIconSize={30}
            headerIconColor="black"
            headerTextStyle={styles.headerTextStyle}
          >
            <View style={styles.collapsViewStyle}>
              <Text>Hello, this is Example.</Text>
              <Text>Hello, this is ExpandableView.</Text>
              <Text>Hello, this is Collapsible.</Text>
              <Text>Hello, this is CustomizedView.</Text>
            </View>
          </CollapsibleView>
        </View>

        <View style={{ marginVertical: 20 }}>
          <CollapsibleView
            title="Collapsible View 2"
            collapsed={false}
            headerStyle={styles.headerStyle}
            headerIconSize={30}
            headerIconColor="black"
            headerTextStyle={styles.headerTextStyle}
          >
            <View style={styles.collapsViewStyle}>
              <Text>Hello, this is Example.</Text>
              <Text>Hello, this is CollapsibleView.</Text>
              <Text>Hello, this is Collapsible.</Text>
              <Text>Hello, this is CustomizedView.</Text>
            </View>
          </CollapsibleView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9898981f",
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0002f527"
  },
  headerTextStyle: {
    fontSize: 20
  },
  collapsViewStyle: {
    backgroundColor: "white"
  }
});
