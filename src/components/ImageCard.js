import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount = () =>  {
        this.imageRef.current.addEventListener('load', this.setSpans);
        console.log('componentDidMount');
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        this.setState({ spans: Math.ceil(height / 2) });
    }

    render() {
        const { urls, description } = this.props.source;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    style={{ width: "235px" }}
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;