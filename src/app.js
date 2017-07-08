import React from 'react'
import { render } from 'react-dom';
import RootContainer from './RootContainer';

if (module.hot) {
   module.hot.accept('./RootContainer', () => {
     const NextRootContainer = require('./RootContainer').default
     render(<NextRootContainer />, document.getElementById('react-root'))
   })
}

render(<RootContainer />, document.getElementById('react-root'));
