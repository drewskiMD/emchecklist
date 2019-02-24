import * as ActionTypes from '../../actions';
import { Map, List } from 'immutable';

const initialState = Map({
    addPatientDialogViewable: false,
    patients: List()
})

function patient(state = initialState, action) {
    switch(action.type) {
        case "ADD_PATIENT":
            return state.update("patients", (patients) => patients.insert(action.patient))
        case "ADD_PATIENT_BUTTON_CLICK":
            return state.update("addPatientDialogViewable", (value) => !value)
        default:
            return state
    }
}

export default patient
