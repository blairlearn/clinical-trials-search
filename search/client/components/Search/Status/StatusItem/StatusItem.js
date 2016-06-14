import React, { Component, PropTypes } from 'react';

import Url from '../../../../lib/Url';

import './StatusItem.scss';

export default class extends Component {

  constructor() {
    super();

    this.removeParam = this.removeParam.bind(this);
  }

  static propTypes = {
    status: PropTypes.object.isRequired,
  };

  removeParam() {
    const { status } = this.props;
    let params = {};
    params[status.key] = status.value;
    Url.removeParams({ path: "/clinical-trials", params });
  }

  render() {
    let { status } = this.props;
    return (
      <span className="status-item">
        <span>{status.value}</span>{" "}
        <span className="remove-status" onClick={this.removeParam}>[x]</span>
      </span>
    );
  };

}