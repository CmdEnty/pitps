import React from "react";
// import {Switch as SwitchRoute,Route} from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div>
      <Sidebar />
      {/* <SwitchRoute> */}
      {/* <Route path="/"> */}
            <Dashboard />
          {/* </Route> */}
      {/* </SwitchRoute> */}
    </div>
  );
}

const Div = styled.div`
  position: relative;
`;
