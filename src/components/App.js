import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('/search/photos', {
      baseURL: 'https://api.unsplash.com',
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID fV4a_IfzalbLDjtMGQBZXJbU-OIP5eSp9EkJJVbB2G8',
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
