import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <picture>
                <img style={imageStyle} src={this.props.source.urls.regular} alt={this.props.source.description} />
            </picture>
        )
    }
}

const imageStyle = {
    width: "80vw"
};

export default Image;