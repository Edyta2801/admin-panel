import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SecureRoute from './components/SecureRoute';
import LoginPage from './pages/login';
import UsersPage from './pages/users';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Router>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <SecureRoute path="/users" exact>
              <UsersPage />
            </SecureRoute>
            <Route path="/" exact>
              Hello
              <Link to="/users">Show me users</Link>
            </Route>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
