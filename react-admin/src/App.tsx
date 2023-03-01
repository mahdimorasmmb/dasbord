import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import { themeSettings } from "theme";
import type { RooState } from "state";
import Products from "scenes/products";
import Customers from "scenes/customers";


function App() {
  const mode = useSelector((state: RooState) => state.mode.value);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/customers" element={<Customers/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
