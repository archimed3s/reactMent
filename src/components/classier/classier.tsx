import * as React from 'react';
import {Element} from '../element/element';
import {Stateless} from '../stateless/stateless';
import {Pure} from '../pure/pure';

export interface ClassierProps {
  compiler: string;
  framework: string;
}

export class Classier extends React.Component<ClassierProps, {}> {
  render() {
	return (
		<div>
		  <h1>Classier from {this.props.compiler} and {this.props.framework}!</h1>
		  <Element compiler="TypeScript element component" framework="React element component"/>
		  <Stateless compiler="TypeScript stateless component" framework="React stateless component"/>
		  <Pure compiler="TypeScript pure component" framework="React pure component"/>
		</div>
	);
  }
}