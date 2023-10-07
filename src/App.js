import "./App.css";
import { Footer, Header } from "./components";
import { Home } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
