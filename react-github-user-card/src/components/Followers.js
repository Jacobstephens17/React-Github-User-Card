import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Followers extends React.Component {
    state = {
        followerAccounts:[],
        photo:'',
        bio: '',
        followers: 0,
        location:'',
        name:'',
        repos:0,
        url:'',
      }


    componentDidMount() {

        axios.get(' https://api.github.com/users/jacobstephens17/followers')
        .then(res => {
            console.log(res.data)
          this.setState({
            followerAccounts: res.data[0],
            photo:res.data[0].avatar_url,
            bio: res.data[0].bio,
            followers: res.data[0].followers,
            location: res.data[0].location,
            name: res.data[0].login,
            repos: res.data[0].public_repos,
            url: res.data[0].html_url
          })
          console.log(this.state.followerAccounts)
          return(
          <div>Test</div>
          )
        })

    }
    render(){
        return(
            <div>

                <StyledCard>

                <Img src={this.state.photo} />

                <StyledContent>

                <h1>Username:  {this.state.name}</h1>

                </StyledContent>

                </StyledCard>
            </div>
        )
    }
}

export default Followers;


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


