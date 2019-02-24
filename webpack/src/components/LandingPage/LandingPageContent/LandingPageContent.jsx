import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../../actions';

import styles from './LandingPageContent.scss';

@connect()
class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  handleSignUpButton() {
    const { dispatch } = this.props;

    if (this.agreeSignUp.value) {
      dispatch({type: ActionTypes.POST_EMAIL_LIST_SIGN_UP, json: {firstName: this.firstName.value, lastName: this.lastName.value, email: this.email.value}})
    }
    else {

    }
  }

  render() {


    return (
      <div className="LandingPageContent">
        <div className={"__sign-up-link"}>
          <div className={"__left"}>
            <div className={"__box"}>
              <div className={"__box-text-over"}>Become a Leader in Medicine</div>
              <div className={"__box-top"}/>
              <div className={"__box-middle"}/>
              <div className={"__box-bottom"}>
                <div className={"__box-bottom-text"}>Education, Mentorship, Growth</div>
                <button className={"__box-bottom-sign-up-button"}>Sign Up</button>
              </div>
            </div>
          </div>
          <div className={"__right"}/>
        </div>
        <div className={"__vision-content"}>
          <div className={"__left"}>
            <div className={"__left-picture"}>
              <img src={"/images/IMG_5073.jpg"}/>
            </div>
            <div className={"__left-box"}/>
          </div>
          <div className={"__right"}>
            <div className={"__right-title"}>
              Vision and Mission
            </div>
            <div className={"__right-text"}>
              We nurture Black and Latino medical students and
              trainees with the skills, coaching and connections
              they need to successfully transition from medical
              school to residency. We seek to propel and develop
              our Rising Leaders by developing a pipeline for
              aspiring, high-achieving Black and Latino physicians
              at all stages to lead organizations and communities
              worldwide.
            </div>
          </div>
        </div>
        <div className={"__components-content"}>
          <div className={"__components-list"}>
            <div className={"__components-list-item"}>
              <div className={"__components-list-item-image"}>
                <div className={"__learn-image"} />
              </div>
              <div className={"__components-list-item-title"}>
                Learn
              </div>
              <div className={"__components-list-item-text"}>
                Stuff. More stuff. Stuff.
                More stuff. Stuff. More
                stuff. Stuff. More stuff.
                Stuff. More stuff. Stuff.
              </div>
            </div>
            <div className={"__components-list-item"}>
              <div className={"__components-list-item-image"}>
                <div className={"__connect-image"} />
              </div>
              <div className={"__components-list-item-title"}>
                Connect
              </div>
              <div className={"__components-list-item-text"}>
                Stuff. More stuff. Stuff.
                More stuff. Stuff. More
                stuff. Stuff. More stuff.
                Stuff. More stuff. Stuff.
              </div>
            </div>
            <div className={"__components-list-item"}>
              <div className={"__components-list-item-image"}>
                <div className={"__grow-image"} />
              </div>
              <div className={"__components-list-item-title"}>
                Grow
              </div>
              <div className={"__components-list-item-text"}>
                Stuff. More stuff. Stuff.
                More stuff. Stuff. More
                stuff. Stuff. More stuff.
                Stuff. More stuff. Stuff.
              </div>
            </div>
          </div>
        </div>
        <div className={"__sign-up-content"}>
          <div className={"__left"}>
            <div className={"__first-name-control"}>
              <div className={"__first-name-label"}>First name:</div>
              <input className={"__first-name-input"} ref={(firstName) => this.firstName = firstName}/>
            </div>
            <div className={"__last-name-control"}>
              <div className={"__last-name-label"}>Last name:</div>
              <input className={"__last-name-input"} ref={(lastName) => this.lastName = lastName}/>
            </div>
            <div className={"__email-control"}>
              <div className={"__email-label"}>Email:</div>
              <input className={"__email-input"} ref={(email) => this.email = email}/>
            </div>
            <div className={"__agree-control"}>
              <input type={"checkbox"} ref={(agreeSignUp) => this.agreeSignUp = agreeSignUp } />
              <div className={"__agree-text"}>
                I agree to email updates from
                Leaders in Medicine
              </div>
            </div>
            <div className={"__sign-up-control"}>
              <button className={"__sign-up-button"} onClick={this.handleSignUpButton.bind(this)}>Sign Up</button>
            </div>
          </div>
          <div className={"__divider"}>
            <div className={"__divider-top"}/>
            <div className={"__divider-middle"}/>
            <div className={"__divider-bottom"}/>
          </div>
          <div className={"__right"}>
            <div className={"__sign-up-description-title"}>
              Sign up for updates
            </div>
            <div className={"__sign-up-description-text"}>
              Leaders in medicine is building, but we want to get you on
              board as we grow. Sign up here for email updates and early
              access to the Leaders in Medicine community
            </div>
          </div>
        </div>
      </div>
          )
          }
          }

          export default Home
