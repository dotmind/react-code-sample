import React from 'react';
import SimpleComponentClass from './creer-un-composant/class/Component';
import SimpleClassMethod from './creer-un-composant/class/Method';
import SimpleStateDemo from './creer-un-composant/state/State';
import ComponentUpdate from './creer-un-composant/class/ComponentUpdate';

const components = [
  {
    hash: 'creer-un-composant/component',
    render: () => <SimpleComponentClass />,
  },
  {
    hash: 'creer-un-composant/this',
    render: () => <SimpleClassMethod />,
  },
  {
    hash: 'creer-un-composant/state',
    render: () => <SimpleStateDemo />,
  },
  {
    hash: 'creer-un-composant/component-update',
    render: () => <ComponentUpdate />,
  },
];

export default components;