import React, { Component } from 'react';

class GalleryItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: true
        }
    }

    clickCell = (event) => {
        this.setState ({
            clicked : !this.state.clicked
        });
    }

    render() {
        let cellHtml = <img src={this.props.path} />;

        if (this.state.clicked == false) {
            cellHtml = <p>{this.props.description}</p>;
        }

        return (
            <div>
                <div className="cell" onClick={this.clickCell}>
                    {cellHtml}
                </div>
                <p>{this.props.likes} people love this image!</p>
                <button>Like this image</button>
            </div>
        )
    }
}

export default GalleryItem;