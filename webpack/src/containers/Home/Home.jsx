import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../actions';

import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import HomeContent from '../../components/HomeContent/HomeContent';

import Loader from '../../components/common/Loader/Loader';

const mapStateToProps = (state) => {
  return {
      addPatientDialogViewable: state.patients.get('addPatientDialogViewable')
  }
}

@connect(mapStateToProps)
class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
      const {dispatch } = this.props;

      dispatch({
        type: ActionTypes.STORE_PREVIOUS_LOCATION
      });

      dispatch({
          type: ActionTypes.MOUNT_HOME_CONTAINER
      });
  }

  componentWillUnmount() {
    const {dispatch } = this.props;

    dispatch({
      type: ActionTypes.UNMOUNT_LOGIN_CONTAINER
    })
  }

  render() {
    const { loading } = this.props;

    const { addPatientDialogViewable} = this.props;

    return (
      <div className="Container">
        <Loader loading={loading}/>
          {/*{!loading && loggedOn && <Header loggedOn={loggedOn}/>}*/}
          {/*{!loading && loggedOn && <HomeContent/>}*/}
          {/*{!loading && loggedOn &&<Footer/>}*/}
          {/*{!loading && loggedOn &&<Modal loggedOn={loggedOn} loginErrors={loginErrors} viewable={viewable} modalType={modalType} />}*/}
          <HomeContent addPatientDialogViewable={addPatientDialogViewable}/>
      </div>
    )
  }
}

export default Home
