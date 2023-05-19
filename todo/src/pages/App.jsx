import Pages from "./pages/Pages";
import styled from "styled-components";
import Navbar from "./componets/Navbar";
import Login from "./pages/Login";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <WrapperSmall>
         <Login/>
          

        </WrapperSmall>
        
      </BrowserRouter>
    </div>
  );
}

const WrapperSmall = styled.div`

    padding: 50px 0px 0px 0px;

`;

export default App;