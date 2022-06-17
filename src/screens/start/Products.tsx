import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import bag from "../../assets/bag.png";
import Notebooks from "../../assets/Notebooks.png";
import Periferico from "../../assets/Periferico.png";
import Hardware from "../../assets/Hardware.png";
import Vector from "../../assets/Vector.png";
import Novo from "../../assets/Novo.png";
import Group from "../../assets/Group.png";
import Menu from "../../assets/menu.png";
import Search from "../../assets/search.png";
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export function Products() {
  const navigation = useNavigation<any>();

  const Profile = () => {
    navigation.navigate("Profile");
    // navigation.goBack();
  };
  const HomeStart = () => {
    navigation.navigate("HomeStart");
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
          <Text style={styles.title_a}>Produtos {"\n"}</Text>
          <Image source={bag} style={styles.image_b} resizeMode="stretch" />
        </View>

        <View style={styles.container_c}>
        <Image source={Search} style={styles.image_b} resizeMode="stretch" />
          <TextInput            
            placeholder="O que você esta procurando?"          
            maxLength={20}
          ></TextInput>
          <Image source={Menu} style={styles.image_b} resizeMode="stretch" />
        </View>

        <View style={styles.container_c}>
          <View>
            <Image
              source={Notebooks}
              style={styles.image_products}
              resizeMode="stretch"
            />
          </View>

          <View>
            <Text style={styles.subtitle_product}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c}>
          <View>
            <Image
              source={Hardware}
              style={styles.image_products}
              resizeMode="stretch"
            />
          </View>

          <View>
            <Text style={styles.subtitle_product}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_c}>
          <View>
            <Image
              source={Periferico}
              style={styles.image_products}
              resizeMode="stretch"
            />
          </View>

          <View>
            <Text style={styles.subtitle_product}>
              {"\n"}MacBook Air de 13″ {"\n"} Loja sistech Eletronicos{"\n"} R$
              10000,00
            </Text>
          </View>
        </View>

        <View style={styles.container_b}>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={HomeStart}>
              <Image
                source={Vector}
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
            <TouchableOpacity onPress={Payment}>
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
