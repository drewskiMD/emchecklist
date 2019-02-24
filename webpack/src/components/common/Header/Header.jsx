import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../../actions/index';
import { List, Map } from 'immutable';

import styles from './Header.scss';
import Dropdown from "../Dropdown/Dropdown";

@connect()
class Header extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loggedOn: PropTypes.bool,
    location: PropTypes.string
  }

  handleLoginClick() {
    const { dispatch } = this.props;

    dispatch({
      type: ActionTypes.TOGGLE_MODAL,
      modalType: "login"
    })
  }

  handleLogoutClick() {
    const { dispatch } = this.props;

    dispatch({
      type: ActionTypes.HANDLE_LOGOUT,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      userDropdownVisible: false
    }
  }

  handleMenuButtonClick() {
    const { dispatch } = this.props;
    dispatch({
      type: ActionTypes.TOGGLE_SIDE_MENU
    })
  }

  renderWhenNotLoggedIn() {
      return (
          <header className="Header">
              <div className={"__left"}>
                  <h1>Leaders in Medicine</h1>
              </div>
              <div className={"__middle"}>

              </div>
              <div className={"__right"}>
                  <div className={"__nav-item"}>
                      About
                  </div>
                  <div className={"__nav-item"}>
                      Sign In
                  </div>
              </div>
          </header>
      )
  }

  isLocationOrMouseOverLearn(location) {
    const { mouseOverNav } = this.state;

    if (location === '/learn' || mouseOverNav === 'learn') {
      return true
    } else {
      return false
    }
  }

  isLocationOrMouseOverConnect(location) {
    const { mouseOverNav } = this.state;

    if (location === '/connect' || mouseOverNav === 'connect') {
      return true
    } else {
      return false
    }
  }

  isLocationOrMouseOverGrow(location) {
    const { mouseOverNav } = this.state;

    if (location === '/grow' || mouseOverNav === 'grow') {
      return true
    } else {
      return false
    }
  }

  isLocationOrMouseOverContactUs(location) {
    const { mouseOverNav } = this.state;

    if (location === '/contact_us' || mouseOverNav === 'contactUs') {
      return true
    } else {
      return false
    }
  }

  isLocationOrMouseOverLogin(location) {
    const { mouseOverNav } = this.state;

    if (location === '/login' || mouseOverNav === 'login') {
      return true
    } else {
      return false
    }
  }

  mouseOverLocation(location) {
    this.setState({
      mouseOverNav: location
    })
  }

  mouseLeave() {
    this.setState({
      mouseOverNav: null
    })
  }

  render() {
    const {loggedOn} = this.props;

    return (
        <nav className="navbar navbar-dark navbar-expand-sm justify-content-end bg-dark">

          <ul className="navbar-nav">

            <li className="nav-item">

              <a className="nav-link" href="logout.php"> Logout</a>

            </li>

          </ul>

        </nav>
    )
  }
}

export default Header
