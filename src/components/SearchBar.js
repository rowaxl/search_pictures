import React from 'react';

class SearchBar extends React.Component {
    state = { input: null };

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ input: event.target.value });
    }
    
    onInputClick(event) {
        console.log(event.target);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            onClick={this.onInputClick}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
