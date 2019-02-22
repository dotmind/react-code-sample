import React from 'react';
import SimpleComponentClass from './creer-un-composant/class/Component';
import SimpleClassMethod from './creer-un-composant/class/Method';
import SimpleStateDemo from './creer-un-composant/state/State';
import SimpleControlledComponent from './creer-un-composant/state/ControlledComponent';
import ComponentUpdate from './creer-un-composant/class/ComponentUpdate';
import ApplicationFeed from './creer-un-composant/application/Feed';

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
    hash: 'creer-un-composant/controlled-component',
    render: () => <SimpleControlledComponent />,
  },
  {
    hash: 'creer-un-composant/component-update',
    render: () => <ComponentUpdate />,
  },
  {
    hash: 'creer-un-composant/application-feed',
    render: () => <ApplicationFeed />,
  },
];

export default components;