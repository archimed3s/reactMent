import * as React from 'react';

export interface ElementProps {
  compiler: string;
  framework: string;
}

export class Element extends React.Component<ElementProps, {}> {
  render() {
	return React.createElement('h1', null, `element ${this.props.compiler} and ${this.props.framework}`);
  }
}