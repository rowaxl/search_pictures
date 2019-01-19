import React from 'react';
import SearchBar from './SearchBar';
import ImageClient from './ImageClient';

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const { data } = await ImageClient.searchImage(term);
        this.setState({ images: data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found { this.state.images.length } images
            </div>
        )
    }
}

export default App;
