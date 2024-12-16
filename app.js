import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Maintenance from './components/Maintenance';
import Reports from './components/Reports';
import Transactions from './components/Transactions';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="container mx-auto p-4">
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/maintenance" component={Maintenance} />
              <PrivateRoute path="/reports" component={Reports} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

