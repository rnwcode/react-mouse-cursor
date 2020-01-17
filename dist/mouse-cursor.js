function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import './mouse-cursor.css';

const MouseCursorPointer = props => {
  const cursorStyle = {
    top: props.y + 'px',
    left: props.x + 'px'
  };
  let className = 'rnw_mouse-cursor-pointer';

  if (props.hover) {
    className += ' rnw_hover';
  }

  return React.createElement("div", {
    className: className,
    style: cursorStyle
  });
};

const MouseCursorWrapper = props => {
  return React.createElement("div", _extends({
    className: "rnw_mouse-cursor-wrapper"
  }, props), props.children);
};

export default class MouseCursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  _onMouseMove(e) {
    this.setState({
      x: e.pageX,
      y: e.pageY
    });
  }

  render() {
    const {
      x,
      y
    } = this.state;
    const {
      hover
    } = this.props;
    return React.createElement(MouseCursorWrapper, {
      onMouseMove: this._onMouseMove.bind(this)
    }, React.createElement(MouseCursorPointer, {
      x: x,
      y: y,
      hover: hover
    }), this.props.children);
  }

}
MouseCursor.propTypes = {
  hover: PropTypes.bool
};