import React, { PropTypes } from 'react';
import classnames from 'classnames';
import FormElement from './FormElement';


export default class Input extends React.Component {
  onChange(e) {
    const value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(e, value);
    }
  }

  render() {
    const { label, valid, required, ...props } = this.props;
    if (label) {
      const formElemProps = { id: props.id, label, valid, required };
      return (
        <FormElement { ...formElemProps }>
          <Input { ...props } />
        </FormElement>
      );
    }
    const { className, id, type, onChange, ...pprops } = props;
    const inputClassNames = classnames(className, 'slds-input');
    return (
      <input className={ inputClassNames }
        id={ id }
        type={ type }
        onChange={ this.onChange.bind(this) }
        { ...pprops }
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  valid: PropTypes.bool,
};