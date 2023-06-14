import { BasketProvider } from "@contexts/basket";
import OnlineMenu from "./pages/online-menu/index";

function App() {
  return (
    <BasketProvider>
      <OnlineMenu />
    </BasketProvider>
  );
}

export default App;
