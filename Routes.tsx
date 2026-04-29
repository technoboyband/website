import App from "./src/App.tsx";
import Thoughts from "./src/Thoughts.tsx";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thoughts",
    element: <Thoughts />,
  },
];
