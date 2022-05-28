import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";

export function SignIn() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("Start");
    // navigation.goBack();
  };

  const rememberPassword = () => {
    navigation.navigate("RememberPassword");
  };
  const register = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Bem Vindos de Volta {"\n"}
          Sentimos sua Falta {"\n"}
        </Text>

        <Text style={styles.label}>E-mail {"\n"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={styles.label}>Senha {"\n"}</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Insira senha (apenas numeros)"
          maxLength={6}
          secureTextEntry
          placeholderTextColor={theme.colors.primary}
        ></TextInput>

        <View style={styles.controls}>
          <Text style={styles.label}>Lembrar de Mim</Text>
          <Text style={styles.label} onPress={rememberPassword}>
            Esqueci Minha Senha
          </Text>
        </View>
      </View>

      <View style={styles.controlsbutons}>
        <Button title="Continuar" onPress={handleNavigate} />
      </View>
      <Image source={linha} style={styles.linha} />
      <View style={styles.controlsbutons1}>
        <Button title="Crie sua conta" onPress={register} />
      </View>
      <View style={styles.controls}>
        <Image source={google} style={styles.linha} />
        <Image source={facebook} style={styles.linha} />
        <Image source={apple} style={styles.linha} />
      </View>
    </View>
  );
}
