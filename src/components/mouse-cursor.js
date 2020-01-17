import React from 'react'; 
import PropTypes from 'prop-types';
import './mouse-cursor.css';

const MouseCursorPointer = (props) => {

    const cursorStyle = {
        top: props.y + 'px',
        left: props.x + 'px'
    }

    let className = 'rnw_mouse-cursor-pointer';
    if(props.hover) {
        className += ' rnw_hover';
    }

    return (
        <div className={className} style={cursorStyle}></div>
    )
}

const MouseCursorWrapper = (props) => {
    return (
        <div className="rnw_mouse-cursor-wrapper" {...props}>
            { props.children }
        </div>
    )
}

export default class MouseCursor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {x: 0, y: 0};
    }

    _onMouseMove(e) {
        this.setState({x: e.pageX, y: e.pageY});
    }

    render() {
        const { x, y } = this.state;
        const { hover } = this.props;

        return (
            <MouseCursorWrapper onMouseMove={this._onMouseMove.bind(this)}>
                <MouseCursorPointer x={x} y={y} hover={hover}/>
                { this.props.children }
            </MouseCursorWrapper>
        )
    }
}

MouseCursor.propTypes = {
    hover: PropTypes.bool
}