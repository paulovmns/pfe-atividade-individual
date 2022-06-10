import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddRegistro } from './components/AddRegistro';
import { EditRegistro } from './components/EditRegistro';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddRegistro} exact />
          <Route path="/edit/:id" component={EditRegistro} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;