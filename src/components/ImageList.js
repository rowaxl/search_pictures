import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="ui container" style={imageListStyle}>
                {this.props.images.map(image => <ImageCard source={image} key={image.id} />)}
            </div>
        );
    }
}

const imageListStyle = {
    marginTop: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "0px 10px",
    gridAutoRows: "10px"
}

export default ImageList;