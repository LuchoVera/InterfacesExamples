import React, { ReactNode } from 'react';
import ComposableComponent from './ComposableComponent';

interface CustomButtonProps {
  name?: string;
}

/**
 * The CustomButton class implements the ComposableComponent interface and represents a component for a  custom button.
 */
class CustomButton implements ComposableComponent {
  private onClick?: () => void;
  private name?: string;

  /**
   * Creates a new instance of the CustomButton class.
   *
   * @param props - The props for the custom button.
   */
  constructor(props: CustomButtonProps) {
    this.name = props.name;
  }

  /**
   * Configures the custom button component.
   */
  configureComponent(): void {

  }

  /**
   * Retrieves the ReactNode representation of the custom button component.
   *
   * @returns The ReactNode representation of the custom button component.
   */
  getComponent(): ReactNode {
    return this.build();
  }

  /**
   * Builds and returns the ReactNode representation of the custom button component.
   *
   * @returns The ReactNode representation of the custom button component.
   */
  build(): ReactNode {
    const handleClick = this.onClick || (() => {
      console.log('I am a button!');
    });

    return (
      <button onClick={handleClick}>
        {this.name || 'Custom Button'}
      </button>
    );
  }

  /**
   * Composes the custom button component.
   */
  compose(): void {

  }
}

export default CustomButton;
