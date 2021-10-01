import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <header>
                    <Header/>
                </header>
                <div className="app-layout__lower-wrapper">
                    <nav>
                        <Navbar/>
                    </nav>
                    <section>
                        <Route path='/my-profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
