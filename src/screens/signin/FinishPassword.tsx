import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import logoSmall from "../../assets/app-name-small.png";
import Email_Confirmado from "../../assets/Email_Confirmado.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function FinishPassword() {
  const navigation = useNavigation<any>();

  const FinishPassword = () => {
    navigation.navigate("FinishPassword");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <Image
        source={Email_Confirmado}
        style={styles.imageLogo}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Confira seu E-mail {"\n"}</Text>
        <Text style={styles.text1}>
          Enviamos as intruções no seu E-mail{"\n"}
        </Text>
      </View>
      <View style={styles.controlsbutons}>
        <Button title="Entrar" onPress={FinishPassword} />
      </View>
    </View>
  );
}
