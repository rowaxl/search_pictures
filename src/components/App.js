import React from 'react';
import SearchBar from './SearchBar';
import ImageClient from '../api/ImageClient';

import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: [],
        page: 0
    }

    onSearchSubmit = async (term) => {
        const { data } = await ImageClient.searchImage(term, this.state.page);
        this.setState({
            images: data.results,
            page: (this.state.page++)
        })
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "inline-block" }}>
                            Found {this.state.images.length} images /
                            Page {this.state.page}
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <button class="ui left attached button">Prev</button>
                            <button class="right attached ui button">Next</button>
                        </div>
                    </div>
                </div>
                <ImageList images={ this.state.images } />
            </div>
        )
    }
}

export default App;
