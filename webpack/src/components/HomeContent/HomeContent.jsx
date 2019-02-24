import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ActionTypes from '../../actions';

import Header from '../common/Header/Header';
import AddPatientInputForm from '../HomeContent/AddPatientInputForm';

import styles from './HomeContent.scss';
import Button from "../common/Button/Button";

@connect()
export default class HomeContent extends Component {
    handleAddPatient() {
        const {dispatch } = this.props;

        dispatch({type: "ADD_PATIENT_BUTTON_CLICK"})
    }

    render() {
        const {addPatientDialogViewable } = this.props;

        return (
            <div className="container-fluid">

                <Header/>

                <div className="row">

                    <div className="col">

                        <button type="button" className="btn btn-dark" onClick="newShift()"><span
                            className="badge badge-light"></span> + new shift
                        </button>

                    </div>

                </div>

                <div className="row">

                    <div className="col">


                    </div>

                    <div className="col">

                        <button type="button" className="btn btn-light" onClick="showall()"><span
                            className="badge badge-light"></span> Show all
                        </button>

                        <button type="button" className="btn btn-danger" onClick="unseen()"><span
                            className="badge badge-light"></span> Not Seen
                        </button>

                        <button type="button" className="btn btn-warning" onClick="undispod()"><span
                            className="badge badge-light"></span> Not Dispo'd
                        </button>

                        <button type="button" className="btn btn-success" onClick="dispod()"><span
                            className="badge badge-light"></span> Dispo'd
                        </button>

                        <button type="button" className="btn btn-primary" onClick="complete()"><span
                            className="badge badge-light"></span> Complete
                        </button>

                    </div>

                    <div className="col">


                    </div>

                </div>

                <div className="row">

                    <div className="col">

                        <table className="table" id="pts">

                        </table>

                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        <Button buttonOnClickFunc={this.handleAddPatient.bind(this)} buttonText={"+ Patient"} className={"btn"}/>
                    </div>

                </div>

                {addPatientDialogViewable? <AddPatientInputForm/> : null}

                <div className="modal" id="npt">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h4 className="modal-title">Enter New Patient</h4>

                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>

                            <div className="modal-body">

                                <form id="nptf" className="form-group">

                                    <label htmlFor="fn">First:</label><input className="form-control" id="fn"
                                                                             type="text"/>

                                    <label htmlFor="ln">Last:</label><input className="form-control" id="ln"
                                                                            type="text"/>

                                    <label htmlFor="rm">Room:</label><input className="form-control" id="rm"
                                                                            type="text"/>

                                    <label htmlFor="cc">CC:</label><input className="form-control" id="cc" type="text"/>

                                </form>

                            </div>

                            <div className="modal-body">

                                suggestions

                            </div>

                            <div className="modal-footer">

                                <input type="button" className="btn btn-primary" value="+ new pt" data-dismiss="modal"
                                       onClick="newpt(fn.value,ln.value,rm.value,cc.value)"/>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="modal" id="dx">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h4 className="modal-title" id="ccdxt"></h4>

                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>

                            <div className="modal-body">

                                <div className="row">

                                    <div className="col-5">

                                        <input type="hidden" id="viddx"/><input type="hidden" id="ccdx"/>

                                        <div id="textdx"><input checked className="form-control dx" type="text"/></div>

                                    </div>

                                    <div className="col-7">

                                        Suggestions Based on CC: <br/>

                                        <div id="sdx">

                                            <form id="dxf" className="form-group">


                                            </form>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="modal-body" id="icd">


                            </div>

                            <div className="modal-footer">

                                <input type="button" className="btn btn-primary" value="select" data-dismiss="modal"
                                       onClick="dx(viddx.value,ccdx.value)"/>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="modal" id="dispo">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h4 className="modal-title">Enter A Disposition:</h4>

                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>

                            <div className="modal-body">

                                <form id="dispof" className="form-group">

                                    <input type="hidden" id="viddispo"/>

                                    <label htmlFor="h">Home</label><input className="form-control" id="h" value="home"
                                                                          name="dispor" onChange="dispoP()"
                                                                          type="radio"/>

                                    <label htmlFor="o">ED Obs</label><input className="form-control" id="o" value="obs"
                                                                            name="dispor" onChange="dispoP()"
                                                                            type="radio"/>

                                    <label htmlFor="a">Admit</label><input className="form-control" id="a" value="admit"
                                                                           name="dispor" onChange="dispoP()"
                                                                           type="radio"/>

                                    <label htmlFor="i">ICU</label><input className="form-control" id="i" value="icu"
                                                                         name="dispor" onChange="dispoP()"
                                                                         type="radio"/>

                                    <label htmlFor="i">LWBS</label><input className="form-control" id="l" value="lwbs"
                                                                          name="dispor" onChange="dispoP()"
                                                                          type="radio"/>

                                    <label htmlFor="i">AMA</label><input className="form-control" id="a" value="ama"
                                                                         name="dispor" onChange="dispoP()"
                                                                         type="radio"/>

                                    <label htmlFor="t">Transfer</label><input className="form-control" id="t"
                                                                              value="transfer" name="dispor"
                                                                              onChange="dispoP()" type="radio"/>

                                </form>

                            </div>

                            <div id="dispoS" className="modal-body">


                            </div>

                            <div className="modal-footer">

                                <input type="button" className="btn btn-primary" value="select" data-dismiss="modal"
                                       onClick="dispo(viddispo.value)"/>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="modal" id="ddx">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h4 className="modal-title" id="ccddxt"></h4>

                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>

                            <div className="modal-body">

                                <div className="row">

                                    <div className="col-5">

                                        <input type="hidden" id="vidddx"/><input type="hidden" id="ccddx"/>

                                        <div id="textddx"><input checked className="form-control ddx" type="text"/>
                                        </div>

                                        <button className="btn-primary" onClick="newftddx()">+</button>

                                    </div>

                                    <div className="col-7">

                                        Suggestions Based on CC: <br/>

                                        <div id="sddx"></div>

                                    </div>

                                    <form id="ddxf" className="form-group">


                                    </form>

                                </div>

                                <div className="modal-body">


                                </div>

                                <div className="modal-footer">

                                    <input type="button" className="btn btn-primary" value="select" data-dismiss="modal"
                                           onClick="ddx(vidddx.value,ccddx.value)"/>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}