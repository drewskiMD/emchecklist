import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';

import styles from './TimeSelector.scss';

let hours = List();
let minutes = List();

for (let i = 0; i < 12; i++) {
  if (i < 9) {
    hours = hours.push('0'+String(i+1))
  } else {
    hours = hours.push(String(i))
  }
}

for (let i=0; i < 12; i++) {
  if (i < 3) {
    minutes = minutes.push('0'+String(i*5))
  } else {
    minutes = minutes.push(String(i*5))
  }
}

@connect()
export default class Selector extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes. string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderStyle: PropTypes.string,
    borderWidth: PropTypes.string,
    initialSelectedTime: ImmutablePropTypes.map
  }

  selectItem(item) {
    this.setState({item: item})
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedTime: this.props.initialSelectedTime,
      selectorTimeVisible: false
    }
  }

  render() {

    const { height, width, backgroundColor, borderColor, borderStyle, borderWidth } = this.props;
    const { selectorTimeVisible, selectedTime } = this.state;

    let selectorStyle = {};

    if (height) {
      selectorStyle['height'] = height;
    } else {
      selectorStyle['height'] = '3em';
    }
    if (width) {
      selectorStyle['width'] = width;
    } else {
      selectorStyle['width'] = '3em';
    }
    if (backgroundColor) {
      selectorStyle['backgroundColor'] = backgroundColor;
    } else {
      selectorStyle['backgroundColor'] = '#FFFFFF';
    }
    if (borderColor) {
      selectorStyle['borderColor'] = borderColor;
    } else {
      selectorStyle['borderColor'] = '#D8D8D8'
    }
    if (borderStyle) {
      selectorStyle['borderStyle'] = borderStyle;
    } else {
      selectorStyle['borderStyle'] = 'solid'
    }
    if (borderWidth) {
      selectorStyle['borderWidth'] = borderWidth;
    } else {
      selectorStyle['borderWidth'] = '0.1em';
    }

    return(
      <div className={"TimeSelector"}>
        <div className={"__time-selector-control"}>
          <div className={"__time-selector-left"}>
            <i className={"far fa-clock"}/>
          </div>
          <div className={"__time-selector-right"}>
            {selectedTime.get('hour')} : {selectedTime.get('minute')}
          </div>
        </div>
        <div className={selectorTimeVisible? "__time-selector-pane" : "__time-selector-pane _hidden"}>
          <div className={"__time-selector-pane-hours"}>
            <div className={"__time-selector-pane-hours-title"}>Hours</div>
            <div className={"__time-selector-pane-hours-divider"}/>
            <div className={"__time-selector-pane-hours-list"}>
              {hours.map((hour, key) => <div key={key} className={"__time-selector-pane-hours-list-item"}>{hour}</div> )}
            </div>
            <div className={"__time-selector-pane-minutes-title"}>Minutes</div>
            <div className={"__time-selector-pane-minutes-divider"}/>
            <div className={"__time-selector-pane-minutes-list"}>
              {minutes.map((minute, key) => <div key={key} className={"__time-selector-pane-hour-list-item"}>{minute}</div> )}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
