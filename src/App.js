import LoginPage from "./components/LoginPage";
import { GlobalStyle } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    colors: {
      text: "#F78719",
      white: "#fff",
      helper: "#1575A7",
      btn: "rgb(98 84 243)",
      border: "1px solid rgba(4, 7, 47, 0.4)",
      shadow: " 0px 10px 40px rgba(0, 0, 0, 0.16)",
    },
    media: {
      mobile: "808px",
      tab: "1198px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
