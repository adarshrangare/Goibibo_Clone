
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels/Hotels";
import Bus from "./pages/Bus/Bus";

import Root from "./pages/Root";
import Trains from "./pages/Trains/Trains";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Root/>}>

<Route path="/flight" element={<Flights/>} />
<Route path="/hotels" element={<Hotels/>} />
<Route path="/trains" element={<Trains/>} />
<Route path="/bus" element={<Bus/>} />


</Route>));

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
