import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

import styles from './Loader.scss';

@connect()
export default class Loader extends Component {
    static propTypes = {
        loading: PropTypes.bool
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { loading } = this.props;

        return(
            <div className={loading? "Loader" : "Loader _hidden"}>
                <div className={"__loader-ring"}><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}
