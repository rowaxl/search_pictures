import React from 'react';
import SearchBar from './SearchBar';
import ImageClient from './ImageClient';
import Image from './Image';

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const { data } = await ImageClient.searchImage(term);
        this.setState({ images: data.results })
    }

    render() {
        const imageList = this.state.images.map((image, i) => {
            return <Image src={image.urls.regular} key={i} />
        })
        console.log(imageList)

        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found {this.state.images.length} images
                </div>
                <div className="ui container" style={{ marginTop: "10px", display: "grid" }}>
                    {imageList}
                </div>
            </div>
        )
    }
}

export default App;
