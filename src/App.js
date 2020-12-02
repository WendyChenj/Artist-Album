import React from 'react';
import Home from './components/Home';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistDetail from './components/artists/ArtistDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/artists' component={ArtistDetail} />
                        {/* <ArtistDetail />
                    </Route> */}
                    <Route path='/newArtist' component={ArtistCreate} />
                        {/* <ArtistCreate />
                    </Route> */}
                    <Route path='/' component={Home} />
                        {/* <Home />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;