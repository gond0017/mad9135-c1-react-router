import React from 'react';
import AppHeader from './AppHeader';
import ProfileCard from './ProfileCard';
import LoadPosts from './LoadPosts';
import UserDetails from './UserDetails';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter ,Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  state = {
    profiles : [],
    userDetails: [],
    userPosts : []
  }
  
  getInitialProfiles() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
          if(res.ok){
            return res.json()
          }else{
            return "Something went wrong"
          }
    })
    .then(profiles => this.setState({ profiles: profiles }))
    .catch(console.error)
  }
  
  componentDidMount () {
    this.getInitialProfiles()
  }

  getDerailedUser = async (profiles) => {
    const userId = profiles.id
    let url = `https://jsonplaceholder.typicode.com/users/?id=${userId}`
    await fetch(url)
        .then(res => res.json())
        .then(response =>{
          this.setState({ userDetails: response })
        })
        .catch(error => {
          console.log(error.message)
        })

  }

  getPostsOfUser = async (users) => {
    const userId = users.id
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    await fetch(url)
        .then(res => res.json())
        .then(response =>{
          this.setState({ userPosts: response })
        })
        .catch(error => {
          console.log(error.message)
        })

  }

  render(){
    
    const profileJsx = this.state.profiles.map(profile =>
    (
      <ProfileCard profile={profile} getPost={this.LoadPosts} getDetails={this.getDerailedUser} key={profile.id}/>
    ) )

  const LoadAllUsers = () => <main className='profileList' style={{ padding: '2rem'}}>
                                <CSSTransitionGroup component="div"
                                  transitionName="fade"
                                  transitionAppear={true}
                                  transitionAppearTimeout={200}
                                  transitionEnterTimeout={250}
                                  transitionLeaveTimeout={225}>
                                  {profileJsx}
                                </CSSTransitionGroup>
                              </main>

  const JSXUserDetail = this.state.userDetails.map(detail => (
    <UserDetails key={detail.id} getPost={this.getPostsOfUser} details={detail} />
  ))

  const JSXUserPosts = 
    console.log(this.state.userPosts)
  this.state.userPosts.map(post =>(
    <LoadPosts key={ post.id } post={post} />
  ) )
  
    return (

      <BrowserRouter>
        <div className='App'>
          <AppHeader />
          
          <Switch>
              <Route exact path="/" component={LoadAllUsers} />
              <Route exact path="/posts" component={JSXUserPosts} />
              <Route exact path="/userDetails" >
                  {JSXUserDetail}
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
      
      
      
    )
  };

}

export default App