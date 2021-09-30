import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";

const App = () => {
    return (
        <div className="app-layout">
            <header>
                <Header/>
            </header>
            <div className="app-layout__lower-wrapper">
                <nav>
                    <Navbar/>
                </nav>
                <section>
                    <Profile/>
                </section>
            </div>
        </div>
    );
}

export default App;
