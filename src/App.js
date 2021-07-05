import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CustomerList } from "./pages/CustomerList";
import { CustomerUpsert } from "./pages/CustomerUpsert";

function App() {
  return (
    <Router>
      <div className="bg-dark text-light p-3 d-flex justify-content-end">
        <Link to="/customer-list" className="text-light mr-5">
          <h6>Customer List</h6>
        </Link>
        <Link to="/customer-upsert" className="text-light">
          <h6>Customer Upsert</h6>
        </Link>
      </div>

      <Route exact path="/" component={CustomerList} />
      <Route exact path="/customer-upsert" component={CustomerUpsert} />
      <Route exact path="/customer-list" component={CustomerList} />
    </Router>
  );
}

export default App;
