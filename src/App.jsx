import './App.css';
import {Header} from "./components/Header/header";
import {Navbar} from "./components/Navbar/navbar";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <header>
                    <Header/>
                </header>
                <div className="app-layout__lower-wrapper">
                    <nav>
                        <Navbar state={props.state.navbar}/>
                    </nav>
                    <section>
                        <Route path='/my-profile' render={() => <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                        }/>
                        <Route path='/dialogs' render={() => <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}/>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
