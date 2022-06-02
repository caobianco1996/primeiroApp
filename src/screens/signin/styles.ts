import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: theme.colors.white,
    width: "100%",
  },
  label: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: "left",
  },
  marginTop: {
    color: theme.colors.primary,
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 20,
    textAlign: "center",
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  register: {
    textAlign: "left",
    fontSize: 14,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  alingLeft: {
    textAlign: "left",
  },
  alingCenter: {
    textAlign: "center",
  },
  text: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
  },
  content: {
    marginTop: 0,
    width: "100%",
    paddingHorizontal: 35,
  },
  controlsbutons: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 35,
  },
  butons: {
    marginTop: 15,
    width: "100%",
    paddingHorizontal: 35,
  },
  controls: {
    marginTop: 5,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
  },
  title: {
    color: theme.colors.text,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15,
  },
  linha: {
    marginTop: 15,
    marginBottom: 0,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
});
