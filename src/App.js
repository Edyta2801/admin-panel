import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SecureRoute from './components/SecureRoute';
import LoginPage from './pages/login';
import Users from './pages/users';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Router>
          {/* <Stack h="7vh" p={2} justify="center" align="center" isInline>
            <Box>
              <Link exact to="/">Home</Link>
            </Box>
            <Box>
              <Link to="/login">Login</Link>
            </Box>
            <Box>
              <Link to="/users">Users</Link>
            </Box>
          </Stack> */}

          <Stack>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <SecureRoute exact path="/users" component={Users}>
              {/* <Users /> */}
            </SecureRoute>
            <Box spacing={5} justify="center" align="center">
              <Route exact path="/">
                Hello
                <Link to="/users">Show me users</Link>
              </Route>
            </Box>
          </Stack>
        </Router>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
