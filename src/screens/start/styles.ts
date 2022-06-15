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
    backgroundColor: theme.colors.white,
    paddingTop: 40,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container_d: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 10,
  },
  separate: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  container_e: {
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: theme.colors.white,
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
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image_f: {
    flex: 1,
    maxWidth: 100,
    height: 100,
    alignItems: "center",
  },
  image_g: {
    backgroundColor: "gray",
    height: 100,
    width: 100,
    maxHeight: 100,
    maxWidth: 100,
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
    lineHeight: 25,
  },
  red: {
    color: "red",
    marginTop: 20,
  },
  subtitle_c: {
    color: theme.colors.text,
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
    fontFamily: theme.fonts.text500,
  },
  subtitle_d: {
    color: theme.colors.secundary,
    fontSize: 14,
    textAlign: "left",
    marginBottom: 10,
    fontFamily: theme.fonts.text500,
  },
  title_a: {
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 20,
  },
  linha: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 2,
  },
  buttons: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  controlsbutons: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 35,
    paddingBottom: 30,
  },

  pagamento: {
    color: theme.colors.text,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  envio_para: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  envio_para_purple: {
    color: "purple",
    fontSize: 12,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  envio_para_title: {
    color: theme.colors.text,
    fontSize: 15,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    lineHeight: 15,
  },

  container_envio: {
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  container_envio_para: {
    backgroundColor: theme.colors.white,
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  container_envio2: {
    backgroundColor: theme.colors.white,
    paddingBottom: 25,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  pagamento_title: {
    color: theme.colors.text,
    fontSize: 15,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    lineHeight: 15,
  },

  container_pagamento: {
    backgroundColor: theme.colors.white,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },

  image_card: {
    width: 45,
    height: 25,
    marginLeft: 50,
  },

  container_pagamento_para: {
    backgroundColor: theme.colors.white,
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  pagamento_para: {
    color: theme.colors.text,
    fontSize: 12,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  pagamento_para_purple: {
    color: "purple",
    fontSize: 12,
    textAlign: "center",   
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  pagamento_style: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",   
    marginLeft: -50,
    marginRight: -40,
    lineHeight: 20,
  },

  pagamento_style2: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",   
    marginLeft: 120,
    lineHeight: 15,
  },

  final: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 15,
  },

  total: {
    color: theme.colors.text,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 20,
    fontWeight: "bold",
  },

  container_final: {
    backgroundColor: theme.colors.white,
    paddingTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  container_pag: {
    backgroundColor: theme.colors.white,
    paddingTop: 40, 
    flexDirection: "row",
  },

  title_pag: {
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 25,    
  },

  image_arrow: {
    width: 50,
    height: 40,
    marginLeft: 20,
    marginRight: 60,
  },

});
