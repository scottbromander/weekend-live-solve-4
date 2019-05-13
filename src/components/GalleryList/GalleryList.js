import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {

    render() {
        console.log('Props inside Gallery List: ', this.props);

        const htmlArray = this.props.galleryData.map((what, where) => {
            return (
                <div>
                    <div className="cell">
                        <img src={what.path} />
                    </div>

                    <p>{what.description}</p>
                </div>
            );
        });

        console.log(htmlArray);

        return(
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default GalleryList;