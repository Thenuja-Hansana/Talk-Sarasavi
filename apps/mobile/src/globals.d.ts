import * as React from 'react';

declare global {
  namespace JSX {
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.Component<any> {
      render(): React.ReactNode;
    }
  }
}
