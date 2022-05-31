import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "../signin/styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function Register() {
  const navigation = useNavigation<any>();

  const RegisterTwo = () => {
    navigation.navigate("RegisterTwo");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>Insira os dados da sua conta {"\n"}</Text>
        <Text style={(styles.label, styles.marginTop)}>E-mail *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Nome de Usuario *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu nome de usuário"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Senha *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira sua senha"
          keyboardType="visible-password"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Confirme a senha *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira sua senha novamente"
          keyboardType="visible-password"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
      </View>
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <View style={styles.controlsbutons}>
        <Button title="Continuar" onPress={RegisterTwo} />
      </View>
    </View>
  );
}
