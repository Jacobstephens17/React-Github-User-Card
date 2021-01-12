import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

state = {
  photo:'',
  bio: '',
  followers: 0,
  location:'',
  name:'',
  repos:0,
  url:'',
}

componentDidMount() {
  axios.get('https://api.github.com/users/jacobstephens17')
  .then(res => {
    console.log(res.data)
    this.setState({
      photo:res.data.avatar_url,
      bio: res.data.bio,
      followers: res.data.followers,
      location: res.data.location,
      name: res.data.name,
      repos: res.data.public_repos,
      url: res.data.url
    })
    console.log(this.state)
  })
  .catch(err => {
    console.log(err)
  })
}

  render() {
    
    return (
      <div className="App">
        <h1>Test</h1>
        <div>
          <img src={this.state.photo} />
          <h1>Name: {this.state.name}</h1>
          <p>Bio: {this.state.bio}</p>
          <h4>Followers: {this.state.followers}</h4>
          <h4>Repos: {this.state.repos}</h4>
          <h4>Location: {this.state.location}</h4>
          <p>Profile Url: {this.state.url}</p>


        </div>
      </div>
    );
  }
}

export default App;
