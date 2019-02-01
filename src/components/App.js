import React from 'react';
import SearchBar from './SearchBar';
import ImageClient from '../api/ImageClient';

import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: [],
        term: '',
        page: 0,
        totalPages: 0
    }

    onSearchSubmit = async (term) => {
        const { data } = await ImageClient.searchImage(term, 1);
        this.setState({
            images: data.results,
            term,
            page: 1,
            totalPages: data.total_pages
        });
    }

    loadPage = async (target) => {
        if (target < 1 || target > this.state.totalPages) return;
        const { data } = await ImageClient.searchImage(this.state.term, target);
        this.setState({
            images: data.results,
            page: target
        })
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "inline-block" }}>
                            Found {this.state.images.length} images
                        </div>
                        <div style={{ display: "inline-block" }}>
                            Page {this.state.page}
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <button className="ui left attached button" onClick={(e) => {this.loadPage(this.state.page - 1)}}>Prev</button>
                            <button className="right attached ui button" onClick={(e) => {this.loadPage(this.state.page + 1)}}>Next</button>
                        </div>
                    </div>
                </div>
                <ImageList images={ this.state.images } />
            </div>
        )
    }
}

export default App;
