import { ReactNode } from 'react';

interface Component {
  /**
   * build method calls the configureComponent method and returns its Node.
   */
  build(): ReactNode;

  /**
   * configureComponent method sets custom configuration for the components.
   */
  configureComponent(): void;

  /**
   * getComponent method returns the Node of the component.
   */
  getComponent(): ReactNode;
}

export default Component;
