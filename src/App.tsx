import "antd/dist/reset.css"; // Import Antd CSS reset

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/global";
import AppRoutes from "./Routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRoutes />
  </ThemeProvider>
);

export default App;
