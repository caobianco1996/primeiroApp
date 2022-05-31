import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "../signin/styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function RegisterTwo() {
  const navigation = useNavigation<any>();

  const RegisterAddress = () => {
    navigation.navigate("RegisterAddress");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>Insira seus dados pessoais {"\n"}</Text>
        <Text style={(styles.label, styles.marginTop)}>Nome *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu nome"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Sobrenome *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu sobrenome"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Celular *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu celular"
          keyboardType="phone-pad"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={(styles.label, styles.marginTop)}>Telefone *</Text>
        <TextInput
          style={(styles.input, styles.register)}
          placeholder="Insira seu telefone"
          keyboardType="phone-pad"
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
        <Button title="Continuar" onPress={RegisterAddress} />
      </View>
    </View>
  );
}
