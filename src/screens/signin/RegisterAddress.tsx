import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "../signin/styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function RegisterAddress() {
  const navigation = useNavigation<any>();

  const RegisterPicture = () => {
    navigation.navigate("RegisterPicture");
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Para começar, insira seu endereço {"\n"}
        </Text>
        <TextInput
          style={styles.input1}
          placeholder="Cidade, Estado, Pais"
          keyboardType="default"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={styles.label1}>CEP *</Text>
        <TextInput
          style={styles.input1}
          placeholder="Insira seu CEP"
          keyboardType="number-pad"
          placeholderTextColor={theme.colors.primary}
          maxLength={8}
        ></TextInput>
        <Text style={styles.label1}>Endereço *</Text>
        <TextInput
          style={styles.input1}
          placeholder="Insira seu endereço"
          keyboardType="default"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        <Text style={styles.label1}>Número *</Text>
        <TextInput
          style={styles.input1}
          placeholder="Insira seu número"
          keyboardType="number-pad"
          placeholderTextColor={theme.colors.primary}
          maxLength={4}
        ></TextInput>
        <Text style={styles.label1}>Complemento *</Text>
        <TextInput
          style={styles.input1}
          placeholder="Insira seu complemento"
          keyboardType="default"
          placeholderTextColor={theme.colors.primary}
          maxLength={10}
        ></TextInput>
      </View>
      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <View style={styles.controlsbutons}>
        <Button title="Continuar" onPress={RegisterPicture} />
      </View>
    </View>
  );
}
