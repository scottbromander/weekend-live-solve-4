import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      galleryData: []
    }
  }

  componentDidMount() {
    axios.get('/gallery')
        .then((response) => {
          this.setState({
            galleryData : response.data
          });
          console.log(this.state);
        })
        .catch((err) => {
          console.log(err);
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList galleryData={this.state.galleryData}/>
      </div>
    );
  }
}

export default App;
