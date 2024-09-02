import { AppProvider } from "./contexts/AppContext";
import Home from "./pages/Home/Home";
import { enableMapSet } from 'immer';

enableMapSet();

function App() {
  return <AppProvider>
    <Home />
  </AppProvider>
}

export default App;
