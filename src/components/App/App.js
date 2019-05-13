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
    this.getGallery();
  }

  getGallery() {
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

  putLikes(id) {
    axios.put(`/gallery/like/${id}`)
        .then((response) => {
          this.getGallery();
        })
        .catch((err) => {
          console.log(`Err: ${err}`);
        })
  }

  clickLike = (event) => {
    const id = event.target.dataset.id;
    this.putLikes(id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList
              galleryData={this.state.galleryData}
              clickLike={this.clickLike}
        />
      </div>
    );
  }
}

export default App;
