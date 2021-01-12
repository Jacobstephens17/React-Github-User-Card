import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
      url: res.data.html_url
    })
    console.log(this.state)
  })
  .catch(err => {
    console.log(err)
  })
}

handleClick = e => {
  e.preventDefault();
  console.log('click')
  
}

  render() {
    
    return (
      
      <div className="App">

        <h1>GitHub User Cards</h1>

        <StyledCard>

          <Img src={this.state.photo} />

          <StyledContent>

            <h1>Name: {this.state.name}</h1>
            <p>Bio: {this.state.bio}</p>

            <MidDiv>
              <h4>Followers: {this.state.followers}</h4>
              <h4>Repos: {this.state.repos}</h4>
            </MidDiv>
              
            <H3>Location: {this.state.location}</H3>

            <Button onClick={this.handleClick} >Link To GitHub Profile</Button>

          </StyledContent>

        </StyledCard>

      </div>

    );

  }

}

export default App;


const StyledCard = styled.div`
display:flex;
flex-direction:row;
align-items:center;
padding:2rem;
background-color:black;
color:white;
margin:0 auto;
justify-content:center;
padding:8rem;
`

const StyledContent = styled.div`
display:flex;
flex-direction:column;
padding:0;
margin:0;
padding-left:2rem;
`

const Img = styled.img`
width:350px;
border-radius:6px;

`

const Button = styled.button`
background:none;
border:white 1px solid;
border-radius:6px;
color:white;
padding:1rem 1rem;
width:50%;
`
const MidDiv = styled.div`
display:flex;
justify-content:space-around;
`

const H3 = styled.h3`
font-size:1.2rem;
`