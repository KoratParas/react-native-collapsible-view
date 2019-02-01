# react-native-collapsible-view

## Getting started

`$ npm install npm i react-native-collapsible-view --save`

## Usage

```javascript
import CollapsibleView from "react-native-collapsible-view";

// example
<CollapsibleView
  title="ExpandableView 1"
  expanded={false}
  headerStyle={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 30 / ratio,
    backgroundColor: "#0002f527"
  }}
  headerIconSize={30}
  headerIconColor="black"
  headerTextStyle={{ fontSize: 20 }}
>
  <View style={{ backgroundColor: "white" }}>
    <Text>Hello, this is Example.</Text>
    <Text>Hello, this is ExpandableView.</Text>
    <Text>Hello, this is Collapsible.</Text>
    <Text>Hello, this is CustomizedView.</Text>
  </View>
</CollapsibleView>;
```
