import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            // or, this will be same work
                            onChange={ e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
