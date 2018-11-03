import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import PostAnimal from "./Pages/PostAnimal/PostAnimal";
import Search from "./Pages/Search/Search";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => <Home
                            {...props}
                        />}
                    />
                    <Route
                        exact path="/post"
                        render={(props) => <PostAnimal
                            {...props}
                        />}
                    />
                    <Route
                        exact path="/search"
                        render={(props) => <Search
                            {...props}
                        />}
                    />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
