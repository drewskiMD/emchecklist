import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../actions';
import Button from "../common/Button/Button";

import {Map } from 'immutable';

@connect()
class AddPatientInputForm extends Component {


    addPatientClick() {
        const { dispatch } = this.props;

        dispatch({
            type: "ADD_PATIENT",
            patient: Map({
                firstName: this.firstName.value,
                lastName: this.lastName.value
            })
        })
    }

    render() {
        return(
            <form>
                <input className={""} ref={(firstName) => this.firstName = firstName}/>
                <input className={""} ref={(lastName) => this.lastName = lastName}/>
                {/*<Button buttonText={"ADD"} className={"btn btn-default"} buttonOnClickFunc={this.addPatientClick.bind(this)}/>*/}
            </form>

        )
    }
}

export default  AddPatientInputForm