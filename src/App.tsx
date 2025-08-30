import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
