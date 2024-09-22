import "./App.css";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2024,11, 1, 1).getHours();

var userIsRegistered = true; 

function App() {
 
  return(

    <div className="container">
       <Login IsRegistered={userIsRegistered} />
    </div>
  )
}

export default App;
