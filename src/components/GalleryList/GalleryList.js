import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        const htmlArray = this.props.galleryData.map((what, where) => {
            console.log(what);
            
            return (
                <GalleryItem
                    path={what.path}
                    description={what.description}
                    likes={what.likes}
                />
            );
        });

        return(
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default GalleryList;