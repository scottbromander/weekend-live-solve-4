import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        const htmlArray = this.props.galleryData.map((what, where) => {
            return (
                <GalleryItem
                    path={what.path}
                    description={what.description}
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