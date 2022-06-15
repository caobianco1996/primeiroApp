import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import bag from "../../assets/bag.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import Mastercard from "../../assets/Mastercard.png";
import Voltar from "../../assets/voltar.png";

export function Payment() {
  const navigation = useNavigation<any>();

  const Profile = () => {
    navigation.navigate("Profile");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_pag}>
        <Image
            source={Voltar}
            style={styles.image_arrow}
            resizeMode="stretch"            
          />
          <Text style={styles.title_pag}>Pagamento {"\n"}</Text>
        </View>

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>MacBook Air de 13"</Text>
          <Text style={styles.pagamento}>R$7.999,99</Text>
        </View>

        <View style={styles.linha}></View>

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>Inter Core I7 9700KF</Text>
          <Text style={styles.pagamento}>R$1.799,00</Text>
        </View>

        <View style={styles.linha}></View>

        <View style={styles.container_c}>
          <Text style={styles.pagamento}>PC Gamer EasyPC</Text>
          <Text style={styles.pagamento}>R$3.599,99</Text>
        </View>
        <View />

        <View style={styles.container_envio}>
          <Text style={styles.envio_para_title}>Envio para</Text>
        </View>
        <View style={styles.container_envio_para}>
          <Text style={styles.envio_para}>Avenida Brigadeiro Luís Antônio, 2050</Text>
          <Text style={styles.envio_para_purple}>Alterar</Text>
        </View>
        <View style={styles.container_envio2}>
          <Text style={styles.envio_para}>Bela Vista - São Paulo - SP</Text>
          </View>

          <View style={styles.linha}></View>

        <View style={styles.container_pagamento}>
          <Text style={styles.pagamento_title}>Pagamento</Text>
        </View>
        <View style={styles.container_pagamento_para}>
        <Image
            source={Mastercard}
            style={styles.image_card}
            resizeMode="stretch"            
          />
          <Text style={styles.pagamento_style}>**** **** **** 5456</Text>
          <Text style={styles.pagamento_para_purple}>Alterar</Text>
        </View>

        <View style={styles.container_envio2}>
          <Text style={styles.pagamento_style2}>Mastercard - 04/28</Text>
          </View>

          <View style={styles.linha}></View>

        <View style={styles.container_final}>
          <Text style={styles.final}>Subtotal</Text>
          <Text style={styles.final}>R$13.398,98</Text>
        </View>

 

        <View style={styles.container_final}>
          <Text style={styles.final}>Frete</Text>
          <Text style={styles.final}>Grátis</Text>
        </View>



        <View style={styles.container_final}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$13.398,98</Text>
        </View>
        <View />
        <View style={styles.controlsbutons}>
          <Button title="Comprar" onPress={Profile} />
        </View>
      </View>
    </ScrollView>
  );
}
