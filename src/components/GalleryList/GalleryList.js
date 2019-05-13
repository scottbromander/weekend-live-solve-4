import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        const htmlArray = this.props.galleryData.map((what, where) => {
            return (
                <div>
                    <div className="cell">
                        <img src={what.path} />
                    </div>

                    <p>{what.description}</p>

                    <GalleryItem />
                </div>
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