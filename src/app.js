import React from 'react'
import { render } from 'react-dom';
import RootContainer from './root-container';

if (module.hot) {
   module.hot.accept('./root-container', () => {
     const NextRootContainer = require('./root-container').default
     render(<NextRootContainer />, document.getElementById('react-root'))
   })
}

render(<RootContainer />, document.getElementById('react-root'));
