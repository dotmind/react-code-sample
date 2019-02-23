import React from 'react';

import SimpleComponentClass from './creer-un-composant/class/Component';
import SimpleClassMethod from './creer-un-composant/class/Method';
import SimpleStateDemo from './creer-un-composant/state/State';
import SimpleControlledComponent from './creer-un-composant/state/ControlledComponent';
import ComponentUpdate from './creer-un-composant/class/ComponentUpdate';
import ApplicationFeed from './creer-un-composant/application/Feed';
import SimplePropsDemo from './creer-un-composant/props/Props';
import PropTypesDemo from './creer-un-composant/props/PropTypes';

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
  {
    hash: 'creer-un-composant/props',
    render: () => <SimplePropsDemo />,
  },
  {
    hash: 'creer-un-composant/prop-types',
    render: () => <PropTypesDemo showTitle={true} />,
  },
];

export default components;