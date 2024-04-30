import "./App.css";
import { RouterProvider } from "react-router";
import rootRouter from "./router/root";

const App = () => {
  return <RouterProvider router={rootRouter} />;
};

export default App;
