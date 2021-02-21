import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Users from '../../pages/users';

// function SecureRoute(props) {
//   const isAuthenticated = sessionStorage.getItem('isAuthenticated');
//   const loginPath = '/login';

//     if (!isAuthenticated) {
//       // const renderComponent = () => <Redirect to={{ pathname: loginPath }} />;
//       // return <Route {...props} component={renderComponent} render={undefined} />
//       return <Redirect to={{ pathname: loginPath }} />;
//     }
//     return <Route {...props}/>

//   }

// export default SecureRoute;

// class SecureRoute extends React.Component {

//   render() {
//     const Component = this.props.component;
//     const isAuthenticated = sessionStorage.getItem('isAuthenticated');
//       return isAuthenticated ? (
//           <Component />
//       ) : (
//           <Redirect to={{ pathname: '/login' }} />
//       );
//   }
// }

// export default SecureRoute;

function SecureRoute(props) {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  const loginPath = '/login';

  return (
    <Route
      render={props => {
        return isAuthenticated ? (
          <component {...props} />
        ) : (
          <Redirect to={{ pathname: loginPath }} />
        );
      }}
    />
  );
}

export default SecureRoute;
