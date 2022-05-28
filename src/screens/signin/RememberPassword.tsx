import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function RememberPassword() {
  const navigation = useNavigation<any>();

  const FinishPassword = () => {
    navigation.navigate("FinishPassword");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>Esqueceu a Senha? {"\n"}</Text>
        <Text style={styles.text}>
          Digite seu e-mail para receber a senha {"\n"}
        </Text>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input1}
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
      </View>
      <View style={styles.controlsbutons}>
        <Button title="Recuperar senha" onPress={FinishPassword} />
      </View>
    </View>
  );
}
