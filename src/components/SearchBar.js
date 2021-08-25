import React from 'react';

class SearchBar extends React.Component{

    state={term:''};

    onInputChange = (event) => {
        this.setState({term:event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
             <div className="search-field">
             <input className="search-bar"  type="text" onChange={this.onInputChange}/>
                <button className="search-btn">Search</button>
                 </div>   
            </form>
        );
    }
}

export default SearchBar;