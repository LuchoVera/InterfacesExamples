import { ReactNode } from 'react';
import Component from './Component';

/**
 * The ComposableComponent interface extends the Component interface and adds additional methods for composing the component.
 */
interface ComposableComponent extends Component {
  /**
   * Builds and returns the ReactNode representation of the component.
   * @returns The ReactNode representation of the component.
   */
  build(): ReactNode;

  /**
   * Composes the component.
   */
  compose(): void;
}

export default ComposableComponent;