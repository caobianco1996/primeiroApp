import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import Mastercard from "../../assets/Mastercard.png";
import Voltar from "../../assets/voltar.png";

export function Payment() {
  const navigation = useNavigation<any>();

  const returnHome = () => {
    navigation.navigate("HomeStart");
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_pag}>
          <Image
            source={Voltar}
            style={styles.image_arrow}
            resizeMode="stretch"
            accessibilityLabel="Voltar"
          />
          <Text style={styles.title_pag}>Pagamento demonstrativo</Text>
        </View>

        <Text style={styles.envio_para}>
          Protótipo de interface: nenhuma compra ou cobrança será realizada. Não informe dados reais.
        </Text>

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>MacBook Air de 13&quot;</Text>
          <Text style={styles.pagamento}>R$ 7.999,99</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>Inter Core i7 9700KF</Text>
          <Text style={styles.pagamento}>R$ 1.799,00</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>PC Gamer EasyPC</Text>
          <Text style={styles.pagamento}>R$ 3.599,99</Text>
        </View>

        <View style={styles.container_envio}>
          <Text style={styles.envio_para_title}>Endereço fictício</Text>
        </View>
        <View style={styles.container_envio_para}>
          <Text style={styles.envio_para}>Endereço de demonstração, São Paulo - SP</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.container_pagamento}>
          <Text style={styles.pagamento_title}>Forma de pagamento fictícia</Text>
        </View>
        <View style={styles.container_pagamento_para}>
          <Image
            source={Mastercard}
            style={styles.image_card}
            resizeMode="stretch"
            accessibilityLabel="Bandeira ilustrativa de cartão"
          />
          <Text style={styles.pagamento_style}>Cartão de demonstração •••• 5456</Text>
        </View>
        <View style={styles.container_envio2}>
          <Text style={styles.pagamento_style2}>Nenhum cartão foi cadastrado</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.container_final}>
          <Text style={styles.final}>Subtotal</Text>
          <Text style={styles.final}>R$ 13.398,98</Text>
        </View>
        <View style={styles.container_final}>
          <Text style={styles.final}>Frete</Text>
          <Text style={styles.final}>Grátis</Text>
        </View>
        <View style={styles.container_final}>
          <Text style={styles.total}>Total demonstrativo</Text>
          <Text style={styles.total}>R$ 13.398,98</Text>
        </View>

        <View style={styles.container_g}>
          <Button title="Voltar à loja (sem comprar)" onPress={returnHome} />
        </View>
      </View>
    </ScrollView>
  );
}
