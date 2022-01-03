import React, { PureComponent } from 'react';
import PostList from './components/PostList'
import Header from './components/Header'
import Footer from './components/Footer'

import './css/Post.css'

const filterByStatus = (listPosts = [], status = '', id) => {
  switch (status) {
    case 'REMOVE':
      return listPosts.filter(item => item.id !== id)
    default:
      return listPosts
  }
}

const filterPostsLeft = (listPosts = []) => {
  return listPosts.filter(item => !item.isCompleted)
}

class App extends PureComponent {
  state = {
    listPosts: [],
    todoEditingId: ''
  }

  addPosts = (post = {}) => {
    this.setState(preState => ({
      listPosts: [...preState.listPosts, post]
    }))
  }

  getEditPost = (id = '') => {
    this.setState({
      todoEditingId: id
    })
  }

  editPost = (post, index) => {
    const listPosts  = this.state.listPosts
    listPosts.splice(index, 1, post)
    this.setState({ listPosts })
  }

  removePost = (id = '') => {
    this.setState(prevState => ({
      listPosts: filterByStatus(prevState.listPosts, 'REMOVE', id)
    }))
  }

  render() {
    const { listPosts, status, todoEditingId } = this.state
    return (
      <div className="todoapp">
        <Header
          addPost={this.addPosts}
        />
        <PostList
          listPosts={filterByStatus(listPosts, status)}
          todoEditingId={todoEditingId}
          getEditPost={this.getEditPost}
          editPost={this.editPost}
          removePost={this.removePost}
        />
        <Footer
          setStatusFilter={(status) => this.setState({ status })}
          numOfPostsLeft={filterPostsLeft(listPosts).length}
          numOfPosts={listPosts.length}
        />
      </div>
    );

  }
}

export default App;
