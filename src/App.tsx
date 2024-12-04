import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./lib/routes/root";
import Home from "./lib/routes/home";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <Home /> }],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  );
}

export default App;
