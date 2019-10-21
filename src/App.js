import React from 'react';
import AppHeader from './AppHeader';
import PostsHeader from './PostsHeader';
import ToDosHeader from './ToDosHeader';
import ProfileCard from './ProfileCard';
import LoadPosts from './LoadPosts';
import LoadToDos from './LoadToDos';
import UserDetails from './UserDetails';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter ,Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  state = {
    profiles : [],
    userDetails: [],
    userPosts : [],
    userToDos : []
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
          console.log(" => " + response)
          this.setState({ userPosts: response })
        })
        .catch(error => {
          console.log(error.message)
        })
  }

  getToDosOfUser = async (users) => {
    const userId = users.id
    let url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    await fetch(url)
        .then(res => res.json())
        .then(response =>{
          console.log(" => " + response)
          this.setState({ userToDos: response })
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

  const JSXUserDetail = this.state.userDetails.map(detail => (
    <UserDetails key={detail.id} getToDos={this.getToDosOfUser} getPost={this.getPostsOfUser} details={detail} />
  ))

  const JSXUserPosts =  this.state.userPosts.map(post =>(
      <LoadPosts key={ post.id } post={post} />
    ) )

    
    const JSXUserTodos =  this.state.userToDos.map(todos =>(
      <LoadToDos key={ todos.id } todos={todos} />
    ) )
    return (

      <BrowserRouter>
        <div className='App'>          
          <Switch>
              <Route exact path="/">
                <AppHeader />
                <main className='profileList' style={{ padding: '2rem'}}>
                    <CSSTransitionGroup component="div"
                      transitionName="fade"
                      transitionAppear={true}
                      transitionAppearTimeout={200}
                      transitionEnterTimeout={250}
                      transitionLeaveTimeout={225}>
                      {profileJsx}
                    </CSSTransitionGroup>
                  </main>
              </Route>
              <Route exact path="/posts">
                <PostsHeader />
                <main className='profileList' style={{ padding: '2rem'}}>
                    <CSSTransitionGroup component="div"
                      transitionName="fade"
                      transitionAppear={true}
                      transitionAppearTimeout={200}
                      transitionEnterTimeout={250}
                      transitionLeaveTimeout={225}>
                      {JSXUserPosts}
                    </CSSTransitionGroup>
                  </main>
              </Route>
              <Route exact path="/userDetails" >
                <main className='profileList' style={{ padding: '2rem'}}>
                    <CSSTransitionGroup component="div"
                      transitionName="fade"
                      transitionAppear={true}
                      transitionAppearTimeout={200}
                      transitionEnterTimeout={250}
                      transitionLeaveTimeout={225}>
                      {JSXUserDetail}
                    </CSSTransitionGroup>
                  </main>
              </Route>
              <Route exact path="/userToDos">
                <ToDosHeader />
                <main className='profileList' style={{ padding: '2rem'}}>
                    <CSSTransitionGroup component="div"
                      transitionName="fade"
                      transitionAppear={true}
                      transitionAppearTimeout={200}
                      transitionEnterTimeout={250}
                      transitionLeaveTimeout={225}>
                      {JSXUserTodos}
                    </CSSTransitionGroup>
                  </main>
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
      
      
      
    )
  };

}

export default App