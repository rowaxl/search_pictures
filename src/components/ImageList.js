import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const imageList = this.props.images.map(
            image => <ImageCard source={image} key={image.id} />
        );

        return (
            <div className="ui container" style={imageListStyle}>
                {imageList}
            </div>
        );
    }
}

const imageListStyle = {
    marginTop: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "0px 5px",
    gridAutoRows: "0.5px"
}

export default ImageList;