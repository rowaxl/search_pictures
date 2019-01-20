import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.src = props.src;
    }

    render() {
        console.log(this.props.src)
        return (
            <picture>
                <img style={imageStyle} src={this.props.src} alt="failed to render" />
            </picture>
        )
    }
}

const imageStyle = {
    width: "80vw"
};

export default Image;