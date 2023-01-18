import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import Router from "./routes";
import theme from "./theme/theme";
import { MoviesProvider } from "./contexts/MoviesContext";
import { QueryClient, QueryClientProvider } from 'react-query'



function App() {
    const queryClient = new QueryClient()
      return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <MoviesProvider>
                    <CssBaseline/>
                    <Router/>
                </MoviesProvider>
            </QueryClientProvider>
        </ThemeProvider>
      );
}

export default App;
