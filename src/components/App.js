import React from 'react';
import SearchBar from './SearchBar';
import ImageClient from '../api/ImageClient';

import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const { data } = await ImageClient.searchImage(term);
        this.setState({ images: data.results })
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={ this.onSearchSubmit } />
                    Found { this.state.images.length } images
                </div>
                <ImageList images={ this.state.images } />
            </div>
        )
    }
}

export default App;
