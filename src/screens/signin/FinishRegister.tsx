import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import logoSmall from "../../assets/app-name-small.png";
import Cadastro_Confirmado from "../../assets/Cadastro_Confirmado.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function FinishRegister() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <Text>
        {"\n"}
        {"\n"}
      </Text>
      <Image
        source={Cadastro_Confirmado}
        style={styles.imageLogo}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Seu perfil foi criado com sucesso! {"\n"}
        </Text>
        <Text style={(styles.text, styles.alingCenter)}>
          Realize o login com as credenciais inseridas nos campos{"\n"}
        </Text>
      </View>
      <View style={styles.controlsbutons}>
        <Button title="Entrar" onPress={handleNavigate} />
      </View>
    </View>
  );
}
