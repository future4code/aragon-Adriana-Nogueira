import GlobalState from "./context/GlobalState";
import Router from "./routes/Router";
import styled from "styled-components"
import GlobalStyle from "./Theme/GlobalStyle";

const AppWrapper = styled.div`
  background-color: #fafafa;
`;

 function App() {
  return (
    <GlobalState>
      <GlobalStyle>
      <AppWrapper>
       <Router/>
    </AppWrapper>
    </GlobalStyle>
    </GlobalState>
  );
}
export default App


