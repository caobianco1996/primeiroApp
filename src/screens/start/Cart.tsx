import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";

export function Cart() {
  const navigation = useNavigation<any>();

  const goToPayment = () => {
    navigation.navigate("Payment");
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_d}>
          <Text style={styles.title_a}>Sacola{"\n"}</Text>
        </View>

        <View style={styles.container_c1}>
          <Image source={Notebooks} resizeMode="stretch" accessibilityLabel="Notebook" />
          <Text style={styles.subtitle_f}>
            MacBook Air de 13″{"\n"}Loja Sistech Eletrônicos{"\n"}R$ 7.999,99
          </Text>
        </View>

        <View style={styles.container_c1}>
          <Image source={Hardware} resizeMode="stretch" accessibilityLabel="Componente de computador" />
          <Text style={styles.subtitle_b}>
            Inter Core i7 9700KF{"\n"}Loja Sistech Eletrônicos{"\n"}R$ 1.799,00
          </Text>
        </View>

        <View style={styles.container_c1}>
          <Image source={Periferico} resizeMode="stretch" accessibilityLabel="Computador gamer" />
          <Text style={styles.subtitle_b}>
            PC Gamer EasyPC{"\n"}Loja Sistech Eletrônicos{"\n"}R$ 3.599,99
          </Text>
        </View>

        <View style={styles.container_e}>
          <Text style={styles.label}>Cupom de desconto</Text>
          <TextInput
            style={styles.register}
            placeholder="Insira o cupom de desconto"
            keyboardType="default"
            autoCapitalize="characters"
            placeholderTextColor={theme.colors.primary}
            maxLength={20}
            accessibilityLabel="Cupom de desconto"
          />
        </View>

        <View style={styles.container_final}>
          <Text style={styles.final}>Subtotal</Text>
          <Text style={styles.final}>R$ 13.398,98</Text>
        </View>

        <View style={styles.container_final}>
          <Text style={styles.final}>Frete</Text>
          <Text style={styles.final}>Grátis</Text>
        </View>

        <View style={styles.container_final}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ 13.398,98</Text>
        </View>

        <View style={styles.container_g}>
          <Button title="Pagamento demonstrativo" onPress={goToPayment} />
        </View>
      </View>
    </ScrollView>
  );
}
