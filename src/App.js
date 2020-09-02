import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer.js';
import ContentContainer from './Components/Content/ContentContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeThunkCreator } from './State/appReducer';
import { compose } from 'redux';
import Preloader from './Components/Preloader/Preloader';

class App extends React.Component {

  componentDidMount(){
    this.props.initializeThunkCreator()
  }

  render(){
    if(!this.props.initialized){return <Preloader/>}
    return (
      <div className="App">
        <HeaderContainer/>
        <Navbar />
        <div className="AppContent">
          <Route path="/profile/:userId?" render={() => <ContentContainer/>} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/login" render={() => <Login/>} />
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  connect(mapStateToProps,{initializeThunkCreator})
)(App);
