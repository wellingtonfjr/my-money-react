import React, { Component } from 'react';

export default props => {
  if(props.test)
    return props.children
  return false;
}