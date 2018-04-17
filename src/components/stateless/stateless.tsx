import * as React from 'react';

export interface StatelessProps {
  compiler: string;
  framework: string;
}

export const Stateless = (props: StatelessProps) => <h1>Stateless from {props.compiler} and {props.framework}!</h1>;