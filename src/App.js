import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePageBase from "./pages/HomePageBase";
import FinishAuth from "./pages/FinishAuth";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element ={<HomePageBase/>}/>
                <Route path="/login" element ={<FinishAuth/>}/>
            </Routes>
        </Router>
    )
}
export  default App