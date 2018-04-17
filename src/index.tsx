import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Classier} from './components/classier/classier';

ReactDOM.render(
	<Classier compiler="TypeScript classier component" framework="React classier component"/>,
	document.getElementById('example')
);