import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Grupo417 from "../../assets/Grupo417.png";
import bag from "../../assets/bag.png";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
import Vector from "../../assets/Vector.png";
import Grupo414 from "../../assets/Grupo 414.png";
import Group from "../../assets/Group.png";
import Elipse from "../../assets/Elipse 1.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/Button";

export function Cart() {
  const navigation = useNavigation<any>();

  const Payment = () => {
    navigation.navigate("Payment");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_c}>
          <Text style={styles.title_a}>Sacola {"\n"}</Text>
          <Image source={bag} style={styles.image_b} resizeMode="stretch" />
        </View>

        <View>
        <TextInput
          //style={(styles.input, styles.register)}
          placeholder="Insira sua senha"
          keyboardType="visible-password"
          //placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
        </View>



        <View style={styles.container_c}>
          <View>
            <Image
              source={Notebooks}
              style={styles.image_d}
              resizeMode="stretch"
            />
          </View>

          <View>
          <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c}>
          <View>
            <Image
              source={Hardware}
              style={styles.image_d}
              resizeMode="stretch"
            />
          </View>

          <View>
          <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c}>
          <View>
            <Image
              source={Periferico}
              style={styles.image_d}
              resizeMode="stretch"
            />
          </View>

          <View>
          <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>
        <View>
    <Text style={styles.subtitle_b}>Cupom de desconto</Text>
    <TextInput>Insira seu cupom</TextInput>
</View>

<View>
    <Text>SubTotal{"\n"}{"\n"}Frete</Text>
</View>
<View>
    <Text style={styles.title_a}>Total</Text>
    <Text>R$ 13000,00</Text>
</View>
<View style={styles.controlsbutons}>
        <Button title="Pagamento" onPress={Payment} />
      </View>
      </View>
    </ScrollView>
  );
}
