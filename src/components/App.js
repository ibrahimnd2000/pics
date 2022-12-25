import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('/search/photos', {
        baseURL: 'https://api.unsplash.com',
        params: {
          query: term,
        },
        headers: {
          Authorization:
            'Client-ID fV4a_IfzalbLDjtMGQBZXJbU-OIP5eSp9EkJJVbB2G8',
        },
      })
      .then((response) => {});
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
