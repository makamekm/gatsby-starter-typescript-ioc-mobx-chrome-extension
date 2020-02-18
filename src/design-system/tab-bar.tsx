import * as React from 'react';
import { observer } from 'mobx-react';
import { TabBarGenerated } from './tab-bar.generated';

export const TabBar = observer(props => {
  return <TabBarGenerated {...props} />;
});
