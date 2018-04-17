import * as React from 'react';

export interface PureProps {
  compiler: string;
  framework: string;
}

export class Pure extends React.PureComponent<PureProps, {}> {
  render() {
	return <h1>Pure from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}