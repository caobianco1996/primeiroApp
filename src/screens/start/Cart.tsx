import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";

export function Cart() {
  const navigation = useNavigation<any>();

  const Payment = () => {
    navigation.navigate("Payment");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_d}>
          <Text style={styles.title_a}>Sacola {"\n"}</Text>
        </View>

        <View style={styles.container_c1}>
          <View>
            <Image source={Notebooks} resizeMode="stretch" />
          </View>

          <View>
            <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c1}>
          <View>
            <Image source={Hardware} resizeMode="stretch" />
          </View>

          <View>
            <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c1}>
          <View>
            <Image source={Periferico} resizeMode="stretch" />
          </View>

          <View>
            <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>
        <View style={styles.container_e}>
          <Text style={styles.subtitle_e}>Cupom de desconto</Text>
          <View style={styles.container_b}>
            <TextInput
              style={styles.input}
              placeholder="Insira seu cupom de desconto"
              placeholderTextColor={theme.colors.primary}
              maxLength={20}
            ></TextInput>
          </View>
          <View>
            <Text>
              SubTotal{"\n"}
              {"\n"}Frete
            </Text>
          </View>
          <View>
            <Text style={styles.title_a}>Total</Text>
            <Text>R$ 13000,00</Text>
          </View>
          <View style={styles.controlsbutons}>
            <Button title="Pagamento" onPress={Payment} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
