import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import styles from './Footer.scss';

@connect()
class Footer extends Component {
  static propTypes = {
    loggedOn: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  renderNotLoggedInFooter() {
      return (
          <footer className="Footer">
              <div className={"__content"}>
                <div className={"__left"}>
                  <img src={"/images/contact.png"}/>
                </div>
                <div className={"__right"}>
                  <div className={"__questions"}>
                    <div className={"__question-line"}>More Questions?</div>
                    <div className={"__question-line"}>Want to get involved in Leaders in Medicine?</div>
                  </div>
                  <div className={"__contact-us"}>
                    Contact Us
                  </div>
                </div>
              </div>
            <div className={"__cpr"}>
              Copyright 2019 Leaders in Medicine
            </div>
          </footer>
      )
  }

  render() {
    const { loggedOn} = this.props;
    if (loggedOn) {
      return null
    } else {
      return this.renderNotLoggedInFooter()
    }
  }
}

export default Footer
