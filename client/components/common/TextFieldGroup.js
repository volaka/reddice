import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = (props) => {
    return (
        <div className={classnames("form-group", {'has-error': props.error})}>
            <label className="control-label">{props.label}</label>
            <input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                className="form-control"
            />
            {props.error && <span className="help-block">{props.error}</span>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    error: React.PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;