import React, { Component } from 'react';

class GalleryItem extends Component {

    render() {
        return (
            <div>
                <div className="cell">
                    <img src={this.props.path} />
                </div>

                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default GalleryItem;