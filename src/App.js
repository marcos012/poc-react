import { Provider } from "react-redux";
import AppRouter from "./Routes";
import store from "./store";

function App() {
  return (
    <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </div>
  );
}

export default App;
