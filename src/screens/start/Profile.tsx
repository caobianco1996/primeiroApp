import { View, Text, Image, Touchable } from "react-native";
import { styles } from "./styles";
import Grupo417 from "../../assets/Grupo417.png";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
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
        <Text style={styles.subtitle_b}>Gustavo.moreira@gmail.com {"\n"}</Text>
      </View>

      <View>
        <Image source={Grupo417} style={styles.image_c} resizeMode="stretch" />
      </View>

      <View style={styles.container_c}>
        <Text style={styles.subtitle_a}>Notebooks {"\n"}</Text>
        <Text style={styles.subtitle_a}>Ver Tudo {"\n"}</Text>
      </View>

      <View style={styles.container_c}>
        <View>
          <Image
            source={Notebooks}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Notebooks}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Notebooks}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"} MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
      </View>

      <View style={styles.container_c}>
        <Text style={styles.subtitle_a}>Hardware {"\n"}</Text>
        <Text style={styles.subtitle_a}>Ver Tudo {"\n"}</Text>
      </View>

      <View style={styles.container_c}>
        <View>
          <Image
            source={Hardware}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Hardware}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Hardware}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"} MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
      </View>

      <View style={styles.container_c}>
        <Text style={styles.subtitle_a}>Periferico {"\n"}</Text>
        <Text style={styles.subtitle_a}>Ver Tudo {"\n"}</Text>
      </View>

      <View style={styles.container_c}>
        <View>
          <Image
            source={Periferico}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Periferico}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
        <View>
          <Image
            source={Periferico}
            style={styles.image_d}
            resizeMode="stretch"
          />
          <Text style={styles.subtitle_b}>
            {"\n"} MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
            10000,00
          </Text>
        </View>
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
  );
}