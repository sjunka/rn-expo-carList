import { StyleSheet } from "react-native";

import { Colors, Spacing } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    padding: Spacing.padding,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  card: {
    width: "100%",
    backgroundColor: Colors.cardColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 2,
  },
  title: {
    color: Colors.textColor,
    fontSize: 36,
    fontWeight: "bold",
    paddingHorizontal: Spacing.padding,
    paddingVertical: Spacing.padding * 3,
  },
  details: {
    padding: Spacing.padding,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.extraMargin,
  },
  model: {
    color: Colors.textColor,
    fontSize: 30,
  },
  line: {
    height: 1,
    backgroundColor: Colors.divisorColor,
    marginVertical: Spacing.extraMargin,
  },
  makeYear: {
    paddingVertical: Spacing.extraMargin,
  },
});
