import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CameraPage from "../screens/CameraPage";
import Home from "../screens/Home";

const screens = {
  Home: {
    screen: Home,
  },
  Camera: {
    screen: CameraPage,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
