import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import bag from "../../assets/bag.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/Button";

export function Payment() {
  const navigation = useNavigation<any>();

  const Profile = () => {
    navigation.navigate("Profile");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_c}>
          <Text style={styles.title_a}>Pagamento {"\n"}</Text>
          <Image source={bag} style={styles.image_b} resizeMode="stretch" />
        </View>

        <View>
          <TextInput
            //style={(styles.input, styles.register)}
            placeholder="qq coisa"
            //placeholderTextColor={theme.colors.primary}
            maxLength={20}
          ></TextInput>
        </View>

        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>MacBook Air R$10000</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Inter Core R$10000</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Inter Core R$10000</Text>
        </View>
        <View />

        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Envio para</Text>
        </View>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Avenida aaaa</Text>
          <Text style={styles.subtitle_b}>Alterar</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Pagamento</Text>
        </View>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Cartao</Text>
          <Text style={styles.subtitle_b}>Alterar</Text>
        </View>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View>
          <Text style={styles.subtitle_b}>Cupom de desconto</Text>
          <TextInput>Insira seu cupom</TextInput>
        </View>

        <View>
          <Text style={styles.subtitle_b}>
            SubTotal{"\n"}
            {"\n"}Frete
          </Text>
        </View>
        <View>
          <Text style={styles.title_a}>Total</Text>
          <Text>R$ 13000,00</Text>
        </View>
        <View style={styles.controlsbutons}>
          <Button title="Comprar" onPress={Profile} />
        </View>
      </View>
    </ScrollView>
  );
}
