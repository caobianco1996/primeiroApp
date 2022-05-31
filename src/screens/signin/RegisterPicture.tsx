import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function RegisterPicture() {
  const navigation = useNavigation<any>();

  const FinishRegister = () => {
    navigation.navigate("FinishRegister");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <Text style={styles.title}>
        Para finalizar, insira uma foto de perfil {"\n"}
      </Text>

      <Image
        source={ImagemPerfil}
        style={styles.imageLogo}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={(styles.text, styles.alingCenter)}>
          Selecionar foto de perfil{"\n"}
        </Text>
      </View>
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <View style={styles.controlsbutons}>
        <Button title="Pular esta etapa" onPress={FinishRegister} />
      </View>
      <View style={styles.controlsbutons}>
        <Button title="Continuar" onPress={FinishRegister} />
      </View>
    </View>
  );
}
