import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../../actions/index';
import { List, Map } from 'immutable';

class Button extends Component {
    static propTypes = {
        buttonText: PropTypes.string,
        className: PropTypes.string,
        location: PropTypes.string,
    }

    render() {
        const {className, buttonText, buttonOnClickFunc} = this.props;

        return (
            <button onClick={buttonOnClickFunc} type="button" className={className} data-toggle="modal" data-target="#npt">
                {buttonText}
            </button>
        )
    }
}

export default Button
