import { Route, Switch } from "react-router"
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard"

const Routes = () => {
	return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/customers" component={Customers} />
    </Switch>
  );
}

export default Routes
