import React, { Component } from 'react';
import './checkbox.style.css';

export interface CheckboxState {
  value: boolean;
}

export interface CheckboxProps {
  initialValue?: boolean;
  onChange(value: boolean): void;
}

export class Checkbox extends Component<CheckboxProps, CheckboxState> {
  state = {
    value: this.props.initialValue || false,
  };

  handleCheckboxClick = () => {
    const newValue = !this.state.value;
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };

  render() {
    const { value } = this.state;

    const iconClassName = value ? 'fa fa-check-square' : 'fa fa-square';

    return (
      <label className='checkbox-container' onClick={this.handleCheckboxClick}>
        <i className={`${iconClassName} checkbox-icon`} aria-hidden='true'></i>
        <span className='checkbox-children'>{this.props.children}</span>
      </label>
    );
  }
}

export default Checkbox;
