import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.states = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        console.log('spans: ', spans);
        this.setState({ spans: spans }, () => {
            console.log(this.states);
        });
        
    }

    render() {
        const { urls, description } = this.props.source;
        return (
            <div style={{ gridRowEnd: "span " + this.states.spans }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;