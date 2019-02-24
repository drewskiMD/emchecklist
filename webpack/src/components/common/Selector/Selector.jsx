import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

import styles from './Selector.scss';

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
      selectorItems: ImmutablePropTypes.list,
      selectedItem: PropTypes.number,
      initialSelectedItem: ImmutablePropTypes.map
    }

    selectItem(item) {
      this.setState({selectedItem: item})
    }

    constructor(props) {
      super(props)
      this.state = {
        selectedItem: this.props.initialSelectedItem,
        selectorItemsVisible: false
      }
    }

    displaySelectorItems() {
      this.setState({selectorItemsVisible: true})
    }

    render() {

        const { height, width, backgroundColor, borderColor, borderStyle, borderWidth } = this.props;
        const { selectorItems } = this.props;
        const { selectedItem } = this.state;
        const { selectorItemsVisible } = this.state;

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
            <div className={"Selector"} style={selectorStyle}>
                <div className={"__left"}>
                    <div className={"__selected-item"}>
                        {(selectedItem)? <div className={"__selected-item-text"}>{selectedItem.get('text')}</div> : null }
                    </div>
                </div>
                <div className={"__right"}>
                    <div className={"__carets"} onClick={this.displaySelectorItems.bind(this)}>
                        <i className={"fas fa-caret-up"}/>
                        <i className={"fas fa-caret-down"}/>
                    </div>
                </div>
              <div className={"__selector-items"}>
                {selectorItems.map(
                  (selectorItem, key) => {
                    return(
                      <div className={"__selector-items-list"}>
                        <div key={key} className={selectorItemsVisible? "__selector-items-list-item _visible" : "__selector-items-list-item"} onClick={this.selectItem.bind(this)}>
                          {selectorItem.get('text')}
                        </div>
                      </div>
                    )
                  }

                    )
                  }
                )}
              </div>
            </div>
        )
    }
}
