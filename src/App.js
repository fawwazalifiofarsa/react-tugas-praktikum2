import React from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container">
          <a class="navbar-brand" href="#">NEws</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-3">
                <Link to="/event" className="nav-link active">Event</Link>
              </li>
              <li class="nav-item mx-3">
                <Link to="/gallery" className="nav-link active">Gallery</Link>
              </li>
              <li class="nav-item mx-3">
                <Link to="/cart" className="nav-link active">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Utama/>
      </div>
    );
  } 
}

export default App;
