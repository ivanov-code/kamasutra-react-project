import './App.css';
import {Header} from "./components/Header/header";
import {Navbar} from "./components/Navbar/navbar";
import {Profile} from "./components/Profile/profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer/dialogs-container";
import {UsersPageContainer} from "./components/UsersPage/users-page-container";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <header>
                    <Header/>
                </header>
                <div className="app-layout__lower-wrapper">
                    <nav>
                        <Navbar />
                    </nav>
                    <section>
                        <Route path='/my-profile' render={ () => <Profile/> }/>
                        <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                        <Route path='/users' render={ () => <UsersPageContainer/> }/>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
