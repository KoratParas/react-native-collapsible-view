# react-native-collapsible-view

## Getting started

`$ npm install npm i react-native-collapsible-view --save`

## Usage

```javascript
import CollapsibleView from "react-native-collapsible-view";

// example
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
</CollapsibleView>;


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

```
