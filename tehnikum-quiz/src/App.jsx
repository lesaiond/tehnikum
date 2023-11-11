import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/1',
    element: <StepOne />,
  },
  {
    path: '/2',
    element: <StepTwo />,
  },
  {
    path: '/3',
    element: <StepThree />,
  },
  {
    path: '/4',
    element: <StepFour />,
  },
  {
    path: '/end',
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
