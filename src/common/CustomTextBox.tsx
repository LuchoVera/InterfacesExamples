import React, { ReactNode } from 'react';
import ComposableComponent from './ComposableComponent';

interface CustomTextBoxProps {
  value?: string;
  onChange?: (value: string) => void;
}

class CustomTextBox implements ComposableComponent {
  private value?: string;
  private onChange?: (value: string) => void;

  /**
   * Constructs a new CustomTextBox instance.
   */
  constructor(props: CustomTextBoxProps) {
    this.value = props.value;
    this.onChange = props.onChange;
  }

  /**
   * Configures the component.
   * This method does not have any specific configuration for CustomTextBox.
   */
  configureComponent(): void {}

  /**
   * Returns the ReactNode representing the component.
   */
  getComponent(): ReactNode {
    return this.build();
  }

  /**
   * Builds and returns the ReactNode for the CustomTextBox component.
   */
  build(): ReactNode {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      this.value = newValue;
      if (this.onChange) {
        this.onChange(newValue);
      }
    };

    return (
      <input type="text" value={this.value} onChange={handleChange} />
    );
  }

  /**
   * Composes the component.
   */
  compose(): void {}
}

export default CustomTextBox;
