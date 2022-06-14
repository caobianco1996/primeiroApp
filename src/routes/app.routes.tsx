import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { Start } from "../screens/start";
import { SignIn } from "../screens/signin";
import { RememberPassword } from "../screens/signin/RememberPassword";
import { FinishPassword } from "../screens/signin/FinishPassword";
import { Register } from "../screens/signin/Register";
import { RegisterTwo } from "../screens/signin/RegisterTwo";
import { RegisterAddress } from "../screens/signin/RegisterAddress";
import { RegisterPicture } from "../screens/signin/RegisterPicture";
import { FinishRegister } from "../screens/signin/FinishRegister";
import { HomeStart } from "../screens/start/HomeStart";
import { Profile } from "../screens/start/Profile";
import { Products } from "../screens/start/Products";
import { Cart } from "../screens/start/Cart";
import { Payment } from "../screens/start/Payment";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="RememberPassword" component={RememberPassword} />
      <Stack.Screen name="FinishPassword" component={FinishPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterTwo" component={RegisterTwo} />
      <Stack.Screen name="RegisterAddress" component={RegisterAddress} />
      <Stack.Screen name="RegisterPicture" component={RegisterPicture} />
      <Stack.Screen name="FinishRegister" component={FinishRegister} />
      <Stack.Screen name="HomeStart" component={HomeStart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}
