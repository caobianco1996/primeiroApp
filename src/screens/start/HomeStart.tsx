import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Grupo417 from "../../assets/Grupo417.png";
import bag from "../../assets/bag.png";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
import Vector from "../../assets/Vector.png";
import Novo from "../../assets/Novo.png";
import Group from "../../assets/Group.png";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Payment } from "./Payment";

export function HomeStart() {
  const navigation = useNavigation<any>();

  const Profile = () => {
    navigation.navigate("Profile");
    // navigation.goBack();
  };
  const Products = () => {
    navigation.navigate("Products");
    // navigation.goBack();
  };
  const Cart = () => {
    navigation.navigate("Cart");
    // navigation.goBack();
  };
  const Payment = () => {
    navigation.navigate("Payment");
    // navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container_c}>
          <Text style={styles.title_a}>Home {"\n"}</Text>
          <TouchableOpacity onPress={Cart}>
            <Image source={bag} style={styles.image_b} resizeMode="stretch" />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={Grupo417}
            style={styles.image_c}
            resizeMode="stretch"
          />
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
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"} MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"} MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={Profile}>
              <Image
                source={Periferico}
                style={styles.image_d}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <Text style={styles.subtitle_b}>
              {"\n"}MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
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
              {"\n"} MacBook Air de 13??? {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_b}>
          <View style={styles.buttons}>
            <TouchableOpacity>
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
            <TouchableOpacity onPress={Cart}>
              <Image
                source={Novo}
                style={styles.image_e}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={Profile}>
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
