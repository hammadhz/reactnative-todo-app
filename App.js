import AppNavigator from "./navigation/AppNavigation";
import store from "./context/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
