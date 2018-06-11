import React, {Component, PropTypes} from 'react';

const FeatureValue = class extends Component {
    displayName: 'FeatureValue'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const type = typeof Utils.getTypedValue(this.props.value);
        return (
          <span className={"feature-value-container " + type} onClick={this.props.onClick}>
              {type=="string"&&<span className={"quot"}>"</span>}<span
              className={"feature-value"}>{this.props.value+""}</span>{type=="string"&&<span className={"quot"}>"</span>}
          </span>
        );
    }
};

FeatureValue.propTypes = {};

module.exports = FeatureValue;
