import { Provider } from "react-redux";
import RepositoryList from "./components/RepositoryList";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";

function App() {
  return (
    <div>
    <Provider store={store}>
      {/* <Video />
      <Sidebar /> */}
      <RepositoryList />
    </Provider>
    </div>
  );
}

export default App;
