import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MainNavigator from "./navigators/MainNavigator";

const Stack = createStackNavigator();

const theme = {
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {
  const [loaded] = useFonts({
    RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
    RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
    RalewayLight: require("./assets/fonts/Raleway-Light.ttf"),
    InterBold: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  if(!loaded) return null

  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
