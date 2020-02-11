import * as React from 'react';
import { observer } from 'mobx-react';
import { getComponentFromId } from './generated';

export const Clock = observer(props => {
  const Component = getComponentFromId("15:2");
  return <Component {...props} />;
});
