import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/users/add" component={AddUser}/>
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route exact path="/users/:id" component={User} />
    </BrowserRouter>
  );
}

export default App;
