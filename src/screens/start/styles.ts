import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container_a: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  container_b: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  container_c: {
    paddingTop: 40,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container_d: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  image_a: {
    width: "100%",
    height: 360,
  },
  image_b: {
    width: 40,
    height: 30,
  },
  image_c: {
    width: "100%",
    height: 200,
  },
  image_d: {
    flex: 1,
    marginLeft: 40,
    width: "50%",
    height: 50,
    alignItems: "center",
  },
  image_e: {
    flex: 1,
    width: 40,
    height: 30,
    alignItems: "center",
  },
  image_f: {
    flex: 1,
    maxWidth: 110,
    height: 100,
    alignItems: "center",
  },
  imageLogo: {
    marginTop: 20,
    marginBottom: 30,
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
  subtitle_a: {
    color: theme.colors.text,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
    marginLeft: 20,
  },
  subtitle_b: {
    color: theme.colors.text,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
  title_a: {
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 20,
  },
  buttons: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
