import { View, Text, Image, Touchable, ScrollView } from "react-native";
import { styles } from "./styles";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import Vector from "../../assets/Vector.png";
import Grupo414 from "../../assets/Grupo 414.png";
import Group from "../../assets/Group.png";
import Elipse from "../../assets/Elipse 1.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Profile() {
  const navigation = useNavigation<any>();

  const HomeStart = () => {
    navigation.navigate("HomeStart");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_c}>
          <Text style={styles.title_a}>Perfil{"\n"}</Text>
        </View>

        <View style={styles.container_d}>
          <Image
            source={ImagemPerfil}
            style={styles.image_f}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_a}>Gustavo Moreira {"\n"} a</Text>
          <Text style={styles.subtitle_b}>
            Gustavo.moreira@gmail.com {"\n"}
          </Text>
        </View>


        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Configurações </Text>
        </View>

        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Editar Perfil</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Alterar Senha</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
<View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Suporte </Text>
        </View>

        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Ajuda e suporte</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        <View style={styles.container_c}>
          <Text style={styles.subtitle_b}>Sobre Mw MarketPlace</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>

<View style={styles.container_d}>
<Text style={styles.subtitle_b}>Deslogar</Text>
</View>
        <View>
          <View style={styles.buttons}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={HomeStart}>
                <Image
                  source={Vector}
                  style={styles.image_e}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={Grupo414}
                  style={styles.image_e}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={Group}
                  style={styles.image_e}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={Profile}>
                <Image
                  source={Elipse}
                  style={styles.image_e}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
