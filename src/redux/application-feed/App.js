import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Form from './containers/FormContainer';
import PostList from './containers/PostListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
        <PostList />
      </Provider>
    );
  }
}

export default App;