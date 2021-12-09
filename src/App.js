import { Provider } from "react-redux";
import RepositoryList from "./components/RepositoryList";
import Sidebar from "./components/Sidebar";
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
