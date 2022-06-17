import { View, Text, Image, Touchable, ScrollView } from "react-native";
import { styles } from "./styles";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import Vector from "../../assets/Vector.png";
import Novo from "../../assets/Novo.png";
import Group from "../../assets/Group.png";
import Prosseguir from "../../assets/prosseguir.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Products } from "./Products";

export function Profile() {
  const navigation = useNavigation<any>();

  const Products = () => {
    navigation.navigate("Products");
    // navigation.goBack();
  };
  const HomeStart = () => {
    navigation.navigate("HomeStart");
    // navigation.goBack();
  };

  const Payment = () => {
    navigation.navigate("Payment");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container_e}>
        <View style={styles.container_c}>
          <Text style={styles.title_a}>Perfil{"\n"}</Text>
        </View>

        <View style={styles.container_d}>
          <Image
            source={ImagemPerfil}
            style={styles.image_f}
            resizeMode="stretch"
          />
          <View>
            <Text style={styles.subtitle_c}>Rafa Moreira</Text>
            <Text style={styles.subtitle_b}>Rafa.moreira@gmail.com</Text>
          </View>
        </View>

        <View style={styles.container_c}>
          <Text style={styles.subtitle_d}>Configurações </Text>
        </View>
        <View style={styles.separate}>
          <Text style={styles.subtitle_b}>Editar Perfil</Text>
          <Image
            source={Prosseguir}
            style={styles.image_e}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.linha}></View>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Alterar Senha</Text>
          <Image
            source={Prosseguir}
            style={styles.image_e}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.linha}></View>

        <View style={styles.container_c}>
          <Text style={styles.subtitle_d}>Suporte </Text>
        </View>
        <View style={styles.separate}>
          <Text style={styles.subtitle_b}>Ajuda e suporte</Text>
          <Image
            source={Prosseguir}
            style={styles.image_e}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.linha}></View>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Sobre MW Marketplace</Text>
          <Image
            source={Prosseguir}
            style={styles.image_e}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.linha}></View>

        <View style={styles.container_d}>
          <Text style={(styles.subtitle_b, styles.red)}>Deslogar</Text>
        </View>

        <View style={styles.container_a}>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={HomeStart}>
              <Image
                source={Vector}
                style={styles.image_e}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={Products}>
              <Image
                source={Group}
                style={styles.image_e}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={Payment}>
              <Image
                source={Novo}
                style={styles.image_e}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={ImagemPerfil}
                style={styles.image_e}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
