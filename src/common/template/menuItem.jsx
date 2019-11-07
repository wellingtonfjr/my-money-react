import React from 'react';

export default props => (
  <li className="nav-item">
    <a className="nav-link" data-widget="pushmenu" href={props.link}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </a>
  </li>
)