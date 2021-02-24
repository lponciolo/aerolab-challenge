/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */

import React, { createContext } from 'react';

const userContext = createContext({
  user: {
    createDate: '',
    name: '',
    points: 0,
    id: '',
  },
  coinFunction: ((value: any) => {}) as Function,
}); // Create a context object

export {
  userContext, // Export it so it can be used by other Components
};
